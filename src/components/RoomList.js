import React from 'react'
import Room from './Room'

export default function RoomList({parks}) {
    if(parks.length === 0){
        return (
        <div className='empty-search'>
            <h3>no parks matched your search parameters</h3>
        </div>
        );    
    }
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {parks.map(item => {
                    return <Room key={item.id} room={item} />;
                })}                
            </div>
        </section>
    );
}
