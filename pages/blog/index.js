import React, { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import Head from 'next/head'
import CardHorizontalOne from '@/components/Card/CardHorizontalOne'
import CardVerticalOne from '@/components/Card/CardVerticalOne'
import CardHorizontalTwo from '@/components/Card/CardHorizontalTwo'
import axios from 'axios'

export async function getServerSideProps(context) {
    const blogs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/`)

    return {
        props: {
            blogs: blogs.data,
        },
    }
}


const Blogs = (props) => {
    const { blogs } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    const handlePagination = async (page) => {
        setCurrentPage(page)
        const blogs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/?page=${page}`)
        console.log(blogs)
    }

    return (<>
            <Head>
                <title>Blog | Personal Blog</title>
            </Head>

            <div>
                <h1 className="mt-10 text-[72px] md:text-[160.8px] lg:text-[220px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 dark:border-white">
                    THE BLOG
                </h1>

                <div className={'px-8 lg:px-0'}>
                    {/*<section className={'my-12'}>*/}
                    {/*    <h2 className={'font-bold text-2xl mb-8'}>Recent blog posts</h2>*/}

                    {/*    <div className={'grid grid-cols-2 gap-8'}>*/}
                    {/*        {blogs?.map((blog, index) => (<div className="col-span-2 md:col-span-1" key={index}>*/}
                    {/*            <CardVerticalOne blog={blog} />*/}
                    {/*        </div>))}*/}
                    {/*    </div>*/}

                    {/*</section>*/}

                    <section className={'my-12'}>
                        <h2 className={'font-bold text-2xl my-16'}>All blog posts</h2>
                        {/*<div className="">*/}
                        {/*    <div className="inline-flex flex-col justify-center relative text-gray-500">*/}
                        {/*        <div className="relative">*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                className="p-2 pr-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"*/}
                        {/*                placeholder="search..."*/}
                        {/*                defaultValue="Gar"*/}
                        {/*            />*/}
                        {/*            <svg*/}
                        {/*                className="w-4 h-4 absolute right-3 top-3.5 cursor-pointer"*/}
                        {/*                xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                fill="none"*/}
                        {/*                viewBox="0 0 24 24"*/}
                        {/*                stroke="currentColor"*/}
                        {/*            >*/}
                        {/*                <path*/}
                        {/*                    strokeLinecap="round"*/}
                        {/*                    strokeLinejoin="round"*/}
                        {/*                    strokeWidth={2}*/}
                        {/*                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"*/}
                        {/*                />*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*        <ul className="bg-white border border-gray-100 w-full mt-2 absolute top-9 rounded">*/}
                        {/*            <li className="p-2 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">*/}
                        {/*                hello*/}
                        {/*            </li>*/}
                        {/*            <li className="p-2 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">*/}
                        {/*                world*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
                            {blogs.results?.map((blog, index) => (<CardVerticalOne key={index} blog={blog} />))}
                        </div>
                    </section>

                    <section>
                        <Pagination currentPage={currentPage} postsPerPage={postsPerPage} blogs={blogs}
                                    handlePagination={handlePagination} />
                    </section>
                </div>
            </div>
        </>)
}

export default Blogs
