import React from 'react'
import Link from 'next/link'
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const Pagination = () => {
    return (
        <div>
            <div className={'border-t border-black mb-8 pt-5  flex justify-between items-center'}>
                <Link href={''} className={'flex items-center'}>
                    <CgArrowLongLeft className={'h-5 w-5'}/>
                    <span className={'ml-2'}>Previous</span>
                </Link>

                <div className={'flex gap-2'}>
                    <Link href={''} className={'hidden md:block bg-black text-white px-2 py-1 rounded'}>1</Link>
                    <Link href={''} className={'hidden md:block px-2 py-1'}>2</Link>

                </div>

                <Link href={''} className={'flex items-center'}>
                    <span className={'mr-2'}>Next</span>
                    <CgArrowLongRight className={'h-5 w-5'}/>
                </Link>
            </div>
        </div>
    )
}

export default Pagination
