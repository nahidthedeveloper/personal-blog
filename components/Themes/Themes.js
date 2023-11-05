import React, { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function Themes() {
    // const themeFromStorage =
    //   typeof window !== 'undefined'
    //     ? localStorage.getItem('theme')
    //       ? localStorage.getItem('theme')
    //       : 'light'
    //     : 'light'

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        switch (theme) {
            case 'light':
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
                break
            default:
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
        }
    }, [theme])

    const handleTheme = (mode) => {
        setTheme(mode)
    }

    return (
        <button
            onClick={() => handleTheme(theme === 'light' ? 'dark' : 'light')}
            className={'text-white px-3 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-xl flex items-center'}
        >
            {theme === 'light' ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
        </button>
    )
}

export default Themes
