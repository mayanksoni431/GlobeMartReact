import {Button, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useState,useEffect} from "react";
import axios from "axios";
import Store from "./Store";
import {toast, ToastContainer} from "react-toastify";

const DeleteStore=()=>{

    const [storeNo,setStoreNo] = useState(0)
    const [data,delData] = useState(false)


    function deleteStore() {
        var url = "/stores/"+storeNo
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
                toast.error("Error "+errobj.code+" :"+errobj.msg)
            }
        )
    }

    useEffect(()=>{
        if(!data){
            return
        }
        deleteStore()
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

export default DeleteStore