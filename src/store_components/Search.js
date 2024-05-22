import {Button, Table} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import React, {useEffect, useState} from "react";
import Store from "./Store";
import axios from "axios";

const Search = ()=>{
    const [stores,setStores] = useState([])
    const [storePages,setStoresPages] = useState([])

    const [first,setFirst] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)
    const [prev,setPrev] = useState(-1)
    const [next,setNext] = useState(1)
    const [last,setLast] = useState(2)

    const [storeNo,setStoreNo] = useState(undefined)
    const [storeName,setStoreName] = useState(undefined)
    const [city,setCity] = useState(undefined)
    const [state,setState] = useState(undefined)
    const [country,setCountry] = useState(undefined)
    const [pincode,setPincode] = useState(undefined)
    const [manager,setManager] = useState(undefined)
    const [managerId,setManagerId] = useState(undefined)
    const [managerEmail,setManagerEmail] = useState(undefined)

    function searchStore() {
        var flds = ["storeNo","name","city","state","country","pincode","manager",
            "managerId","managerEmail"]
        var values = [storeNo,storeName,city,state,country,pincode,manager,
            managerId,managerEmail]
        var jobj = {}
        var tmp
        flds.forEach((val,ind)=>{
            tmp = values[ind];
            if(tmp!=null && tmp!=undefined && tmp!=""){
                jobj[val] = tmp
            }
        })

        if(currentPage<0){
            setCurrentPage(0)
        }
        var url = "/store/search/page/" + currentPage
        axios.post(url,jobj).then(
            (response) => {

                setStores(response.data.data.content)

                var totalPages = response.data.data.totalPages

                setStoresPages(new Array(totalPages))
                setPrev((currentPage<=0)?0:currentPage-1)
                setNext((currentPage+1==totalPages)?currentPage:currentPage+1)
                setLast(totalPages-1)

                console.log(response.data)
            }
        ).catch(
            (error) => {
                var errobj = error.response.data;
                toast.error("Error "+errobj.code+" :"+errobj.msg)            }
        ).then(() => {
            console.log('Get Executed')
        })
    }

    useEffect(()=>{
        if(currentPage>last){
            return
        }
        searchStore()
    },[currentPage])


    var flds = ["#", "Store No", "Name", "Manager", "Manager ID",
        "Manager Email", "Manager Mob No", "City", "State", "Country", "Pincode", "noOfEmployees", "Date Created", "Date Modified"]

    return(
        <div>
            <div className="ma2">
                <h1>Stores</h1>
                <p>Search Stores</p>
            </div>

            <div>
                <form className="ma4 b .b--solid-l: solid" action="" method="post">
                    <table >
                        <tr className="ma3" >Store Number</tr>
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
                    </table>

                </form>
                <div className="ma4 mb5">
                    <Button color="secondary" onClick={()=>{
                        searchStore()
                    }
                    } >Search</Button>
                </div>

                {/*pageData*/}
                <div>
                    <Button color="info" onClick={()=>{
                        setCurrentPage(first)
                    }} >{"<<"}
                    </Button>

                    <Button color="info" onClick={()=>{
                        setCurrentPage(prev)
                    }}>{"<"}
                    </Button>


                    {
                        Array.from(storePages,(e,i)=>{
                            if(i==currentPage){
                                return (
                                    <Button color="primary" onClick={()=>{
                                        setCurrentPage(i)
                                    }}>{i+1}
                                    </Button>
                                )
                            }
                            else{
                                return (
                                    <Button color="info" onClick={()=>{
                                        setCurrentPage(i)
                                    }}>{i+1}
                                    </Button>
                                )
                            }
                        })

                    }


                    <Button color="info" onClick={()=>{
                        setCurrentPage(next)
                    }}>{">"}
                    </Button>

                    <Button color="info" onClick={()=>{
                        setCurrentPage(last)
                    }}>{">>"}
                    </Button>

                </div>

                {/*pagedata*/}
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
                        stores.map((item, ind) => {
                            return(<Store key={ind} index={ind} store={item} />)
                        })
                    }
                    </tbody>
                </Table>

            </div>
            <ToastContainer/>

        </div>
    )
}

export default Search;