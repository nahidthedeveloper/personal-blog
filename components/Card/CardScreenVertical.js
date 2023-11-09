import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const CardScreenVertical = (props) => {
    const { image, date, title, link, description, one, two, three, four } = props.data
    return (
        <div className={'grid col-span-2'}>
            <Link href={''} className={'overflow-hidden block w-full h-[200px] md:h-[300px] lg:h-[556px] mb-8'}>
                <img src={image} alt='card' className={'object-cover h-full w-full'} />
            </Link>

            {date ? <h3 className={'text-sm font-bold text-purple-600 mb-3'}>{date}</h3> : ''}

            <Link href={''} className={'flex justify-between mb-3'}>
                <h1 className={'text-2xl leading-8 font-[600]'}>{title}</h1>
                {link ? (
                    <div className={'w-6'}>
                        <ArrowUpRightIcon className={'h-6 w-6'} />
                    </div>
                ) : (
                    ''
                )}
            </Link>
            <p className={'text-base leading-6 text-[#667085] mb-6'}>{description}</p>
            <div className={'flex flex-wrap gap-2'}>
                {one ? (
                    <span className={'bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600 h-[26px]'}>
                        {' '}
                        {one}{' '}
                    </span>
                ) : (
                    ''
                )}
                {two ? (
                    <span className={'bg-[#EEF4FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600 h-[26px]'}>
                        {' '}
                        {two}{' '}
                    </span>
                ) : (
                    ''
                )}
                {three ? (
                    <span className={'bg-[#FDF2FA] text-sm font-[500] py-0.5 px-3 rounded-2xl text-[#667085] h-[26px]'}>
                        {' '}
                        {three}{' '}
                    </span>
                ) : (
                    ''
                )}
                {four ? (
                    <span className={'bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600'}>
                        {' '}
                        {four}{' '}
                    </span>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default CardScreenVertical
