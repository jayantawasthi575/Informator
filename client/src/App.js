import {Routes,Route} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import Logout from "./Logout";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import WriteReport from "./WriteReport";
import Report from "./Report";
import Check from "./Check";
import ReportProfile from "./ReportProfile";
import EditReport from "./EditReport";
function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      {loggedIn === false && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/writereport" element={<WriteReport/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/check" element={<Check/>}/>
      </Routes>)}
      {loggedIn===true&&(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/writereport" element={<WriteReport/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/report/:id" element={<ReportProfile/>}/>
        <Route path="/report/edit/:id" element={<EditReport/>}/>
        <Route path="/check" element={<Check/>}/>
        </Routes>
      )}
    </div>
  )
}

export default App;