import React from  'react';

const Item = ({name, quantity, category}) => {
    return(
        <li>
            {name} - Quantity: {quantity}, Category: {category}
        </li>
    );
};

export default Item;