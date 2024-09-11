import Link from "next/link";

export default function Page(){
  return (<ul>
      <main>
        <h1 class="font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <li class="hover:text-red-600 hover:underline"><Link href="week-2">Week 2 Assignments</Link></li>
        <li class="hover:text-red-600 hover:underline"><Link href="week-3">Week 3 Assignments</Link></li>
      </main>
  </ul>
  );
}
