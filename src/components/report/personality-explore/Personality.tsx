import PersonalityBadge from '@/components/shared/personality-badge'
import { personalityTraits, userReport } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Personality = () => {
  return (
    <div className=' p-2'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex gap-6 px-2 items-start"
      >
        {/* Image Container */}
        <div className="flex flex-col  items-center rounded-lg bg-purple-50 p-6 shrink-0">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Architect"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>

        {/* Text & Badges Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Architect</h3>
          <div className="flex flex-wrap gap-2">
            {personalityTraits.map((trait) => (
              <PersonalityBadge key={trait.id} label={trait.label} />
            ))}
          </div>

          <p className="text-sm text-gray-700">
            {userReport.personalityType.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Personality
