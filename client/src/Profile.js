import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
function Profile() {
    const [firstName,setfirstname]=useState("")
    const [lastName,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [role,setrole]=useState("")
    const [img_urll,setimgurll]=useState( process.env.PUBLIC_URL + "./assests/images/thumbnail.svg")
    let history=useNavigate()
    const {loggedIn,getloggedin}=useContext(AuthContext)
    async function senddata(e){
        e.preventDefault()
        try {
            const datatosend={
                    "firstname":firstName,
                    "lastname":lastName,
                    "email":email,
                    "password":password,
                    "role":""
            }
            console.log("login data",datatosend)
            const loggedinres=await axios.post("https://localhost:5001/api/Registration",datatosend,{ withCredentials: true })
            console.log(loggedinres)
            history("/login", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }
    const handleimg=(e)=>{
        setimgurll(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <hr />

                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <article className="card-body">
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Age </label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Phone Number</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Education</label>
                                        </div>
                                        <div className="col form-group">
                                            <label>Country</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Update Profile</button>
                                    </div>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;