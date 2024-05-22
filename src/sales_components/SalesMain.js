import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import SalesBody from "./Body";

const SalesMain = ()=>{
    return(
        <div>
            <Header/>
            <SalesBody/>
        </div>
    )
}
export default SalesMain