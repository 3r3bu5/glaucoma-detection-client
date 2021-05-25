import '../../../Styles/newPatient.css'
import React, { useState, useRef } from "react";
import { message as notifyMsg, Select, Typography, notification } from 'antd';
import { CheckCircleTwoTone  } from '@ant-design/icons';
import { withRouter } from "react-router";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../../../Services/UserService';

export default withRouter(function LoginForm(props) {

  const [lname,setLname] = useState("")
  const [fname,setFname] = useState("")
  const [age,setAge] = useState("")
  const [gender,setGender] = useState("male")
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
 
  const form = useRef();
  const checkBtn = useRef();

  const handleChangeGender = (id) => {
    setGender(id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      try {
        const response =  await UserService.createNewPatient({lname,fname,age,gender})
        if (response.data.success === true) {
          notification.open({
            message: 'Created Successfully',
            duration:3,
            description:
              'Patient record created successfully you can go back or create another patient record',
            icon:  <CheckCircleTwoTone twoToneColor="#52c41a" />
            ,
          });
        }
        props.setNoOfPatients(props.noOfPatients + 1)
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
          <Form onSubmit={handleSubmit} ref={form}>

                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full py-2 pr-52 text-xs bg-gray-50 outline-none"
                    type="text"
                    placeholder="FirstName"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    validations={[required]}
                    style={{"width": "100%"}}
                    />
                  </div>
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full pr-52 py-2 text-xs bg-gray-50 outline-none"
                    placeholder="LastName"
                    type="text" 
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    validations={[required]}
                    />
                  </div>
                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full pr-52 py-2 text-xs bg-gray-50 outline-none"
                    placeholder="Age"
                    type="text"  
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    validations={[required]}
                    />
                  </div>
                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                <Select defaultValue="male" className='bg-transparent w-full border-none focus:outline-none' style={{'background': 'transparent'}} onChange={handleChangeGender}>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
                  </div>
                  <div className="px-3 text-center">
                    <button disabled={loading} className="mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Create patient</button>
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