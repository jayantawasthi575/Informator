import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import axios from "axios"
function WriteReport() {
    const [firstName, setfirstname] = useState("")
    const [lastName, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [role, setrole] = useState("")
    const [img_urll, setimgurll] = useState(process.env.PUBLIC_URL + "./assests/images/thumbnail.svg")
    let history = useNavigate()
    const { loggedIn, getloggedin } = useContext(AuthContext)
    async function senddata(e) {
        e.preventDefault()
        try {
            const datatosend = {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "password": password,
                "role": ""
            }
            console.log("login data", datatosend)
            const loggedinres = await axios.post("https://localhost:5001/api/Registration", datatosend, { withCredentials: true })
            console.log(loggedinres)
            history("/login", { replace: true });
        } catch (error) {
            console.log(error)
        }
    }
    const handleimg = (e) => {
        setimgurll(URL.createObjectURL(e.target.files[0]))
    }
    useEffect(() => { if (loggedIn) { history("/", { replace: true }) } }, [])
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
                                <form onSubmit={senddata}>
                                    <label for="myfile" style={{ color: "white", fontSize: "1.3rem" }}>Cover Image</label>
                                    <input type="file" id="myfile" name="myfile" onChange={handleimg} />
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Report Name</label>
                                            <input type="text" className="form-control" placeholder="" onChange={(e) => { setfirstname(e.target.value) }} required />
                                        </div>
                                        <div className="col form-group">
                                            <label>Tags</label>
                                            <input type="text" className="form-control" placeholder=" " onChange={(e) => { setlastname(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Heading</label>
                                            <input type="text" className="form-control" placeholder="" onChange={(e) => { setfirstname(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Content</label>
                                            <textarea id="wmd-input" name="post-text" class="wmd-input s-input bar0 js-post-body-field processed" data-post-type-id="2" cols="65" rows="10" tabindex="101" data-min-length=""></textarea>
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

export default WriteReport;