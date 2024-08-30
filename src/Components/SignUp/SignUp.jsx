/* eslint-disable no-unused-vars */
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react';
import signImg from '../../Assets/Images/signImage.jpeg'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';
import { UserContext } from '../../Context/UserContext';

export default function SignUp() {
    // 
    let [loading, setLoading]= useState(false);
    const [axiosError, setAxiosError]= useState('');
    let navigate= useNavigate();
    let {setUserToken} = useContext(UserContext);

    // what to do when making submit by form
    async function signUpSubmit(values) {
        setLoading(true);

        try {
            setLoading(true);
            let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values) ;
            console.log('data is');
            console.log(data);
            if (data.message === 'success') {
                localStorage.setItem('userToken', data.token);
                setUserToken(data.token);
                navigate('/login');   
            }
        } catch (error) {
            console.log('error in axios');
            console.log(error.response.data.message);
            setAxiosError(error.response.data.message);
        }
        setLoading(false);  
    }
    // apply validation on inputs
    // function validate(values) {
    //     // console.log(values);

    //     // object to push into all errors from validation
    //     let errors={};

    //     // inputs regex
    //     let phoneRegex= /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,5})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    //     let emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     let passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //     // name validation
    //     if(!values.name) errors.name='Name field is requiered';
    //     else if(values.name.length < 3) errors.name='Name min_length must be 3';
    //     else if (values.name.length > 10) errors.name='Name max_length must be 10';
        
    //     // email validation
    //     if(!values.email) errors.email='Email field is requiered';
    //     else if(!emailRegex.test(values.email)) errors.email='Email format';
        
    //     // phone validation
    //     if(!values.phone) errors.phone='Phone field is requiered';
    //     else if(!phoneRegex.test(values.phone)) errors.phone='phone must be in this like form "userName@gmail or yahoo.com"';
        
    //     // password validation
    //     if(!values.password) errors.password='Password field is requiered';
    //     else if(!passwordRegex.test(values.password)) errors.password='Password must contain inimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character';

    // return errors;
        
    // }

    
    // inputs regex
    
    let phoneRegex= /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,5})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    let passwordRegex= /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    
    let validationSchema= Yup.object({

        name:Yup.string().min(3, 'Name min_length is 3').max(10, 'Name max_length is 10').required('Name field is reuired'),

        email:Yup.string().email('Email is invalid').required('Email field is reuired'),

        phone:Yup.string().matches(phoneRegex, 'Phone is invalid').required('Phone field is reuired'),

        password:Yup.string().matches(passwordRegex, 'Password must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character').required('Password field is reuired'),

        rePassword:Yup.string().oneOf([Yup.ref('password')],'Password and Re-password are not the same').required('Re-password field is reuired'),
    })
    // formik to pull input data
    let formik= useFormik({
       initialValues:{
            name:'',
            email:'',
            phone:'',
            password:'',
            rePassword:'',
        }, 
        validationSchema: validationSchema, 
        onSubmit: signUpSubmit
    }
    );

    return <>
        <div className="col-md-6 py-5">
            <img className='img-fluid' src={signImg} alt="" />
        </div>
        <div className="col-md-6 py-5">
            <h2 className='text-3xl text-black-600'>Create an account</h2>
            <p className='text-xl text-black-600 pt-3'>Enter your details below..</p>

            <form onSubmit={formik.handleSubmit} className='py-3'>

                <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control mb-3' name='name' placeholder='Name'/>

                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger py-3 mb-3">{formik.errors.name}</div> : ''}
                
                <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control mb-3' name='email' placeholder='Email' />

                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-3 mb-3">{formik.errors.email}</div> : ''}

                <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control mb-3' name='phone' placeholder='Phone' />
                
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger py-3 mb-3">{formik.errors.phone}</div> : ''}

                <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control mb-3' name='password' placeholder='Password' />
                
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-3 mb-3">{formik.errors.password}</div> : ''}

                <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control mb-3' name='rePassword' placeholder='Re-password' />
    
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger py-3 mb-3">{formik.errors.rePassword}</div> : ''}

                {axiosError ? <div className="alert alert-danger py-3 mb-3">{axiosError}</div>  : ''}

                {loading ? 
                    <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-danger w-100 py-3 text-center m-auto' type="submit">
                        <RevolvingDot
                            visible={true}
                            height="10px"
                            width="10px"
                            color="#fff"
                            ariaLabel="revolving-dot-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </button>
                    :
                    <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-danger w-100 py-3' type="submit">Create account</button>
                }

            </form>
        </div>
    </>
  
}
