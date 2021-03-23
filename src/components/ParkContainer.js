import React from 'react'
import ParkFilter from './ParkFilter'
import ParkList from './ParkList'
import {withParkConsumer} from '../context'
import Loading from './Loading'

function ParkContainer({context}){
    const {loading, sortedParks, parks} = context;
        if(loading){
            return <Loading />
        }
        return <>
            <ParkFilter parks={parks} />
            <ParkList parks={sortedParks}/>
        </>
}

export default withParkConsumer(ParkContainer);





// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <>
//         <RoomConsumer>
//             {
//                 (value) =>{
//                     const {loading, sortedRooms, rooms} = value;
//                     if(loading){
//                         return <Loading />
//                     }
//                     return <div>
//                         hello from rooms container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                 }
//             }
//         </RoomConsumer>
        
//         </>
//     )
// }
