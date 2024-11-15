"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Link from "next/link";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return(
    <div>Please sign in before viewing the Shopping list</div>
  );
  
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <Link href="/week-9" className="bg-red-800 px-2 py-1 rounded-md">
            return
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="font-semibold p-5 mx-auto">Shopping List</h1>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col">
          <div className="p-5">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
