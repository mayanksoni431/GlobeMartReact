import {Button, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useState,useEffect} from "react";
import axios from "axios";
import Sales from "./Sales";
import {toast, ToastContainer} from "react-toastify";

const DeleteSales=()=>{

    const [storeNo,setStoreNo] = useState(0)
    const [data,delData] = useState(false)
    const [salesDate,setsalesDate] = useState(undefined)


    function deleteSales() {
        var url = "/sales/"+storeNo+"/"+salesDate
        axios.delete(url).then(
            (response) => {
                toast.success('Deleted Successfully', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        ).catch(
            (error) => {
                var errobj = error.response.data;
                if(errobj.msg!=undefined)
                    toast.error("Error "+errobj.code+" :"+errobj.msg)
                else
                    toast.error(""+error)
            }
        )
    }

    useEffect(()=>{
        if(!data){
            return
        }
        deleteSales()
    },[data])


    return(

        <div>
            <div className="tc-m tc w-13">
                <Form>
                    <FormGroup>
                        <label for="storeNo" className="m-3 b fs-normal-m">Store Number</label>
                        <input className="p-2"  id="storeNo" type="text" name="storeNo"  placeholder="MA-242" onChange={(e)=>{
                            delData(false)
                            setStoreNo(e.target.value)
                        }} />
                    </FormGroup>

                    <FormGroup>
                        <label for="salesDate" className="m-3 b fs-normal-m">Sales Date</label>
                        <input className="p-2"  id="salesDate" pattern="yyyy-mm-dd" type="date" placeholder="yyyy-mm-dd" onChange={(e)=>{
                            setsalesDate(e.target.value)
                        }} />
                    </FormGroup>
                </Form>

                <Button  color="danger" onClick={()=>{
                    delData(true)
                }} >
                    Delete
                </Button>
            </div>

            {
                <div className="mt-5">
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

        </div>

    )
}

export default DeleteSales