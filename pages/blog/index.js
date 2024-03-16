import React, { useCallback, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import Head from 'next/head'
import Card from '@/components/Card/Card'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export async function getServerSideProps(context) {
    try {
        const { page, search } = context.query
        const blogs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs?page=${page ?? 1}&search=${search ?? ''}`)

        return {
            props: {
                blogs: blogs.data,
            },
        }
    } catch (error) {
        return {
            props: {
                blogs: null,
            },
        }
    }
}

const Blogs = (props) => {
    const { blogs } = props
    const params = useSearchParams()
    const searchParam = params.get('search')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)
    const [searchValue, setSearchValue] = useState(searchParam ?? '')
    const router = useRouter()

    const handlePagination = async (page) => {
        await router.push(`${process.env.NEXT_PUBLIC_CLIENT_URL}/blog?page=${page}`)

    }

    const searchHandler = useCallback(async (e) => {
        await setSearchValue(e.target.value)
        await router.push(`${process.env.NEXT_PUBLIC_CLIENT_URL}/blog?search=${e.target.value}`)
    }, [searchValue, router])


    return (
        <div>
            <Head>
                <title>Blog | Personal Blog</title>
            </Head>

            <div>
                <h1 className="mt-10 text-[72px] md:text-[130px] lg:text-[180px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 dark:border-white">
                    THE BLOG
                </h1>

                <div className={'px-8 lg:px-0'}>
                    <section className={'my-12'}>
                        <div className="my-10 flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
                            <h2 className={'font-bold text-2xl'}>All blog posts</h2>

                            <div className="max-w-[380px] w-full">
                                <input
                                    type="text"
                                    className="w-full h-[44px] text-gray-600 px-4 py-2 rounded-lg border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                    placeholder="Search by title, description, keywords"
                                    value={searchValue}
                                    onChange={searchHandler}
                                />
                            </div>
                        </div>

                        {blogs?.results.length === 0 ? (
                            <h1 className="text-center">Not Found.</h1>
                        ) : (
                            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
                                {blogs.results?.map((blog, index) => (<Card key={index} blog={blog} />))}
                            </div>)}

                    </section>

                    <section>
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                                    postsPerPage={postsPerPage}
                                    blogs={blogs}
                                    handlePagination={handlePagination} />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Blogs
