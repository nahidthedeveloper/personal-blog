import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }) {



    return (
        <>
            <div className={'px-5 lg:px-[212px]'}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    )
}
