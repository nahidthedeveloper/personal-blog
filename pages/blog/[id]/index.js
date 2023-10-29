import React from 'react'
import Head from 'next/head'

const SingleBlog = () => {
    return (
        <>
            <Head>
                <title>My page title</title>
            </Head>
            <div className={'w-full h-screen flex flex-col items-center justify-center'}>
                <h1 className={'font-extrabold text-red-500 text-5xl'}> Single blog</h1>
                <p className={'text-red-200 text-lg text-center max-w-4xl mt-5'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at blanditiis deleniti fuga
                    illum itaque, maxime nulla praesentium unde voluptatem?
                </p>
            </div>
        </>
    )
}

export default SingleBlog
