import React from 'react'
import Pagination from '@/components/Pagination/Pagination'
import Head from 'next/head'
import CardSmallHorizontal from "@/components/Card/CardSmallHorizontal";
import CardSmallVertical from "@/components/Card/CardSmallVertical";

const Blogs = () => {
    const arr = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <>
            <Head>
                <title>Blog | Personal Blog</title>
            </Head>

            <div>
                <h1
                    className={
                        'mt-10 text-[72px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 md:text-[160.8px] lg:text-[243.8px] dark:border-white'
                    }
                >
                    THE BLOG
                </h1>
                <section className={'my-12'}>
                    <h2 className={'font-bold text-2xl mb-8'}>Recent blog posts</h2>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
                        {arr.map((el, index) => {
                            const arrMod = index % 4
                            if (arrMod === 0 || arrMod === 3 || arrMod === 4) {
                                return (
                                    <div className={'grid gap-8'} key={index}>
                                        <CardSmallHorizontal/>
                                    </div>
                                )
                            } else if (arrMod === 1 || arrMod === 2) {
                                return (
                                    <div className={'grid grid-cols-1 gap-7'} key={index}>
                                        <CardSmallVertical/>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </section>



                <section className={'my-12'}>
                    <h2 className={'font-bold text-2xl my-16'}>All blog posts</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'}>

                    </div>
                </section>

                <section>
                    <Pagination />
                </section>
            </div>
        </>
    )
}

export default Blogs
