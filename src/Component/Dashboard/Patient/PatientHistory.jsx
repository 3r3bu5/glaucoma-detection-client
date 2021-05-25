import { useParams } from 'react-router';
import { Table } from 'ant-table-extensions';
import { PageHeader, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import UserService from '../../../Services/UserService';
import ISOToString from '../../../Utils/ISOToString'
import { Link } from 'react-router-dom';

export default function PatientTable() {
    const [history, setHistory] = useState([])
    const [name, setName] = useState("")
    const [isLoading, setLoading] = useState(true);
    let { id } = useParams();


    useEffect(() => {
        (async () => {
            await UserService.getPatientHistory(id).then((resp) => {
                setHistory(resp.data.history.map(({ _v,_updatedAt,_patientId,createdAt,_id, ...item }) => ({...item, createdAt:ISOToString(createdAt),key:_id })))
                setName(resp.data.fname + " " + resp.data.lname)
                setLoading(false)
                return resp;
                })
        })()
    },[id])
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    const columns = [
    {
        title: 'Eye',
        dataIndex: 'eye',
        key: 'eye',
        width: '20%',
    },
    {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
        width: '20%',
        render: result => (
            <>
                  <Tag color={result === 1 ? 'volcano' : 'green'}>
                    {result === 1 ? 'Glaucoma' : 'Non-glaucoma'}
                  </Tag>
         
            </>
        )
    },
    {
        title: 'Notes',
        dataIndex: 'notes',
        key: 'notes',
        width: '20%',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        
    },
    ];

    return (
    <>
    <div>
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title={name.toUpperCase()}
      subTitle="Scan records"
      extra={[
         <Link to={{pathname: `/profile/scan/${id}`, name}}
         className='mb-2 w-72 px-4 py-3 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200' > New scan
        </Link>
      ]}
    >
    </PageHeader>

    </div>
        <Table  dataSource={history} columns={columns} searchable />
    </> 
    )
}