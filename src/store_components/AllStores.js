import React,{useState,useEffect,Component} from "react"
import axios from "axios";
import Store from "./Store";
import "./css/AllStores.css"
import {Button, ButtonGroup, Pagination, PaginationItem, PaginationLink, Table} from "reactstrap";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const AllStores = ()=>{

    const [currentPage,setCurrentPage] = useState(0)
    const [stores,setStores] = useState([])
    const [storePages,setStoresPages] = useState(0)

    const [first,setFirst] = useState(0)
    const [prev,setPrev] = useState(-1)
    const [next,setNext] = useState(1)
    const [last,setLast] = useState(2)

    useEffect(()=>{
        if(currentPage>last){
            return
        }
        getAllStores()
    },[currentPage])


    const getAllStores = ()=> {
        var url = "/stores/page/" + currentPage
        axios.get(url).then(
            (response) => {

                setStores(response.data.data.content)
                var totalPages = response.data.data.totalPages

                setStoresPages(totalPages)
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

    var flds = ["#", "Store No", "Name", "Manager", "Manager ID",
        "Manager Email", "Manager Mob No", "City", "State", "Country", "Pincode", "noOfEmployees", "Date Created", "Date Modified"]


    const Page=(props)=>{
        return(
            <Button color={props.col} onClick={()=>{
                setCurrentPage(props.c)
            }}> {props.c + 1}
            </Button>
        )
    }

    const Pages=(props)=>{
        var cpage = props.cur
        var tpage = storePages
        var psize = 10

        var sPages = []
        for(var ele=0;ele<tpage;ele++){
            sPages.push(ele)
        }

        var allpages = sPages.slice(0,psize)

        if(cpage<=psize/2){
            return (
                Array.from(allpages,(e,i)=>{
                    if(i==cpage){
                        return (
                            <Page c={i} col={"primary"} />
                        )
                    }
                    else{
                        return (
                            <Page c={i} col={"info"} />
                        )
                    }
                })
            )
        }
        else{
            var prePage = sPages.slice(cpage-parseInt(""+psize/2),cpage)
            var postPage = sPages.slice(cpage,cpage + parseInt(""+psize/2)+1)

            return (
                <>
                    {
                        Array.from(prePage,(e,i)=>{
                        if(e==cpage){
                            return (
                                <Page c={e} col={"primary"} />
                            )
                        }
                        else{
                            return (
                                <Page c={e} col={"info"} />
                            )
                        }
                        })
                    }

                    {
                        Array.from(postPage,(e,i)=>{
                            if(e==cpage){
                                return (
                                    <Page c={e} col={"primary"} />
                                )
                            }
                            else{
                                return (
                                    <Page c={e} col={"info"} />
                                )
                            }
                        })
                    }

                </>
            )

        }
    }

    return (

            <div>
                <div className="ma2">
                    <h1>Stores</h1>
                    <p>List of stores</p>
                </div>

                <div>
                    <div className="ma1">

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

                            <Pages cur = {currentPage} />

                            <Button color="info" onClick={()=>{
                                setCurrentPage(next)
                            }}>{">"}
                            </Button>

                            <Button color="info" onClick={()=>{
                                setCurrentPage(last)
                            }}>{">>"}
                            </Button>

                        </div>


                        {/*table*/}

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
                </div>

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
        )

}



export default AllStores;
