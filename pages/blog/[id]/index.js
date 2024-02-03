import React from 'react'
import Head from 'next/head'
import CardSmallVertical from '@/components/Card/CardSmallVertical'
import Link from 'next/link'

const SingleBlog = () => {
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
            three: '',
        },
        {
            image: 'https://intellipaat.com/blog/wp-content/uploads/2023/05/What-is-a-Wireframe-800x270.png',
            date: 'Monday , 3 Jan 2023',
            title: 'What is Wireframing?',
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            one: 'Design',
            two: 'Research',
            three: '',
        },
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
            three: '',
        },
        {
            image: 'https://intellipaat.com/blog/wp-content/uploads/2023/05/What-is-a-Wireframe-800x270.png',
            date: 'Monday , 3 Jan 2023',
            title: 'What is Wireframing?',
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            one: 'Design',
            two: 'Research',
            three: '',
        },
    ]

    return (
        <>
            <Head>
                <title>Blog Child | Personal Blog</title>
            </Head>
            <div className={'grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 my-[30px] px-8'}>
                <div className={'grid col-span-1 md:col-span-2 lg:col-span-1 gap-8'}>
                    <h2 className={'font-bold text-2xl'}>Recent blog posts</h2>
                    {cardData.map((data, index) => (
                        <CardSmallVertical key={index} data={data} />
                    ))}
                </div>
                <div className={'col-span-1 md:col-span-3 lg:col-span-2'}>
                    <div>
                        <h3 className={'text-sm font-bold text-purple-600'}> Sunday , 1 Jan 2023 </h3>
                        <h1 className={'text-4xl leading-8 font-bold my-8'}>
                            Grid system for better Design User Interface
                        </h1>

                        <div className={'h-[426px] overflow-hidden mb-8'}>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/f074/6a8e/91047747031d3bda636eac41f4235b6d?Expires=1700438400&Signature=qIZKEwCwtAQ3WK9MF5zTFz0AlZqu8eL6MBOsch6rurW0uFBQx7YFD6kOj5qtqmGy~OI6xd9LGijCQ8huHcNu2lfU-5e53-fwxpiZI3wxkBTqgtd~tBMe3WauhEG6Y2DwEamzCIBdrxxOd~4W~AejhttE5Jfe4bv~EwR5WBrosIqScLEYfM86ndJhCzvoYDEBrEhCPpwoyg83hsTtnr1LQ9gr3BO~Dz5mhpaNPtBr0IiyceOgsGUz~zMfdFcBK~0QtQo~q9yjP3o5-IKlcxud0Q2BvTP2LbtaspOSPWnEM--rVfWHauqvqVtz-7zRYusfdUmwb-all5M4qQp2yGcrzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                alt="photo"
                            />
                        </div>

                        <p className={'text-base'}>
                            A grid system is a design tool used to arrange content on a webpage. It is a series of
                            vertical and horizontal lines that create a matrix of intersecting points, which can be used
                            to align and organize page elements. Grid systems are used to create a consistent look and
                            feel across a website, and can help to make the layout more visually appealing and easier to
                            navigate.
                        </p>
                        <p className={'text-base my-3'}>
                            If you’ve been to New York City and have walked the streets, it is easy to figure out how to
                            get from one place to another because of the grid system that the city is built on. Just as
                            the predictability of a city grid helps locals and tourists get around easily, so do webpage
                            grids provide a structure that guides users and designers alike. Because of their consistent
                            reference point, grids improve page readability and scannability and allow people to quickly
                            get where they need to go.
                        </p>
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
                                    and
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
                                        <Link href={''}
                                              className={'border-b border-b-black dark:border-b-white pb-0.5'}>
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
