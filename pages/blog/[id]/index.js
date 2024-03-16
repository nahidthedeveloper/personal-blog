import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import { formattedDateTime } from '@/utils/formattedDateTime'


export async function getServerSideProps(context) {
    try {
        const blogId = context.query.id
        const blogPost = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/${blogId}/`)

        return {
            props: {
                blogPost: blogPost.data,
            },
        }
    } catch (error) {
        return {
            props: {
                blogPost: null,
            },
        }
    }
}

const SingleBlog = (props) => {
    const { blogPost } = props

    return (
        <div className="min-h-[60vh]">
            <Head>
                <title>Blog Child | Personal Blog</title>
            </Head>
            {!blogPost ? (
                <h1 className="text-center my-32">Not Found.</h1>
            ) : (
                <div className={'grid grid-cols-1 md:grid-cols-5 gap-8 my-[30px] px-8'}>
                    <div className={'col-span-1 md:col-span-5'}>
                        <div>
                            <h3 className={'text-sm font-bold text-purple-600'}> {formattedDateTime(blogPost.created_at)} </h3>
                            <h1 className={'text-4xl leading-8 font-bold my-8'}>
                                {blogPost.title}
                            </h1>

                            <div className={'h-[426px] w-full overflow-hidden mb-8'}>
                                <img
                                    src={blogPost.image}
                                    className="object-cover h-full w-full"
                                    alt="photo"
                                />
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: blogPost.description }}
                                 className={'no-tailwindcss-base'}>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SingleBlog
