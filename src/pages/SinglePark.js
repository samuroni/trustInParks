import React, { Component } from 'react'
import defaultBcg from '../images/parks-page-main.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {ParkContext} from '../context'
import StyledHero from '../components/StyledHero'


export default class SinglePark extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
        }
    }

    static contextType = ParkContext;

    componentDidMount(){

    }

    render() {
        const {getPark} = this.context;
        const park = getPark(this.state.slug);
        
        if(!park){
            return <div className='error'>
                <div className='error-message'>
                    <h3>No such park could be found.</h3>
                    <Link to='/parks' className='btn-primary'>
                        back to parks
                    </Link>
                </div>
            </div>
        } 

        const {name, description, capacity, size, price, extras, foodAndDrink,pets, images} = park

        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/parks' className='btn-primary'>
                            back to parks
                        </Link>
                    </Banner>
                </StyledHero>
                <section className='single-park'>
                    <div className='single-park-images'>
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className='single-park-info'>
                        <article className='desc'>
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>info</h3>
                            <h6>car park price: £{price}/hour</h6>
                            <h6>{foodAndDrink && 'bar/restaurants/pubs available'} </h6>
                            <h6>{pets? 'pets allowed': 'pets not allowed'}</h6>                            
                        </article>
                    </div>
                </section>
                <section className='park-extras'>
                    <h6>extras</h6>
                    <ul className='extras'>
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
