import type React from "react";
import { testSidebarItems } from "@/lib/data";
import TestSidebar from "@/components/shared/test-sidebar";
import TopBar from "@/components/report/TopBar";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex flex-col w-full">
      <TopBar />
      <div className="flex">
        <TestSidebar tests={testSidebarItems} />

        <div className="flex-1 ">{children}</div>
      </div>
    </div>
  );
}
