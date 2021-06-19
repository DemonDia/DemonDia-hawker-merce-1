
import React,{useEffect,useState} from "react";
import menu from "../data"
import MenuItem from "../components/menuitem"
import { useGlobalContext } from "../context";
const Menu = () =>{
    const {setPage,search,setSearch} = useGlobalContext()
    const [isHalal,setIsHalal] = useState(false)
    const [cuisine,setCuisine] = useState("")
    const [foodType,setFoodType] = useState("")
    const handleClick = () =>{
        setIsHalal(!isHalal)
        // console.log(isHalal)
    }
    useEffect(()=>{
        setPage("menu")
    },[])
    return(
        <div>
            <div id = "searchContainer">
                <input type = "text" placeholder = "What u wanna eat?" value = {search} onChange = {(e)=>setSearch(e.target.value)}
                />
                <select defaultValue = "" onChange = {(e)=>setCuisine(e.target.value)} >
                    <option value = "">
                        Choose a cuisine
                    </option>
                    <option value = "chinese">
                        Chinese
                    </option>
                    <option value = "muslim">
                        Malay
                    </option>
                    <option value = "indian">
                        Indian
                    </option>
                    <option value = "japanese">
                        Japanese
                    </option>
                    <option value = "korean">
                        Korean
                    </option>
                    <option value = "western"> 
                        Western
                    </option>
                    <option value = "universal">
                        Universal
                    </option>
                </select>
                <select defaultValue = "" onChange = {(e)=>setFoodType(e.target.value)} >
                    <option value = "">
                        Food Type
                    </option>
                    <option value = "rice">
                        Rice
                    </option>
                    <option value = "noodle">
                        Noodles
                    </option>
                    <option value = "drink">
                        Drink
                    </option>
                    <option value = "etc">
                        Etc
                    </option>
                </select>
            
            <input type = "checkbox" onClick = {handleClick}/><label>Halal</label>
            </div>
            <div id = "itemsContainer">
            {
                menu.filter((menuItem=> (menuItem.name.toLowerCase().includes(search.toLowerCase()))&&(menuItem.halal===isHalal)
                &&(menuItem.type===cuisine||cuisine ==="")&&(menuItem.category===foodType||foodType ==="")  
                )).map(
                    menuItem => <MenuItem key = {menuItem.id} menuItem = {menuItem}/>
                )
            }

            </div>
        </div>
    )

}
export default Menu