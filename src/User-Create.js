import React from 'react'
import { useFormik } from 'formik'
function UserCreate() {
    const formik = useFormik({
        initialValues:{
            Name:"",
            Position:"",
            Office:"",
            Age:0,
            Startdate:"",
            Salary:""
        },
        onSubmit: async values =>{
        //   alert(JSON.stringify(values,null,2))
          try {
            await fetch("https://61974899af46280017e7e4ed.mockapi.io/surveyform",{
                method :"POST",
                body : JSON.stringify(values),
                headers :{
                    "content-type":"application/json"
                }
             })
             alert("Data saved")
          } catch (error) {
              console.log(error)
              
          }
        }
    })
    return (
     <>
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>

                    </div>
                   <div className='container'>
                   <form onSubmit={formik.handleSubmit}>
                       <div className='row'> 
                       
                       <div className='col-lg-6'>
                           <label>Name</label>
                           <input type="text" name='Name' className='form-control'
                           onChange={formik.handleChange}
                           value={formik.values.Name}/>
                       </div>
                       <div className='col-lg-6'>
                           <label>Position</label>
                           <input type="text" name='Positon' className='form-control'onChange={formik.handleChange}
                           value={formik.values.Position}/>
                       </div>
                       <div className='col-lg-3'>
                           <label>Office</label>
                           <input type="text" name='Office' className='form-control'onChange={formik.handleChange}
                           value={formik.values.Office}/>
                       </div>
                       <div className='col-lg-3'>
                           <label>Age</label>
                           <input type="number" name='Age' className='form-control'onChange={formik.handleChange}
                           value={formik.values.Age}/>
                       </div>
                       <div className='col-lg-3'>
                           <label>Startdate</label>
                           <input type="date" name='Startdate' className='form-control'onChange={formik.handleChange}
                           value={formik.values.Startdate}/>
                       </div>
                       <div className='col-lg-3'>
                           <label>Salary</label>
                           <input type="number" name='Salary' className='form-control'onChange={formik.handleChange}
                           value={formik.values.Salary}/>
                       </div>
                       <div className='col-lg-3'>
                           
                           <input type="Submit" className='btn btn-primary mt-3'/>
                       </div>
                       
                    </div>
                    </form>
                </div>
     </>
    )
}

export default UserCreate;
