import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CardSmallVertical from '@/components/Card/CardSmallVertical'
import CardMid from "@/components/Card/CardMid";
import CardSmallHorizontal from "@/components/Card/CardSmallHorizontal";

const Newsletter = () => {
    const cardData = [
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: 'Sunday , 1 Jan 2023',
            title: 'Bill Walsh leadership lessons',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            one: 'Leadership',
            two: 'Management',
            three: 'Presentation',
        },
        {
            image: 'https://knotch.com/contenteq/wp-content/uploads/sites/3/2023/03/Image-8.png',
            date: 'Sunday , 2 Jan 2023',
            link: '#',
            title: 'PM mental models',
            description: 'Mental models are simple expressions of complex processes or relationships.',
            one: 'Product',
            two: 'Research',
            three: 'Frameworks',
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: 'Monday , 3 Jan 2023',
            title: 'What is Wireframing?',
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            one: 'Design',
            two: 'Research',
            three: 'Presentation',
        },
    ]

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
                                    type='email'
                                    placeholder='Enter your email'
                                />
                                <button
                                    className='bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline'
                                    type='button'
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
                        {cardData.map((date, index) => (
                          <CardSmallVertical key={index} data={date} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Newsletter
