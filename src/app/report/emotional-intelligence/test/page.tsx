import Purpose from "@/components/report/personality-explore/Purpose";
import {
  EmotionalIntelligenceTest,
  EmotionalIntelligenceTest_Application,
  EmotionalIntelligenceTest_Benifits,
} from "@/lib/data";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-4 w-full p-2">
        <h1 className="text-lg font-bold text-blue-800">
          5 Emotional Elements
        </h1>
        <div className="flex gap-4 w-full justify-evenly flex-wrap">
          {EmotionalIntelligenceTest.map((elem) => (
            <div
              key={elem.id}
              className=" h-40 rounded-full aspect-square relative flex items-center justify-center"
              style={{
                background: `radial-gradient(ellipse 200% 80%, white, ${elem.color})`,
              }}
            >
              <div className="flex flex-col items-center justify-center mt-2">
                <span
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold opacity-60 shadow-sm shadow-black"
                  style={{ backgroundColor: elem.color }}
                >
                  {elem.id}
                </span>
                <p className="text-center mt-2 font-semibold">{elem.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full p-2">
        <h1 className="text-lg font-bold text-blue-800"></h1>
        <Purpose
          title="Applications of the Emotional Intelligence Test in career development include"
          description="Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education."
          applications={EmotionalIntelligenceTest_Application}
        />
        <div className="p-2">
          <Purpose
            title="Understanding emotional intelligence for career planning offers several benefits, including"
            applications={EmotionalIntelligenceTest_Benifits}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
