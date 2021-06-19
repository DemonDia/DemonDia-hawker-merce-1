import { useGlobalContext } from "../context";
import React,{useState,useEffect} from "react";
import Empty from "../components/empty"

import CartItem from "../components/cartitem";
import { Link } from "react-router-dom";

import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Checkout = () =>{
const {totalCost,setPage,cart,page,
     creditCardNo,setCreditCardNo,
    phoneNo,setPhoneNo} = useGlobalContext()
const [orderType,setOrderType] =  useState("delivery") //pickup or delivery
const [paymentType,setPaymentType] =  useState("credit") //cash or credit
const [valid,setValid] = useState(false)
const [lat,setLat] = useState(1.3329) //latitude
const [long,setLong] = useState(103.7436) //longtitude
const [zoom,setZoom] = useState(13)

useEffect(()=>{
    setPage("checkout")
    navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    })




    
},[])

useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    })
},[lat,long])





useEffect(()=>{
    console.log(typeof(creditCardNo))
    if ((parseInt(creditCardNo))&&(parseInt(phoneNo)) &&paymentType==="credit"){
        if((creditCardNo.toString().length ===16)&&(phoneNo.toString().length ===8)){
            setValid(true)
        }
        else{
            setValid(false)
        }
  
      }
      else{
        setValid(false)
      }
      console.log(valid)


},[creditCardNo,phoneNo])




// console.log(page)
// console.log(cart)
return(

    <div>
        {cart.length===0? <Empty/>:
        <div className = "checkout">
            <div> 
                <h3>Checkout</h3>
                <table className = "checkoutTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                                {
                        cart.map((item)=>{
                                return(
                                    <CartItem key = {item.itemId} item = {item}></CartItem>
                                )
                            })
                        }
                        <tr>
                            <th colSpan = "2">
                                Total Cost:
                            </th>
                            <td>
                            ${totalCost}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className = "paymentContainer">
                    <label>Payment mode: </label>
                    <select onChange ={(e)=>{setPaymentType(e.target.value)}} defaultValue ="credit">
                        <option value = "credit">Credit Card</option>
                        <option value = "cash">Cash</option>
                    </select>
                    {/* <br/>  */}
                    {
                    
                        paymentType==="credit"?<>
                        <br></br>
                        <label>Credit card number:</label><input 
                        onChange = {(e)=>{setCreditCardNo(e.target.value)} }
                        type = "numeric"  maxLength="16" placeholder = "xxxx/xxxx/xxxx/xxxx"/></>:null
                    }
                    <br/>
                    <label>Order Type: </label>
                    <select onChange ={(e)=>{setOrderType(e.target.value)}} defaultValue ="delivery">
                        <option value = "delivery">Delivery</option>
                        <option value = "pickup">Self-pickup</option>
                    </select><br></br>
                    <label>Phone number:</label><input
                    onChange = {  (e) =>{ setPhoneNo(e.target.value)}}
                    type ="numeric" id ="phoneNo" placeholder = "+65/xxxx/xxxx" maxLength="8"></input>
                    {
                        orderType ==="delivery"?<>
                        <div id = "mapContainer">

<MapContainer center={[lat, long]} zoom={zoom} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker 
  position={[lat, long]}
  
  >

  </Marker>
</MapContainer>


                            

                        </div>
                        </>:null
                    }

                </div>

            </div>
            <div className = "checkoutBtnContainer">
            <Link to ="/hawker-merce-1/cart" id = "backButton">Back</Link>
            {
                valid?<Link to ="/hawker-merce-1/receipt">Place Order</Link>:<Link to ="/hawker-merce-1/checkout">Place Order</Link>
            }

            </div>

        </div>
        }
    </div>
)
}

export default Checkout