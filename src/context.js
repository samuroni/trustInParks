import React, { Component } from 'react'
// import items from './data' dati locali sostituiti da contentful
import Client from './Contentful'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        parks:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        foodAndDrink:false,
        pets:false
    };

    //getData

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'parks'
                // order: 'fields.price'
            });
            let parks = this.formatData(response.items);
            let featuredRooms = parks.filter(park => park.featured === true);
            let maxPrice = Math.max(...parks.map(item => item.price));
            let maxSize = Math.max(...parks.map(item => item.size));
        
            this.setState({
                parks, 
                featuredRooms, 
                sortedRooms:parks, 
                loading:false,
                maxSize,
                price: maxPrice,
                maxPrice
            });


        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.getData();
    };

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, images, id}  
            return room;
        })
        return tempItems;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.parks];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        
        this.setState({
            [name]:value
        }, this.filterRooms);
        
    }

    filterRooms = () => {
        let {
            parks,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            foodAndDrink,
            pets
        } = this.state;
// all the rooms
        let tempRooms= [...parks];
// transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

// filter by type
        if (type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }
// filter by capacity

        // if(capacity !== 1){
        //     tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        // }
// filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
// filter by size
        // tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
// filter by foodAndDrink
        if(foodAndDrink){
            tempRooms = tempRooms.filter(room => room.foodAndDrink === true)
        };
// filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        };
// change state
        this.setState({
            sortedRooms:tempRooms
        })
    }


    render() {
        return (
            <RoomContext.Provider value= {{
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>} 
        </RoomConsumer>
    }
} 

export {RoomProvider, RoomConsumer, RoomContext}