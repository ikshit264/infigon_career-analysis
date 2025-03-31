import { Dot } from "lucide-react";
import React from "react";

const ListInBox = ({
  Data,
  Title,
  icon,
  BgColor,
}: {
  Data: string[];
  Title: string;
  icon?: React.ElementType;
  BgColor?: string;
}) => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h1 className="text-xl text-blue-500">{Title}</h1>
      <div className="flex flex-col gap-2 p-2 border rounded">
        {Data.map((statement, index) => (
          <div key={index} className="p-1 rounded flex gap-4 items-center border" style={{backgroundColor : BgColor}}>
            <div className={` flex items-center`} >
              <div>
                {icon ? (
                  React.createElement(icon, { size: 30 })
                ) : (
                  <Dot size={40} />
                )}
              </div>
              <span>{statement}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInBox;
