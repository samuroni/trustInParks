import React from 'react'
import {useContext} from 'react'
import {ParkContext} from '../context'
import Title from './Title'

// get all unique values

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};



export default function ParkFilter({parks}) {
const context = useContext(ParkContext);
const {
    handleChange,
    type,
    capacity,
    price,
    size,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    foodAndDrink,
    pets
} = context;

// get unique types

let types = getUnique(parks, 'type');
// let capacities = getUnique(rooms, 'capacity');

// add all type

types = ['all', ...types];

// map to jsx

types = types.map((item, index) =>{
    return <option value={item} key={index}>{item}</option>
});

let people = getUnique(parks, 'capacity');
people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
})

    return (
        <section className='filter-container'>
            <Title title='search parks' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>park type</label>
                    <select 
                        name='type' 
                        id='type' 
                        value={type} 
                        className='form-control' 
                        onChange={handleChange}
                    >
                    {types}
                    </select>
                </div>
                {/* end of select type */}
                 {/* guests */}
                 {/* <div className='form-group'>
                    <label htmlFor='capacity'>guests</label>
                    <select 
                        name='capacity' 
                        id='capacity' 
                        value={capacity} 
                        className='form-control' 
                        onChange={handleChange}
                    >
                    {people}
                    </select>
                </div> */}
                {/* end of guests */}
                {/* price range */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        car park price ${price}
                    </label>
                    <input 
                        type='range' 
                        name='price' 
                        min={minPrice} 
                        max={maxPrice} 
                        id='price'
                        value={price}
                        onChange={handleChange}
                        className='form-control' 
                    />
                </div>
                {/* end of price range */}
                {/* room size */}
                {/* <div className='form-group'>
                    <label htmlFor='size'>
                        park size
                    </label>
                    <div className='size-inputs'>
                        <input 
                            type='number' 
                            name='minSize' 
                            id='size' 
                            value={minSize} 
                            onChange={handleChange} 
                            className='size-input'>
                        </input>
                        <input 
                            type='number' 
                            name='maxSize' 
                            id='size' 
                            value={maxSize} 
                            onChange={handleChange} 
                            className='size-input'>
                        </input>
                    </div>
                </div> */}
                {/* end of room size */}
                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='foodAndDrink' id='foodAndDrink' checked={foodAndDrink} onChange={handleChange}></input>
                        <label htmlFor='foodAndDrink'>
                        food facilities
                        </label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}></input>
                        <label htmlFor='pets'>
                            pets
                        </label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
