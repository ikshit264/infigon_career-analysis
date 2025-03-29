"use client"

import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto border-t border-gray-200 p-4 text-center text-xs text-gray-500 w-full">
      <div className="flex items-center justify-center space-x-4 flex-wrap">
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <span className="hidden sm:inline">•</span>
        <a href="/terms" className="hover:underline">
          Terms & Conditions
        </a>
        <span className="hidden sm:inline">•</span>
        <a href="/support" className="hover:underline">
          Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
