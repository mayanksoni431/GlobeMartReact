import React ,{useState} from "react";
import {Button} from "reactstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


const PatchSales = ()=>{

    const [storeNo,setStoreNo] = useState(undefined)
    const [salesDate,setSalesDate] = useState(undefined)
    const [manager,setManager] = useState(undefined)
    const [managerId,setManagerId] = useState(undefined)
    const [noOfPOSTr,setNoOfPOSTr] = useState(undefined)
    const [netPOSAmt,setNetPOSAmt] = useState(undefined)
    const [noOfOnlineTr,setNoOfOnlineAmt] = useState(undefined)
    const [netOnlineAmt,setNetOnlineAmt] = useState(undefined)
    const [noOfReturns,setNoOfReturns] = useState(undefined)
    const [netReturnsAmt,setNetReturnsAmt] = useState(undefined)
    const [netDiscountAmt,setNetDiscountAmt] = useState(undefined)

    function addSales() {
        var flds = ["managerName","managerId","noOfPOSTr","netPOSAmt",
            "noOfOnlineTr","netOnlineOrderAmt","noOfReturns","netReturnsAmt",
        "netDiscountAmt"]
        var values = [manager,managerId,noOfPOSTr,netPOSAmt,
            noOfOnlineTr,netOnlineAmt,noOfReturns,netReturnsAmt,netDiscountAmt]

        var jobj = {}
        var tmp
        flds.forEach((val,ind)=>{
            tmp = values[ind];
            if(tmp!=null && tmp!=undefined && tmp!=""){
                jobj[val] = tmp
            }
        })

        axios.patch('/sales/'+storeNo+"/"+salesDate, jobj)
            .then(function (response) {
                toast.success("Data Updated Successfully")
            })
            .catch(function (error) {
                var errobj = error.response.data;
                if(errobj.msg!=undefined)
                    toast.error("Error "+errobj.code+" :"+errobj.msg)
                else
                    toast.error(""+error)
            });
    }

    return(
        <div>
            <div className="ma2">
                <h1>Sales</h1>
                <p>Patch a Sales</p>
                <p>*Store Number is required</p>
                <p>*Sales Date is required</p>
            </div>

            <div>
                <form className="ma4 b .b--solid-l: solid" action="" method="post">
                    <table >
                        <tr className="ma3" >Store Number</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setStoreNo(e.target.value)
                        }} />

                        <tr className="ma3" >Store Name</tr>
                        <input className="p-2" type="date" pattern="yyyy-mm-dd" onChange={(e)=>{
                            setSalesDate(e.target.value)
                        }} />

                        <tr className="ma3" >Manager Name</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setManager(e.target.value)
                        }} />

                        <tr className="ma3" >Manager ID</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setManagerId(e.target.value)
                        }} />

                        <tr className="ma3" >No Of POS Tr</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNoOfPOSTr(e.target.value)
                        }} />

                        <tr className="ma3" >Net POS Amt</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNetPOSAmt(e.target.value)
                        }} />

                        <tr className="ma3" >No of Online Tr</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNoOfOnlineAmt(e.target.value)
                        }} />

                        <tr className="ma3" >Net Online Amt</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNetOnlineAmt(e.target.value)
                        }} />

                        <tr className="ma3" >No of Returns</tr>
                        <input className="p-2" type="email" onChange={(e)=>{
                            setNoOfReturns(e.target.value)
                        }} />

                        <tr className="ma3" >Net Returns Amt</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNetReturnsAmt(e.target.value)
                        }} />

                        <tr className="ma3" >Net Discount Amt</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setNetDiscountAmt(e.target.value)
                        }} />

                    </table>

                </form>
                <div className="ma4 mb5">
                    <Button color="secondary" onClick={()=>{
                        addSales()
                    }
                    } >Patch</Button>
                </div>
            </div>
            <ToastContainer/>

        </div>



    )
}

export default PatchSales;