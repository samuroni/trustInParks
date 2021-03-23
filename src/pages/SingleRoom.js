import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'


export default class SingleRoom extends Component {
    
    constructor(props){
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
        }
    }

    static contextType = RoomContext;

    componentDidMount(){

    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        
        if(!room){
            return <div className='error'>
                <div className='error-message'>
                    <h3>No such park could be found.</h3>
                    <Link to='/parks' className='btn-primary'>
                        back to parks
                    </Link>
                </div>
            </div>
        } 

        const {name, description, capacity, size, price, extras, foodAndDrink,pets, images} = room

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
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className='single-room-info'>
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
                <section className='room-extras'>
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
