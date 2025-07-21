"use client"

import { motion } from 'framer-motion'
import { BiMoon } from 'react-icons/bi'
import { useEffect, useState } from 'react'

interface DarkButtonProps {
  currentTheme: string
  onSwitch: () => void
}

const DarkButton = ({ currentTheme, onSwitch }: DarkButtonProps) => {
  const [initialX, setInitialX] = useState(-40)
  
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
      setInitialX(isSmallScreen ? -35 : -40)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (currentTheme === 'light') {
    return (<div></div>)
  }

  return (
    <motion.button
      className='size-6 md:size-8 flex items-center justify-center rounded-full bg-black shadow-xl hover:cursor-pointer transition-all'
      onClick={onSwitch}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.1,
        delay: 0,
        ease: "easeOut"
      }}
    >
      <BiMoon className='size-4 md:size-6' color='white' />
    </motion.button>
  )
}

export default DarkButton