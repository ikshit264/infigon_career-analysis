import React from "react";

export type PurposrProp = {
  id : string,
  title : string,
  description : string,
}
export type AllApplication = PurposrProp[]; 

const Purpose = ({ applications, title }: { applications: AllApplication, title : string }) => {

  return (
    <div className="flex flex-col items-start gap-6  p-2">
      <h3 className="text-xl font-semibold text-blue-700 text-center ">
        {title}
      </h3>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {applications.map((app, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%]  lg:w-[30%] p-4 bg-gray-300/30 shadow-md rounded-md border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-gray-800">{app.title}</h4>
            <p className="text-sm text-gray-600 ml-2">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
