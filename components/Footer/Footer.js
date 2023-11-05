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
        <div className={'my-12 dark:bg-slate-800 dark:text-white'}>
            <span className={'mr-2'}>© Copyright</span>
            {links.map(({ title, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  className={'mr-4'}
                >
                    {title}
                </Link>
            ))}
        </div>
    )
}

export default Footer
