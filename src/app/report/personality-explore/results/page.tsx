"use client";

import { useState } from "react";
import Link from "next/link";
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
      <div className="mt-auto border-t border-gray-200 p-4 text-center text-xs text-gray-500 w-full">
        <div className="flex items-center justify-center space-x-4 flex-wrap">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}