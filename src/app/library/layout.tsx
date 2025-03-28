import { Layoutprops } from '@/components/shared/schema/Layout'
import React from 'react'

const layout = ({children}:Layoutprops) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout