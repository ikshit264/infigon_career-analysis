"use client";

import Footer from "@/components/report/Footer";
import { Layoutprops } from "@/components/shared/schema/Layout";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({ children }: Layoutprops) => {
  const pathname = usePathname(); // Extracts current route path

  useEffect(() => {
    if (pathname == "/report/personality-explore") {
      redirect("/report/personality-explore/results");
    }
  }, [pathname]);

  return <div>
    {children}
    <Footer/>
    </div>;
};

export default Layout;
