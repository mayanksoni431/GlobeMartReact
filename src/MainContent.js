import {Route, Switch} from "react-router-dom";
import SalesMain from "./sales_components/SalesMain";
import StoreMain from "./store_components/StoreMain";

const MainContent = ()=>{
    return(
        <Switch>
            <Route path="/stores/">
                <StoreMain/>
            </Route>

            <Route path="/sales/">
                <SalesMain/>
            </Route>
        </Switch>
    )
}

export default MainContent;