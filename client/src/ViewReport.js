import React, { Component, useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router';
import AfterLoginNav from './AfterLoginNav';
import { useContext } from "react";
import AuthContext from './AuthContext'
import { Link } from 'react-router-dom';
function ViewReport() {
    const img_urll = process.env.PUBLIC_URL + "./assests/images/thumbnail.svg"
    const [arr, setarr] = useState([])
    let { id } = useParams()
    const [comment, setComment] = useState("")
    useEffect(() => {
        async function senddata() {
            try {
                const data = localStorage.getItem("token")
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + data
                    }
                }
                console.log(id)
                const loggedinres = await axios.get("https://localhost:5008/api/Reporter/viewreportbyid/" + id, config)
                console.log(loggedinres)
                setarr(loggedinres.data)
            } catch (error) {
                console.log(error)
            }
        }
        senddata()
    }, [])
    async function addComment(id, firstName, lastName, index) {
        console.log("index", index)
        try {
            const data = localStorage.getItem("token")
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + data
                }
            }
            const datatosend = {
                "firstName": firstName,
                "lastName": lastName,
                "message": comment,
                "infoReportId": id
            }
            const loggedinres = await axios.post("https://localhost:5008/api/Reporter/AddComment", datatosend, config)
            console.log(loggedinres)

            arr[index].comments.push(datatosend)
            setarr([...arr])
            //setimgurll("https://localhost:5008/Images/"+arr[0].photo)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <AfterLoginNav />
            <div className="container">
                <br />
                <hr />
                <div className="row justify-content-center">
                    {arr.map((item, index) => {
                        return (
                            <div className='col-12' align="center" >
                                <h3>{item.reportName}</h3>
                                <img className="card-img-top" src={"https://localhost:5008/Images/" + item.photo} alt="Card image cap" style={{ height: "347px" }} />
                                <h2>{item.heading}</h2>
                                <p>{item.content}</p>
                                <Link type="button" className="btn btn-sm btn-outline-secondary" to={"/viewprofile/" + item.reporterId}>By-{item.firstName} {item.lastName}</Link>
                                <p className="text-primary">Total No. Of Like:{item.like}</p>
                                <div>
                                    <input type="text" className="form-control" placeholder="Add Comment"  onChange={(e) => { setComment(e.target.value) }} required />
                                    <br />
                                    <button type="submit" className="btn btn-primary btn-block" onClick={() => addComment(item.id, item.userFirstName, item.userLastName, index)}>Add Comment</button>
                                </div>
                                <br/>
                                {item.comments.map((it, index) => {
                                    return (
                                        <div className="d-flex">
                                            <h4>{it.firstName} {it.lastName} - {it.message}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ViewReport;