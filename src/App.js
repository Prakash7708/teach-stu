//import logo from './logo.svg';
//import './App.css';

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Createteacher from "./Createteacher";
import CreateStudent from "./CreateStudent";
import Viewstudent from "./Viewstudent"; 
import Editstudents from "./Editstudents";
import Viewteacher from "./Viewteacher";
import Editteacher from "./Editteacher";

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
            <Topbar/>
            <div className="container-fluid">
              
                     <Routes>
               
                 
                    <Route path="/"  element={<TeacherDashboard/>}/>
                    <Route path="students" element={<StudentDashboard/>}/> 
                    <Route path="/CreateTeacher" element={<Createteacher/>}/> 
                    <Route path="/CreateStudent" element={<CreateStudent/>}/> 
                    <Route path="/Viewsts/:id" element={<Viewstudent/>}/>
                    <Route path="/Viewstsedit/:id" element={<Editstudents/>}/>
                    <Route path="/Viewths/:id" element={<Viewteacher/>}/>
                    <Route path="/Viewthsedit/:id" element={<Editteacher/>}/>

                    {/* <Route path="Users/create" element={<New/>}/> */}

                    </Routes>
                    
              </div>
              </div>

    </div>
    </div>
    </BrowserRouter>
      
        
    
  );
}

export default App;
