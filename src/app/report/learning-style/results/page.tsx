"use client";

import { useState } from "react";
import TabNavigation from "@/components/shared/tab-navigation";
import { LearningStyleTabs } from "@/lib/data";
import { reportSections } from "@/components/report/learning-style/ReportSections";

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("LearningStyle");
  const ActiveSection = reportSections[activeTab] || null;

  return (
    <div className="flex flex-col max-w-full overflow-x-auto">
      <div className="px-4 w-full">
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold">Your Result</h2>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabNavigation
              tabs={LearningStyleTabs}
              defaultTab="LearningStyle"
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