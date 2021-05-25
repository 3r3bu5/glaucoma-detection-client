import React, { useEffect, useState } from 'react'
import UserService from '../../Services/UserService';
import Sidebar from './SideBar';
import StatsHeader from './StatsHeader';
import Navbar from './NavBar';
import { Redirect, Route, Switch } from 'react-router';
import Statstics from './Statstics';
import PatientTable from './Patient/PatientTable';
import PatientHistory from './Patient/PatientHistory';
import NewPatient from './NewPatient';
import Checkout from './Payment/Checkout';
import NewScanForm from './Form/NewScanForm';
import ISOToString from '../../Utils/ISOToString'


export default function Profile({setIsAuthenticated}) {
    const [credits, setCredits] = useState("");
    const [patients, setPatients] = useState([])
    const [noOfPatients, setNoOfPatients] = useState(0)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            UserService.getCredits().then((resp) => {
                setCredits(resp.data.credits)
                UserService.getPatient().then((resp) => {
                  setPatients(resp.data.patient.map(({ _v,_updatedAt,_doctorId,createdAt,_id, ...item }) => ({...item, createdAt:ISOToString(createdAt),key:_id })))
                  setNoOfPatients(patients.length)
                  setLoading(false)
                  return resp;
                 })
               })
        })()
    },[patients.length])
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white">
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        {/* Header */}
        <StatsHeader credits={credits} patientsLength={noOfPatients} />
        <div className="px-4 md:px-10 mx-auto w-full mt-5">
          <Switch>
            <Route path="/profile/dashboard" exact component={Statstics} />
            <Route path="/profile/credits" exact>
              <Checkout setCredits={setCredits} />
              </Route>
            <Route path="/profile/patient" exact >
                <PatientTable patients={patients} />
            </Route>
            <Route path="/profile/patient/new" exact>
              <NewPatient setNoOfPatients={setNoOfPatients} noOfPatients={noOfPatients} />
              </Route>
            <Route path="/profile/patient/:id" exact component={PatientHistory} />
            <Route path="/profile/scan/:id" exact>
              <NewScanForm setCredits={setCredits} />
              </Route>
            <Redirect from="/profile" to="/profile/dashboard" />
          </Switch>
        </div>
      </div>
    </>
    )

}
