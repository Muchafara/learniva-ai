'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
    )
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <HiSun className="w-4 h-4" />
      case 'dark':
      default:
        return <HiMoon className="w-4 h-4" />
    }
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 bg-transparent rounded-full"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {getIcon()}
    </button>
  )
}
