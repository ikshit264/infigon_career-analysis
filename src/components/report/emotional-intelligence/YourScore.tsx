import React from "react";
import LGBTQCards from "../LGBTQCards";
import { EmotionalIntelligenceYourScore } from "@/lib/data";

const YourScore = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex gap-4 self-start p-4 items-center">
        <h2 className="text-2xl font-bold">
          Your <span className="text-blue-600"> Score </span>{" "}
        </h2>
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center">
            <span className="w-6 aspect-square rounded-full bg-red-500" />
            <span className="text-gray-500">Strength</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-6 aspect-square rounded-full bg-green-500" />
            <span className="text-gray-500">Needs Attentation</span>
          </div>
        </div>
      </div>
      <LGBTQCards array={EmotionalIntelligenceYourScore} outof={50}/>
    </div>
  );
};

export default YourScore;
