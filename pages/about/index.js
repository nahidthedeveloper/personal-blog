import React from 'react'
import Head from 'next/head'

const About = () => {
    const skill = [
        { title: 'Extensive experience in UI design, with a strong portfolio of completed projects' },
        { title: 'Proficiency in design tools such as Adobe Creative Suite and Sketch' },
        {
            title: 'Excellent visual design skills, with a strong understanding of layout, color theory, and typography',
        },
        { title: 'Ability to create wireframes and prototypes to communicate design concepts' },
        {
            title: 'Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams',
        },
        { title: 'Experience conducting user research and gathering insights to inform design decisions' },
        { title: 'Proficiency in HTML, CSS, and JavaScript' },
    ]

    const experience = [
        {
            title: '5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries',
        },
        { title: 'Led the design of a successful e-commerce website, resulting in a 25% increase in online sales' },
        {
            title: 'Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage',
        },
        {
            title: 'Conducted user research and usability testing to inform the redesign of a healthcare provider\'s website, resulting in a 15% increase in website traffic',
        },
    ]

    const education = [
        { title: 'Bachelor\'s degree in Graphic Design' },
        { title: 'Certified User Experience Designer (CUED)' },
    ]

    return (
        <>
            <Head>
                <title>About | Personal Blog</title>
            </Head>

            <div>
                <h1
                    className="mt-10 text-[72px] md:text-[150.8px] lg:text-[224px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 dark:border-white"
                >
                    Nahid
                </h1>

                <div className={'px-8 lg:px-0'}>
                    <div className={'mt-16 overflow-hidden'}>
                        <img
                            src="https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/362301815_1395788694315125_1512437240239899153_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeGEwBOaGVBWg64qvAua3iN7SbgEqEZJqHZJuASoRkmodmGFVPfL9jhFQlhV1jk4ky-uc5vDGZfjYX7A8Inoi2fT&_nc_ohc=a57Vh4p5WH4AX-A6QpC&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfB8lAY-9v1_EybgiVgxd-NOkIe5qJVwrA2ujhOlHIHOGw&oe=65C438D0"
                            alt={'image'}
                            className={'h-[300px] md:h-[556px] w-full object-cover'}
                        />
                    </div>

                    <section>
                        <div>
                            <h1 className={'text-2xl mt-10 mb-4 font-bold dark:text-white'}>About Me</h1>
                            <p className={'leading-6'}>
                                As a passionate and experienced UI designer, I am dedicated to creating intuitive and
                                engaging user experiences that meet the needs of my clients and their users. I have a
                                strong understanding of design principles and a proficiency in design tools, and I am
                                comfortable working with cross-functional teams to bring projects to fruition. I am
                                confident in my ability to create designs that are both visually appealing and
                                functional, and I am always looking for new challenges and opportunities to grow as a
                                designer.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h1 className={'text-2xl mt-10 mb-4 leading-6 font-bold dark:text-white'}>Skills:</h1>
                            <ul className={'leading-6 list-disc ml-4'}>
                                {skill.map(({ title }, index) => (
                                    <li key={index}>{title}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h1 className={'text-2xl mt-10 mb-4 leading-6 font-bold dark:text-white'}>Experience:</h1>
                            <ul className={'leading-6 list-disc ml-4'}>
                                {experience.map(({ title }, index) => (
                                    <li key={index}>{title}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h1 className={'text-2xl mt-10 mb-4 leading-6 font-bold dark:text-white'}>Experience:</h1>
                            <ul className={'leading-6 list-disc ml-4'}>
                                {education.map(({ title }, index) => (
                                    <li key={index}>{title}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About
