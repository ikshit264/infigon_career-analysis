import React from 'react'
import ListElements from '../ListElements'
import { CaseStudiesData } from '@/lib/data'

const CaseStudies = () => {
  return (
    <div className='flex items-center justify-center'>
            <ListElements items={CaseStudiesData}/>
    </div>
  )
}

export default CaseStudies