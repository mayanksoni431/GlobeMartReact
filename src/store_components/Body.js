import ActionMenu from "./ActionMenu";
import ContentMenu from "./ContentMenu";
import {BrowserRouter as Router} from "react-router-dom";

const StoreBody = ()=>{
    return(
        <div className="ma1">
            <div>
                <div className="ma4 tc" >
                    <ActionMenu/>
                </div>
                <div className="ma2">
                    <ContentMenu/>
                </div>
            </div>
        </div>
    )
}

export default StoreBody