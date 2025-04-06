'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { JSX, useEffect, useState } from 'react'

const ThemeModes = ['system', 'light', 'dark']

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {

    setMounted(true)
  }, [])

  const ThemeIcon = () :JSX.Element => {
    switch (theme) {
    case 'system':
      return <SunMoon />
    case 'dark':
      return <MoonIcon />
    case 'light':
      return <SunIcon />
    default:
      return <SunIcon/>
    }
  }

  if(!mounted) return

  return ( 
    <DropdownMenu>
      <DropdownMenuTrigger asChild> 
        <Button variant='ghost'>
          <ThemeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {'Appearance'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {
          ThemeModes.map((themeMode, i) => (
            <DropdownMenuCheckboxItem 
              key={i}
              className='capitalize'
              checked= {themeMode === theme}
              onClick={() => setTheme(themeMode)}
            >
              {themeMode}
            </DropdownMenuCheckboxItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggler