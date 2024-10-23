"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <a href="/" className="bg-red-800 px-2 py-1 rounded-md">
          Return
        </a>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="font-semibold p-5 mx-auto">Shopping List</h1>
      </div>
      <div className="p-5">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <ItemList items={items} />
    </main>
  );
};

export default Page;
