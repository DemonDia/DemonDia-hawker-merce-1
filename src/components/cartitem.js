import React, {useState,useEffect} from "react";
import { useGlobalContext } from "../context"; 
import { HiMinus,HiPlus } from "react-icons/hi";
const CartItem = (item) =>{


    const{cart,setCart,page,setTotalCost} = useGlobalContext()
    const [qty,setQty] = useState(item.item.qty)
    // console.log(item.item)
    

    
    const dec = () =>{
        if(qty>1){
            setQty(qty-1)
        }
        else{
            setCart(cart.filter(cartItem =>cartItem.itemId !== item.item.itemId).map((cartItem)=>{
                return cartItem}
            )
            )
            
        }
    }
    const inc = () =>{
        setQty(qty+1)
    }
    


    useEffect(()=>{
        setCart(cart.map((cartItem)=>{
            if(cartItem.itemId ===  item.item.itemId){
                return {...cartItem,qty:qty }
            }
            return cartItem
        }
        )
        )
    },[qty])


    useEffect(()=>{
        let totalArr = 
            cart.map((cartItem)=>{
                return parseFloat(cartItem.price * cartItem.qty)
            })
        
        let total = 0
        totalArr.map((item)=>{total+=parseFloat(item)}) 
        setTotalCost(total);
        console.log(cart)
    },[cart])



    return(
        
        <tr className = "cartItem">
            
            <td>{item.item.itemName}</td>
            <td>${item.item.price}</td>
            <td>
                <div className = "editCartQty">
                    
                    {
                        page=="cart"?
                        <>
                        <HiMinus onClick = {dec}/>
                        <input type = "numeric" value = {qty} onChange = {(e)=>{setQty(e.target.value)}} />
                        <HiPlus onClick = {inc}/>
                        </>
                        : qty

                    }

                   
                    
                </div>
            </td>
        </tr>
    )
}
export default CartItem;