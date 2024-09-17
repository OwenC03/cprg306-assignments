"use client";

import { useState } from "react";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 20;

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);

const increment = () =>{
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, MAX_QUANTITY));
};

const decrement = () =>{
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, MIN_QUANTITY));
};
    return(
        <div className="max-w-sm bg-slate-800 flex rounded-lg justify-center mx-auto ">
            <h1 className="text-2xl m-2">Quantity = {quantity}</h1>
            <button onClick={decrement} disabled={quantity === MIN_QUANTITY} className={`px-6 m-2 font-semibold ${quantity === MIN_QUANTITY ? 'bg-slate-400 cursor-not-allowed' : 'bg-red-800'}`}>-</button>
            <button onClick={increment} disabled={quantity === MAX_QUANTITY} className={`px-6 m-2 font-semibold ${quantity === MAX_QUANTITY ? 'bg-slate-400 cursor-not-allowed' : 'bg-red-800'}`}>+</button>
            
        </div>
    );
}

