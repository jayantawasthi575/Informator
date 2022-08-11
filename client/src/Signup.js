import Navbar from "./Navbar";
import { Link } from "react-router-dom"
function Signup() {
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <hr />

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <Link to="/login" className="float-right btn btn-outline-primary mt-1">Log in</Link>
                                <h4 className="card-title mt-2">Sign up</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" " required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="" required/>
                                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input className="form-control" type="password" required/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                                    </div>
                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Have an account? <Link to="/login">Log In</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup;