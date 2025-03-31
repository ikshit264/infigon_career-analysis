import React from "react";

export type PurposrProp = {
  id: string;
  title: string;
  description?: string;
};
export type AllApplication = PurposrProp[];

const getRowStructure = (count: number) => {
  const rows: number[] = [];
  let remaining = count;

  while (remaining > 0) {
    const perRow = (remaining != 3) ? Math.ceil(Math.max(Math.sqrt(remaining))) : 3; // Dynamically decide row sizes
    rows.push(perRow);
    remaining -= perRow;
  }

  return rows;
};

const Purpose = ({
  applications,
  title,
  description,
}: {
  applications: AllApplication;
  title: string;
  description?: string;
}) => {
  const rowStructure = getRowStructure(applications.length);

  const index = 0;

  return (
    <div className="flex flex-col items-start gap-6 p-2 w-full">
      <h3 className="text-xl font-semibold text-blue-700 w-full">
        {title}
      </h3>
      <p className="text-md font-normal text-gray-600 sm:w-[95%]">
        {description}
      </p>

      {/* Dynamic Rows */}
      <div className="flex flex-col gap-4 w-full">
        {rowStructure.map((columns, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-4 w-full flex-wrap sm:flex-nowrap"
          >
            {applications.slice(index, index + columns).map((app) => (
              <div
                key={app.id}
                className="p-4 bg-gray-300/30 shadow-md rounded-md border border-gray-200"
                style={{
                  width: "100%", // Default full width
                }}
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {app.title}
                </h4>
                <p className="text-sm text-gray-600 ml-2">{app.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
