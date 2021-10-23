import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
import { Avatar } from '@mui/material';
import axios from 'axios';
let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function SeeProd() {


    let [prodData, setProdData] = useState({});
    let [date, setDate] = useState();

    let history = useHistory()

    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        let d = new Date();
        let l = days[(d.getDay() + 2) % 7] + ", " + months[d.getMonth()] + " " + ((d.getDate() + 2) % 31);
        setDate(l);
        axios.post('http://localhost:5000/seeprod', { id }).then(async (d) => {
            setProdData(d.data)
        })
    }, [setProdData])

    const addtocart = (e) => {
        let user = localStorage.getItem("user")
        if (user) {
            let id = e.target.id;
            axios.post('http://localhost:5000/addtocart', { id, user }).then((d) => {
                if (d.status == 200) {
                    alert("Item Added to Cart")
                    // <Alert severity="success">Item Added to Cart</Alert>
                    setProdData = d.data;
                }
                else if (d.status == 201) {
                    alert("Please Login First")
                    // <Alert severity="error">Please Login First!</Alert>
                }
            })
        }
        else {
            alert("Please Login First")
            // <Alert severity="error">Please Login First!</Alert>
        }
    }


    // require('@/img' + "seeprod1.png" + '')


    return (
        <>
            <div className="prodContainer"  style={{ background: "white" }} >
                <div className="SeeProdSideBar " style={{ "position": "initial" }}>
                    <div className="d-flex cursor" onClick={history.goBack}>
                        <i className="fas fa-arrow-left  fa-lg my-auto mx-2"></i> <h5 className="my-auto">Go back</h5>

                    </div>
                    <img className="seeFullItem" src={prodData.prodImg} alt="" />
                    <div className="row mx-4 my-3">
                        <div className="col text-center">
                            <img src={window.location.origin + '/img/seeprod1.png'} alt="" width="60px" /><p className="font-12 bold-6"> Pay on delivary</p>
                        </div>
                        <div className="col text-center">
                            <img src={window.location.origin + '/img/seeprod2.png'} alt="" width="60px" /><p className="font-12 bold-6"> 7 Days Replacement</p>
                        </div>
                        <div className="col text-center">
                            <img src={window.location.origin + '/img/seeprod3.png'} alt="" width="60px" /><p className="font-12 bold-6"> Amazon Delivered</p>
                        </div>
                        <div className="col text-center">
                            <img src={window.location.origin + '/img/seeprod4.png'} alt="" width="60px" /><p className="font-12 bold-6"> 1 Year Warranty</p>
                        </div>
                    </div></div>

                <div className="SeeProdSideBar  allDetails" >
                    <h4>{prodData.prodName} 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h4>
                    <h6>Brand: {prodData.prodBrand}
                    </h6>

                    <p className="star_para bold-6">{prodData.prodBrand}<br />  ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <div className="my-5">
                        <h6 className="text-center my-3">Price :	<span style={{ "text-decoration": "line-through", "fontSize": "16px" }}>${prodData.highPrice}</span></h6>
                        <h4 className="text-center">M.R.P. :${prodData.lowPrice}</h4>
                        <h6 className="text-center">You Save:	${prodData.highPrice - prodData.lowPrice} (12%)
                            Inclusive of all taxes</h6>
                        <button className="btnOrange mx-auto my-3 w-75 " >Buy Now</button>
                        <button id={prodData._id} className="btnNocolor mx-auto my-3 w-75 " onClick={addtocart}>Add to Cart</button>
                    </div>
                    <div>
                        <h5 className="mt-5">FREE delivery On: {date}</h5>
                        <p className="font-14"> Fastest delivery: Tomorrow <br />
                            Order within 1 hr and 10 mins Details</p>
                        <p className="font-14"> EMI starts at ₹1,036. No Cost EMI available EMI options</p>
                        <h6>Save Extra with 4 offers</h6>
                        <p className="font-14"> Bank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions DetailsBank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions Details</p>
                    </div>
                </div>
            </div>
            <div className="my-2 px-5 mb-4">
                <h4>Have a question?</h4>
                <p className="font-14">Find answers in product info, Q&As, reviews</p>
                <input type="text" className="loginInput w-50" placeholder="Type your question or keyword" />
            </div>
            <hr />
            <div className="row px-5 mt-4 justify-content-around">
                <div className="col-md-5">
                    <h4 className="mb-4">Customer reviews</h4>
                    <h6>⭐⭐⭐⭐ 4 Out of 5</h6>
                    <table className="w-100">
                        <td style={{"width":"10%"}}>
                            <tr> <p className="mb-2"> 5 ⭐</p></tr>
                            <tr> <p className="my-1"> 4 ⭐</p></tr>
                            <tr> <p className="my-1"> 3 ⭐</p></tr>
                            <tr> <p className="my-1"> 2 ⭐</p></tr>
                            <tr> <p className="mt-1"> 1 ⭐</p></tr>
                        </td>
                        <td>
                        <div class="progress h-20 my-3">
                        <div class="progress-bar bg-orange" role="progressbar" style={{ "width": "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="progress h-20 my-3">
                        <div class="progress-bar bg-orange" role="progressbar" style={{ "width": "55%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="progress h-20 my-3">
                        <div class="progress-bar bg-orange" role="progressbar" style={{ "width": "35%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="progress h-20 my-3">
                        <div class="progress-bar bg-orange" role="progressbar" style={{ "width": "15%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="progress h-20 my-3">
                        <div class="progress-bar bg-orange" role="progressbar" style={{ "width": "5%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        </td>
                        <td className="color-cyne" style={{"width":"10%"}}>
                            <tr> <p className="mb-2 mx-3"> 65% </p></tr>
                            <tr> <p className="my-1 mx-3"> 55% </p></tr>
                            <tr> <p className="my-1 mx-3"> 35% </p></tr>
                            <tr> <p className="my-1 mx-3"> 15% </p></tr>
                            <tr> <p className="mt-1 mx-3"> 5%  </p></tr>
                        </td>
                    </table>
                    <hr />
                    <h5>By feature</h5>
                    <table className="w-100">
                        <td>
                        <tr>Value for money</tr>
                        <tr>Value for money</tr>
                        <tr>Value for money</tr>
                        </td>
                        <td >
                        <tr>⭐⭐⭐⭐ 4</tr>
                        <tr>⭐⭐⭐⭐ 4</tr>
                        <tr>⭐⭐⭐⭐ 4</tr>
                        </td>
                    </table>
                
        <hr />
                <h4 className="mt-5">Review this product</h4>
                <p>Share your thoughts with other customers</p>
                <input type="text" className="loginInput w-100 mb-3" placeholder="Type your question or keyword" />
                <div className="text-end">
                <button className="btn border-1 p-1 btn-white px-3 ml-0">Submit</button>
                </div>
                <hr />
                </div>
                <div className="col-md-5 text-center">
                    <h4>Top reviews from India</h4>
                    <div className="d-flex align-items-center">
                        <Avatar>A</Avatar>
                        <p className="text-center mb-1 mx-2">Ayush Kakkar</p>
                    </div>
                    <div className="text-start mx-5">
                        <p className="mb-1"> ⭐⭐⭐⭐ Worth buying ! So happy with the product . Design is amazing </p>
                        <p className="m-0">Reviewed in India on 19 July 2021</p>
                        <p className="font-12 color-brown bold-6">Verified Purchase</p>
                        <p className="font-14">There are a bunch of reviews on the product already. Just sharing my 1st day experience so far, I loved it. This is a major upgrade for me, I jumped from iPhone 7 to 13mini after 4 years.All the faults from iPhone 12mini are addressed in this phone. This will be a model which I can hold for at-least next three years in my opinion.</p>
                        <button className="btn border-1 p-1 btn-white px-3">Helpful</button>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <Avatar>A</Avatar>
                        <p className="text-center mb-1 mx-2">Ayush Kakkar</p>
                    </div>
                    <div className="text-start mx-5 mb-5">
                        <p className="mb-1"> ⭐⭐⭐⭐ Worth buying ! So happy with the product . Design is amazing </p>
                        <p className="m-0">Reviewed in India on 19 July 2021</p>
                        <p className="font-12 color-brown bold-6">Verified Purchase</p>
                        <p className="font-14">There are a bunch of reviews on the product already. Just sharing my 1st day experience so far, I loved it. This is a major upgrade for me, I jumped from iPhone 7 to 13mini after 4 years.All the faults from iPhone 12mini are addressed in this phone. This will be a model which I can hold for at-least next three years in my opinion.</p>
                        <button className="btn border-1 p-1 btn-white px-3">Helpful</button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SeeProd
