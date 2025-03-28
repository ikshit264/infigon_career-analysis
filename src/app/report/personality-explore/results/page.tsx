"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { personalityTabs, personalityTraits, userReport } from "@/lib/data";
import TabNavigation from "@/components/shared/tab-navigation";
import PersonalityBadge from "@/components/shared/personality-badge";

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("personality");

  return (
    <div className="flex flex-col">
      <div className="p-6">
        <div className="mb-6 min-w-full">
          <h2 className="mb-4 text-xl font-bold">Your Result</h2>
          <TabNavigation
            tabs={personalityTabs}
            defaultTab="personality"
            onChange={setActiveTab}
          />
        </div>

        {activeTab === "personality" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <div className="mr-6 rounded-lg bg-purple-50 p-6">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Architect"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-center text-lg font-bold">Architect</h3>
            </div>

            <div className="flex-1">
              <div className="mb-4 flex flex-wrap gap-2">
                {personalityTraits.map((trait) => (
                  <PersonalityBadge key={trait.id} label={trait.label} />
                ))}
              </div>

              <p className="text-sm text-gray-700">
                {userReport.personalityType.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>

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
