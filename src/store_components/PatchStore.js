import React ,{useState} from "react";
import {Button} from "reactstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


const PatchStore = ()=>{

    const [storeNo,setStoreNo] = useState(undefined)
    const [storeName,setStoreName] = useState(undefined)
    const [city,setCity] = useState(undefined)
    const [state,setState] = useState(undefined)
    const [country,setCountry] = useState(undefined)
    const [pincode,setPincode] = useState(undefined)
    const [manager,setManager] = useState(undefined)
    const [managerId,setManagerId] = useState(undefined)
    const [managerEmail,setManagerEmail] = useState(undefined)
    const [managerMob,setManagerMob] = useState(undefined)
    const [noOfEmployees,setNoOfEmployees] = useState(undefined)

    function updateStore() {
        var flds = ["name","city","state","country","pincode","manager",
            "managerId","managerEmail","managerMobNo","noOfEmployees"]
        var values = [storeName,city,state,country,pincode,manager,
            managerId,managerEmail,managerMob,noOfEmployees]

        var jobj = {}
        var tmp
        flds.forEach((val,ind)=>{
            tmp = values[ind];
            if(tmp!=null && tmp!=undefined && tmp!=""){
                jobj[val] = tmp
            }
        })

        axios.patch('/stores/'+storeNo, jobj)
            .then(function (response) {
                toast.success("Data Updated Successfully")
            })
            .catch(function (error) {
                var errobj = error.response.data;
                toast.error("Error "+errobj.code+" :"+errobj.msg)            });
    }

    return(
        <div>
            <div className="ma2">
                <h1>Stores</h1>
                <p>Patch a Store</p>
                <p>*Store Number is required</p>
            </div>

            <div>
                <form className="ma4 b .b--solid-l: solid" action="" method="post">
                    <table >
                        <tr className="ma3" >*Store Number</tr>
                        <input required={true} className="p-2" type="text" onChange={(e)=>{
                            setStoreNo(e.target.value)
                        }} />

                        <tr className="ma3" >Store Name</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setStoreName(e.target.value)
                        }} />

                        <tr className="ma3" >City</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setCity(e.target.value)
                        }} />

                        <tr className="ma3" >State</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setState(e.target.value)
                        }} />

                        <tr className="ma3" >Country</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setCountry(e.target.value)
                        }} />

                        <tr className="ma3" >Pincode</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setPincode(e.target.value)
                        }} />

                        <tr className="ma3" >Manager Name</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setManager(e.target.value)
                        }} />

                        <tr className="ma3" >Manager ID</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setManagerId(e.target.value)
                        }} />

                        <tr className="ma3" >Manager Email</tr>
                        <input className="p-2" type="email" onChange={(e)=>{
                            setManagerEmail(e.target.value)
                        }} />

                        <tr className="ma3" >Manager Mob.</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setManagerMob(e.target.value)
                        }} />

                        <tr className="ma3" >No. of Employees</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNoOfEmployees(e.target.value)
                        }} />
                    </table>

                </form>
                <div className="ma4 mb5">
                    <Button color="secondary" onClick={()=>{
                        updateStore()
                    }
                    } >Patch</Button>
                </div>
            </div>
            <ToastContainer/>

        </div>



    )
}

export default PatchStore;