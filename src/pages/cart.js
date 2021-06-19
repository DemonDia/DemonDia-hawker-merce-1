import React, {useEffect} from "react"
import { useGlobalContext } from "../context";
import Empty from "../components/empty"
import CartItem from "../components/cartitem";
import { Link } from "react-router-dom";

const Cart = () =>{
    const{cart,setPage,totalCost,setCart} = useGlobalContext()
    // const {setPage} = useGlobalContext()
    useEffect(()=>{
        setPage("cart")

    },[])

    const emptyCart = ()=>{
        setCart([])
    }




    
    return(
        <div className = {cart.length===0 ? 'emptyCart' : "cart"} 
        style ={{minHeight: document.getElementById("navz")?`calc(100vh - ${document.getElementById("navz").clientHeight}px)`:"600px" }} 
        >
            {
                cart.length>0?
                <>
                <h2>Cart</h2>
                <table className = "cartTable">
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
            <div className = "cartBtnContainer">
            <Link to = "/hawker-merce-1/menu" id = "cartBackBtn">Back</Link>
            <Link to = "/hawker-merce-1/cart" id = "emptyButton" onClick = {emptyCart}>Empty Cart</Link>
            <Link to = "/hawker-merce-1/checkout" id = "checkoutBtn">Checkout</Link>

            </div>
            </>
            : <Empty/>




            }

        </div>
    )
} 

export default Cart;