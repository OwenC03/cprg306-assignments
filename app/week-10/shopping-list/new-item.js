"use client";

import { useState } from "react";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1); 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id:Date.now().toString(),
      name,
      quantity,
      category,
    };

    

    console.log(item);

    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, MAX_QUANTITY));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, MIN_QUANTITY));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 p-5 rounded-xl max-w-sm mx-auto">
      <div className="max-w-sm bg-slate-800 flex rounded-lg justify-center mx-auto ">
        <label>
          Name:
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-black placeholder-gray-700 rounded-md m-2"
          />
        </label>
      </div>

      <div className="max-w-sm bg-slate-800 flex rounded-lg justify-center mx-auto m-2">
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 m-2 text-center bg-gray-100 border border-gray-300 rounded-md text-black"
          />
        </label>

        <button
          type="button"
          onClick={decrement}
          disabled={quantity === MIN_QUANTITY}
          className={`px-6 m-2 font-semibold rounded-md ${
            quantity === MIN_QUANTITY
              ? "bg-slate-400 cursor-not-allowed"
              : "bg-red-800"
          }`}
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === MAX_QUANTITY}
          className={`px-6 m-2 font-semibold rounded-md ${
            quantity === MAX_QUANTITY
              ? "bg-slate-400 cursor-not-allowed"
              : "bg-red-800"
          }`}
        >
          +
        </button>
      </div>

      <div className="max-w-sm bg-slate-800 flex rounded-lg justify-center mx-auto m-2">
        <label className="m-2">
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-black">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-6 m-2 font-semibold rounded-md bg-red-800">Add Item</button>
      </div>
    </form>
  );
}