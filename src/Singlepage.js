import React from "react";
import { useParams, Navigate } from "react-router-dom"; // Import useParams and Navigate
import { food_list } from './assetss/assets'; 

const Singlepage = () => {
    const { id } = useParams(); // Get the food item ID from the URL
    const foodItem = food_list.find(item => item._id === id); 

    if (!foodItem) {
        return <Navigate to="/menu" />; 
    }

    return (
        <div className="single-page">
            <h1>{foodItem.name}</h1>
            <div className="single-page-content">
                <img src={foodItem.image} alt={foodItem.name} />
                <p className="price">${foodItem.price}</p>
                <p className="description">{foodItem.description}</p>
            </div>
        </div>
    );
};

export default Singlepage;
