import React from "react";
import LGBTQCards from "../LGBTQCards";

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
            <span className="text-gray-500">Low Relevance</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-6 aspect-square rounded-full bg-yellow-500" />
            <span className="text-gray-500">Low Relevance</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-6 aspect-square rounded-full bg-green-500" />
            <span className="text-gray-500">Low Relevance</span>
          </div>
        </div>
      </div>
      <LGBTQCards/>
    </div>
  );
};

export default YourScore;
