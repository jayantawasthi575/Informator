import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
function EditReport() {
    const [ReportName,setReportName] = useState("")
    const [Tags, setTags] = useState("")
    const [Heading, setHeading] = useState("")
    const [Content, setContent] = useState("")
    const [Phot,setimgg]=useState("")
    const [Photo, setimgurll] = useState(process.env.PUBLIC_URL + "/assests/images/thumbnail.svg")
    let history = useNavigate()
    const [arr, setarr] = useState([{reportName:"hello",tags:"",heading:"",content:"",photo:""}])
    let {id}=useParams()
    const { loggedIn, getloggedin } = useContext(AuthContext)
    const imageRef=useRef();
    const imageRe=useRef();
    async function senddata(e) {
        e.preventDefault()
        try {
            const datatosend = {
                ReportName,Tags,Heading,Content,Photo
            }
            console.log("Phot",Phot)
            const formData=new FormData()
            formData.append("ReportName",ReportName)
            formData.append("Tags",Tags)
            formData.append("Heading",Heading)
            formData.append("Content",Content)
            formData.append("Photo",Phot)
            const data=localStorage.getItem("token")
            let config = {
            headers: {
                'Authorization': 'Bearer ' + data
            }}
            const loggedinres = await axios.put("https://localhost:5008/api/Reporter/updatereportbyid/"+id, formData,config)
            console.log(loggedinres)
            history("/report", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }
    const handleimg = (e) => {
        setimgurll(URL.createObjectURL(e.target.files[0]))
        if(e.target.files[0])
        {  
          setimgg(e.target.files[0])
        }
    }
    useEffect(() => {
        async function senddat() {
            try {
                const data = localStorage.getItem("token")
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + data
                    }
                }
                console.log("hello")
                console.log(id)
                const loggedinres = await axios.get("https://localhost:5008/api/Reporter/"+id, config)
                console.log(loggedinres)
                setarr(loggedinres.data)
                //setimgurll("https://localhost:5008/Images/"+arr[0].photo)
            } catch (error) {
                console.log(error)
            }
        }
        senddat()
    }, [])
    useEffect(()=>{
        imageRef.current.src=Photo
    },[Photo])
    useEffect(()=>{
        setReportName(arr[0].reportName)
        setTags(arr[0].tags)
        setHeading(arr[0].heading)
        setContent(arr[0].content)
        setimgurll("https://localhost:5008/Images/"+arr[0].photo)
        setimgg(arr[0].photo)
    },[arr])
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <hr />

                <div className="row justify-content-center">
                     <div className="col-md-6">
                        <img className="card-img-top" src={Photo} alt="Card image cap" ref={imageRef} />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <article className="card-body">
                                <form onSubmit={senddata} encType="multipart/form-data">
                                    <label for="myfile" style={{ color: "white", fontSize: "1.3rem" }}>Cover Image</label>
                                    <input type="file" id="myfile" name="myfile" onChange={handleimg} ref={imageRe}/>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Report Name</label>
                                            <input type="text" value={ReportName} className="form-control" placeholder="" onChange={(e) => { setReportName(e.target.value) }} required />
                                        </div>
                                        <div className="col form-group">
                                            <label>Tags</label>
                                            <input type="text" value={Tags} className="form-control" placeholder=" " onChange={(e) => { setTags(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Heading</label>
                                            <input type="text" value={Heading} className="form-control" placeholder="" onChange={(e) => { setHeading(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Content</label>
                                            <textarea id="wmd-input" value={Content} name="post-text" class="wmd-input s-input bar0 js-post-body-field processed" data-post-type-id="2" cols="65" rows="10" tabindex="101" data-min-length="" onChange={(e) => { setContent(e.target.value) }}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
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

export default EditReport;