/* eslint-disable no-unused-vars */
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react';
import signImg from '../../Assets/Images/signImage.jpeg'
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';
import { UserContext } from '../../Context/UserContext';

export default function Login() {
    // 
    let [loading, setLoading]= useState(false);
    const [axiosError, setAxiosError]= useState('');
    let navigate= useNavigate();
    let {setUserToken}= useContext(UserContext);

    // what to do when making submit by form
    async function signInSubmit(values) {
        setLoading(true);

        try {
            setLoading(true);
            let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values) ;
            if (data.message === 'success') {
                localStorage.setItem('userToken', data.token);
                setUserToken(data.token);  
                navigate('/home');   
            }
        } catch (error) {
            console.log('error in axios');
            console.log(error.response.data.message);
            setAxiosError(error.response.data.message);
        }
        setLoading(false);  
    }

    // inputs regex  
    let passwordRegex= /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    
    let validationSchema= Yup.object({
        email:Yup.string().email('Email is invalid').required('Email field is reuired'),

        password:Yup.string().matches(passwordRegex, 'Password must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character').required('Password field is reuired'),
    })
    // formik to pull input data
    let formik= useFormik({
       initialValues:{
            email:'',
            password:'',
        }, 
        validationSchema: validationSchema, 
        onSubmit: signInSubmit
    }
    );

    return <>
        <div className="col-md-6 py-5">
            <img className='img-fluid' src={signImg} alt="" />
        </div>
        <div className="col-md-6 py-5">
            <h2 className='text-3xl text-black-600'>Log in to Exclusive</h2>
            <p className='text-xl text-black-600 py-3'>Enter your details below..</p>

            <form onSubmit={formik.handleSubmit} className='py-3'>
                
                <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control mb-3' name='email' placeholder='Email' />

                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-3 mb-3">{formik.errors.email}</div> : ''}

                <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control mb-3' name='password' placeholder='Password' />
                
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-3 mb-3">{formik.errors.password}</div> : ''}

                {axiosError ? <div className="alert alert-danger py-3 mb-3">{axiosError}</div>  : ''}

                
                    {loading ? <button disabled={!(formik.isValid && formik.dirty)}    className='btn btn-danger px-5 py-3 text-center m-auto' type="submit">
                            <RevolvingDot
                                visible={true}
                                height="20"
                                width="80"
                                color="#fff"
                                ariaLabel="revolving-dot-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                            </button>
                        
                        :
                        <div className="login-btn d-flex justify-content-between align-items-center">
                            <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-danger px-5 py-3' type="submit">Log In</button>
                            
                            <Link className='text-danger'>Forget password?</Link>
                        </div>
                    }
            </form>
        </div>
    </>
  
}
