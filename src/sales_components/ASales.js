import {Button, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useState,useEffect} from "react";
import axios from "axios";
import Sales from "./Sales";
import {toast, ToastContainer} from "react-toastify";
import Store from "../store_components/Store";

const ASales=()=>{
    const [salesDate,setsalesDate] = useState(undefined)
    const [storeNo,setStoreNo] = useState(0)
    const [data,getData] = useState(false)
    const [sales,setsales] = useState([])
    const [edit,setEdit] = useState(false)

    const EditSalesCompnent = (props)=> {
        return (
            <tr id="salesDt"  scope="row" className="i b">
                <td>{"1"}</td>
                <td>{props.sales.storeNo}</td>
                {
                    (props.sales.salesDate==null || props.sales.salesDate=="" || props.sales.salesDate==undefined)?
                        <td>{props.sales.salesDate}</td>
                        :
                        <td>{props.sales.salesDate.substring(0,10)}</td>
                }
                <td contentEditable="true">{props.sales.managerName}</td>
                <td contentEditable="true">{props.sales.managerId}</td>
                <td contentEditable="true">{props.sales.noOfPOSTr}</td>
                <td contentEditable="true">{props.sales.netPOSAmt}</td>
                <td contentEditable="true">{props.sales.noOfOnlineTr}</td>
                <td contentEditable="true">{props.sales.netOnlineOrderAmt}</td>
                <td contentEditable="true">{props.sales.noOfReturns}</td>
                <td contentEditable="true">{props.sales.netReturnsAmt}</td>
                <td contentEditable="true">{props.sales.netDiscountAmt}</td>
                <td>{props.sales.totalSalesAmt}</td>
                {
                    (props.sales.dateCreated==null || props.sales.dateCreated=="" || props.sales.dateCreated==undefined)?
                        <td>{props.sales.dateCreated}</td>
                        :
                        <td>{props.sales.dateCreated.substring(0,10)}</td>
                }

                {
                    (props.sales.dateLastModified==null || props.sales.dateLastModified=="" || props.sales.dateLastModified==undefined)?
                        <td>{props.sales.dateLastModified}</td>
                        :
                        <td>{props.sales.dateLastModified.substring(0,10)}</td>
                }
            </tr>
        )
    }

    function save() {
        var ele = document.getElementById("salesDt")
        var ln = ele.children.length

        var flds = ["managerName","managerId","noOfPOSTr","netPOSAmt",
            "noOfOnlineTr","netOnlineOrderAmt","noOfReturns","netReturnsAmt",
            "netDiscountAmt"]

        var jobj={}
        for(var i=3; i<ln-2;i++){
            jobj[flds[i-3]] = ele.children[i].innerText.trim()
        }
        axios.patch('/sales/'+storeNo+"/"+salesDate, jobj)
            .then(function (response) {
                toast.success("Data Updated Successfully")
            })
            .catch(function (error) {
                toast.error(""+error)
            });
    }


    function getSales() {
        var url = "/sales/"+storeNo+"/"+salesDate
        axios.get(url).then(
            (response) => {
                toast.success('Success', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setsales(response.data.data)
            }
        ).catch(
            (error) => {
                var errobj = error.response.data;
                if(errobj.msg!=undefined)
                    toast.error("Error "+errobj.code+" :"+errobj.msg)
                else
                    toast.error(""+error)
                setsales([])
            }
        ).then(() => {
            console.log('Get Executed')
        })
    }

    useEffect(()=>{
        if(!data){
            return
        }
        getSales()
    },[data])

    var flds = ["#", "Store No", "Sales Date", "Manager Name", "Manager ID",
        "No Of POS Tr", "Net POS Amt", "No Of Online Tr", "Net Online Tr", "No Of Returns", "Net Returns Amt","Net Discount Amt","Total Sales Amt", "Date Created", "Date Modified"]

    return(

        <div>
            <div className="tc">
                <div>
                <table>
                    <tr>
                        <td>
                            <label for="storeNo" className="b fs-normal-m">Store Number</label>
                        </td>

                        <td>
                            <input className="p-2"  id="storeNo" type="text" placeholder="MA-242" onChange={(e)=>{
                            getData(false)
                            setStoreNo(e.target.value)
                        }} />
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <label for="salesDate" className="m-3 b fs-normal-m">Sales Date</label>
                        </td>
                       <td>
                            <input className="p-2"  id="salesNo" type="date" pattern="yyyy-mm-dd" onChange={(e)=>{
                                setsalesDate(e.target.value)
                            }} />
                       </td>
                    </tr>

                    <Button onClick={()=>{
                        getData(true)
                    }} >
                        Get
                    </Button>

                </table>

                </div>
            </div>

            {
                <div className="mt-5">
                    <Table>
                        <thead>
                        <tr>
                            {
                                flds.map((item, i) => {
                                    return(<th> {item} </th>)
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (edit) ? <EditSalesCompnent sales={sales} />
                                : <Sales index={0} sales={sales} />
                        }
                        </tbody>
                    </Table>
                    <ToastContainer
                        position="top-right"
                        autoClose={2500}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            }

            <Button color="primary" onClick={()=>{
                setEdit(true)
            }} >
                Edit
            </Button>{' '}

            <Button color="success" onClick={()=>{
                save()
            }} >
                Save
            </Button>

        </div>

    )
}

export default ASales