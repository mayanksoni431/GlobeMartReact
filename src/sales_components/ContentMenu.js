import {Route, Switch} from "react-router-dom";
import AllSales from "./AllSales";
import ASales from "./ASales";
import InsertSales from "./InsertSales";
import UpdateSales from "./UpdateSales";
import DeleteSales from "./DeleteSales";
import PatchSales from "./PatchSales";
import Search from "./Search";

const ContentMenu = ()=>{
    return (
        <Switch>
            <Route path="/sales/search/:stn" path="/sales/search/">
                <Search />
            </Route>

            <Route path="/sales/d/">
                <DeleteSales/>
            </Route>

            <Route path="/sales/u/">
                <UpdateSales/>
            </Route>

            <Route path="/sales/p/">
                <PatchSales/>
            </Route>

            <Route path="/sales/s/">
                <ASales/>
            </Route>

            <Route path="/sales/a/">
                <InsertSales />
            </Route>

            <Route path="/sales">
                <AllSales/>
            </Route>
        </Switch>
    )
}

function Topics(){
    return <h2>Topics</h2>
}

export default ContentMenu;