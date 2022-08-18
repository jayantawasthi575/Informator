import React, { Component, useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Report() {
    const img_urll = process.env.PUBLIC_URL + "./assests/images/thumbnail.svg"
    const [arr, setarr] = useState([])
    
    let history = useNavigate()
    useEffect(() => {
        async function senddata() {
            try {
                const data = localStorage.getItem("token")
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + data
                    }
                }
                const loggedinres = await axios.get("https://localhost:5008/api/Reporter", config)
                console.log(loggedinres)
                setarr(loggedinres.data)
            } catch (error) {
                console.log(error)
            }
        }
        senddata()
    }, [])
    const gotothat = (id) => {
        const str = "/report/" + id
        history(str, { replace: true })
    }
    async function deletedata(id){
        try {
            const data = localStorage.getItem("token")
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + data
                }
            }
            const loggedinres = await axios.delete("https://localhost:5008/api/Reporter/deletereportbyid/"+id, config)
            console.log(loggedinres)
                setarr(current =>
                  current.filter(emp => {
                    return emp.id !==id ;
                  }))
            
            //history("/report",{replace:true})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <hr />
                <div className="row justify-content-center">
                    {arr.map(item => {
                        return (
                            <>
                                <div className="col-md-6">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={"https://localhost:5008/Images/" + item.photo} alt="Card image cap" style={{ height: "347px" }} />
                                        <div className="card-body">
                                            <h4 className="card-text">{item.reportName}</h4>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-text">{item.heading}</p>
                                                <p className="card-text">{item.tags}</p>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <Link type="button" className="btn btn-sm btn-outline-secondary" to={"/report/" + item.id}>View</Link>
                                                    <Link type="button" className="btn btn-sm btn-outline-secondary" to={"/report/edit/" + item.id}>Edit</Link>
                                                    <input type="button" value="Delete" className="btn btn-sm btn-outline-secondary" onClick={()=>deletedata(item.id)}/>
                                                </div>
                                                <small className="text-muted">Total Likes:</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Report;