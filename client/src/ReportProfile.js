import React, { Component, useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router';
import AfterLoginNav from './AfterLoginNav';
import { useContext } from "react";
import AuthContext from './AuthContext'
function ReportProfile() {
    const img_urll = process.env.PUBLIC_URL + "./assests/images/thumbnail.svg"
    const [arr, setarr] = useState([])
    let {id}=useParams()
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
                const loggedinres = await axios.get("https://localhost:5008/api/Reporter/"+id, config)
                console.log(loggedinres)
                setarr(loggedinres.data)
            } catch (error) {
                console.log(error)
            }
        }
        senddata()
    }, [])
    
    return (
        <>
            <AfterLoginNav/>
            <div className="container">
                <br />
                <hr />
                <div className="row justify-content-center">
                    {arr.map(item => {
                        return (
                            <>
                            <h3>{item.reportName}</h3>
                            <img className="card-img-top" src={"https://localhost:5008/Images/" + item.photo} alt="Card image cap" style={{ height: "347px" }} />
                            <h2>{item.heading}</h2>
                            <p>{item.content}</p>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default ReportProfile;