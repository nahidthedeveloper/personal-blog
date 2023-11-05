import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CardSmallVertical from "@/components/Card/CardSmallVertical";

const Newsletter = () => {
    return (
        <>
            <Head>
                <title>Newsletter | Personal Blog</title>
            </Head>

            <div>
                <section>
                    <div className={'mt-10 md:mt-16'}>
                        <h3 className={'text-md text-center font-bold text-purple-600 mb-4'}>Newlatters</h3>
                        <h1 className={'text-4xl font-bold text-center mb-8'}>Stories and interviews</h1>

                        <div className={'flex justify-center'}>
                            <div className={'md:w-[494px]'}>
                                <div className={'flex flex-col'}>
                                    <h2
                                        className={
                                            'text-base dark:text-[#C0C5D0] text-center leading-8 mb-8 text-cyan-950'
                                        }
                                    >
                                        Subscribe to learn about new product features, the latest in technology,
                                        solutions, and updates
                                    </h2>
                                    <div className={'flex gap-6'}>
                                        <input
                                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                            type='email'
                                            placeholder='Enter your email'
                                        />
                                        <button
                                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                            type='button'
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                <h2 className={'text-sm mt-3'}>
                                    We care about your data in our{' '}
                                    <Link href={''} className={'border-b border-b-black dark:border-b-white pb-0.5'}>
                                        privacy policy
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'mt-32'}>
                    <h2 className={'font-bold text-2xl mb-10'}>All blog posts</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'}>
                        <CardSmallVertical/>
                        <CardSmallVertical/>
                        <CardSmallVertical/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Newsletter
