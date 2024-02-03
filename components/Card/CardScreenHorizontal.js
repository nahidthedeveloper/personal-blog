import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const BigCard = (props) => {
    const { image, date, title, link, description, one, two, three, four } = props.data
    return (
        <div className={'md:col-span-2'}>
            <div className={'grid md:grid-cols-2 gap-7'}>
                <Link
                    href={''}
                    className={'overflow-hidden block w-full h-[188px] lg:h-[246px] md:col-span-2 lg:col-span-1'}
                >
                    <img src={image} alt='card' className={'object-cover h-full w-full'} />
                </Link>

                <div className={'md:col-span-2 lg:col-span-1'}>
                    {date ? <h3 className={'text-sm font-bold text-purple-600'}>{date}</h3> : ''}

                    <Link href={''} className={'flex justify-between mb-3'}>
                        <h1 className={'text-2xl leading-8 font-[600] line-clamp-1'}>{title}</h1>
                        {link ? (
                            <div className={'w-6'}>
                                <ArrowUpRightIcon className={'h-6 w-6'} />
                            </div>
                        ) : (
                            ''
                        )}
                    </Link>
                    <p className={'text-base leading-6 text-[#667085] mb-6 line-clamp-4'}>{description}</p>
                    <div className={'flex flex-wrap gap-2'}>
                        {one ? (
                            <span className={'bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600'}>
                                {' '}
                                {one}{' '}
                            </span>
                        ) : (
                            ''
                        )}
                        {two ? (
                            <span className={'bg-[#EEF4FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600'}>
                                {' '}
                                {two}{' '}
                            </span>
                        ) : (
                            ''
                        )}
                        {three ? (
                            <span className={'bg-[#FDF2FA] text-sm font-[500] py-0.5 px-3 rounded-2xl text-[#667085]'}>
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
            </div>
        </div>
    )
}

export default BigCard
