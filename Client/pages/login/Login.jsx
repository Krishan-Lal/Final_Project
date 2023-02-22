import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import "./Login.css";

export let name = '';

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setloginStatus] = useState("");

  const login = () => {
    if (username === "" || password === "") {
      setloginStatus('please enter username and password');
    }
    else {
      Axios.post('http://localhost:3000/login', {
        username: username,
        password: password
      }).then((response) => {
        if (response.data.message) {
          setloginStatus(response.data.message);
        } else {
          setloginStatus(response.data[0].username);
          navigate('/Shop');
          name = username;
        }
      });
    }
  };

  function register() {
    navigate('/Register');
  };

  return (
    <div className='login'>
      <div className='container d-flex justify-content-center'>
        <div className='row border1 p-5'>
          <div className='col'>
            <img src="./pages/images/ball.png" />
          </div>
          <div className='col'>
            <div>
              <div className="card w-100 shadow h-50">
                <div className="card-body">
                  <p>{loginStatus}</p>
                  <h1 className="card-title mb-4">Login</h1>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Username</span>
                    <input type="text" placeholder='username' className="form-control"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input type="password" placeholder='password' className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button className='btn btn-primary w-100' onClick={login}> Login </button>
                </div>
                <button className='btn btn-outline-secondary' onClick={register}>new user click here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
