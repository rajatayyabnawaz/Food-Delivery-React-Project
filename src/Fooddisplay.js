import React from "react";
import "./fooddisplay.css";
import Fooditem from './Fooditem';
import { food_list } from './assetss/assets'; 

const Fooddisplay = ({ category }) => {
    const filteredFoods = category 
        ? food_list.filter(item => item.category.toLowerCase() === category.toLowerCase()) 
        : []; 

    return (
        <div className="food-display">
            <br />
            {category ? (
                <h2>{`Dishes in "${category}"`}</h2>
            ) : (
                <h2>Please select a category to view dishes.</h2> 
            )}
            <br />
            <div className="food-display-list">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((item) => (
                        <Fooditem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                ) : (
                    category ? <p>No dishes found in this category.</p> : null 
                )}
            </div>
        </div>
    );
};

export default Fooddisplay;
