import React from 'react'
import ListElements from '../ListElements'
import { CaseStudiesData } from '@/lib/data'

const CaseStudies = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex min-w-[80%]'>
            <ListElements items={CaseStudiesData}/>
        </div>
    </div>
  )
}

export default CaseStudies