import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Themes from '@/components/Themes/Themes'

const Navbar = () => {
    const router = useRouter()

    const items = [
        { title: 'Home', path: '/' },
        { title: 'Blog', path: '/blog' },
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Newsletter', path: '/newsletter' },
    ]

    return (
        <>
            <nav className={'mt-5'}>
                <div className='md:h-16 h-28 mx-auto flex items-center justify-between flex-wrap md:flex-nowrap'>
                    {/* Logo */}
                    <div className='text-indigo-500 md:order-1'>
                        <Link href={'/'} className={'no-underline text-2xl font-bold'}>
                            Logo
                        </Link>
                    </div>
                    <div className='text-gray-500 order-3 w-full md:w-auto md:order-2'>
                        <ul className='flex font-semibold justify-between'>
                            {items.map(({ title, path }, index) => (
                                <Link href={path} key={index} className={'no-underline'}>
                                    <li className={'md:px-4 md:py-2 hover:text-indigo-400'}>
                                        <span
                                            className={`${
                                                router.pathname === path ? 'border-b-2 border-b-indigo-500 text-indigo-500' : ''
                                            } pb-0.5`}
                                        >
                                           <span> {title}</span>
                                        </span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='order-2 md:order-3'>
                        <Themes />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
