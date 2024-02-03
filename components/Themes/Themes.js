import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function Themes() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="py-1 px-2 rounded-3xl"
            >
                {mounted && theme === 'light' ? (
                    <Sun className="text-black dark:text-white" />
                ) : (
                    <Moon className="text-black dark:text-white" />
                )}
            </button>
        </div>
    )
}

export default Themes
