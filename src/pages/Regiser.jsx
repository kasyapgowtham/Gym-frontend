import "./register.css";
import { useState } from "react";
import axios from "axios";
const Register = () => {
    const[error,setError]=useState("")
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:""
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        });
    }
    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
        }
        if(formData.name==""||formData.email==""||formData.phone==""||formData.password==""){
            setError("All are required Fields");
            return;
        }

        setError(""); 
        try{
                   e.preventDefault();
        var response=axios.post("https://localhost:7257/api/Member/register",{ 
            name:formData.name,
            email:formData.email,
            phone:formData.phone,
            password:formData.password
          });
        console.log(response);
        }
        catch(err){
            console.log(err);
        }
 
    }
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Join the Beast Mode 💪</h1>
        <p className="register-subtitle">
          Transform your body. Transform your life.
        </p>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required value={formData.password} onChange={handleChange} placeholder="Create password" />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              placeholder="Confirm password"
                value={formData.confirmPassword} onChange={handleChange}
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button onClick={handleRegister} className="register-btn">Register Now</button>
            <div className="login-link">
                 Already have an account? <a href="/login">Login</a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
