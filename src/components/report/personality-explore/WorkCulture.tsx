import React from 'react'
import ListElements from '../ListElements'
import { WorkCultureData } from '@/lib/data'

const WorkCulture = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex min-w-[80%]'>
            <ListElements items={WorkCultureData}/>
        </div>
    </div>
  )
}

export default WorkCulture