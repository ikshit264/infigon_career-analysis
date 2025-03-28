import PersonalityBadge from '@/components/shared/personality-badge'
import { personalityTraits, userReport } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Personality = () => {
  return (
    <div>
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
    </div>
  )
}

export default Personality