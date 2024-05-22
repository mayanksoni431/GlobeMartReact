import React from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";

const ActionMenu = () => {
    return (
        <div>
            <Link to="/stores/a/">
                <Button outline color="success">Get</Button>{' '}
            </Link>
            <Link to="/stores/s/">
                <Button outline color="success">GetOne</Button>{' '}
            </Link>
            <Link to="/stores/search/">
                <Button outline color="success">Search</Button>{' '}
            </Link>
            <Link to="/stores/i/">
                <Button outline color="warning">Insert</Button>{' '}
            </Link>
            <Link to="/stores/u/">
                <Button outline color="primary">Update</Button>{' '}
            </Link>
            <Link to="/stores/p/">
                <Button outline color="secondary">Patch</Button>{' '}
            </Link>
            <Link to="/stores/d/">
                <Button outline color="danger">Delete</Button>
            </Link>
        </div>
    );

}

export default ActionMenu;
