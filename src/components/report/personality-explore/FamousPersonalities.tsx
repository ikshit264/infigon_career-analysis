import React from 'react'
import ListElements from '../ListElements'
import { FamousPersonalitiesData } from '@/lib/data'

const FamousPersonalities = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex min-w-[80%]'>
            <ListElements items={FamousPersonalitiesData}/>
        </div>
    </div>
  )
}

export default FamousPersonalities