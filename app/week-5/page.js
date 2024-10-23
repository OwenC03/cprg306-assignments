import NewItem from "./new-item";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <a href="/" className="bg-red-800 px-2 py-1 rounded-md">
          Return
        </a>
      </div>
      <h1 className="text-center text-3xl mb-4">Week 5 Page</h1>
      <NewItem />
    </div>
  );
}
