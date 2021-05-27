
export default function Features() {
    return (
        <section id='features'>
        <div className="skew skew-top ml-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <div className="max-w-md lg:mx-auto">
                  <span className="text-moody-blue-600 font-bold">What choose us?</span>
                  <h2 className="my-2 text-4xl lg:text-5xl font-black font-heading">Features</h2>
                  <p className="mb-6 text-gray-500 leading-loose">We provide some core features </p>
                  <ul className="text-gray-500 font-bold">
                    <li className="flex mb-4">
                      <svg className="mr-2 w-6 h-6 text-moody-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Patient Data Security.</span>
                    </li>
                    <li className="flex mb-4">
                      <svg className="mr-2 w-6 h-6 text-moody-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Pay-As-You-Go system</span>
                    </li>
                    <li className="flex mb-4">
                      <svg className="mr-2 w-6 h-6 text-moody-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>2 Scans for free!</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-wrap -mx-4">
                <div className="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                  <div className="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                    <span className="mb-4 inline-block p-3 rounded-lg bg-moody-blue-100">
                      <svg className="w-10 h-10 text-moody-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <h4 className="mb-2 text-lg font-bold font-heading">Get 2 scans for free!</h4>
                    <p className="text-gray-500 leading-loose">After successful register you will get 2 free scans</p>
                  </div>
                  <div className="py-6 pl-6 pr-4 shadow rounded bg-white">
                    <span className="mb-4 inline-block p-3 rounded-lg bg-moody-blue-100">
                      <svg className="w-10 h-10 text-moody-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                    </span>
                    <h4 className="mb-2 text-lg font-bold font-heading"> Pay as you go!</h4>
                    <p className="text-gray-500 leading-loose">You don't have to pay huge amount of money every month, instead you pay for scans</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:mt-20 px-4">
                  <div className="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                    <span className="mb-4 inline-block p-3 rounded bg-moody-blue-100">
                      <svg className="w-10 h-10 text-moody-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <h4 className="mb-2 text-lg font-bold font-heading">User Statstics</h4>
                    <p className="text-gray-500 leading-loose"> We provide users with statstics about his patients and scans</p>
                  </div>
                  <div className="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                    <span className="mb-4 inline-block p-3 rounded bg-moody-blue-100">
                      <svg className="w-10 h-10 text-moody-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                      </svg>
                    </span>
                    <h4 className="mb-2 text-lg font-bold font-heading">Data Security</h4>
                    <p className="text-gray-500 leading-loose">Patients data is so crucial, so we do our best to protect user's data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}