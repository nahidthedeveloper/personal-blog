import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function Themes({ setTheme, theme }) {

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
