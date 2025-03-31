import { CareerMotivatorsYourScore } from "@/lib/data";
import React from "react";

const LGBTQConclusion = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 sm:w-[90%]">
      {CareerMotivatorsYourScore.map((category) => (
        <div key={category.id} className="rounded-lg p-4 flex flex-col gap-4">
          {/* Top Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="rounded-full w-8 h-8 flex items-center justify-center text-lg font-medium"
                style={{ backgroundColor: category.color }}
              >
                {category.id}
              </div>
            </div>
            <h3
              className="text-lg font-bold"
              style={{ color: category.scoreColor }}
            >
              {category.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className="flex gap-1 rounded-full px-2 py-1 text-md font-medium"
                style={{ backgroundColor: category.color }}
              >
                {category.score}/30{" "}
                <div
                  className="w-6 aspect-square rounded-full"
                  style={{ backgroundColor: category.scoreColor }}
                />
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 rounded-full h-3 border">
            <div
              className="h-3 rounded-full absolute -top-[0.5px] "
              style={{
                width: `${(category.score / 30) * 100}%`,
                backgroundColor: category.scoreColor,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LGBTQConclusion;
