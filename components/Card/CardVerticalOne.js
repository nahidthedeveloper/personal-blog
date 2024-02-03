import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const CardVerticalOne = ({ data }) => {
    const { image, title, link, description } = data
    return (
        <div>
            <Link href="" className="overflow-hidden w-full h-[240px] block mb-8">
                <img src={image} alt="card" className="object-cover h-full w-full" />
            </Link>

            <h3 className="text-sm font-bold text-purple-600 mb-3">02 Feb 2024</h3>

            <Link href="" className="flex justify-between mb-3">
                <h1 className="text-2xl leading-8 font-[600] line-clamp-1">{title}</h1>
                {link && (
                    <div className="w-6">
                        <ArrowUpRightIcon className="h-6 w-6" />
                    </div>
                )}
            </Link>

            <p className="text-base leading-6 text-[#667085] mb-6 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2">
                <span
                    className="bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600 h-[26px]"
                >
                  Hello World
                </span>
            </div>
        </div>
    )
}

export default CardVerticalOne
