import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'


export const RegisterScreen = () => {

    const [formRegisterValues, handleRegisterInputChange, reset] = useForm({ Rusername: '', Remail: '', Rpassword: '', })

    const { Rusername, Remail, Rpassword } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(Rusername, Remail, Rpassword);
        reset();
    }

    return (
        <div className="body">
            <div className="container">
                <div className="login-form">
                    <div className="form-title">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={handleRegister}>
                        <label > <input type="text" placeholder="Username" name="Rusername" value={Rusername} onChange={handleRegisterInputChange} /> </label>
                        <label > <input type="text" placeholder="Email" name="Remail" value={Remail} onChange={handleRegisterInputChange} /> </label>
                        <label > <input type="password" placeholder="password" name="Rpassword" value={Rpassword} onChange={handleRegisterInputChange} /> </label>
                        <button className="blue" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i>Register</button>
                    </form>

                    <p className="login-with-social "></p>

                    <Link to="/login">
                        <button className="red" id="btn" type="button">
                            <i className="fa fa-key" aria-hidden="true"></i>You Have Account ?
                        </button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
