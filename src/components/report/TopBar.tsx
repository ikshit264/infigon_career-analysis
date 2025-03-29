"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CareerOptionCard from "@/components/shared/career-option-card";
import { careerOptions, userReport } from "@/lib/data";

const TopBar = () => {
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* ✅ Report Header */}
      <div className="border-b border-gray-200 p-6">
        <h1 className="mb-2 text-2xl font-bold text-center md:text-left">
          Your Career Analysis Report
        </h1>
        <p className="text-sm text-gray-600 text-center md:text-left">
          {userReport.description}
        </p>
      </div>

      {/* ✅ Career Options & Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        {/* ✅ Left Side - Career Options */}
        <div className="flex flex-col md:flex-row items-center md:basis-1/2 w-full gap-4 md:justify-end">
          <span className="text-sm font-medium text-center md:text-left">
            Your TOP 3 Career Options
          </span>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
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
