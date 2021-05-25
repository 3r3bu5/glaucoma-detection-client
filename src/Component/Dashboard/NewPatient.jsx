import { PageHeader } from "antd";
import NewPatientForm from "./Form/NewPatientForm";

export default function NewPatient({setNoOfPatients, noOfPatients}) {
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
                  <span className="text-gray-500">New patient</span>
                  <h3 className="text-2xl font-bold">Create new patient</h3>
                </div>
                 <NewPatientForm setNoOfPatients={setNoOfPatients} noOfPatients={noOfPatients}/>
        </div>
        </>
    )
}
