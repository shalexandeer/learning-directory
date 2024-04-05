import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface layoutProps {
  children: React.ReactNode
}

const layout = ({children}:layoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout