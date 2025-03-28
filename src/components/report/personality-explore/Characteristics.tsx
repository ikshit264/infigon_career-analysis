import ExpandingAccordion from "@/components/shared/ExpandingAccordian";
import { personality_characteristics } from "@/lib/data";
import React from "react";

const Characteristics = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        <ExpandingAccordion items={personality_characteristics} />
      </div>
    </div>
  );
};

export default Characteristics;
