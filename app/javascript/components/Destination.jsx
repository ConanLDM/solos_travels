import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Destination = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState({ details: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not as expected.");
      })
      .then((response) => setDestination(response))
      .catch(() => navigate("/destinations"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

// process of returning the destination in the component state

  const destinationList = () => {
    let destinationList = "No destinations currently available";

    if (destination.details.length > 0) {
      destinationList = destination.details
        .split(",")
        .map((details, index) => (
          <li key={index} className="list-group-item">
            {details}
          </li>
        ));
    }

    return destinationList;
  };

  const destinationInstruction = addHtmlEntities(destination.instruction);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
        src={destination.image}
        alt={`${destination.image} image`}
        className="img-fluid position-absolute"
      />
      <div className="overlay bg-light position-absolute" />
      <h1 className="display-4 position-relative text-white">
        {destination.name}
      </h1>
    
    </div>
    <div className="container py-4">
      <div className="row">
      <div className="col-sm-10 col-lg-3">
        <ul className="list-group">
          <h5 className="mb-2">Details</h5>
          {destinationList()}
        </ul>
      </div>
      <div className="col-sm-10 col-lg-6">
        <h5 className="mb-2">Destination instructions</h5>
        <div
          dangerouslySetInnerHTML={{
            __html: `${destinationInstruction}`,
          }}
        />
    </div>
    <div className="col-sm-10 col-lg-3">
      <button
        type="button"
        className="btn btn-danger"
      >
        Delete Destination
      </button>
    </div>
  </div>
  <Link to="/destinations" className="btn btn-link">
    Back to destinations
  </Link>
  </div>
</div>
  );
};
  
export default Destination;