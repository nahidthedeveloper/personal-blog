import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { formattedDateTime } from '@/utils/formattedDateTime'

const Card = ({ blog }) => {
    const { id, image, title, description, keyword, created_at } = blog
    const separatedKeyword = keyword.split(',').map(item => item.trim())


    return (
        <div>
            <Link href={`/blog/${id}`} className="overflow-hidden w-full h-[240px] block mb-8">
                <img src={image} alt="card" className="object-cover h-full w-full" />
            </Link>

            <h3 className="text-sm font-bold text-purple-600 mb-3">{formattedDateTime(created_at)}</h3>

            <Link href={`/blog/${id}`} className="flex justify-between mb-3">
                <h1 className="text-2xl leading-8 font-[600] line-clamp-1">{title}</h1>
                <div className="w-6">
                    <ArrowUpRightIcon className="h-6 w-6" />
                </div>
            </Link>

            <div className="text-base leading-6 text-[#667085] mb-6 line-clamp-1"
                 dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className="flex flex-wrap gap-2">
                {separatedKeyword.map((item, index) => (
                    <span
                        key={index}
                        className="bg-[#F9F5FF] text-sm font-[500] py-0.5 px-3 rounded-2xl text-purple-600 h-[26px]"
                    >
                    {item}
                </span>
                ))}
            </div>
        </div>
    )
}

export default Card
