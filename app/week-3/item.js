export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 m-4 bg-slate-800 max-w-sm rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-red-600">{name}</h2>
        <div className="text-orange-600">
          Buy {quantity} in the {category} section
        </div>
      </div>
      <input type="checkbox" className="h-6 w-6"/>
    </li>
  );
}
