"use client"

import React, { useEffect, useState } from 'react'
import DarkButton from './DarkButton'
import LightButton from './LightButton'
import { getInitialTheme, switchTheme } from '@/lib/utils'

const ThemeSwitchButton = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  useEffect(() => {
    setCurrentTheme(getInitialTheme())
  }, [])

  const handleThemeSwitch = () => {
    const newTheme = switchTheme()
    setCurrentTheme(newTheme)
  }

  return (
    <div className='w-16 h-8 md:w-20 md:h-10 flex flex-row items-center justify-between rounded-full px-1 py-[2px] md:px-1 md:py-1 shadow-inner bg-gray-500 m-auto'>
      <DarkButton 
        currentTheme={currentTheme} 
        onSwitch={handleThemeSwitch} 
      />
      <LightButton 
        currentTheme={currentTheme} 
        onSwitch={handleThemeSwitch} 
      />
    </div>
  )
}

export default ThemeSwitchButton