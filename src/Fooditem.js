// Fooditem.js
import React from "react";
import './fooditem.css';

const Fooditem = ({ id, name, price, description, image }) => {
    return (
        <article className="food-item">
            <div className="fooditem-img-container">
                <img src={image} alt={name} />
            </div>
            <div className="fooditem-details">
                <h2>{name}</h2>
                <p className="price">${price}</p>
                <p className="description">{description}</p>
            </div>
        </article>
    );
};

export default Fooditem;
