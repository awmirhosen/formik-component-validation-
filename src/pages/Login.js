import React, {useState} from "react";
import {Formik, Form, FastField, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {logDOM} from "@testing-library/react";

const initialValue = {
    username: '',
    email: '',
    password : ''
}

const validationSchema = Yup.object({
    username : Yup.string().required('This field is Required'),
    email : Yup.string().required('This field is Required').email('This format is not Validate'),
    password : Yup.string().required('This field is Required').min(6, 'Password length must be' +
        ' greater than 6')
})



const Login = () => {
    const [data, setData] = useState(null);

    const handleSubmit = (values, submitProps) => {
        setTimeout(() => {
            submitProps.setSubmitting(false)
        }, 1000)
        setData({values})
    }

    return (
        <>
            <div className='form-container'>
                <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema} >
                    {formik => {
                        console.log(formik.isSubmitting)
                        return (
                            <div className='Formik'>
                                <Form>
                                    <div>
                                        <label>Username</label>
                                        <FastField type="text" name='username' className='input'
                                                   placeholder='Enter your Username'/>
                                        <div className='error'>
                                            <ErrorMessage name='username'/>
                                        </div>
                                    </div>

                                    <div>
                                        <label>Email</label>
                                        <FastField type="text" name='email' className='input'
                                                   placeholder='Enter your Email'/>
                                        <div className='error'>
                                            <ErrorMessage name='email'/>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <FastField type="password" name='password' className='input'
                                                   placeholder='Enter your Password'/>
                                        <div className='error'>
                                            <ErrorMessage name='password'/>
                                        </div>
                                    </div>
                                    <button type='submit' disabled={formik.isSubmitting}>Login{' '}
                                        {formik.isSubmitting ? 'to your account ...' : null}
                                    </button>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
            </div>

            <div className='data'>
                <h2>{data.values.username}</h2>
                <h3>{data.values.email}</h3>
            </div>
        </>
    )
}
export default Login