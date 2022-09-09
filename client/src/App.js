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
import PageNotFound from "./PageNotFound";
import ViewReport from "./ViewReport";
import ViewProfile from "./ViewProfile";
import Admin from "./Admin";
function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      {loggedIn === false && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>)}
      {loggedIn===true&&(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateprofile/:id" element={<UpdateProfile/>}/>
        <Route path="/writereport" element={<WriteReport/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/report/:id" element={<ReportProfile/>}/>
        <Route path="/report/edit/:id" element={<EditReport/>}/>
        <Route path="/viewreport/:id" element={<ViewReport/>}/>
        <Route path="/viewprofile/:id" element={<ViewProfile/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      )}
    </div>
  )
}

export default App;