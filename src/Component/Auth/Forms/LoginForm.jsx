import React, { useState, useRef } from "react";
import { message as notifyMsg, Typography } from 'antd';
import AuthService from "../../../Services/Auth";
import { withRouter } from "react-router";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import isEmail from 'validator/lib/isEmail';
import { Link } from "react-router-dom";

export default withRouter(function LoginForm(props) {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
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
    if (checkBtn.current.context._errors.length === 0) {
      try {
        const response =  await AuthService.login(email,password )
        if (response.status === true) {
          props.setIsAuthenticated(response)
          props.history.push("/profile");
        }
        setLoading(false)
      } catch (err){
        setLoading(false)
        if (err.message === 'Request failed with status code 403') {
          notifyMsg.error('Please verify your email address first!');
        } else if (err.message === 'Request failed with status code 401'){
          notifyMsg.error('Wrong credentials!');
        } else {
          notifyMsg.error('Something went wrong!');
      }
        setLoading(false) 
      }
    } else {
      setLoading(false);
    }
  }

    return (
          <Form onSubmit={handleRegister} ref={form}>

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
                    <button disabled={loading} className="mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Login</button>
                    <span className="text-gray-400 text-xs">
                      <span>Resend verification token? </span>
                      <Link to='verify' className="text-moody-blue-600 hover:underline" href="/"> Resend </Link>
                    </span>
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