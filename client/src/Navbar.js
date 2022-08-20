import { Link } from "react-router-dom";
import Login from "./Login";
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Informator</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login" style={{ color: "white" }}>Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup" style={{ color: "white" }}>SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;