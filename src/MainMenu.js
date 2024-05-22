import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const MainMenu = ()=>{

    return(
        <div>
            <Link to="/stores/">
                <Button outline color="primary">Store</Button>{' '}
            </Link>
            <Link to="/sales/">
                <Button outline color="primary">Sales</Button>{' '}
            </Link>
        </div>
    )
}

export default MainMenu;