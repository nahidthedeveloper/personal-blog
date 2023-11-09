import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Themes from '@/components/Themes/Themes'

const LargeScreen = ({ items, setTheme, theme }) => {
    const router = useRouter()

    return (
        <nav className={'py-[10px] my-[30px] px-8 lg:px-0 flex justify-between'}>
            <Link href={'/'} className={'no-underline text-lg font-bold'}>
                Logo
            </Link>

            <div className={'hidden md:block'}>
                <ul className='flex items-center'>
                    {items.map(({ title, path }, index) => (
                        <Link href={path} key={index} className={'no-underline mr-[30px] text-lg'}>
                            <li className={''}>
                                <span
                                    className={`${
                                        router.pathname === path ? 'border-b-2 border-b-black dark:border-b-white' : ''
                                    } pb-0.5`}
                                >
                                    <span>{title}</span>
                                </span>
                            </li>
                        </Link>
                    ))}
                    <li>
                        <Themes setTheme={setTheme} theme={theme} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default LargeScreen
