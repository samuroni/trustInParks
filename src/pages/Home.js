import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedParks from '../components/FeaturedParks'

export default function Home() {
    return (
        <>
            <Hero> 
                <Banner title="Discover your parks" subtitle="visit all the parks around you">
                    <Link to="./parks" className="btn-primary">see parks</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedParks/>
        </>
    )
}

