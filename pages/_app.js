import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <div className={'p-4 max-w-[1216px] w-full m-auto'}>
            <ThemeProvider attribute="class" defaultTheme="system">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </div>
    )
}
