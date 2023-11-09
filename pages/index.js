import Head from 'next/head'
import CardSmallHorizontal from "@/components/Card/CardSmallHorizontal";

export default function Home() {


  return (
    <>
      <Head>
        <title>Homepage | Personal Blog</title>
      </Head>
      <div>
        <div className={'min-h-[78vh] flex items-center px-8 lg:px-0'}>
          <h1 className={'text-indigo-600 uppercase font-[700] text-[50px] md:text-[76px] leading-[92px]'}>
            The Blog - <br /> Personal <br /> Blog
          </h1>
        </div>
      </div>
    </>
  )
}
