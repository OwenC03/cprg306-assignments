import ItemList from "./item-list";

export default function Page(){
    return (
        <main>
            <h1 className="text-3xl p-4 font-bold">Shopping List</h1>
            <ItemList/>
        </main>
    );
}