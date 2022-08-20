import Navbar from "./Navbar";
import AfterLoginNav from "./AfterLoginNav";
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
function UpdateProfile() {
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Photo,setPhoto]=useState("")
    const [Age,setAge]=useState("")
    const [PhoneNumber,setPhoneNumber]=useState("")
    const [Education,setEducation]=useState("")
    const [Country,setCountry]=useState("")
    const [img_urll,setimgurll]=useState( process.env.PUBLIC_URL + "./assests/images/thumbnail.svg")
    const [arr,setarr]=useState([{"id":"","firstName":"","lastName":"","photo":"","age":"","phonenumber":"","education":"","country":""}])
    let history=useNavigate()
    let {id}=useParams()
    const {loggedIn,getloggedin}=useContext(AuthContext)
    async function senddata(e){
        e.preventDefault()
        try {
            //console.log("login data",datatosend)
            const formData=new FormData()
            formData.append("FirstName",FirstName)
            formData.append("LastName",LastName)
            formData.append("Photo",Photo)
            formData.append("Age",Age)
            formData.append("PhoneNumber",PhoneNumber)
            formData.append("Education",Education)
            formData.append("Country",Country)
            const loggedinres=await axios.put("https://localhost:5012/api/ProfileCRUD/updateprofilebyid/"+id,formData,{ withCredentials: true })
            console.log("loggedinres",loggedinres)
            history("/profile", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }
    const handleimg=(e)=>{
        setimgurll(URL.createObjectURL(e.target.files[0]))
        if(e.target.files[0])
        {  
          setPhoto(e.target.files[0])
        }
    }
    useEffect(()=>{async function senddata() {
        try {
            const data = localStorage.getItem("token")
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + data
                }
            }
            const loggedinres = await axios.get("https://localhost:5012/api/ProfileCRUD/getprofilebyid", config)
            console.log(loggedinres)
            setarr(loggedinres.data)
        } catch (error) {
            console.log(error)
        }
    }
    senddata()},[])
    useEffect(()=>{
        setFirstName(arr[0].firstName)
        setLastName(arr[0].lastName)
        setPhoto(arr[0].photo)
        setAge(arr[0].age)
        setPhoneNumber(arr[0].phoneNumber)
        setEducation(arr[0].education)
        setCountry(arr[0].country)
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

                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <article className="card-body">
                                <form onSubmit={senddata}>
                                <label for="myfile" style={{color:"white",fontSize:"1.3rem"}}>Cover Image</label>
                                <input type="file" id="myfile" src={img_urll} name="myfile"  onChange={handleimg}/>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder="" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder="" value={LastName} onChange={(e)=>{setLastName(e.target.value)}} required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Age </label>
                                            <input type="text" className="form-control" placeholder="" value={Age} onChange={(e)=>{setAge(e.target.value)}} required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" placeholder=" " value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Education</label>
                                            <input type="text" className="form-control" placeholder="" value={Education} onChange={(e)=>{setEducation(e.target.value)}} required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Country</label>
                                            <input type="text" className="form-control" placeholder=" " value={Country} onChange={(e)=>{setCountry(e.target.value)}} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">Update</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdateProfile;