import React from 'react'
import Link from 'next/link'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
    return (
        <div>
            <div className={'border-y md:border-0 md:border-t border-black dark:border-white py-[30px] flex justify-between items-center flex-col gap-7 md:flex-row'}>
                <Link href={''} className={'flex items-center'}>
                    <ArrowSmallLeftIcon className={'h-7 w-7'}/>
                    <span className={'ml-2'}>Previous</span>
                </Link>

                <div className={'flex gap-2'}>
                    <Link href={''} className={'bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded'}>1</Link>
                    <Link href={''} className={' px-2 py-1'}>2</Link>

                </div>

                <Link href={''} className={'flex items-center'}>
                    <span className={'mr-2'}>Next</span>
                    <ArrowSmallRightIcon className={'h-7 w-7'}/>
                </Link>
            </div>
        </div>
    )
}

export default Pagination
