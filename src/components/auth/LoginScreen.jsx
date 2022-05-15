import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { startFacebookLogin, startGithubLogin, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();


  const [formLoginValues, handleLoginInputChange, reset] = useForm({ lEmail: '', lPassword: '' });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(lEmail, lPassword);
    reset();
  }


  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  }

  const handleGithublogin = () => {
    dispatch(startGithubLogin());
  }

  return (
    <div className="body">
      <div className="container">
        <div className="login-form">
          <div className="form-title">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <label > <input type="text" placeholder="Email" name="lEmail" onChange={handleLoginInputChange} value={lEmail} /> </label>
            <label > <input type="password" placeholder="password" name="lPassword" onChange={handleLoginInputChange} value={lPassword} /> </label>
            <button className="red" type="submit"><i className="fa fa-lock" aria-hidden="true"></i>Login</button>
          </form>
          <p className="login-with-social">Login with...</p>

          <div className="social-media">
            <button className="social-icons" onClick={handleFacebookLogin} type="button"><i className="fa fa-facebook" aria-hidden="true"></i></button>
            <button className="social-icons" onClick={handleGithublogin} type="button"><i className="fa fa-github" aria-hidden="true"></i></button>
            <button className="social-icons" onClick={handleGoogleLogin} type="button"><i className="fa fa-google-plus" aria-hidden="true"></i></button>
          </div>
          <Link to="/register">
            <button className="blue" id="btn" type="button"><i className="fa fa-unlock-alt" aria-hidden="true"></i>You do not have an account ?</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

