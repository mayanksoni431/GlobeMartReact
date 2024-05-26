import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Button, Table} from "reactstrap";
import Sales from "./Sales";
import {useParams} from "react-router-dom";

const Search = ()=>{
    const {stn} = useParams()

    const [sales,setSales] = useState([])
    const [salesPages,setSalesPages] = useState(0)

    const [currentPage,setCurrentPage] = useState(0)
    const [last,setLast] = useState(2)
    const [storeNo,setStoreNo] = useState(undefined)
    const [salesDate,setSalesDate] = useState(undefined)
    const [manager,setManager] = useState(undefined)
    const [managerId,setManagerId] = useState(undefined)


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
        var tpage = salesPages
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


    function searchSales(arg){
        var flds = ["storeNo","salesDate","managerName","managerId"]

        var values = [storeNo,salesDate,manager,managerId]

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
        var pg = currentPage;

        if(pg<0){
            pg=0
        }

        if(stn!=undefined){
            jobj["storeNo"] = stn
        }
        var url = "/sales/search/page/"+pg
        axios.get(url, jobj)
            .then(
                (response) => {
                    setSales(response.data.data.content)
                    var totalPages = response.data.data.totalPages
                    setSalesPages(totalPages)
                    setLast(totalPages-1)
                    console.log(response.data)
                }
            ).catch(
            (error) => {
                var errobj = error.response.data;
                toast.error("Error "+errobj.code+" :"+errobj.msg)
            }
        ).then(() => {
            console.log('Get Executed')
        })
    }

    useEffect(()=>{
        if(currentPage>last){
            setCurrentPage(last)
            return
        }
        searchSales(stn)
    },[currentPage])

    var flds = ["#", "Store No", "Sales Date", "Manager Name", "Manager ID",
        "No Of POS Tr", "Net POS Amt", "No Of Online Tr", "Net Online Tr", "No Of Returns", "Net Returns Amt","Net Discount Amt","Total Sales Amt", "Date Created", "Date Modified"]

    return(
        <div>
            <h1>Store Number: {storeNo} </h1>
            <div className="ma2">
                <h1>Sales</h1>
                <p>Search Sales</p>
            </div>

            <div>
                <form className="ma4 b .b--solid-l: solid" action="" method="post">
                    <table >
                        <tr className="ma3" >Store Number</tr>
                        <input className="p-2" type="text" onChange={(e)=>{
                            setStoreNo(e.target.value)
                        }} />

                        <tr className="ma3" >Sales Date</tr>
                        <input className="p-2"  id="salesNo" type="date" pattern="yyyy-mm-dd" onChange={(e)=>{
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
                    </table>

                </form>
                <div className="ma4 mb5">
                    <Button color="secondary" onClick={()=>{
                        searchSales()
                    }
                    } >Search</Button>
                </div>
            </div>


            <div className="ma1">

                {/*pageData*/}
                <div>
                    <Button color="info" onClick={()=>{
                        setCurrentPage(0)
                    }} >{"<<"}
                    </Button>

                    <Button color="info" onClick={()=>{
                        setCurrentPage(currentPage-1)
                    }}>{"<"}
                    </Button>


                    <Pages cur = {currentPage} />

                    <Button color="info" onClick={()=>{
                        setCurrentPage(currentPage+1)
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
                        sales.map((item, ind) => {
                            return(<Sales key={ind} index={ind} sales={item} />)
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
