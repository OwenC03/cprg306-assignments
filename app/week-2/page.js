import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-5">
      <div className="w-full text-left">
        <a href="/" className="bg-red-800 px-2 py-1 rounded-md">
          Return
        </a>
      </div>
      <h1>Shopping list</h1>
      <StudentInfo />
    </main>
  );
}
