import Footer from '@/components/report/Footer'
import { Layoutprops } from '@/components/shared/schema/Layout'
import React from 'react'

const layout = ({children}:Layoutprops) => {
  return (
    <div>
        {children}
        <Footer/>
    </div>
  )
}

export default layout