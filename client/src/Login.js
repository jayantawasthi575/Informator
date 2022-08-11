import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Login() {
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
                                <Link to="/signup" className="float-right btn btn-outline-primary mt-1">Sign up</Link>
                                <h4 className="card-title mt-2">LogIn</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Password</label>
                                        <input className="form-control" type="password" required/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                    </div>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Don't Have an account? <Link to="/signup">Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;