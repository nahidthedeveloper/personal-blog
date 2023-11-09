import React from "react";
import Pagination from '@/components/Pagination/Pagination'
import Head from 'next/head'
import Masonry from 'react-masonry-css'
import CardSmallHorizontal from '@/components/Card/CardSmallHorizontal'
import CardSmallVertical from '@/components/Card/CardSmallVertical'
import CardScreenHorizontal from '@/components/Card/CardScreenHorizontal'

const Blogs = () => {
    const cardData = [
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: '',
            title: 'User Experience Design Dashboard Hotel Management',
            description:
                'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.',
            one: 'Design',
            two: 'Research',
            three: 'Presentation',
        },
        {
            image: 'https://knotch.com/contenteq/wp-content/uploads/sites/3/2023/03/Image-8.png',
            date: '',
            title: 'Bring of User Experience Design to Policy Making, How to Impact Society',
            description:
                'User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec',
            one: '',
            two: 'Research',
            three: 'Presentation',
        },
        {
            image: 'https://intellipaat.com/blog/wp-content/uploads/2023/05/What-is-a-Wireframe-800x270.png',
            date: '',
            link: '#',
            title: 'UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons',
            description:
                'There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems',
            one: 'Design',
            two: 'Research',
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: '',
            title: 'Icon Package of Slin Icon',
            description:
                'An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.',
            one: 'Design',
            two: 'Branding',
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: '',
            title: 'UX review presentations',
            description:
                'How do you create compelling presentations that wow your colleagues and impress your managers?',
            one: 'Design',
            two: 'Research',
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:1358/1*gXgR2uZK6UKpG72tYKXsMw.jpeg',
            date: '',
            title: 'UX review presentations',
            description:
                'How do you create compelling presentations that wow your colleagues and impress your managers?',
            one: 'Design',
            two: 'Research',
        },
    ]


    return (
        <>
            <Head>
                <title>Blog | Personal Blog</title>
            </Head>

            <div>
                <h1
                    className={
                        'mt-10 text-[72px] md:text-[160.8px] lg:text-[243px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 dark:border-white'
                    }
                >
                    THE BLOG
                </h1>

                <div className={'px-8 lg:px-0'}>
                    <section className={'my-12'}>
                        <h2 className={'font-bold text-2xl mb-8'}>Recent blog posts</h2>
                        {/*<Masonry*/}
                        {/*    breakpointCols={{*/}
                        {/*        700: 2,*/}
                        {/*        500: 1,*/}
                        {/*    }}*/}
                        {/*    className='my-masonry-grid'*/}
                        {/*    columnClassName='my-masonry-grid_column'*/}
                        {/*>*/}

                            <div className={'grid md:grid-cols-2 gap-8'}>
                                {cardData.map((el, index) => {
                                    const arrMod = index % 6
                                    if (arrMod === 0) {
                                        return (
                                          <>
                                              <CardSmallVertical key={index} data={el} />
                                          </>
                                        )
                                    } else if (arrMod === 1) {
                                        return (
                                          <>
                                            <div className={'grid gap-8 md:col-span-2 lg:col-span-1'}>
                                                <CardSmallHorizontal key={index} data={el} />
                                                <CardSmallHorizontal key={index} data={el} />
                                            </div>
                                          </>
                                        )
                                    } else if (arrMod === 2) {
                                        return (
                                          <>
                                              <CardScreenHorizontal key={index} data={el} />
                                          </>
                                        )
                                    }
                                })}
                            </div>
                        {/*</Masonry>*/}
                    </section>

                    <section className={'my-12'}>
                        <h2 className={'font-bold text-2xl my-16'}>All blog posts</h2>
                        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
                            {cardData.map((data, index) => (
                                <CardSmallVertical key={index} data={data} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <Pagination />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Blogs
