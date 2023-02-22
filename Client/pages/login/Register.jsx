import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Register() {

  const navigate = useNavigate();

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post('http://localhost:3000/register', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    });
    navigate('/');
  };

  return (
    <div className='login bg-secondary'>
      <div>
        <div className="card shadow h-50 w-100">
          <div className="card-body bg-success-subtle">
            <h1 className="card-title mb-4">Register</h1>
            <div className="input-group mb-3">
              <span className="input-group-text">Username</span>
              <input type="text" placeholder='username' className="form-control"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="text" placeholder='password' className="form-control"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />
            </div>
            <button className='btn btn-success w-100' onClick={register}> Register </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register