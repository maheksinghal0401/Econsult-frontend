import React from "react";
import './registrationdoctor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function RegistrationDoctor(){
    return(
        <section class="container">
      <header>Registration Form</header>
      <form action="#" class="form">
        <div className="main">
          <img
            class="profileImage"
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt="Image"
          />
      
  
         <center> <button className="styling">Add Photo</button></center>
        </div>
        <div class="input-box">
          <label> Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" required />
        </div>

        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div class="input-box address">
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Gender</option>
                <option>male</option>
                <option>Female</option>
                <option>others</option>
              </select>
            </div>
            <div class="select-box">
              <select>
                <option hidden>Blood Group</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB-</option>
              </select>
            </div>
          </div>
        </div>
        <div class="input-box">
          <label> Qualification</label>
          <input type="text" placeholder="Enter your qualification" required />
        </div>
        <div class="column">
        <div class="input-box">
          <label> Specialization</label>
          <input type="text" placeholder="Enter your Specialization" required />
        </div>
        <div class="input-box">
          <label>Total  Experience</label>
          <input type="number" placeholder="Enter  total number of Experience" required />
        </div>
        </div>
    
       
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input
            type="text"
            placeholder="Enter street address line 2"
            required
          />
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div class="column">
            <input type="text" placeholder="Enter your State" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
          <br/>
          <label>Others Details</label>
          <div class="column">
            <input type="text" placeholder="Enter  other Details" required />
            <div class="select-box">
              <select>
                <option hidden>Language</option>
                <option>Hindi</option>
                <option>English</option>
              </select>
        </div>
        </div>
        </div>
       <button >Submit</button>
      </form>
    </section>
    )
}
export default RegistrationDoctor;