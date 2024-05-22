import React ,{useState} from "react";
import {Button} from "reactstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


const InsertSales = ()=>{

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
        axios.post('/sales', {
            storeNo:storeNo,
            salesDate : salesDate,
            managerName : manager,
            managerId : managerId,
            noOfPOSTr : noOfPOSTr,
            netPOSAmt : netPOSAmt,
            noOfOnlineTr : noOfOnlineTr,
            netOnlineOrderAmt : netOnlineAmt,
            noOfReturns : noOfReturns,
            netReturnsAmt : netReturnsAmt,
            netDiscountAmt : netDiscountAmt
        })
        .then(function (response) {
            toast.success("Data Submitted")
        })
        .catch(function (error) {
            var errobj = error.response.data;
            toast.error("Error "+errobj.code+" :"+errobj.msg)
        });
    }

    function add500sales(s) {

        var stores =
            ["GI-3185","EW-8962","TY-4882","XV-5328","NP-614","NS-2808","KG-9044","YN-5322","OV-3518","GK-7103",
                "SI-5516","PN-81","QK-9024","UJ-8755","IC-5653","CD-6781","TP-7760","KR-5109","JB-6675","RF-6814","CS-6071","YM-5124","HA-7731",
                "IP-1583","RN-9963","SV-1453","TV-8852","HQ-9757","NV-9984","ZS-5105","DH-5595","VP-8470","IA-1277","GV-3307","HM-6385","BD-3720",
                "MB-3636","KB-4098","KM-7607","DG-4392","DS-6624","FH-5563","KL-1828","QE-8476","SI-8762","QA-5575","XA-5277","PN-7263","TG-7785","LA-4586","II-1497","XO-2713","IC-3920","CL-3778","VH-380","ZQ-6497","RI-1752","QI-9600",
                "ZU-9306","BO-5623","XD-3588","SU-1492","MZ-7599",
                "FK-3393","RS-168","LJ-3637","YU-3854","CW-3577","NI-9677","FP-2595","GC-4693","LV-4731","QA-580","OF-3316","JG-1926","TV-730","CJ-521","WK-5625","ST-6053","TH-7061","CT-2333","HC-7729","CR-6149","SA-3492","GK-3551","RJ-4761",
                "OA-5245","IF-2631","TT-1775","MP-1641","OW-2532","LX-3769",
                "CU-8335","FP-3939","XA-4445","LN-3634","GY-9825","UN-2013","UD-5194","BO-6546","ED-2849","PT-1342","AA-5871","FG-1830","KG-1742","WR-7916","IK-7552","OU-496","KU-2481","SG-6994","IN-1562",
                "FA-3170","TL-3343","VY-3235","MZ-9845","XD-5928","SJ-3954","SM-2815","GJ-4038","EW-2735",
                "CG-1646","WL-6725","EY-7539","TE-8634","TM-6004","EA-5092","AI-3450","RJ-1428","MU-4949","ST-8434","PY-7703","OI-2166","YA-2784","HF-937","BQ-1705","EG-5145","PI-245","VR-9609","IH-2440","SM-1527","KQ-8791","YJ-2528","OH-8546","ID-2487","YJ-2726","AI-9078","AY-1544","EP-458","BE-6656",
                "BQ-8137","JA-8685","JB-4437","PV-4885","ZC-4751","MU-9210","IX-4787","HY-6117","YM-4342","ZT-5647","PJ-2169","PP-6855","WH-7131","AK-2385","AN-5137","BS-443","HF-9299","GG-9770","YR-1125","BH-4418","TZ-9278","QS-4202","PS-9172","VF-4972",
                "RX-9416","WI-9723","QK-5331","NK-6938","EP-4729","KE-4100","NZ-8125","UE-9885","NQ-5209","OU-4048","KS-5496","FO-5571","FN-4971","KX-6636","LY-9967","ST-569","BQ-3602","LN-2574","TP-346","GR-3174","HP-4833","UT-4658","SM-219","AQ-4441","HV-3984","OU-8693","DV-2278","BV-4540","YC-6718","ZG-2709",
                "DP-6937","NX-4761","FZ-3735","DP-5248","AK-3188","HD-4687","LJ-2007","JB-4653","UO-9186","OR-5984","VM-1632","SQ-4302","EG-3795","VU-3027","BU-9819","DI-3955","GJ-2304","NI-9974","KE-8256","VJ-5982","VM-6888","EP-7406","UC-1194","ZA-9747","BH-3543","IB-899","AG-8591","GH-6942","QJ-3602","DV-461",
                "OG-8014","XT-3775","VT-719","IO-934",
                "BR-4195","JS-7903","WL-1109","UM-7970","CS-592","CV-9131","TH-8160","YO-3008","EC-1929","YU-6472","OQ-6449","RK-9420","QQ-9333","NV-3308","RD-5429","BA-5118","OE-1883","FH-4427","VP-5622","WP-1408","JV-9903","KK-4770","OJ-4833","WU-7345","QZ-1778","BS-3074","QP-5053","OJ-479","XC-1004","FN-9882","BM-8346",
                "GJ-4214","VA-7173","PZ-1848","DF-1376","FU-7870","CF-4379","KN-8898","NN-2948","VW-1498","KS-5513","IM-4980","ZF-2400","UQ-3278","ML-5201",
                "HA-6747","CD-6865","SN-3721","EA-7754","DJ-8143","TZ-3141","YI-9525","OZ-8837","OT-7934","IK-723","IP-3251","YT-5882","WU-6285","RL-2424",
                "JA-3585","UI-7439","JA-2311","EI-4530","DF-1922","WX-2962","LC-4167","LI-8519","EF-9415","asdf","QZ-2069","FG-7550","BB-2586","JX-9687","SI-8241","GH-40","RY-8421","ZB-2196","QF-4087",
                "RE-2030","SX-3005","XD-7719","WN-3324","CL-7927","BO-8080","CA-6898","NT-3204","GU-9985","KC-663","IQ-7559","TF-1591","SR-7456","TU-7593",
                "GM-158","WA-8866","XZ-7402","SO-7499","NL-329","VK-579","UV-4081" ,
                "RU-794","CJ-2035","VU-8026","LZ-7044","OZ-6247","BP-2184","VV-3047","BH-7154","LC-9970","FD-1021","OM-7444","YF-8203","GA-9215","MX-9436","VX-8887","VF-1629","FH-564","GO-5806","NU-2412","MT-4793","EH-5567","SP-8120","352","DK-8715","AZ-9836","DX-1249","GH-5018","QE-9287","OY-8310","PW-9832","GA-8237","EG-2792","EJ-5507",
                "YX-7841","SE-8531","DH-3186","WV-4939","UJ-1630","AF-9038","EP-6708","KB-5572","JZ-5755","OS-1653","IB-5897","BK-4261",
                "BP-7118","IS-6879","UD-3884","KP-1265","ES-6901","AJ-4997","BI-3207","UZ-1852","VU-5721","TN-6456","EU-3651","FA-9518","OB-9606",
                "CJ-1117","PV-8320","HQ-5704","FA-3375","TA-7112","AI-6547","FV-8284","DH-1410","MY-9176","GV-8824","WK-2128","WI-7243","FG-6449","SW-8880","US-5047","28482","DH-6352","VA-7746","KS-4435","IN-5641","KE-7074","XD-2174","RL-2407","UL-1598","QW-8389","HO-3805","XS-5846",
                "EG-8579","WX-1687","NB-7257","KO-6572","OP-7507","BN-2731","OL-3582","NL-6289","VO-6008","NS-2486","HZ-7123","OH-1350","RA-4657","BB-659","ZB-2597","MF-5598","CA-4721","HA-4902","OL-4487","VN-6783","ZV-3126","IL-264","JP-4346","LQ-5161","KA-7482","YT-2591","UO-2200","LJ-9486",
                "TC-6590","LP-2621","FK-9165","HC-5715","UW-2025","QX-1074","ZW-4699",
                "OE-8107","XO-5459","AR-2397","EJ-1867","2fd","AQ-2441","RL-6719","TD-5187","PS-5490",
                "FN-9480","RD-4395","XQ-2884","NC-7058","QR-6514","QT-1805","QX-789","DN-4365","IM-3252","NB-5956",
                "QK-9305","MN-6071","LL-8655","MS-7586","UP-7051","XD-3938","TG-1026","BN-5340","TO-1886","SY-5203","IM-4740","DT-6068","QN-8654","UF-1690","ZX-9891","PM-3088","JH-6363","RR-4593","II-44","FV-1655","NI-5183",
                "KF-8218","MR-5368","FV-3154","LE-201","JO-5548","CG-1671","AG-4558","GK-3790","ND-6673","HO-5133","WL-7815","GK-4201","VR-7697"]


        var jobj = {}

        for (var s=0;s<500;s++) {

            jobj["storeNo"] = stores[ Math.floor(Math.random() * 1000) % stores.length ]

            jobj["salesDate"] = "2021-0"+ (Math.floor(Math.random() * 100) % 10 + 1) +"-"+ (Math.floor(Math.random() * 100) % 9 + 10 + Math.floor(Math.random() * 100) % 9)

            jobj["managerName"] = String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(97 + Math.floor(Math.random() * 100) % 26)

            jobj["managerId"] = "MNID"
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + String.fromCharCode(65 + Math.floor(Math.random() * 100) % 26)
                + Math.floor(Math.random() * 10000)

            jobj["noOfPOSTr"] = Math.floor(Math.random() * 1000)
            jobj["netPOSAmt"] = Math.random() * 10000
            jobj["noOfOnlineTr"] = Math.floor(Math.random() * 1000)
            jobj["netOnlineOrderAmt"] = Math.random() * 10000
            jobj["noOfReturns"] = Math.floor(Math.random() * 1000)
            jobj["netReturnsAmt"] = Math.random() * 10000
            jobj["netDiscountAmt"] = Math.random() * 10000

            console.log(jobj)

            sendobj(jobj)

            sleep(500000)

        }
    }

    function sendobj(jobj) {
        axios.post('/sales', jobj)
            .then(function (response) {
                toast.success("Data Submitted")
            })
            .catch(function (error) {
                toast.error(""+error)
            });
    }

    function sleep(milliseconds) {
        for (var i = 0; i < milliseconds;) {
            i++;
        }
    }

    function sndBtn500() {
        add500sales()
    }

    return(
        <div>
            <div className="ma2">
                <h1>Sales</h1>
                <p>Add a Sales</p>
                <button onClick={()=>{
                    sndBtn500()
                }
                }>Add500</button>
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
                    <Button color="primary" onClick={()=>{
                        addSales()
                    }
                    } >Add</Button>
                </div>
            </div>
            <ToastContainer/>

        </div>

    )
}

export default InsertSales;