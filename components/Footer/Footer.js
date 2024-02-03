import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const links = [
        { title: 'Twitter', path: '' },
        { title: 'Linkedin', path: '' },
        { title: 'Email', path: '' },
        { title: 'RSS feed', path: '' },
        { title: 'Add to Feedly', path: '' },
    ]
    return (
        <div className={'my-[30px] pt-[10px] text-[16px] dark:text-white text-center md:flex'}>
            <span className={'md:mr-2 hidden md:block text-[20px]'}>© 2023</span>
            {links.map(({ title, path }, index) => (
                <Link key={index} href={path} className={'md:mr-4 block mb-[14px] md:mb-0 text-[20px]'}>
                    {title}
                </Link>
            ))}
            <span className={'md:mr-2 md:hidden text-[20px]'}>© 2023</span>
        </div>
    )
}

export default Footer
