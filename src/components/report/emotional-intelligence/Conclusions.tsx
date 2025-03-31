import React from 'react'
import CircularProgress from './CircularProgressbar'
import { EmotionalIntelligenceYourScore } from '@/lib/data'
import Conclusion from '../Conclusion'

const Conclusions = () => {
  return (
    <div className='flex flex-col gap-6'>
    <div className=" flex items-center gap-4 p-2">
      <h3 className=" text-lg font-semibold text-blue-500">Summarised Result</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className=" h-6 w-6 aspect-square rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-700">Strength</span>
        </div>
        <div className="flex items-center gap-2">
          <div className=" h-6 w-6 aspect-square rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-700">Needs Attention</span>
        </div>
      </div>
    </div>

    <CircularProgress scores={EmotionalIntelligenceYourScore} className="mb-8" maxScore={50}/>

    <Conclusion color='#FA9B56' content='You thrive in structured, people-oriented roles where your strengths in organization, empathy, and
                  teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance
                  your career success, as demonstrated by real-world examples and case studies. Understanding and
                  developing your MBTI type can lead to fulfilling and impactful career paths.'/>
  </div>
  )
}

export default Conclusions