import React, { Component } from 'react'
import {ParkContext} from '../context'
import Loading from './Loading'
import Park from './Park'
import Title from './Title'

export default class FeaturedParks extends Component {
    static contextType = ParkContext
    render() {
        let {loading, featuredParks : parks} = this.context;
        parks = parks.map(park => {
            return <Park key={park.id} park={park}/>
        } )
        return (
            <section className='featured-parks'>
                <Title title='featured parks'/>
                <div className='featured-parks-center'>
                    {loading ? <Loading /> : parks}
                </div>
            </section>
        )
    }
}