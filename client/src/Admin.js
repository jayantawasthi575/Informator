import axios from "axios";
import React, { useEffect, useState } from "react";
import AfterLoginNav from "./AfterLoginNav";
function Admin() {
    const [arr,setArr]=useState([{"id": 1,
    "firstName": "",
    "lastName": "",
    "email":"",
    "password": "",
    "role": "Admin",
    "photo": null,
    "age": null,
    "phoneNumber": null,
    "education": null,
    "country": null}])
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
                //console.log(id)
                const loggedinres = await axios.get("https://localhost:5004/api/Auth/Admin/", config)
                console.log(loggedinres)
                setArr(loggedinres.data)
                //setimgurll("https://localhost:5008/Images/"+arr[0].photo)
            } catch (error) {
                console.log(error)
            }
        }
        senddat()
    }, [])
    return (<>
        <AfterLoginNav />
        <div className="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FirsName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item,index)=>{
                    return(
                        <>
                <tr>
                    <th scope="row">{index}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                </tr>
                </>
                )
            })}
            </tbody>
        </table>
        </div>
    </>)
}
export default Admin;