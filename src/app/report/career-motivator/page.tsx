"use client"

import { redirect, usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
  const pathname = usePathname(); // Extracts current route path

  useEffect(() => {
    if (pathname == "/report/career-motivator") {
      redirect("/report/career-motivator/results");
    }
  }, [pathname]);

  return (
    <div>page</div>
  )
}

export default Page