import axios from "axios";
import React, { useState } from "react";
import AfterLoginNav from "./AfterLoginNav";
import Navbar from "./Navbar";


function Check()
{
    const [myImage,setimgg]=useState()
    async function editho(e){
        e.preventDefault()
        const formData=new FormData()
        formData.append("formfiles",myImage)
        console.log(formData)
        try {

            const rslt=await axios.post("https://localhost:5008/api/Formfiles",formData)
            console.log(rslt)
        }catch (error) {
            console.log(error)
        }
    }
    const handleimg=(e)=>{
        console.log("target files")
        console.log(e.target.files[0])
        if(e.target.files[0])
        {  
          setimgg(e.target.files[0])
        }
    }
    return(
        <>
        <AfterLoginNav/>
            <form onSubmit={editho} style={{ display: "flex", flexDirection: "column" }} encType="multipart/form-data">
                <label for="myfile" style={{color:"white",fontSize:"1.3rem"}}>Cover Image</label>
                <input type="file" id="myfile" name="myfile"  onChange={handleimg}/>
                <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                    </div>
            </form>
        </>
    )
}

export default Check;