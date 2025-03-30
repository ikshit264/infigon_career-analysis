import Purpose from "@/components/report/personality-explore/Purpose";
import { CareerMotivatorsTOP10, IntrestExploreRIASECModel_1 } from "@/lib/data";
import React from "react";

const Page = () => {
  const LeftMotivators = CareerMotivatorsTOP10.slice(
    0,
    CareerMotivatorsTOP10.length / 2
  );
  const RightMotivators = CareerMotivatorsTOP10.slice(
    CareerMotivatorsTOP10.length / 2
  );

  return (
    <div className="flex flex-col  w-full items-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 p-4 self-start">
        Understanding Interest Explorer
      </h2>
      <div className="flex flex-col gap-4 sm:p-6 md:w-[90%] ">
        {/* Content Layout */}
        <div className="flex flex-col gap-4 md:flex-row ">
          {/* Left Column */}
          <div className="flex flex-col gap-4 min-w-1/2">
            {LeftMotivators.map((motivator) => (
              <div
                key={motivator.id}
                className="flex items-center gap-4 border rounded-full w-full p-3 shadow-md"
                style={{ borderColor: motivator.color }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold aspect-square"
                  style={{ backgroundColor: motivator.color }}
                >
                  {motivator.id}
                </div>
                <span className="text-lg">{motivator.name}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 min-w-1/2">
            {RightMotivators.map((motivator) => (
              <div
                key={motivator.id}
                className="flex items-center gap-4 border rounded-full p-3 shadow-md"
                style={{ borderColor: motivator.color }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold aspect-square"
                  style={{ backgroundColor: motivator.color }}
                >
                  {motivator.id}
                </div>
                <span className="text-lg">{motivator.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2">
        <Purpose
          title="Purpose, Applications of RIASEC in Career Development"
          applications={IntrestExploreRIASECModel_1}
        />
      </div>
      <div className="p-2">
        <Purpose
          title="Benifits of Understanding Intrest Using RIASEC for Carrer Planning"
          applications={IntrestExploreRIASECModel_1}
        />
      </div>
    </div>
  );
};

export default Page;
