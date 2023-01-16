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
};

export default Destinations;