import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className = 'loading'>
            <h4>Parks data loading...</h4>
            <img src = {loadingGif} alt= ''></img>
        </div>
    )
}
