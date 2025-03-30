import PieChartRIASEC from "@/components/report/intrest-explorer/PieChartRIASEC";
import Purpose from "@/components/report/personality-explore/Purpose";
import { IntrestExploreRIASECModel_1, IntrestExploreRIASECModel_2 } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div className="my-4">
      <PieChartRIASEC />
      <div className="p-2">
        <Purpose
          title="Purpose, Applications of RIASEC in Career Development"
          applications={IntrestExploreRIASECModel_1}
        />
      </div>
      <div className="p-2">
        <Purpose
          title="Benifits of Understanding Intrest Using RIASEC for Carrer Planning"
          applications={IntrestExploreRIASECModel_2}
        />
      </div>
    </div>
  );
};

export default page;
