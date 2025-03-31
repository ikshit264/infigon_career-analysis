"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TestItem = {
  id: number;
  title: string;
  icon: React.ReactElement;
  path: string;
  subItems: {
    id: string;
    title: string;
    path: string;
  }[];
};

interface TestSidebarProps {
  tests: TestItem[];
}

export default function TestSidebar({ tests }: TestSidebarProps) {
  const pathname = usePathname();

  // Determine active test ID based on the pathname
  const getActiveTestFromPathname = () => {
    for (const test of tests) {
      if (pathname.startsWith(test.path)) {
        return test.id;
      }
    }
    return null;
  };

  const [activeTest, setActiveTest] = useState<number | null>(
    getActiveTestFromPathname()
  );
  const [isOpen, setIsOpen] = useState(false); // Mobile toggle state

  // Update active test when pathname changes
  useEffect(() => {
    setActiveTest(getActiveTestFromPathname());
// eslint-disable-next-line
  }, [pathname]);

  // Ref to detect clicks outside
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-56 border-r border-gray-200 bg-white">
        <SidebarContent
          tests={tests}
          activeTest={activeTest}
          setActiveTest={setActiveTest}
          pathname={pathname}
        />
      </div>

      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center rounded-full bg-blue-600 p-4 shadow-lg text-white md:hidden"
      >
        📊 {/* You can replace this with an icon */}
      </button>

      {/* Mobile Sidebar (Slide-in Animation) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click outside detection */}
            <div className="fixed inset-0 z-40 bg-black/30 md:hidden"></div>

            <motion.div
              ref={sidebarRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl md:hidden"
            >
              <SidebarContent
                tests={tests}
                activeTest={activeTest}
                setActiveTest={setActiveTest}
                closeMenu={() => setIsOpen(false)}
                pathname={pathname}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Sidebar Content Component (Reused for both Desktop & Mobile)
function SidebarContent({
  tests,
  activeTest,
  setActiveTest,
  closeMenu,
  pathname,
}: {
  tests: TestItem[];
  activeTest: number | null;
  setActiveTest: (id: number | null) => void;
  closeMenu?: () => void;
  pathname: string;
}) {
  return (
    <div className="flex flex-col p-4 h-full">
      {tests.map((test) => {
        const isActive = activeTest === test.id;

        // Auto-expand the active test section
        const shouldExpand = isActive || pathname.startsWith(test.path);

        return (
          <div key={test.id} className="mb-4">
            <button
              onClick={() => setActiveTest(shouldExpand ? null : test.id)}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                shouldExpand
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <div className="mr-2 flex h-6 w-6 items-center justify-center">
                {test.icon}
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">TEST {test.id}</div>
                <div className="text-sm font-medium">{test.title}</div>
              </div>
            </button>

            {shouldExpand && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 mt-1"
              >
                {test.subItems.map((subItem) => {
                  const isSubActive = pathname === subItem.path;

                  return (
                    <Link
                      key={subItem.id}
                      href={subItem.path}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm",
                        isSubActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                      onClick={closeMenu}
                    >
                      {subItem.title}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        );
      })}

      <div className="mt-auto pt-4">
        <button className="flex w-full items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
          Download Report Card
        </button>
      </div>
    </div>
  );
}
