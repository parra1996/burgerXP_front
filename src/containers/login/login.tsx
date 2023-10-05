// import { useState } from 'react';
import axios from 'axios';
import './login.css';
import { userInvalid } from '../../../consts'
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import { useForm } from 'react-hook-form';

const Login = (props: { dispatch: (arg0: { type: string; payload: any; }) => void; }) => {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
    const registerOptions = {
        email: { required: 'Email is required' },
        password: {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Password must have at least 6 characters'
            }
        },
    };
    // const handlerInput = (e: Event) => {
    //     setUserData({ ...userData, [e.target?.name]: e.target?.value })
    // }

    const logIn = async (userData) => {

        try {
            const result = await axios.post('http://localhost:8000/users/login', userData);
            console.log(result)

            if (result.data === userInvalid) {
                console.log('ÑFUHQEOUGÑUQGEÑIUERÑGTYE')
                setError('api', { type: 'manual', message: 'User invalid' });
            }
            // props.dispatch({
            //     type: LOGIN,
            //     payload: result.data
            // })

        } catch (error) {
            setError('api', { type: 'manual', message: error.message });

        }
    }


    return (
        <div className='login'>
            <h1> Login </h1>
            <form onSubmit={handleSubmit(logIn)}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" {...register('email', registerOptions.email)} />
                    <small className="text-danger">
                        {errors?.email && errors.email.message}
                    </small>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" {...register('password', registerOptions.password)} />
                    <small className="text-danger">
                        {errors?.password && errors.password.message}
                    </small>
                    <small className="text-danger">
                        {errors?.api && errors.api.message}
                    </small>
                </div>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'loading' : 'Submit'}
                </button>

            </form>
        </div>
    )
}

export default connect()(Login);