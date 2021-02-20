import React, { useState } from 'react'
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import {Link} from "react-router-dom"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleToggle () {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                         <Link to="/">
                             <img src={logo} alt="Beach Resort"></img>
                         </Link>
                        <button type="button" className="nav-btn" onClick={handleToggle}>
                             <FaAlignRight className="nav-icon" />                         
                        </button>
                    </div>
                    <ul className={isOpen? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;




// export default class Navbar extends Component {

//         isOpen: false
//     }
//     handleToggle = () =>{
//         this.setState({isOpen:!this.state.isOpen})
//         console.log(this.state.isOpen)
//     }

//     render() {
//         return (
//             <nav className="navbar">
//                 <div className="nav-center">
//                     <div className="nav-header">
//                         <Link to="/">
//                             <img src={logo} alt="Beach Resort"></img>
//                         </Link>
//                         <button type="button" className="nav-btn" onClick={this.handleToggle}>
//                             <FaAlignRight className="nav-icon" />
//                         </button>
//                     </div>
//                     <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/rooms">Rooms</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }


