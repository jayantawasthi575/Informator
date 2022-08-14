import React, { Component } from 'react'
import Navbar from './Navbar';

function Report()
{
    const img_urll = process.env.PUBLIC_URL + "./assests/images/thumbnail.svg"
    return(
        <>
        <Navbar/>
            <div className="container">
                <br/>
                <hr/>
            <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">Total Likes:</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">Total Likes:</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}

export default Report;