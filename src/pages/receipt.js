import React, {useState,useEffect} from "react";
import { useGlobalContext } from "../context"; 
import CartItem from "../components/cartitem";
import { Link } from "react-router-dom";
import Empty from "../components/empty";
const Receipt = () =>{
    const {totalCost,setPage,cart,setCart,setTotalCost} = useGlobalContext()
    setPage("receipt")
    // for purchasing date
    let purchaseDate = new Date();
    purchaseDate = purchaseDate.getFullYear() + "-" + ('0' + (purchaseDate.getMonth() + 1)).slice(-2) + "-" + ('0' + purchaseDate.getDate()).slice(-2) + " " + ('0' + purchaseDate.getHours()).slice(-2) + ":" + ('0' + purchaseDate.getMinutes()).slice(-2) + ":" + ('0' + purchaseDate.getSeconds()).slice(-2);
    const [receiptCart,setReceiptCart] = useState([])
    const [receiptCost,setReceiptCost] = useState(0)
    useEffect(()=>{
        setReceiptCart(cart)
        setReceiptCost(totalCost)
        setCart([])
        setTotalCost(0)
    },[])
console.log("receiptCart",receiptCart)
    return(
        
        <div id = "receipt">
            {
                receiptCart.length === 0?<Empty/>:
                <>



<h2>Receipt</h2>
                            <table className = "receiptTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                                {
                        receiptCart.map((item)=>{
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
                            ${receiptCost}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4>
                    Ordered at: {purchaseDate}
                </h4>
                <h4>
                    Thank you for your purchase! We look forward in seeing you again!
                </h4>
                <Link to = "/hawker-merce-a/">Order again!</Link>



                
                </>
            }

        </div>
    )

}
export default Receipt