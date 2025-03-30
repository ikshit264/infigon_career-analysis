"use client"

import { redirect, usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
  const pathname = usePathname(); // Extracts current route path

  useEffect(() => {
    if (pathname == "/report/interest-explore") {
      redirect("/report/interest-explore/results");
    }
  }, [pathname]);

  return (
    <div>page</div>
  )
}

export default Page;