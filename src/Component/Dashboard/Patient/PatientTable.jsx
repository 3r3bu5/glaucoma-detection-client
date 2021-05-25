import { Table } from 'ant-table-extensions';
import {  PageHeader } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../Services/UserService';
import isoToString from '../../../Utils/ISOToString';

export default function PatientTable() {
  const [patients, setPatients] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
            UserService.getPatient().then((resp) => {
              setPatients(resp.data.patient.map(({ _v,_updatedAt,_doctorId,createdAt,_id, ...item }) => ({...item, createdAt:isoToString(createdAt),key:_id })))
              setLoading(false)
              return resp;
             })
    })()
},[])

if (isLoading) {
  return <div className="App">Loading...</div>;
}
  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'fname',
      key: 'fname',
      width: '15%',
    },
    {
      title: 'LastName',
      dataIndex: 'lname',
      key: 'lname',
      width: '15%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '15%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: '15%',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      
    },
    {
      title: 'Actions',
      key: '_id',
      dataIndex: '_id',
      render: (text, record) => (
        <>
        <Link to={`/profile/patient/${record.key}`} className="inline-block mb-3 lg:mb-0 lg:mr-3 w-1/2 lg:w-auto py-2 px-4 leading-loose bg-moody-blue-400 hover:bg-moody-blue-700 text-white font-semibold rounded-xl transition duration-200" href="#/">
          Patient History </Link>
          <Link to={{pathname: `/profile/scan/${record.key}`, name: record.fname + " " + record.lname }}>
        <a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-1/2 lg:w-auto py-2 px-5 leading-loose bg-moody-blue-400 hover:bg-moody-blue-700 text-white font-semibold rounded-xl transition duration-200" href="#/">
          New scan</a>
        </Link>
        </>
      ),
    },
  ];

  return (
    <>
    <div>
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title='PATIENTS'
      backIcon={false}
      extra={[
         <Link to={`/profile/patient/new`} className='mb-2 w-72 px-4 py-3 bg-moody-blue-400 hover:bg-moody-blue-500 rounded text-sm font-bold text-gray-50 transition duration-200' > New patient
        </Link>
      ]}
    >
    </PageHeader>
    </div>
       <Table  dataSource={patients} columns={columns} searchable />
    </> 
  )
}