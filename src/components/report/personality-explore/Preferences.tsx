import React from 'react'
import ListElements from '../ListElements'
import { PreferencesData } from '@/lib/data'

const Preferences = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex min-w-[80%]'>
            <ListElements items={PreferencesData}/>
        </div>
    </div>
  )
}

export default Preferences