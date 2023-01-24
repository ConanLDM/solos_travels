import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Destinations = () => {
const navigate = useNavigate();
const [destinations, setDestinations] = useState([]);

//  implementing useEffect hook in order to fetch destinations from seed file
useEffect(() => {
    const url = "/api/v1/destinations/index";
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Did not return as expected.");
        })
        .then((res) => setDestinations(res))
        .catch(() => navigate("/"));
}, []);

// need to implement how the webpage will display the content and examine what needs to appear
const allDestinations = destinations.map((destination, index) => (
    <div key={index} className="col-md-5 col-lg-3">
        <div className="card mb-5">
            <img
                src={destination.image}
                className="card-img-top"
                alt={`${destination.name} image`}
            />
            <div className="card-body">
                <h4 className="card-title">{destination.name}</h4>
                <Link to={`/destination/${destination.id}`} className="btn custom-button">
                    View Destination
                </Link>
            </div>
        </div>
    </div>
));
const noDestination = (
    <div className="vw-100 vh-60 d-flex align-items-center justify-content-center">
        <h3>
            No destinations currently. Instead you can <Link to="/destinations/new">create a destination</Link>
        </h3>
    </div>
);

return (
    <>
        <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
                <h1 className="display-4"> Destinations for every solo traveller</h1>
                <p className="lead text-muted">
                    Here we have our most popular destinations, our latest additions
                    to the destinations list, and our expert picks, so please take a look
                    and you are very likely to find your next... destination.
                </p>
            </div>
        </section>
        <div className="py-5">
            <main className="container">
                <div className="text-end mb-3">
                <Link to="/destinations/new" className="btn custom-button">
                    Create A New Destination
                </Link>
                </div>
                <div className="row">
                    {destinations.length > 0 ? allDestinations : noDestination}
                </div>
                <Link to="/" className="btn btn-link">
                    Home
                </Link>
            </main>
        </div>
        </>
    );
};

export default Destinations;