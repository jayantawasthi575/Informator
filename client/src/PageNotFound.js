import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from './AuthContext'
function PageNotFound()
{
    let history=useNavigate()
    const {loggedIn,getloggedin}=useContext(AuthContext)
    useEffect(()=>{
    history("/",{replace:true})},[])
}

export default PageNotFound;