import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import SalesBody from "./Body";
import StoreBody from "./Body";

const StoreMain = ()=>{
    return(
        <div>
            <Header/>
            <StoreBody/>
        </div>
    )
}
export default StoreMain;