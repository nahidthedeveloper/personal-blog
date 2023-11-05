import React from 'react'

const CardSmallVertical = () => {
    return (
        <div className={'grid col-span-1 gap-7'}>
            <img
                src='https://img.freepik.com/premium-photo/programmer-architectural-engineer-computer-desk-workplace-with-computer-monitor_67155-23182.jpg?w=1380'
                alt='card'
                className={'h-[250px] w-full overflow-hidden object-cover'}
            />

            <div className={'flex flex-col gap-3'}>
                <h3 className={'text-sm font-bold text-purple-600'}>Olivia Rhye • 1 Jan 2023</h3>
                <h1 className={'text-2xl'}>UX review presentations</h1>
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

export default CardSmallVertical
