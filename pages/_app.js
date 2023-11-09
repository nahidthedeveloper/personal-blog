import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }) {



    return (
        <>
            <div className={'max-w-[1216px] w-full m-auto'}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    )
}
