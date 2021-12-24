// import React from 'react'
import { Link } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
// import React,{usestate} from 'react';
function Userlist() {
     const [users, setUsers] = useState([])
    useEffect(async() => {
        try {
           const users = await fetch("https://61974899af46280017e7e4ed.mockapi.io/surveyform")
               let userData = await users.json()
             setUsers(userData)
            //  alert("Data saved")

          } catch (error) {
              console.log(error)
              
          }
        
    }, [])
    return (
       <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
                        <Link to="/User-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Creat User</Link>
                    </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       {
                                       users.map((user)=>{
                                           return   <tr>
                                           <td>{user.Name}</td>
                                           <td>{user.Position}</td>
                                           <td>{user.Office}</td>
                                           <td>{user.Age}</td>
                                           <td>{user.Startdate}</td>
                                           <td>{user.salary}</td>
                                           <td>
                                            <Link to={`/User-edit/${user.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                               <Link to = {`/user-delet$${user.id}`}><button className='btn btn-danger btn-sm'>delete</button></Link>
                                           </td>
                                         </tr>
                                         
                                           
                                       })
                                       }
                                        

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

       </>
    )
}

export default Userlist
