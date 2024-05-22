import {Button, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useState,useEffect,useRef} from "react";
import axios from "axios";
import Store from "./Store";
import {toast, ToastContainer} from "react-toastify";

const AStore=()=>{

    const [storeNo,setStoreNo] = useState(0)
    const [data,getData] = useState(false)
    const [store,setStore] = useState([])
    const [edit,setEdit] = useState(false)

    function getStore() {
        var url = "/stores/"+storeNo
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
                setStore(response.data.data)
            }
        ).catch(
            (error) => {
                var errobj = error.response.data;
                toast.error("Error "+errobj.code+" :"+errobj.msg)
                setStore([])
            }
        ).then(() => {
            console.log('Get Executed')
        })
    }

    useEffect(()=>{
        if(!data){
            return
        }
        getStore()
    },[data])

    var flds = ["#", "Store No", "Name", "Manager", "Manager ID",
        "Manager Email", "Manager Mob No", "City", "State", "Country", "Pincode", "noOfEmployees", "Date Created", "Date Modified"]

    const EditStoreCompnent = (props)=> {
        return (
            <tr id="storeData" scope="row" className="i b">
                    <td>{"1"}</td>
                    <td>{props.store.storeNo}</td>
                    <td contentEditable="true">{props.store.name}</td>
                    <td contentEditable="true">{props.store.manager}</td>
                    <td contentEditable="true">{props.store.managerId}</td>
                    <td contentEditable="true">{props.store.managerEmail}</td>
                    <td contentEditable="true">{props.store.managerMobNo}</td>
                    <td contentEditable="true">{props.store.city}</td>
                    <td contentEditable="true">{props.store.state}</td>
                    <td contentEditable="true">{props.store.country}</td>
                    <td contentEditable="true">{props.store.pincode}</td>
                    <td contentEditable="true">{props.store.noOfEmployees}</td>
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
    function save() {
        var ele = document.getElementById("storeData")
        var ln = ele.children.length

        var flds = ["name","manager","managerId","managerEmail","managerMobNo",
            "city","state","country","pincode","noOfEmployees"]

        var jobj={}
        for(var i=2; i<ln-2;i++){
            jobj[flds[i-2]] = ele.children[i].innerText.trim()
        }

        axios.patch('/stores/'+storeNo, jobj)
            .then(function (response) {
                toast.success("Data Updated Successfully")
            })
            .catch(function (error) {
                var errobj = error.response.data;
                toast.error("Error "+errobj.code+" :"+errobj.msg)
            });
    }

    return(

        <div>
            <div className="tc-m tc w-13">
                <Form>
                    <FormGroup>
                        <label for="storeNo" className="m-3 b fs-normal-m">Store Number</label>
                        <input className="p-2"  id="storeNo" type="text" name="storeNo"  placeholder="MA-242" onChange={(e)=>{
                            getData(false)
                            setStoreNo(e.target.value)
                        }} />
                    </FormGroup>
                </Form>
                <Button onClick={()=>{
                    getData(true)
                }} >
                    Get
                </Button>
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
                            (edit) ? <EditStoreCompnent store={store} />
                                :  <Store index={0} store={store} />
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

export default AStore