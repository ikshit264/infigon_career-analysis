import React, { useState } from 'react';
import { motion } from "framer-motion";

const PrimaryTab = ({ interestTabs }: { interestTabs: Array<{ id: string; label: string }> }) => {
  const [primaryTab, setPrimaryTab] = useState<string>(interestTabs[0]?.id || "");

  return (
    <div className="mb-6 border-b border-gray-200">
      <div className="flex space-x-6">
        {interestTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setPrimaryTab(tab.id)}
            className={`relative py-3 text-xs font-medium ${
              primaryTab === tab.id ? "text-blue-700" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
            {primaryTab === tab.id && (
              <motion.div
                layoutId="activePrimaryTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrimaryTab;
