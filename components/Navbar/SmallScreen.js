import React from 'react'
import Link from 'next/link'
import Themes from '@/components/Themes/Themes'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

const SmallScreen = ({ items, toggle, setToggle, setTheme, theme }) => {
    const router = useRouter()

    return (
        <div className={'md:hidden bg-white dark:bg-[#090D1F] block w-full h-screen fixed top-0'}>
            <div className='h-screen flex items-center justify-center gap-6'>
                <ul className={'text-center'}>
                    <li className={'mb-[54px]'}>
                        <Link
                            href={'/'}
                            className={'no-underline text-lg font-bold'}
                            onClick={() => {
                                toggle ? setToggle(false) : ''
                            }}
                        >
                            Logo
                        </Link>
                    </li>
                    {items.map(({ title, path }, index) => (
                        <Link
                            href={path}
                            key={index}
                            className={'no-underline mr-[30px] text-lg'}
                            onClick={() => {
                                toggle ? setToggle(false) : ''
                            }}
                        >
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
                    <li className={'flex justify-center'}>
                        <Themes setTheme={setTheme} theme={theme} />
                    </li>
                </ul>

                <button className={'absolute bottom-10'} onClick={() => setToggle(!toggle)}>
                    {toggle ? <XMarkIcon className={'h-8 w-8'} /> : ''}
                </button>
            </div>
        </div>
    )
}

export default SmallScreen
