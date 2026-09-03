import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { getInitialTheme, setTheme } from '../utils/theme'

export default function ThemeToggle(){
  const [theme, setLocalTheme] = useState('light')

  useEffect(()=>{
    const t = getInitialTheme()
    setLocalTheme(t)
  },[])

  function toggle(){
    const next = theme === 'dark' ? 'light' : 'dark'
    setLocalTheme(next)
    setTheme(next)
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="rounded-md p-2.5 bg-white/5 hover:bg-white/8 touch-manipulation">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
