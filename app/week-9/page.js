"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="bg-slate-700 w-full max-w-xs mx-auto p-6 rounded-lg shadow-lg mt-60">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3x1 font-semibold text-blue-700">Week 9</h1>
        <p className="text-lg text-white mt-4">
          {user ? "Hi there!" : "Please sign in"}
        </p>
        {user && (
          <p className="text-lg font-medium text-white mt-2">
            {user.displayName}
          </p>
        )}
        <p className="mt-6 flex flex-col items-center justify-center">
          {user ? (
            <>
              <div className="mb-4">
                <button
                  onClick={firebaseSignOut}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none"
                >
                  Sign Out
                </button>
              </div>
              <div>
                <Link href="/week-9/shopping-list">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                    Go to Shopping List
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <button
              onClick={gitHubSignIn}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Sign in with GitHub
            </button>
          )}
        </p>
      </div>
    </main>
  );
}
