import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const CardMid = () => {
    return (
        <div className={'grid col-span-1 gap-7'}>
            <img
                src='https://img.freepik.com/premium-photo/programmer-architectural-engineer-computer-desk-workplace-with-computer-monitor_67155-23182.jpg?w=1380'
                alt='card image'
                className={'h-[220px] lg:h-[320px] w-full overflow-hidden object-cover'}
            />

            <div className={'flex flex-col gap-3'}>
                <h3 className={'text-sm font-bold text-purple-600'}>Olivia Rhye • 1 Jan 2023</h3>
                <div className={'flex justify-between items-center text-2xl'}>
                    <h1>UX review presentations</h1>
                    <Link href={''}>
                        <ArrowUpRightIcon className={'h-8 w-8'} />
                    </Link>
                </div>
                <h2 className={'text-base leading-4 text-[#667085]'}>
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                </h2>
                <div className={'flex gap-2 mt-3'}>
                    <span className={'bg-[#F9F5FF] text-sm py-0.5 px-3 rounded-2xl leading-5 text-purple-600'}>
                        Design
                    </span>
                    <span className={'bg-[#EEF4FF] text-sm py-0.5 px-3 rounded-2xl leading-5 text-purple-600'}>
                        Research
                    </span>
                    <span className={'bg-[#FDF2FA] text-sm py-0.5 px-3 rounded-2xl leading-5 text-[#667085]'}>
                        Presentation
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardMid
