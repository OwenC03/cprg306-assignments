import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <main>
        <h1 className="font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <li>
          <Link className="hover:text-red-600 hover:underline" href="week-2">
            Week 2 Assignments
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-600 hover:underline" href="week-3">
            Week 3 Assignments
          </Link>
        </li>
      </main>
    </ul>
  );
}
