import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Link from 'next/link'
import Themes from '@/components/Themes/Themes'
import { useRouter } from 'next/router'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()

    const items = [
        { title: 'Home', path: '/' },
        { title: 'Blog', path: '/blog' },
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Newsletter', path: '/newsletter' },
    ]

    return (
        <div>
            <button className={'md:hidden absolute right-6 top-10'} onClick={() => setToggle(!toggle)}>
                {!toggle ? <Bars3Icon className={'h-8 w-8'} /> : ''}
            </button>

            {/*big screen*/}
            <nav className={'py-[10px] my-[30px] px-8 lg:px-0 flex justify-between'}>
                <Link href={'/'} className={'no-underline text-2xl font-bold'}>
                    Logo
                </Link>

                <div className={'hidden md:block'}>
                    <ul className="flex items-center">
                        {items.map(({ title, path }, index) => (
                            <li key={index}>
                                <Link href={path}
                                      className={`${router.pathname === path && 'border-b-2 border-black dark:border-white'} pb-0.5 mr-8`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Themes />
                        </li>
                    </ul>
                </div>
            </nav>

            {/*small screen*/}
            <nav
                className={`${toggle ? 'block' : 'hidden'} bg-white text-black dark:bg-gray-900 dark:text-white w-full h-screen fixed top-0`}>
                <div className="h-screen flex items-center justify-center gap-6">
                    <ul className={'text-center'}>
                        <li className={'mb-[54px]'}>
                            <Link href={'/'}
                                  className={'no-underline text-2xl font-bold'}
                                  onClick={() => {
                                      toggle && setToggle(false)
                                  }}
                            >
                                Logo
                            </Link>
                        </li>
                        {items.map(({ title, path }, index) => (
                            <li key={index} className="mb-4" onClick={() => {
                                toggle && setToggle(false)
                            }}>
                                <Link href={path}
                                      className={`${router.pathname === path && 'border-b-2 border-black dark:border-white'} pb-0.5`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <li className={'flex justify-center'}>
                            <Themes />
                        </li>
                    </ul>

                    <button className={'absolute bottom-20'} onClick={() => setToggle(!toggle)}>
                        {toggle ? <XMarkIcon className={'h-8 w-8'} /> : ''}
                    </button>
                </div>
            </nav>

        </div>
    )
}
export default Navbar
