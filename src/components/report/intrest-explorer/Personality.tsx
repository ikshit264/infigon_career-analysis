import { IntrestExplorerRealisticTraits } from "@/lib/data";
import React from "react";

const Personality = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[90%] gap-4">
        <div className="flex gap-4 items-center">
          <div className=" h-12 w-12 rounded-full bg-red-100 p-2">
            <div className="flex h-full w-full items-center justify-center text-red-500">
              R
            </div>
          </div>
          <h3 className="text-xl font-medium text-red-500">Realistic (R)</h3>
        </div>

        <div className="mt-4 flex flex-wrap justify-start gap-2 sm:w-[80%]">
          {IntrestExplorerRealisticTraits.map((trait, index) => (
            <span
              key={index}
              className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700"
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <p className="text-md text-gray-700 sm:ml-4">
            Congratulations on taking the first step for personalized Career
            Planning & Assessment! We understand the significance of making
            informed decisions as you navigate your academic journey and future
            career. We are committed to empowering individuals with the tools
            and insights needed to confidently navigate the world of careers and
            education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personality;
