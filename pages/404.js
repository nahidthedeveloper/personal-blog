import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className={'min-h-[78vh] flex flex-col gap-20 items-center justify-center'}>
            <h1 className={'text-6xl text-red-600'}>Page not found :)</h1>
            <Link
                href={'/'}
                className={
                    'text-xl bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                }
            >
                Goto Home
            </Link>
        </div>
    )
}

export default NotFound
