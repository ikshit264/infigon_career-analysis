import React from "react";

const dichotomies = [
  {
    left: "Extraversion (E)",
    right: "Introversion (I)",
    leftDesc: "Energized by social interactions and external activities",
    rightDesc: "Energized by solitary activities and internal reflection",
  },
  {
    left: "Sensing (S)",
    right: "Intuition (N)",
    leftDesc: "Focuses on concrete, tangible information and present realities",
    rightDesc:
      "Focuses on abstract, conceptual information and future possibilities",
  },
  {
    left: "Thinking (T)",
    right: "Feeling (F)",
    leftDesc: "Decisions based on logic and objective analysis",
    rightDesc: "Decisions based on emotions and subjective values",
  },
  {
    left: "Judging (J)",
    right: "Perceiving (P)",
    leftDesc: "Prefers structured, organized approaches and planning",
    rightDesc: "Prefers flexible, spontaneous approaches and adaptability",
  },
];

export default function FourDichotomies() {
  return (
    <div className="flex flex-col p-2 w-full">
      <h3 className="text-lg font-bold text-blue-700">THE FOUR DICHOTOMIES</h3>

      <div className="flex items-center justify-center w-full">
        <div className="w-[90%] space-y-6 sm:w-full">
          {dichotomies.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between p-4 rounded gap-2 md:space-y-0 self-stretch"
            >
              {/* Left Side */}
              <div className="w-40 md:w-1/3 flex flex-col items-center justify-center p-4 border border-gray-200 rounded text-center flex-1 min-h-full">
                <span className="block font-medium text-pink-700">
                  {item.left}
                </span>
                <p className="text-sm text-gray-600">{item.leftDesc}</p>
              </div>

              {/* Gradient Bar (Hidden in Mobile) */}
              <div className="hidden md:flex items-center w-1/3 px-10">
                <span className="h-5 w-5 bg-green-500 rounded-full aspect-square"></span>
                <div className="h-1 w-full bg-gradient-to-r from-green-500 to-red-500"></div>
                <span className="h-5 w-5 bg-red-500 rounded-full aspect-square"></span>
              </div>

              {/* Right Side */}
              <div className="w-40 md:w-1/3 flex flex-col items-center justify-center p-4 border border-gray-200 rounded text-center flex-1 min-h-full">
                <span className="block font-medium text-blue-700">
                  {item.right}
                </span>
                <p className="text-sm text-gray-600">{item.rightDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
