import React from 'react'

interface NavbarProps {
  props?: any
}

const Navbar = ({props}:NavbarProps) => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
      <p>Navbar</p>
    </nav>
  )

  
}

export default Navbar