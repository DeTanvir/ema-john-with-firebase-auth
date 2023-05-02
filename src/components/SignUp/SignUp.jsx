import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be at least in 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='text-error'>{error}</p>
            <p><small>Already have an account? <Link to="/login">Login here</Link></small></p>
        </div>
    );
};

export default SignUp;