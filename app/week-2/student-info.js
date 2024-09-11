import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
            <p>Owen Steven Carson</p>
            <div>
                <Link className="underline hover:text-red-600" href="https://github.com/OwenC03/cprg306-assignments">
                    Press here for Github
                </Link>
            </div>
        </main>
    );
}