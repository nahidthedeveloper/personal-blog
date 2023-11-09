import React from 'react'
import Head from 'next/head'
import CardMid from '@/components/Card/CardMid'
import CardScreenVertical from '@/components/Card/CardScreenVertical'

const Projects = () => {
    const cardData = [
        {
            image: 'https://s3-alpha-sig.figma.com/img/882d/6b0b/9bcddb2f7856979d201a4f4ad94f3c4c?Expires=1700438400&Signature=QE~Yx0EEl-1lWXGfQBz44hQiBje2ayWybGldf6giYPjURzu-bqBZVpHRADTtGwCWesQet369K7lpSZTLK4dbKbtiC2peIcXdZvPM3PG2~~hxPSAgHbnBdKq8rANO7aqSE8VOe0q3~zUXB6cQwzt6KjKN333kfPtuohizh3tobc5MINVCovWr~sUWm1YDLFpITEl-~vJKpINc0L31XeyjNQNCO9yXpehGKTU599nu~hh4Rg~hDr1ewfFdFPdUMBOmoxYAWqUOi0pFpiClXA39ad495dFgCt2-gh~0Wee~XMSQte184P0i0q5khGxFB2U1dRG5EC4zVA0CbKGTLhSCMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
            image: 'https://s3-alpha-sig.figma.com/img/e35a/7270/f92e58b4eb0c0ea38609b53ba48f3493?Expires=1700438400&Signature=gUkNxqsJIoUOkedZLGXuFgov5ZMIF3boWdRdSJo6srp5QWav8NHcipd91NIv0C3CFSoGIVgRvarTJpkbnJARGR-ow4vXSPkTkbdwh7InLzmuqmYuObiOGDJuaKMrpN6t5RrSKpj5Z~GTVGYAELUQ62s3vYJ2eWKqmwWMqZqi2dpaIcUe-3sP-TlAdTdviQbN2bAbrD6GOLoKT607UNTD6cy6qckwOui0X4Gjf0s6cBMg0vIk-iZoe28lPXXQgHoBkDq5pFwg92eXT75Sa7~18uEAxc5lxuZ4Rn7SwPFyc4ltO-~UKRcExelxNhR5IU2Fadke6tpgAzVnHAmVCFE2sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
            image: 'https://s3-alpha-sig.figma.com/img/5c65/7cff/50c641c19a28d6ecc5b9c2844a181d8e?Expires=1700438400&Signature=dswMNeiKhh34NmpEMEJeWV-5~lySiFFdBbjykiSHvB6ip-lfrIOi9tZU-M6rBsFFbwaZFtMzFIK8EJwV3cMGTBhDAAflYh77g2xFUYM5vqRzZFn5ojT8ekqudZpNfwAhZEj6GFQ92Vdyy~okI4EtS2N-uEQls9Fg4yc8ZSi7YgT5GFduJ9ZlujsERAhAfWFDU7lYaTtI~2vf9JjknWhUk1d~1JqOR9bM9qmrgtzV2iSORVoNUFUTs3I8IFApGmFGV-8SWr6yLwERzqKWvUdCSK8P5432Q3WCrjgFSSlFVApT8JMcgqxgcqcdzBA6CA28dscmgEPA9ew64ks~UoyoYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
            image: 'https://s3-alpha-sig.figma.com/img/d963/8545/0b39002fadedd2621bd9c0efab7c6c02?Expires=1700438400&Signature=D9sS08GBE4a4wbuosqVjgP01--kC8u9VaRavGe8pIhTnayOyi7msrv~B~uZi9X9Pbe85VJlvfaKnYF8jqUmR1hoLjtA8hKBieWNiDBgHlN-I2cn5e3wuyEkWwq2lG8buOUIWFeJK1rM2sgIyQmUkFy5CYOziWEle6fEH~jXs6TeEUhUDCwX8eNA~vbSp7H08gYcsMkbX8RqN2p9T5dDWjXMZqYDkG0rq147Ml~ALUt7p1YmroWGbowxDXuReBEIiBsNPG7~NOhTH4wVlZRNy3O9he154UdmnKs11ZqT6Yk7HkY5~B5QpZwCz6WYihj6gqEBsrotrNuu4-7h9relFFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
            image: 'https://s3-alpha-sig.figma.com/img/9ca4/12fa/840de131974162b09d68033e23a850b5?Expires=1700438400&Signature=ossOrKF7c1DpT2J3X8ZzySNGKhcqYxJZl~3CT05NJoobrQnDniH1QsOm715UmGQ4fTHWMgtwRTHa9z5pejaljj3Pv~qQu3fyb0S6dvFBcrbmqsihv0~8fhfI8iVowUV9Aie8TGUJNfYYGslCQbhQuI9mfBiv9J2uAgHT4WVQWXbLizQYckdh~NRuUklkDo9aox3x0unHvv8V8-hHiMp2~P-Zt1uD06mNvQknpMg3sDXEBoux79PkQJufP7o0ELZkU3oIgMzzk5Ei9GyHSmi8ql469tIqWahCC5qj3YY1p4fO~ROIulqYoOun-FTEjwiRGM4dW4oZhuafPMyanPpjqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                                <CardMid key={index} data={data} />
                              ) : (
                                <CardScreenVertical key={index} data={data} />
                              )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Projects
