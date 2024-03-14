import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CardVerticalOne from '@/components/Card/CardVerticalOne'
import axios from 'axios'

export async function getServerSideProps(context) {
    const blogs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/`)

    return {
        props: {
            blogs: blogs.data,
        },
    }
}

const Newsletter = (props) => {
    const { blogs } = props
    console.log(blogs)

    return (
        <>
            <Head>
                <title>Newsletter | Personal Blog</title>
            </Head>

            <div className={'px-8 lg:px-0'}>
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
                                Subscribe to learn about new product features, the latest in technology, solutions, and
                                updates
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
                                    <Link href={''} className={'border-b border-b-black dark:border-b-white pb-0.5'}>
                                        privacy policy
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'mt-32'}>
                    <h2 className={'font-bold text-2xl mb-10'}>All blog posts</h2>

                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 mb-20'}>
                        {blogs?.map((blog, index) => (
                            <CardVerticalOne key={index} blog={blog} />
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Newsletter
