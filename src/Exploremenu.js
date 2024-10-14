
import React, { useState } from "react";
import './exploremenu.css';
import { menu_list } from './assetss/assets'; 
import Fooddisplay from './Fooddisplay'; 

const Exploremenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(""); 


    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    
    const resetCategory = () => {
        setSelectedCategory("");
    };

    return (
        <>
            <div className="exploremenu">
                <h1>Explore Our Menu</h1>
                <br />
                <p>A paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).</p>
                <br />
                <div className="explore-menu-list">
                    {menu_list.map((item, index) => (
                        <div 
                            key={index} 
                            className="exploremenulistitem" 
                            onClick={() => handleCategorySelect(item.menu_name)} 
                        >
                            <img src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    ))}
                </div>
               
                
                <Fooddisplay category={selectedCategory} />
            </div>
        </>
    );
};

export default Exploremenu;
