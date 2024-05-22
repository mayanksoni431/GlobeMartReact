import React from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";

const ActionMenu = () => {
    return (
        <div>
            <Link to="/sales">
                <Button outline color="success">Get</Button>{' '}
            </Link>
            <Link to="/sales/s/">
                <Button outline color="success">GetOne</Button>{' '}
            </Link>
            <Link to="/sales/search/">
                <Button outline color="success">Search</Button>{' '}
            </Link>
            <Link to="/sales/a/">
                <Button outline color="warning">Post</Button>{' '}
            </Link>
            <Link to="/sales/u/">
                <Button outline color="primary">Update</Button>{' '}
            </Link>
            <Link to="/sales/p/">
                <Button outline color="secondary">Patch</Button>{' '}
            </Link>
            <Link to="/sales/d/">
                <Button outline color="danger">Delete</Button>
            </Link>
        </div>
    );

}

export default ActionMenu;
