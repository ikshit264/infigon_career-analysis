import { Dot } from "lucide-react";
import React from "react";

const ListData = ({ Data, Title, icon }: { Data: string[]; Title: string; icon?: React.ElementType }) => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h1 className="text-xl text-blue-500">{Title}</h1>
      <div className="flex flex-col gap-2">
        {Data.map((statement, index) => (
          <div key={index} className="p-1 border rounded flex gap-4 items-center">
            <div>
              {icon ? React.createElement(icon, { size: 25 }) : <Dot size={40} />}
            </div>
            <span>{statement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListData;
