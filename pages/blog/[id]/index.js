import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { formattedDateTime } from '@/utils/formattedDateTime'


export async function getServerSideProps(context) {
    const blogId = context.query.id
    const blogPost = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/${blogId}/`)

    return {
        props: {
            blogPost: blogPost.data,
        },
    }
}

const SingleBlog = (props) => {
    const { blogPost } = props.results

    return (
        <>
            <Head>
                <title>Blog Child | Personal Blog</title>
            </Head>
            <div className={'grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 my-[30px] px-8'}>
                <div className={'col-span-1 md:col-span-3 lg:col-span-2'}>
                    <div>
                        <h3 className={'text-sm font-bold text-purple-600'}> {formattedDateTime(blogPost.created_at)} </h3>
                        <h1 className={'text-4xl leading-8 font-bold my-8'}>
                            {blogPost.title}
                        </h1>

                        <div className={'h-[426px] overflow-hidden mb-8'}>
                            <img
                                src={blogPost.image}
                                alt="photo"
                            />
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: blogPost.description }}>

                        </div>

                    </div>

                    <section>
                        <div className={'mt-10 md:mt-16'}>
                            <h3 className={'text-base text-center font-bold text-purple-600 mb-3'}>Newlatters</h3>
                            <h1 className={'text-5xl font-bold text-center mb-6'}>Stories and interviews</h1>
                            <div className={'flex justify-center'}>
                                <h2
                                    className={
                                        'text-xl max-w-[768px] dark:text-[#C0C5D0] text-center leading-[30px] mb-10 text-cyan-950'
                                    }
                                >
                                    Subscribe to learn about new product features, the latest in technology, solutions,
                                    and updates
                                </h2>
                            </div>

                            <div className={'flex justify-center'}>
                                <div>
                                    <input
                                        className={
                                            'text-base py-3 pl-4 pr-[14px] w-[165px] md:w-[360px] bg-gray-100 dark:text-black rounded-lg mr-4'
                                        }
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>
                                    <h5 className={'text-sm mt-2'}>
                                        We care about your data in our{' '}
                                        <Link
                                            href={''}
                                            className={'border-b border-b-black dark:border-b-white pb-0.5'}
                                        >
                                            privacy policy
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
