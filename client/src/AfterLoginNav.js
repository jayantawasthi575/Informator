import { Link } from "react-router-dom";
import Login from "./Login";
function AfterLoginNav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Informator</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/logout" style={{ color: "white" }}>Logout</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/updateprofile" style={{ color: "white" }}>UpdateProfile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/profile" style={{ color: "white" }}>Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/writereport" style={{ color: "white" }}>WriteReport</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/report" style={{ color: "white" }}>Report</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/check" style={{ color: "white" }}>Check</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default AfterLoginNav;