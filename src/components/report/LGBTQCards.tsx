import { CareerMotivatorsYourScore } from "@/lib/data";
import React from "react";

// type MotivatorCategory = {
//   id: number;
//   title: string;
//   score: number;
//   pros: string[];
//   cons: string[];
//   color : string;
//   scoreColor : string;
// };


const getScoreLabel = (score: number) => {
  return `${score}/30`;
};

const MotivatorCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 w-full">
      {CareerMotivatorsYourScore.map((category) => (
        <div key={category.id} className="rounded-lg p-4 flex flex-col gap-4 ">
          {/* Top Section */}
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center text-lg font-medium bg-${category.color}`}>{category.id}</div>
            </div>
              <h3 className={`text-lg font-bold text-${category.scoreColor}`}>{category.title}</h3>
            <div className="flex items-center space-x-2">

              <span className={`flex gap-1 rounded-full px-2 py-1 text-md font-medium bg-${category.color}`}>
                {getScoreLabel(category.score)}
                <div className={`w-6 aspect-square rounded-full bg-${category.scoreColor} `}/>
              </span>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="rounded-lg border p-3">
            <h4 className="mb-2 text-lg font-medium text-green-800">Pros</h4>
            <ul className="space-y-2 ml-2">
              {category.pros.map((pro, index) => (
                <li key={index} className="flex items-center text-md text-gray-700">
                  <span className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-green-500"></span>
                  {pro}
                </li>
              ))}
            </ul>
            <h4 className="mt-3 mb-2 text-lg font-medium text-amber-800">Cons</h4>
            <ul className="space-y-2 ml-2">
              {category.cons.map((con, index) => (
                <li key={index} className="flex items-start text-md text-gray-700">
                  <span className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-amber-500"></span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotivatorCards;
