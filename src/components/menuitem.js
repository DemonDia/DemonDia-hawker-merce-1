// import img 
import React, {useState} from "react"
import { HiMinus,HiPlus } from "react-icons/hi";
import { useGlobalContext } from "../context";
import Images from "../images/images"

const MenuItem =(menuItem) =>{
    const {cart,setCart} = useGlobalContext()
    const [qty,setQty] = useState(1)
    const [openModal,setOpenModal] = useState(false)
    const dec = () =>{
        if(qty>1){
            setQty(qty-1)
        }
    }
    const inc = () =>{
        setQty(qty+1)
    }
    const handleClick =()=>{
        setOpenModal(false)
    }
    const handleSubmit = () =>{
        // console.log(qty)
        setOpenModal(true)
        if(qty > 0){


            if(cart.some(item => item.itemName ===  menuItem.menuItem.name)){
  
                setCart(cart.map((item)=>{
                    if(item.itemName ===  menuItem.menuItem.name){
                        // item.qty = item.qty + qty
                        return {...item,qty:item.qty + qty }
                    }
                    return item
                }
                ))
            } else{            
                const newItem = {
                    itemId:menuItem.menuItem.id,
                itemName : menuItem.menuItem.name,
                price:menuItem.menuItem.price,
                qty : qty
    
            }
            // console.log(newItem)
            
            setCart([...cart,newItem])
                
            }

            // check if already in cart
            // console.log(cart)
            setQty(1)
            // setOpenModal(false)
        }


    }
    // console.log(menuItem.menuItem)
// require("../images")
    const link = `../images/${menuItem.menuItem.id}.jpg`
    // const pic = require(link)
    // console.log(cart)
    // console.log( '../../../../../../Siang/Desktop/FrontEnd/hawker_commerce/src/images/'+menuItem.menuItem.name+'.jpg')
    return(
        <div className = "menuItemContainer">
            {
                openModal===false?<>
            < img src = {Images[menuItem.menuItem.id.toString()]} className = "itemImg"/>
            <h4>{menuItem.menuItem.name}</h4>
            <h4>$ {menuItem.menuItem.price}</h4>
            <div className = "qtyContainer">
            <HiMinus onClick = {dec}/><input type ="numeric" value = {qty} className = "qty" onChange = {(e)=>{setQty(e.target.value)}} /><HiPlus onClick = {inc}/>
            </div>
            
            <input type = "submit" value = "Add to cart" className = "addCart"
            onClick = {handleSubmit}/>
            </>:
            <div className = "modal">
                <h2>Item added!</h2>
                <button onClick = {handleClick}>Back</button>

            </div>

            }

        </div>
    )
}
export default MenuItem