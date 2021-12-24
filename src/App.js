import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';


import {
  BrowserRouter,
  Routes,
 
  Route,
  
} from "react-router-dom";
import UserCreate from './User-Create';
import Useredit from './Useredit';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">

          <Topbar/>
          <div className='container-fluid'>
         
            
              <Routes>
                <Route path="/" element={<Dashboard/>} ></Route>
                <Route path="/Users" element={<Userlist/>}> </Route>
                <Route path="/User-create" element={<UserCreate/>}> </Route>
                <Route path="/User-edit/:id" element={<Useredit/>}> </Route>  
              </Routes>
             
          </div>
        </div>
      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
