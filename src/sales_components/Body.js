import ActionMenu from "./ActionMenu";
import ContentMenu from "./ContentMenu";
import {BrowserRouter as Router} from "react-router-dom";

const SalesBody = ()=>{
    return(
        <div className="ma1">
            <Router>
                <div className="ma4 tc" >
                    <ActionMenu/>
                </div>
                <div className="ma2">
                    <ContentMenu/>
                </div>
            </Router>
        </div>
    )
}

export default SalesBody