import Navbar from "./Navbar";
import './App.css'
import { useContext, useEffect, useState } from "react";
import AuthContext from './AuthContext'
import AfterLoginNav from "./AfterLoginNav";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
    const { loggedIn, getloggedin } = useContext(AuthContext)
    const [img_urll,setimgurll]=useState(process.env.PUBLIC_URL + "./assests/images/thumbnail.svg")
    const [arr, setarr] = useState([{id:"",reportName:"",tags:"",heading:"",reporterId:"",firstName:"",lastName:"",photo:"",like:0}])

    useEffect(()=>{
        async function senddat() {
            try {
                const data = localStorage.getItem("token")
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + data
                    }
                }
                console.log("hello")
                //console.log(id)
                const loggedinres = await axios.get("https://localhost:5008/api/Reporter/getallreports", config)
                console.log(loggedinres)
                setarr(loggedinres.data)
                //setimgurll("https://localhost:5008/Images/"+arr[0].photo)
            } catch (error) {
                console.log(error)
            }
        }
        senddat()
    },[])
     async function likedata(id,index){
        console.log("index",index)
        try {
            const data = localStorage.getItem("token")
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + data
                }
            }
            console.log("hello")
            //console.log(id)
            const loggedinres = await axios.put("https://localhost:5008/api/Reporter/increaselike/"+id, undefined,config)
            console.log(loggedinres)
            arr[index].like=arr[index].like+1
            setarr([...arr])
            //setimgurll("https://localhost:5008/Images/"+arr[0].photo)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        {loggedIn===true && <><AfterLoginNav/>
        <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Informator</h1>
                        <p className="lead text-muted">Your Daily News Reporter<br/>Informator is an Indian English Language News Portal owned by Jayant Awasthi</p>
                        <p>
                            <a href="#" className="btn btn-primary mt-2 mr-2">Reports</a>
                            <span className=""></span>
                            <a href="#" className="btn btn-secondary mt-2 mr-2">Profile</a>
                        </p>
                    </div>
                </section>
                <div className="album py-5 bg-dark">
                    <div className="container-fluid">

                        <div className="row">
                        {arr.map((item,index)=> {
                        return (
                            <>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={"https://localhost:5008/Images/" + item.photo} alt="Card image cap" height="225"/>
                                    <div className="card-body">
                                    <h4 className="card-text">{item.reportName}</h4>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-text">{item.heading}</p>
                                                <p className="card-text">{item.tags}</p>
                                            </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <Link type="button" className="btn btn-sm btn-outline-secondary" to={"/viewreport/" + item.id}>View</Link>
                                                <input type="button" value="Like" className="btn btn-sm btn-outline-secondary" onClick={()=>likedata(item.id,index)}/>
                                            </div>
                                            <small className="text-muted">Total No. Of Like:{item.like}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )})}
                        </div>
                    </div>
                </div>
        </main>
        </>}
            {loggedIn === false && 
            <>
            <Navbar/>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary mt-2 mr-2">Main call to action</a>
                            <span className=""></span>
                            <a href="#" className="btn btn-secondary mt-2 mr-2">Secondary action</a>
                        </p>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>

                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
            }
            <footer class="text-muted">
                <div class="container">
                    <p class="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                </div>
            </footer>
        </>
    )
}

export default Home;