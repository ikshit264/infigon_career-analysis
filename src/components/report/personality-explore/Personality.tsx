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
        className="flex sm:flex-row flex-col items-center gap-6 px-2 sm:items-start"
      >
        {/* Image Container */}
        <div className="flex flex-col items-center rounded-lg bg-purple-50 shrink-0">
          <Image
            src={userReport.image}
            alt="Architect"
            width={200}
            height={200}
            className="rounded-lg "
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
