import React,{useEffect} from "react";
import TopDish from "../components/topdish"
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Home = () =>{
    const{setPage} = useGlobalContext()
    useEffect(()=>{
        setPage("home")
    },[])
    return(
        <div id = "homepage">
            <div id = "homeTop">
                {/* <img src = {HawkerCentreBG} id = "welcomeImg"></img> */}
                <div id = "topContainer">
                <h2>Welcome! We keep SG's Hawker Culture alive!</h2>
                <a href = "#about"><button id = "toAbout">About us:</button></a>

                </div>

            </div>
            <div id = "topdish">

                <TopDish/>
                <div className = "moreDish"> 
                    <h1>
                        Check out more dishes <Link to ="/hawker-merce-1/menu">here</Link>!
                    </h1>
                </div>


            </div>
            <div id = "about">
                <div id = "aboutTop">
                    <div id = "abouttopContainer">
                    <h3>What is Hawker-Merce?</h3>
                    <p>We are an e-commerce platform which allows Hawker Food to be delivered to your doorstep!</p>
                    </div>


                </div>
  
                <div id = "mission">
                    <div id = "missionContainer">
                    <h2>Our mission:</h2>
                <p>We aim to keep the Hawker Culture in Singapore alive!</p>

                    </div>

                </div>

            </div>
            

        </div>
    )
}
export default Home;