const Sales=(props)=>{
    return(
        <tr scope="row" >
            <td>{props.index+1}</td>
            <td>{props.sales.storeNo}</td>
                {
                        (props.sales.salesDate==null || props.sales.salesDate=="" || props.sales.salesDate==undefined)?
                            <td>{props.sales.salesDate}</td>
                            :
                            <td>{props.sales.salesDate.substring(0,10)}</td>
                }
            <td>{props.sales.managerName}</td>
            <td>{props.sales.managerId}</td>
            <td>{props.sales.noOfPOSTr}</td>
            <td>{(props.sales.netPOSAmt==undefined)?props.sales.netPOSAmt:props.sales.netPOSAmt.toFixed(2)}</td>

            <td>{props.sales.noOfOnlineTr}</td>

            <td>{(props.sales.netOnlineOrderAmt==undefined)?props.sales.netOnlineOrderAmt:props.sales.netOnlineOrderAmt.toFixed(2)}</td>


            <td>{props.sales.noOfReturns}</td>

            <td>{(props.sales.netReturnsAmt==undefined)?props.sales.netReturnsAmt:props.sales.netReturnsAmt.toFixed(2)}</td>


            <td>{(props.sales.netDiscountAmt==undefined)?props.sales.netDiscountAmt:props.sales.netDiscountAmt.toFixed(2)}</td>


            <td>{(props.sales.totalSalesAmt==undefined)?props.sales.totalSalesAmt: props.sales.totalSalesAmt.toFixed(2)}</td>


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
export default Sales;