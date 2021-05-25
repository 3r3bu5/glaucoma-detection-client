import '../../../Styles/newPatient.css'
import React, { useState, useRef } from "react";
import { message as notifyMsg, Select, Typography, notification, PageHeader } from 'antd';
import { CheckCircleTwoTone, ExclamationOutlined  } from '@ant-design/icons';
import { useParams, withRouter } from "react-router";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../../../Services/UserService';

export default withRouter(function LoginForm({setCredits, location}) {

  const {id} = useParams()
  const [notes,setNotes] = useState("")
  const [eye,setEye] = useState("left")
  const [image,setImage] = useState("")
  const [loading,setLoading] = useState(false)
  const [message, setMessage] = useState("");
  console.log(location)

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

  const handleChangeGender = (eye) => {
    setEye(eye)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      try {

        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile.files[0]);
        formData.append("notes", notes);
        formData.append("eye", eye);
        formData.append("_patientId", id);
        const response = await UserService.uploadImage(formData)
        setCredits(response.data.remCredits)
        console.log(response)
        if (response.data.status === true) {
          notification.open({
            message: `Result: ${response.data.result === 0 ? 'Non-Glaucoma' : 'Glaucoma' }`,
            duration:3,
            description:
              'Patient record created successfully you can go back or create another patient record',
            icon: response.data.result === 0 ?  <CheckCircleTwoTone twoToneColor="#52c41a" />   : <ExclamationOutlined twoToneColor="#eb2f96" />
            ,
          });
        }
        setLoading(false)
      } catch (err){
        setLoading(false)
        if (err.message === 'Request failed with status code 403') {
          notifyMsg.error('Not Enough credits');
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
        <>
          <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      subTitle="Go back"
    >
    </PageHeader>
         <div className='w-1/2 mx-auto'>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Scan for glaucoma</span>
                  <h3 className="text-2xl font-bold">New scan for {location.name} </h3>
                </div>
          <Form onSubmit={handleSubmit} ref={form}   id="uploadForm"
>

                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full py-2 pr-52 text-xs bg-gray-50 outline-none"
                    type="text"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{"width": "100%"}}
                    />
                  </div>
                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                <Select defaultValue="left" className='bg-transparent w-full border-none focus:outline-none' style={{'background': 'transparent'}} onChange={handleChangeGender}>
                  <Select.Option value="left">Left</Select.Option>
                  <Select.Option value="right">Right</Select.Option>
                </Select>
                  </div> 
                  <div className="mb-3 flex flex-col p-4 mx-2 bg-gray-50 rounded">
                      <h3 className=' font-semibold'>Upload Retina image</h3>
                    <Input className="w-full py-2 pr-52 text-xs bg-gray-50 outline-none"
                    type="file"
                    id="file"
                    value={image}
                    onChange={ (e) => {setImage(e.target.value)}}
                    name="image"
                    validations={[required]}
                    style={{"width": "100%"}}
                    />
                  </div>
                  <div className="px-3 text-center">
                    <button disabled={loading} className="mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Check for glaucoma</button>
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
                </div>
                </>
    )
}
);