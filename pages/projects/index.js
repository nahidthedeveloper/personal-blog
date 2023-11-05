import React from 'react'
import Head from 'next/head'
import CardMid from '@/components/Card/CardMid'
import CardBigVertical from '@/components/Card/CardBigVertical'
import CardBigHorizontal from '@/components/Card/CardBigHorizontal'

const Projects = () => {
    return (
        <>
            <Head>
                <title>Project | Personal Blog</title>
            </Head>

            <div>
                <h1
                    className={
                        'mt-10 text-[72px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 md:text-[150.8px] lg:text-[227px] dark:border-white'
                    }
                >
                    PROJECT
                </h1>
                <section className={'my-12'}>
                    <h2 className={'font-bold text-2xl mb-8'}>List Project</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                        <CardMid />
                        <CardMid />
                        <CardBigVertical />
                        <CardBigHorizontal />
                        <CardMid />
                        <CardMid />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects
