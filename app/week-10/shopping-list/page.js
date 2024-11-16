"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_services/shopping-list-service";
import Link from "next/link";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      loadItems();
    }
  }, [user, router]);

  if (!user) return <div>Please sign in before viewing the Shopping list</div>;

  const handleAddItem = async (newItem) => {

    try {
      if (user && user.uid) {
        const itemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanedName);
    setSelectedItemId(item.id);

    console.log("Selected item ID:", item.id);
  };

  const loadItems = async () => {
    try {
      if (user && user.uid) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

 // const handleDeleteItem = async () => {
   // if (setSelectedItemId) {
     // console.log("Deleting item with ID:", selectedItemId);
      //try {
        //await deleteItem(user.uid, selectedItemId);

        //setItems((prevItems) => prevItems.filter((item) => item.id !== selectedItemId));

//        setSelectedItemId(null);
//        setSelectedItemName("");
//      } catch (error) {
//        console.error("Failed to delete item:", error);
//      }
//    }
//  };

  return (
    <main className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <Link href="/week-10" className="bg-red-800 px-2 py-1 rounded-md">
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
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
