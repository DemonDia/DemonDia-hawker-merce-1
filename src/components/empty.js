import { Link } from "react-router-dom";
const Empty =() =>{

    return(
        <div className = "emptyContainer">
            <h1>Your cart is empty, order something :D</h1>
            <Link to ="/hawker-merce-a/menu">Go to cart</Link>
        </div>
    )
}
export default Empty