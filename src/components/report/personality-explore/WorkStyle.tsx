import ExpandingAccordion from "@/components/shared/ExpandingAccordian";
import { WorkStyleData } from "@/lib/data";
import React from "react";

const WorkStyle = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        <ExpandingAccordion items={WorkStyleData} />
      </div>
    </div>
  );
};

export default WorkStyle;
