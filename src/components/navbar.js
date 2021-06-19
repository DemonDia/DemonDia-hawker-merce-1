import React, {useState, useRef,useEffect} from "react"
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import logo from '../images/logo.png'; // with import
import { useGlobalContext } from "../context"; 

const Navbar = () =>{
    const {cart} = useGlobalContext()
    const [showLinks,setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
        
    useEffect(()=>{//callback
        //check link height and then change height
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }
        else{
            linksContainerRef.current.style.height = "0px"
        }

    },[showLinks])
    return(
        <>
        <nav id = "navz">
            <div className = "nav-center">
                <div className = "nav-header">
                    <button className = "nav-toggle" onClick = {()=> setShowLinks(!showLinks)}>
                        <FaBars/>
                    </button>
                    <Link to ="/">
                        <img src = {logo} id = "logo"/>
                    </Link>
                    


                </div>
                {/* {search} */}
                

                <div 
                    className = "links-container"
                    ref = {linksContainerRef}
                    >
                    <ul 
                    className = "links"
                    
                    ref = {linksRef}>


                        <li>
                            <Link to = "/#homeTop">Home</Link>
                        </li>
                        <li>
                            <Link to = "/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to = "/cart">Cart ({cart.length})</Link> 
                        </li>
                        {/* <li>
                            <Link to = "/checkout">Checkout</Link>
                        </li> */}


                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    )

}
export default Navbar