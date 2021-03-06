import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import ParkContainer from '../components/ParkContainer'


export default function Parks() {
    return (
        <>
        <Hero hero= "parksHero">
            <Banner title="Our Parks">
                <Link to="./" className="btn-primary">Back to Home</Link>
            </Banner>
        </Hero>

        <ParkContainer />
        </>
    )
}


