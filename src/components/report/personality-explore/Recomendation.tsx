import React from 'react'
import ListElements from '../ListElements'
import { RecomendationData } from '@/lib/data'

const Recomendation = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex min-w-[80%]'>
            <ListElements items={RecomendationData}/>
        </div>
    </div>
  )
}

export default Recomendation