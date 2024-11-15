import React from  'react';

const Item = ({name, quantity, category, onSelect}) => {
    return(
        <li onClick={onSelect} className="cursor-pointer hover:bg-slate-700 p-2 rounded-md">
            {name} - Quantity: {quantity}, Category: {category}
        </li>
    );
};

export default Item;