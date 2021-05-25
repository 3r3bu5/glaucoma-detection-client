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
  const [loading,setLoading] = useState(false)
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      try {
        const response = await AuthService.resendToken(email)
        if (response.status === 200) {
          setLoading(false)
          notifyMsg.success(response.data.msg);
        }
      } catch (err){
        setLoading(false)
        if (err.message === 'Request failed with status code 403') {
          notifyMsg.error('Please verify your email address first!');
        } else if (err.message === 'Request failed with status code 401'){
          notifyMsg.error('Wrong credentials!');
        }
        else if (err.message === 'Request failed with status code 400'){
            notifyMsg.info('Email address is already verified!');
        }
        else {
            notifyMsg.error('Something went wrong!');
        }
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
                  <div className="px-3 text-center">
                    <button disabled={loading} className="mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Resend Verification Code </button>
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