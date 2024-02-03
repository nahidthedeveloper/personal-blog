import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class SpecialDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className='bg-white text-black dark:bg-gray-900 dark:text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default SpecialDocument
