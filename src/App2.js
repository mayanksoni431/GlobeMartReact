import MainMenu from "./MainMenu";
import MainContent from "./MainContent";
import React from "react";

const App2 =()=>{
    return(
        <div className="ma1">
            <div>
                <div className="ma3" >
                    <MainMenu/>
                </div>
                <div className="ma2">
                    <MainContent/>
                </div>
            </div>
        </div>
    )
}

export default App2;