"use client";

import { useState } from "react";
import { personalityTabs } from "@/lib/data";
import TabNavigation from "@/components/shared/tab-navigation";
import { reportSections } from "@/components/report/personality-explore/ReportSections";

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("Personality");
  const ActiveSection = reportSections[activeTab] || null;

  return (
    <div className="flex flex-col max-w-full overflow-x-auto">
      <div className="px-4 w-full">
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold">Your Result</h2>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabNavigation
              tabs={personalityTabs}
              defaultTab="Personality"
              onChange={setActiveTab}
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        {ActiveSection}
      </div>
    </div>
  );
}