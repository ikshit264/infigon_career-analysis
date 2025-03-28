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
    <div className="flex flex-col">
      <div className="p-6">
        <div className="mb-6 min-w-full">
          <h2 className="mb-4 text-xl font-bold">Your Result</h2>
          <TabNavigation
            tabs={personalityTabs}
            defaultTab="Personality"
            onChange={setActiveTab}
          />
        </div>
      </div>

      {ActiveSection}

      <div className="mt-auto border-t border-gray-200 p-4 text-center text-xs text-gray-500">
        <div className="flex items-center justify-center space-x-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <span>•</span>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
