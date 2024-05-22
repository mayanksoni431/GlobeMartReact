import {Route, Switch} from "react-router-dom";
import AllStores from "./AllStores";
import AStore from "./AStore";
import InsertStore from "./InsertStore";
import UpdateStore from "./UpdateStore";
import DeleteStore from "./DeleteStore";
import PatchStore from "./PatchStore";
import Search from "./Search";

const ContentMenu = ()=>{
    return (
        <Switch>
            <Route path="/stores/search/">
                <Search/>
            </Route>

            <Route path="/stores/d/">
                <DeleteStore/>
            </Route>

            <Route path="/stores/u/">
                <UpdateStore/>
            </Route>

            <Route path="/stores/p/">
                <PatchStore/>
            </Route>

            <Route path="/stores/s/">
                <AStore/>
            </Route>

            <Route path="/stores/i/">
                <InsertStore />
            </Route>

            <Route path="/stores/a/">
                <AllStores/>
            </Route>
        </Switch>
    )
}

export default ContentMenu;