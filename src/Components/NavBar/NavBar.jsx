import React from 'react'
import Logo from "/logoLetters.png"

const NavBar = () => {
  return (
    <section className='flex justify-between items-center bg-zinc-300 bg-opacity-10 absolute w-full'>
      <div className="flex items-center">
        <img src={Logo} alt="" className='pl-4 md:pl-10 w-3/4 md:w-auto h-auto max-h-12'/>
      </div>
      <ul className='flex md:hidden justify-center w-full'> 
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Quiénes Somos</li>
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Menú</li>
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Ubicación</li>
      </ul>
      <ul className='hidden md:flex justify-center w-1/2 md:w-auto'> 
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Quiénes Somos</li>
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Menú</li>
        <li className='bg-red-900 p-3 rounded-full text-white text-center uppercase mx-2'>Ubicación</li>
      </ul>
    </section>
  )
}

export default NavBar
