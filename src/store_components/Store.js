import {React} from "react";
import {Link, Route} from "react-router-dom";

const Store=(props)=>{
    return(
        <tr scope="row" >
            <td>{props.index+1}</td>
            <Link to={{pathname:"/sales/search/"+props.store.storeNo}}>
                    <td>{props.store.storeNo}</td>
            </Link>
            <td>{props.store.name}</td>
            <td>{props.store.manager}</td>
            <td>{props.store.managerId}</td>
            <td>{props.store.managerEmail}</td>
            <td>{props.store.managerMobNo}</td>
            <td>{props.store.city}</td>
            <td>{props.store.state}</td>
            <td>{props.store.country}</td>
            <td>{props.store.pincode}</td>
            <td>{props.store.noOfEmployees}</td>

                {
                        (props.store.dateCreated==null || props.store.dateCreated=="" || props.store.dateCreated==undefined)?
                            <td>{props.store.dateCreated}</td>
                            :
                            <td>{props.store.dateCreated.substring(0,10)}</td>
                }


                {
                        (props.store.dateModified==null || props.store.dateModified=="" || props.store.dateModified==undefined)?
                            <td>{props.store.dateModified}</td>
                            :
                            <td>{props.store.dateModified.substring(0,10)}</td>
                }
        </tr>
    )
}

export default Store;