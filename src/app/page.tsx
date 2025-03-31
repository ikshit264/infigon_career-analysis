// eslint-disable
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`px-6 py-3 text-white bg-gray-800 rounded-xl flex items-center gap-2 transition-all transform hover:bg-gray-700 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default function Home() {
  const [text, setText] = useState("Personality");
  const words = ["Personality", "Interests", "Skills"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[index]);
      //
      index = (index + 1) % words.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-700 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 blur-3xl" />
      <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 md:p-10 bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Career Analysis Platform
        </h1>
        <p className="mb-6 text-base sm:text-lg md:text-xl text-gray-300">
          Discover your ideal career path with personalized insights based on
        </p>
        <p className="mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 animate-pulse">
          {text}
        </p>
        <Link
          href="/report"
          className="w-fit cursor-pointer flex items-center gap-4"
        >
          <Button className="w-full sm:w-auto px-4 bg-gray-900 py-2 sm:px-6 sm:py-3">
            View Your Report <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
