import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import './LoginReg.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const empty = {
    name: '',
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [singupInputs, setSignUpInputs] = useState(empty);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    const { name, value } = event.target;
    setSignUpInputs({ ...singupInputs, [name]: value });
  };

  const userDetails = async () => {
    if (
      singupInputs.name === '' ||
      singupInputs.email === '' ||
      singupInputs.password === ''
    ) {
      alert('Please enter data in all fields');
    } else {
      setLoading(true);
      try {
        let record = await fetch("https://gymspark.onrender.com/register", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(singupInputs),
        });
        record = await record.json();
        if (record === 'email already exists') {
          alert('Email already exists!');
        } else {
          setSignUpInputs(empty);
          alert('Signed Up Successfully!');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-img">
        <div className="login-box mt-5">
          <p>Sign Up</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="user-box">
              <input
                required
                name="name"
                type="text"
                onChange={handleClick}
                value={singupInputs.name}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                required
                name="email"
                type="email"
                onChange={handleClick}
                value={singupInputs.email}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                name="password"
                type="password"
                onChange={handleClick}
                value={singupInputs.password}
              />
              <label>Password</label>
            </div>
            <Link onClick={userDetails}>
              <span />
              <span />
              <span />
              Submit
            </Link>
          </form>
          <p>
            Do you have an account?{' '}
            <Link to="/login" className="a2">
              Login
            </Link>
          </p>
        </div>
      </div>

      {loading && (
        <div className="loading-popup">
          {/* Add your loading indicator or message here */}
          Loading...
        </div>
      )}
    </>
  );
};

export default Register;
