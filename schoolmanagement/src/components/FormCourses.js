import React from 'react'

export default function FormCourses() {
  return (
    <div className = "border mt-20 m-auto p-10" style={{width:'400px',fontSize:'18px'}}>

        <form action="" name = "Course-Desc">
            <div>
            <label htmlFor="" > Enter the Course Title</label><br />
            <input type="text" id = "formInput" placeholder="Title"  />
            </div>

            <div>
            <label htmlFor=""  >Enter Course Description</label><br />
            <input type="text" id = "formInput" placeholder='Description' />
            </div>
            <div>
            <label htmlFor="" >Choose the Duration of the course</label><br />
            <select name="" id = "formInput">
                <option value="2 Weeks">2 Weeks</option>
                <option value="4 Weeks">4 Weeks</option>
                <option value="6 Weeks">6 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
                <option value="12 Weeks">12 Weeks</option>
                <option value="16 Weeks">16 Weeks</option>
            </select>
            </div>
            <button id = "formSubmit" >submit</button>

        </form>
      

    </div>
  )
}
