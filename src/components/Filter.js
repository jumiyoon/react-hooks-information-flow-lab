import React from "react";

function Filter({ onCategoryChange , selected}) {
    function handleChange(event){
        onCategoryChange(event);
    }

    return (
        <div className="Filter">
            <select name="filter" onChange={handleChange}>
                <option value="All">filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}


export default Filter;