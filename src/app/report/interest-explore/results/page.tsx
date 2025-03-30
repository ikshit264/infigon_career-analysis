"use client";

import { useState } from "react";
import TabNavigation from "@/components/shared/tab-navigation";
import PrimaryTab from "@/components/shared/PrimaryTab";
import { reportSections } from "@/components/report/intrest-explorer/ReportSections";
import { IntrestExplorerTabs } from "@/lib/data";

const interestTabs = [
  { id: "primary", label: "PRIMARY INTEREST" },
  { id: "secondary", label: "SECONDARY INTEREST" },
  { id: "tertiary", label: "TERTIARY INTEREST" },
];

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("Personality");
  const ActiveSection = reportSections[activeTab] || null;

  return (
    <div className="flex flex-col max-w-full overflow-x-auto">
      <div className="px-4 w-full">
        <div className="mb-6">
          <div className="flex items-center gap-4 justify-start">
            <h2 className="mb-4 text-2xl font-bold">Your <span className="text-green-600"> Result </span> </h2>
            <PrimaryTab interestTabs={interestTabs} />
          </div>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabNavigation
              tabs={IntrestExplorerTabs}
              defaultTab="Personality"
              onChange={setActiveTab}
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">{ActiveSection}</div>
    </div>
  );
}
