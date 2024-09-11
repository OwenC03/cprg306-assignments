import React from 'react';

function Item({name, quantity, category}){
    return(
        <li>
            <div>
                <h3 className="text-base text-red-600">{name}</h3>
                <h3 className="text-base text-orange-600">Category: {category}</h3>
                <h3 className="text-base text-red-600">Quantity: {quantity}</h3>
            </div>
        </li>
    );
}

export default Item;