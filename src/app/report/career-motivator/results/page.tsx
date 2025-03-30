"use client";

import { useState } from "react";
import TabNavigation from "@/components/shared/tab-navigation";
import { CareerMotivatorsTabs } from "@/lib/data";
import { reportSections } from "@/components/report/career-motivator/ReportSections";


export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("YourScore");
  const ActiveSection = reportSections[activeTab] || null;

  return (
    <div className="flex flex-col max-w-full overflow-x-auto">
      <div className="px-4 w-full">
        <div className="mb-6">
          <div className="flex items-center gap-4 justify-start">
            <h2 className="mb-4 text-2xl font-bold">Your <span className="text-green-600"> Result </span> </h2>
          </div>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabNavigation
              tabs={CareerMotivatorsTabs}
              defaultTab="YourScore"
              onChange={setActiveTab}
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">{ActiveSection}</div>
    </div>
  );
}
