"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] px-6 relative overflow-hidden">
      <div className="absolute w-[40vw] h-[40vw] max-w-96 max-h-96 bg-red-500 rounded-full blur-3xl opacity-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-80 md:h-80 animate-pulse pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h1 className="sm:text-7xl text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-lg">
          404
        </h1>
        <p className="text-xl sm:text-lg font-semibold mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-sm sm:text-xs mt-2 text-gray-400">
          Redirecting you to the home page in 3 seconds...
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 text-lg sm:text-base font-medium rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-110 transition-all duration-300 shadow-md"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
