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
};
  
export default Destination;