import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
import AfterLoginNav from "./AfterLoginNav";
function Profile() {
    const [img_urll,setimgurll]=useState( process.env.PUBLIC_URL + "./assests/images/thumbnail.svg")
    let history=useNavigate()
    const {loggedIn,getloggedin}=useContext(AuthContext)
    const [arr,setarr]=useState([{"id":"","firstName":"","lastName":"","photo":"","age":"","phonenumber":"","education":"","country":""}])
    let {id}=useParams()
    useEffect(()=>{
        async function senddata() {
            try {
                const data = localStorage.getItem("token")
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + data
                    }
                }
                const loggedinres = await axios.get("https://localhost:5012/api/ProfileCRUD/viewprofilebyid/"+id, config)
                console.log(loggedinres)
                setarr(loggedinres.data)
            } catch (error) {
                console.log(error)
            }
        }
        senddata()
    },[])
    useEffect(()=>{
        if(arr[0].photo!=null)
        {
            console.log(arr[0].photo+"hello")
            setimgurll("https://localhost:5012/Images/"+arr[0].photo)
        }
        else
        {
            console.log("yes")
            setimgurll(process.env.PUBLIC_URL + "/assests/images/thumbnail.svg")
        }
    },[arr])
    return (
        <>
            <AfterLoginNav/>
            <div className="container">
                <br />
                <hr />
                {arr.map(item => {
                        return (
                            <>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <article className="card-body">
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name: {item.firstName} </label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name: {item.lastName}</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Age: {item.age} </label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Phone Number: {item.phoneNumber}</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Education: {item.education}</label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Country: {item.country}</label>
                                        </div>
                                    </div>
                            </article>
                        </div>
                    </div>

                </div>
                </>)})}
            </div>
        </>
    )
}

export default Profile;