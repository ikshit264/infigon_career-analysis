"use client"

import type React from "react";
import { testSidebarItems } from "@/lib/data";
import TestSidebar from "@/components/shared/test-sidebar";
import TopBar from "@/components/report/TopBar";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const pathname = usePathname(); // Extracts current route path
  
    useEffect(() => {
      if (pathname == "/report") {
        redirect("/report/personality-explore/results");
      }
    }, [pathname]);

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
