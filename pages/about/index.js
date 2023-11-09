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
        { title: '5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries' },
        { title: 'Led the design of a successful e-commerce website, resulting in a 25% increase in online sales' },
        {
            title: 'Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage',
        },
        { title: 'Conducted user research and usability testing to inform the redesign of a healthcare provider\'s website, resulting in a 15% increase in website traffic' },
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
                    className={
                        'mt-10 text-[72px] text-center font-bold border-y-2 border-black border-opacity-20 mb-7 md:text-[150.8px] lg:text-[224px] dark:border-white'
                    }
                >
                    John Doe
                </h1>

                <div className={'px-8 lg:px-0'}>
                    <div className={'mt-16 overflow-hidden'}>
                        <img
                          src={
                              'https://s3-alpha-sig.figma.com/img/5caa/9ba9/83f505b4aaa7b5be1a87f9ca43a8e9f9?Expires=1700438400&Signature=U6832RZhLvuGhFtHr7dGm5t37IZ8CLmr1FfjsmzBJ6hJbKckCFlC0n9cxECAyLl5o8ObenVcvFDA8H~HX8gZyIRYTJUCBfWaiJ1GK39b2XxU6BZkY5tMg1exkWtFFGcJOIriTqrMwUDFRWcB8TZtrk2bWLD2ECawCuf1qY~eUKJ5Ie7Smh~VJVzeRM5SgLMB6~7MPvJGE7~uJ1VVcQPAzs~awtvAGXv0OzmD0yMjtcOY1AmeLJIHAf2LE6RYmoc0K4cJX3985JqPv4HjwCgyTfxUqZdBM8mm6xt4GZlJMtDSHxGE3ezqgI2Bn-dwHKg-d~xQBQZPlAXEz~PP-cDBmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                          }
                          alt={'image'}
                          className={'h-[300px] md:h-[556px] w-full object-cover'}
                        />
                    </div>

                    <section>
                        <div>
                            <h1 className={'text-2xl mt-10 mb-4 font-bold dark:text-white'}>About Me</h1>
                            <p className={'leading-6'}>
                                As a passionate and experienced UI designer, I am dedicated to creating intuitive and
                                engaging user experiences that meet the needs of my clients and their users. I have a strong
                                understanding of design principles and a proficiency in design tools, and I am comfortable
                                working with cross-functional teams to bring projects to fruition. I am confident in my
                                ability to create designs that are both visually appealing and functional, and I am always
                                looking for new challenges and opportunities to grow as a designer.
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
