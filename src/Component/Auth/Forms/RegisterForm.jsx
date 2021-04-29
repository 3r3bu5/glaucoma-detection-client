import React, { useState, useRef } from "react";
import { message as notifyMsg, Typography } from 'antd';
import AuthService from "../../../Services/Auth";
import { withRouter } from "react-router";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import isEmail from 'validator/lib/isEmail';

export default withRouter(function LoginForm() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [loading,setLoading] = useState(false)
  const [visible,setVisible] = useState(false)
  const [message, setMessage] = useState("");

  const required = (value) => {
    if (!value) {
      return (
        <Typography.Text type='danger' className='font-semibold'>
          This field is required!
        </Typography.Text>
      );
    }
  };
  const isEmailValid = value => {
    if (!isEmail(value)) {
      return (
        <Typography.Text type='danger' className='font-semibold'>
          Please enter a valid email address
        </Typography.Text>
      );
    }
  };
  const form = useRef();
  const checkBtn = useRef();

  const changeVisbilty = (e) => {
    e.preventDefault();
    setVisible(!visible)
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    setMessage("");
    form.current.validateAll();
    console.log(checkBtn.current.context._errors.length)
    if (checkBtn.current.context._errors.length === 0) {
      try {
        const response = await AuthService.register( firstname,lastname,email,password )
        if (response.status === 200) {
          setLoading(false)
          notifyMsg.success('Registration Successfully, Please confirm your email address!');
        }
      } catch (err){
        setLoading(false)
        console.log(err.message)
        if (err.message === 'Request failed with status code 400') {
          notifyMsg.error('Validation Error!, Please check your information again');
        } else if (err.message === 'Request failed with status code 500'){
          notifyMsg.error('A user with the given username is already registered');
        }
        console.log(err)
      }
    } else {
      setLoading(false);
    }
  }

    return (
          <Form onSubmit={handleRegister} ref={form}>

                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <Input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                      type="text"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      validations={[required]}
                      />
                    </div>
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <Input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full py-2 pr-52 text-xs bg-gray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    validations={[required, isEmailValid]}
                    />
                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                  </div>
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full pr-52 py-2 text-xs bg-gray-50 outline-none"
                    type={visible ? 'text' : 'password'}
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validations={[required]}
                    />
                    <button className='cursor-pointer focus:outline-none' onClick={changeVisbilty}>
                      <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-3 text-center">
                    <button disabled={loading} className="mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign Up</button>
                    <span className="text-gray-400 text-xs">
                      <span>Already have an account? </span>
                      <a className="text-moody-blue-600 hover:underline" href="/"> Sign In</a>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <a className="underline hover:text-gray-500 text-moody-blue-400" href="/">Policy privacy </a>
                      and <a className="underline hover:text-gray-500 text-moody-blue-400" href="/">Terms of Use</a></p>
                  </div>     
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
    )
}
);