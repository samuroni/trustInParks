import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default function Park({park}) {
    const {name, slug, images, price} = park;
    return (
        <article className='room'>
            <div className='img-container'>
                <img src = {images[0] || defaultImg} alt ='single room'/>
                <div className='price-top'>
                    <p>car park</p>
                    <h6>£ {price}</h6>
                    <p>per hour</p>
                </div>
                <Link to={`/parks/${slug}`} className='btn-primary room-link'>discover</Link>
            </div>
            <p className= 'room-info'>{name}</p>
        </article>
    )
}

Park.propTypes = {
    park:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}