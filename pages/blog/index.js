import React, { useEffect, useState } from 'react'
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

    // useEffect(() => {
    //
    // }, [])


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
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
                        {blogs?.map((blog, index) => (<CardVerticalOne key={index} blog={blog} />))}
                    </div>
                </section>

                <section>
                    <Pagination />
                </section>
            </div>
        </div>
    </>)
}

export default Blogs
