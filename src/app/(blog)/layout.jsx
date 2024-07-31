import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

function BlogLayout({ children }) {
    return (
        <>
            <Header />
            <section>{children}</section>
            <Footer />
        </>
    )
}

export default BlogLayout