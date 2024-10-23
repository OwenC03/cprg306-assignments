import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <a href="/" className="bg-red-800 px-2 py-1 rounded-md">
          Return
        </a>
      </div>
      <h1 className="font-semibold p-5">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
