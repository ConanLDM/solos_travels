import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NewDestination = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [instruction, setInstruction] = useState("");

    const stripHtmlEntities = (str) => {
        return String(str).replace(/\n/g, "\n")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/destinations/create";

        if (name.length == 0 || details.length == 0 || instruction.length == 0) {
            return;
        }
        
        const body = {
            name,
            details,
            instruction: stripHtmlEntities(instruction),
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Response from the network was not as expected");
        })
        .then((response) => {
            if (response.id) {
            navigate(`/destination/${response.id}`)
            }
        })
        .catch((error) => console.log(error.message));  
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-10 col-lg-5 offset-lg-2">
                    <h1 className="font-weight-normal mb-4">
                        Add a new destination to our list of destinations.
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="destinationName">Destination name</label>
                            <input
                                type="text"
                                name="name"
                                id="Destinationname"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setName)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="destinationDetails">Details</label>
                            <input
                                type="text"
                                name="details"
                                id="destinationDetails"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setDetails)}
                            />
                            <small id="detailsHelp" className="form-text text-muted">
                                Separate each line of details with a comma.
                            </small>
                        </div>
                        <label htmlFor="destinationInstruction">Instruction</label>
                        <textarea
                            className="form-control"
                            id="instruction"
                            name="instruction"
                            rows="5"
                            required
                            onChange={(event) => onChange(event, setInstruction)}
                        ></textarea>
                        <button type="submit" className="btn custom-button mt-3">
                            Create Destination
                        </button>
                        <Link to="/destinations" className="btn btn-link mt-3">
                            Back to destinations
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewDestination;