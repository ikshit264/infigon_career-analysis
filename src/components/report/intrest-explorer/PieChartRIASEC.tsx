import React from "react";
import { convertedChartData } from "@/lib/data";
import DonutChart from "./PieChart";

const PieChartRIASEC = () => {
  return (
    <div className="flex flex-col p-4">
      <h3 className="text-lg font-bold text-blue-700 mb-4">Themes of RIASEC</h3>
      <DonutChart data={convertedChartData}/>
    </div>
  );
};

export default PieChartRIASEC;
