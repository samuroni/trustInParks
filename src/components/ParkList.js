import React from 'react'
import Park from './Park'

export default function ParkList({parks}) {
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
                    return <Park key={item.id} park={item} />;
                })}                
            </div>
        </section>
    );
}
