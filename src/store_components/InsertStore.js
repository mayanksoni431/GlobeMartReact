import React ,{useState} from "react";
import {Button} from "reactstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


const InsertStore = ()=>{

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

    function addStore() {
        axios.post('/stores', {
            storeNo:storeNo,
            name:storeName,
            city:city,
            state:state,
            country:country,
            pincode:pincode,
            manager:manager,
            managerId:managerId,
            managerEmail:managerEmail,
            managerMobNo:managerMob,
            noOfEmployees:noOfEmployees
        })
        .then(function (response) {
            toast.success("Data Submitted")
        })
        .catch(function (error) {
            var errobj = error.response.data;
            toast.error("Error "+errobj.code+" :"+errobj.msg)
        });

    }

    function sendobj(jobj) {
        axios.post('/stores', jobj)
            .then(function (response) {
                toast.success("Data Submitted")
            })
            .catch(function (error) {
                toast.error(""+error)
            });
    }

    function add50stores(s) {

        var jobj = {}

        for (var s=0;s<50;s++) {

            jobj["storeNo"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26) +
                String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26) +
                "-" + Math.floor(Math.random() * 10000)

            //stn.push(jobj["storeNo"])

            jobj["name"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)

            jobj["city"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)

            jobj["state"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)

            jobj["country"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)

            jobj["pincode"] = "PIN-" + Math.floor(Math.random() * 1000000)

            jobj["manager"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)


            //mngr.push(jobj["manager"])

            jobj["managerId"] = "MNID"
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + Math.floor(Math.random() * 10000)


            //mnid.push(jobj["managerId"])

            jobj["managerEmail"] = jobj["manager"]
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26) +
                String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26) + "@gmail.com"

            jobj["managerMobNo"] = Math.floor(Math.random() * 10000000000)

            jobj["noOfEmployees"] = Math.floor(Math.random() * 10000)

            sendobj(jobj)

            sleep(500000)

        }
    }

    function sleep(milliseconds) {
        for (var i = 0; i < milliseconds;) {
            i++;
        }
    }


    function sndBtn50() {
        add50stores()
    }

    return(
        <div>
            <div className="ma2">
                <h1>Stores</h1>
                <p>Add a Store</p>
                <button onClick={()=>{
                        sndBtn50()
                    }
                }>Add50</button>
            </div>

            <div>
                <form className="ma4 b .b--solid-l: solid" action="" method="post">
                    <table >
                        <tr className="ma3" >Store Number</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
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
                    <Button color="primary" onClick={()=>{
                        addStore()
                    }
                    } >Add</Button>
                </div>
            </div>
            <ToastContainer/>

        </div>



    )
}

export default InsertStore;