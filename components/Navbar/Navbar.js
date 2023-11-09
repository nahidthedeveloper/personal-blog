import LargeScreen from "@/components/Navbar/LargeScreen";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import SmallScreen from "@/components/Navbar/SmallScreen";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const items = [
        { title: 'Home', path: '/' },
        { title: 'Blog', path: '/blog' },
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Newsletter', path: '/newsletter' },
    ]

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        console.log('theme changed');
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

    return (
        <div>
            <button className={'md:hidden absolute right-6 top-10'} onClick={() => setToggle(!toggle)}>
                {!toggle ? <Bars3Icon className={'h-8 w-8'} /> : ''}
            </button>
            {toggle ? (
                <SmallScreen items={items} toggle={toggle} setToggle={setToggle} setTheme={setTheme} theme={theme}/>
            ) : (
                <LargeScreen items={items} setTheme={setTheme} theme={theme}/>
            )}
        </div>
    )
}
export default Navbar
