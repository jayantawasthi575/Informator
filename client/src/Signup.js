import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
function Signup() {
    const [firstName,setfirstname]=useState("")
    const [lastName,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [role,setrole]=useState("")
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
    useEffect(()=>{if(loggedIn){history("/",{replace:true})}},[])
    return (
        <>
            <Navbar/>
            <div className="container">
                <br />
                <hr />

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <Link to="/login" className="float-right btn btn-outline-primary mt-1">Log in</Link>
                                <h4 className="card-title mt-2">Sign up</h4>
                            </header>
                            <article className="card-body">
                                <form onSubmit={senddata}>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder="" onChange={(e)=>{setfirstname(e.target.value)}} required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" " onChange={(e)=>{setlastname(e.target.value)}} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="" onChange={(e)=>{setemail(e.target.value)}} required/>
                                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input className="form-control" type="password" onChange={(e)=>{setpassword(e.target.value)}} required/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                                    </div>
                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Have an account? <Link to="/login">Log In</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup;