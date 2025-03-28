"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CareerOptionCard from "@/components/shared/career-option-card";
import { careerOptions, userReport } from "@/lib/data";

const TopBar = () => {
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <div className="border-b border-gray-200 p-6">
        <h1 className="mb-2 text-2xl font-bold">Your Career Analysis Report</h1>
        <p className="text-sm text-gray-600">{userReport.description}</p>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex items-center basis-1/2 w-full justify-end gap-6">
          <span className=" text-sm font-medium">
            Your TOP 3 Career Options
          </span>
          <div className="flex space-x-2">
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
        <div className="h-full w-0.5 mx-4 rounded bg-gray-500"></div>
        <div className="flex items-center basis-1/2 gap-4 w-full justify-start">
          <span className="mr-2 text-sm">Choose them right here!</span>
          <Button>Your Career Options</Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
