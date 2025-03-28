"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type AccordionItem = {
  id: number
  title: string
  content: string
}

const ExpandingAccordion = ({items} : {items : AccordionItem[]}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const parentRef = useRef<HTMLDivElement | null>(null)
  const gap = 20 // Reduced gap between items

  const getExpandVariants = (index: number) => {
    const totalItems = items.length
    const collapsedHeight = 70 // Each Item Height
    const expandedHeight = 100 * totalItems -gap;
    return {
      collapsed: {
        height: collapsedHeight,
        y: index * (collapsedHeight + gap), // Adding gap
      },
      expanded: {
        height: expandedHeight,
        y: index - .8*index, // Only gap for other items
      },
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center font-urbanist">
      <div 
        className="relative w-full h-full" 
        style={{
          height: `${100 * items.length }px`,
        }}
        ref={parentRef}
      >
        <div className="absolute inset-0">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={`absolute w-full overflow-hidden border bg-white shadow-lg shadow-slate-600 ${
                  hoveredId === item.id ? "z-10" : ""
                } rounded`}
                initial="collapsed"
                animate={hoveredId === item.id ? "expanded" : "collapsed"}
                exit="collapsed"
                variants={getExpandVariants(index)}
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 100,
                  mass: 2,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ position: 'absolute' }}
              >
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className={`flex w-full justify-between items-center p-4 ${hoveredId !== item.id ? "h-full" : ""}`}>
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <motion.div
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: hoveredId === item.id ? 135 : 0 }}
                      transition={{ duration: 0.8, type: "spring"  }}
                    >
                      <Plus className="w-5 h-5 text-gray-600 font-semibold" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {hoveredId === item.id && (
                      <motion.div
                        className="px-4 h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut", visualDuration: 0.5 }}
                      >
                        <p className="text-gray-600">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ExpandingAccordion