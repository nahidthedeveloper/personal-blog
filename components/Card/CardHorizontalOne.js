import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const CardHorizontalOne = (props) => {
    const { image, date, title, link, description } = props.data
    return (
        <div className="grid col-span-1 md:col-span-2 lg:col-span-1">
            <div className="grid gap-6 md:grid-cols-2">
                <Link href="" className="overflow-hidden w-full h-[200px] block">
                    <img src={image} alt="card" className="object-cover h-full w-full" />
                </Link>

                <div>
                    {date ? <h3 className="text-sm font-bold text-purple-600 mb-3">{date}</h3> : ''}

                    <Link href="" className="flex justify-between mb-2">
                        <h1 className="text-2xl leading-8 font-[600] line-clamp-2">{title}</h1>
                        {link && (
                            <div className="w-6">
                                <ArrowUpRightIcon className="h-6 w-6" />
                            </div>
                        )}
                    </Link>
                    <p className="text-base leading-6 text-[#667085] mb-6 line-clamp-3">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600">
                            Hello World
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontalOne
