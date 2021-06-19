// import topdishPic from "../images/1.jpg"
import Images from "../images/images"
import menu from "../data"
const TopDish = () =>{
    let topNum = Math.floor(Math.random() * 23) + 1;
    let topdishPic = Images[topNum.toString()]
    return(
        <div id  ="topdishContainer">
            <h2>
                Item of the day: 
 

            </h2>
            <h3>
                {
                    menu[topNum-1].name
                }
            </h3>
            <div>
                <img src = {topdishPic} id = "topdishpic"/>


            </div>
        </div>
    )
}
export default TopDish