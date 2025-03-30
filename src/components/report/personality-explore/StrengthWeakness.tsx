import { StrengthWeaknessData } from "@/lib/data";
import React from "react";

const StrengthWeakness = () => {
  // Separate Strengths and Weaknesses
  const strengths = StrengthWeaknessData;
  const weaknesses = StrengthWeaknessData;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Strengths Section */}
      <div className="sm:w-1/2 p-4">
        <h1 className="text-lg font-bold text-green-700 mb-4">Strengths</h1>
        <ul className="space-y-2">
          {strengths.map((item) => (
            <li key={item.id} className="bg-green-100 border-l-4 border-green-500 p-2 rounded">
              {item.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses Section */}
      <div className="sm:w-1/2 p-4">
        <h1 className="text-lg font-bold text-red-700 mb-4">Weaknesses</h1>
        <ul className="space-y-2">
          {weaknesses.map((item) => (
            <li key={item.id} className="bg-red-100 border-l-4 border-red-500 p-2 rounded">
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StrengthWeakness;
