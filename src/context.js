import React, {useContext,useState,useEffect} from "react"
const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [loading,setLoading] = useState(false)
    const [cart,setCart] = useState([])
    const [page,setPage] = useState("")
    const [totalCost,setTotalCost] = useState(0)
    const [search,setSearch] = useState("")
    const [creditCardNo,setCreditCardNo] = useState(null)
    const [phoneNo,setPhoneNo] = useState(null)
// localstorage
const getLocalStorage = () =>{
    let cartItems = localStorage.getItem("cart")
    if(cartItems){
        cartItems = JSON.parse(cartItems)
        console.log("initialised",cartItems)
        return JSON.parse(localStorage.getItem("cart"))

    }
    else{
        return []
    }
}
const fetchData = async()=>{
    setLoading(true);
    const cartItems = getLocalStorage()
    setCart(cartItems);
    setLoading(false);
}
useEffect(()=>{
    fetchData()
},[])

useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
}
,[cart])


    return(
        <AppContext.Provider
        value = {{
            search,setSearch,
            cart,setCart,
            page,setPage,
            totalCost,setTotalCost,
            search,setSearch,loading,setLoading,
            creditCardNo,setCreditCardNo,
            phoneNo,setPhoneNo
        }}>{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}