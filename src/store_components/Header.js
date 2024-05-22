import React from 'react';
import {Alert, Button} from 'reactstrap';
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <div>
            <Alert color="primary" className="tc b ma1 f-subheadline-l">
                Store Collection
            </Alert>
        </div>
    )
}

export default Header;
