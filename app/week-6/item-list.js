"use client";

import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const groupByCategory = (items) => {
    const grouped = items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    return Object.keys(grouped)
      .sort()
      .map((category) => ({
        category,
        items: grouped[category].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  };

  let sortedItems;
  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } else if (sortBy === "group") {
    sortedItems = groupByCategory(items);
  }

  return (
    <div className="justify-center bg-slate-900 p-5 rounded-md max-w-sm">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button
          className={`sort-button ${sortBy === 'name' ? 'bg-red-800 text-white rounded-md' : 'bg-slate-400 text-gray-300 rounded-md'}`}
          onClick={() => setSortBy('name')}
        >
          Sort By Name
        </button>
        <button
          className={`sort-button ${sortBy === 'category' ? 'bg-red-800 text-white rounded-md' : 'bg-slate-400 text-gray-300 rounded-md'}`}
          onClick={() => setSortBy("category")}
        >
          Sort By Category
        </button>
        <button
          className={`sort-button ${sortBy === 'group' ? 'bg-red-800 text-white rounded-md' : 'bg-slate-400 text-gray-300 rounded-md'}`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>

      {sortBy === 'group' ?(
        sortedItems.map(group => (
            <div key={group.category} style={{marginBottom: 5}}>
                <h2  style={{fontWeight: 'bold', marginBottom: 1}} className="capitalize">{group.category}</h2>
                <ul>
                    {group.items.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                    ))}
                </ul>
            </div>
        ))
    ) : (
        <ul>
            {sortedItems.map(item => (
               <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </ul>
    )}
    </div>
  );
};

export default ItemList;
