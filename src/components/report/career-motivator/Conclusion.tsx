import React from "react";
import Conclusion from "../Conclusion";
import LGBTQConclusion from "./LGBTQConclusion";

const Conclusions = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex gap-4 self-start p-4 items-center">
        <h2 className="text-xl text-blue-500 font-bold">
          Summarised Result
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
      <LGBTQConclusion/>
     <Conclusion color="#FA9B56" content={"You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths."}/>

    </div>
  );
};

export default Conclusions;
