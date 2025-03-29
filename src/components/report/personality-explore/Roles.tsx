import ExpandingAccordion from "@/components/shared/ExpandingAccordian";
import { RoleData } from "@/lib/data";
import React from "react";

const Role = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        <ExpandingAccordion items={RoleData} />
      </div>
    </div>
  );
};

export default Role;
