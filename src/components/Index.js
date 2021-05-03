import React from 'react'
import Features from './index/Features/Features'
import Footer from './index/Footer/Footer'
import GetStarted from './index/GetStarted/GetStarted'
import Hero from './index/Hero/Hero'
import Services from './index/Services/Services'
import Nav from './Nav/Nav'

export default function Index() {
    return (
        <div>
            <Nav />
            <Hero />
            <Services />
            <Features />
            <GetStarted />
            <Footer />
        </div>
    )
}
