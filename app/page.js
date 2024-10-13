import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <main>
        <h1 className="font-bold text-3xl text-center">CPRG 306: Web Development 2 - Assignments</h1>
        <li className="m-2 bg-slate-700 max-w-sm text-center rounded-md mx-auto">
          <Link className="hover:text-red-600 hover:underline text-2xl font-medium" href="week-2">
            Week 2 Assignment
          </Link>
        </li>
        <li className="m-2 bg-slate-700 max-w-sm text-center rounded-md mx-auto">
          <Link className="hover:text-red-600 hover:underline text-2xl font-medium" href="week-3">
            Week 3 Assignment
          </Link>
        </li>
        <li className="m-2 bg-slate-700 max-w-sm text-center rounded-md mx-auto">
          <Link className="hover:text-red-600 hover:underline text-2xl font-medium" href="week-4">
            Week 4 Assignment
          </Link>
        </li>
        <li className="m-2 bg-slate-700 max-w-sm text-center rounded-md mx-auto">
          <Link className="hover:text-red-600 hover:underline text-2xl font-medium" href="week-5">
            Week 5 Assignment
          </Link>
        </li>
      </main>
    </ul>
  );
}
