import React from 'react'
import Head from 'next/head'
import CardVerticalTwo from '@/components/Card/CardVerticalTwo'
import CardVerticalThree from '@/components/Card/CardVerticalThree'

const Projects = () => {
    const cardData = [
        {
            image: 'https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=2048x2048&w=is&k=20&c=f2BOEDlrq_Z90_MAqN0iFt7c6ilF2ci4bSSwaM-JpcU=',
            date: '',
            link: '#',
            title: 'User Experience Design Dashboard Hotel Management',
            description:
                'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.',
            one: 'Design',
            two: 'Research',
            three: 'Presentation',
        },
        {
            image: 'https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=2048x2048&w=is&k=20&c=f2BOEDlrq_Z90_MAqN0iFt7c6ilF2ci4bSSwaM-JpcU=',
            date: '',
            link: '#',
            title: 'Bring of User Experience Design to Policy Making, How to Impact Society',
            description:
                'User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec',
            one: '',
            two: 'Research',
            three: 'Presentation',
        },
        {
            image: 'https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=2048x2048&w=is&k=20&c=f2BOEDlrq_Z90_MAqN0iFt7c6ilF2ci4bSSwaM-JpcU=',
            date: '',
            link: '#',
            title: 'UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons',
            description:
                'There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems',
            one: 'Design',
            two: 'Research',
            three: 'Presentation',
            four: 'Collaboration',
        },
        {
            image: 'https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=2048x2048&w=is&k=20&c=f2BOEDlrq_Z90_MAqN0iFt7c6ilF2ci4bSSwaM-JpcU=',
            date: '',
            link: '#',
            title: 'Icon Package of Slin Icon',
            description:
                'An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.',
            one: 'Design',
            two: 'Branding',
            three: 'Identity',
        },
        {
            image: 'https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=2048x2048&w=is&k=20&c=f2BOEDlrq_Z90_MAqN0iFt7c6ilF2ci4bSSwaM-JpcU=',
            date: '',
            link: '#',
            title: 'UX review presentations',
            description:
                'How do you create compelling presentations that wow your colleagues and impress your managers? ',
            one: 'Design',
            two: 'Research',
            three: 'Presentation',
        },
    ]

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
                <div className={'px-8 lg:px-0'}>
                    <section className={'my-12'}>
                        <h2 className={'font-bold text-2xl mb-8'}>List Project</h2>
                        <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                            {cardData.map((data, index) =>
                                index !== 2 ? (
                                    <CardVerticalTwo key={index} data={data} />
                                ) : (
                                    <div className="col-span-1 md:col-span-2">
                                        <CardVerticalThree key={index} data={data} />
                                    </div>
                                ),
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Projects
