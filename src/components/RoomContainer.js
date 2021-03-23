import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, parks} = context;
        if(loading){
            return <Loading />
        }
        return <>
            <RoomFilter parks={parks} />
            <RoomList parks={sortedRooms}/>
        </>
}

export default withRoomConsumer(RoomContainer);





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
