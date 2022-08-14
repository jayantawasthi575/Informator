import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import { useNavigate } from 'react-router-dom'
import axios from "axios"
function Login() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [correct,setcorrect]=useState(undefined)
    const {loggedIn,getloggedin}=useContext(AuthContext)
    let history=useNavigate()
    async function login(e){
        e.preventDefault()
        try {
            const logindata={
                    "email":email,
                     "password":pass
            }
            const data=localStorage.getItem("token")
            console.log("login data",logindata)
            const loggedinres=await axios.post("https://localhost:5004/api/Auth",logindata,{ withCredentials: true })
            setcorrect(loggedinres.data)
            console.log(loggedinres)
            console.log({correct})
            localStorage.setItem("token",loggedinres.data.token)
            getloggedin()
            history("/", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{if(loggedIn){history("/",{replace:true})}},[])
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <Link to="/signup" className="float-right btn btn-outline-primary mt-1">Sign up</Link>
                                <h4 className="card-title mt-2">LogIn</h4>
                            </header>
                            <article className="card-body">
                                <form onSubmit={login}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="" onChange={(e)=>{setEmail(e.target.value)}} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Password</label>
                                        <input className="form-control" type="password" onChange={(e)=>{setPass(e.target.value)}} required/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                    </div>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Don't Have an account? <Link to="/signup">Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;