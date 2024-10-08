import React, { useState } from 'react';
import avatar from '../assests/profile.webp';
import styles from '../styles/Password.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

export default function Password() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      Password : ''
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values);
    }
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Login Page</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter Password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              {formik.errors.username && <p className="text-red-500">{formik.errors.username}</p>}
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password? <Link className="text-red-500" to="/recovery">Recover Now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
