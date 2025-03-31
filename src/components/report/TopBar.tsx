"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CareerOptionCard from "@/components/shared/career-option-card";
import { careerOptions, userReport } from "@/lib/data";

const TopBar = () => {
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      {/* ✅ Report Header */}
      <div className="flex justify-evenly items-center sm:flex-row flex-col border-b border-gray-200 ">
        <div className="p-6 flex flex-col ">
          <h1 className="mb-2 text-2xl font-bold text-center md:text-left">
            Your Career Analysis Report
          </h1>
          <p className="text-sm text-gray-500 ">{userReport.description}</p>
        </div>
        <div className="p-6 flex flex-col md:flex-row items-center gap-4 ">
          <div className="flex flex-col justify-center gap-2">
            <h1 className=" text-lg font-bold text-center md:text-left">
              Want To Speak To An Expert Career Counsellor?
            </h1>
            <p className="text-sm text-gray-500">
              Explore a list of 1000+ Expert Career Counsellors near you!
            </p>
          </div>
          <button className="px-2 p-1 rounded bg-gray-300 ">see All</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-4 py-4">
        <div className="flex flex-col md:flex-row items-center md:basis-1/2 w-full gap-4 md:justify-end">
          <span className="text-sm font-medium text-center">
            Your TOP 3 Career Options
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {careerOptions.map((option) => (
              <CareerOptionCard
                key={option.id}
                title={option.title}
                number={option.id}
                isActive={selectedCareer === option.id}
                onClick={() => setSelectedCareer(option.id)}
              />
            ))}
          </div>
        </div>

        {/* ✅ Divider (Hidden on Mobile) */}
        <div className="hidden md:block h-full w-0.5 bg-gray-500"></div>

        {/* ✅ Right Side - Button */}
        <div className="flex flex-col md:flex-row items-center md:basis-1/2 w-full gap-4 md:justify-start">
          <span className="text-sm text-center md:text-left">
            Choose them right here!
          </span>
          <Button>Your Career Options</Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
