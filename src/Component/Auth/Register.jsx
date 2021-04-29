import logo from '../../Assests/svg/logo.svg'
import robodoc from '../../Assests/images/robo-doc.png'
import RegisterForm from './Forms/RegisterForm'

export default function Login() {
    return (
      <>
     
        <section className='flex flex-col h-screen justify-center overflow-hidden'>
        <div className="flex flex-wrap">
          <div className="lg:pt-16 h-screen w-full lg:w-1/2">
            <div className="max-w-md py-28 mx-auto">
              <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between"><a className="text-3xl font-bold leading-none" href="/">
                  <img className="h-12" src={logo} alt="" width="auto" />
                  </a>
                  <a className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-moody-blue-500 hover:bg-moody-blue-100 text-gray-50  hover:text-gray-50 font-bold transition duration-200" href="/">
                      Sign In</a></div>
              <div>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Sign Up</span>
                  <h3 className="text-2xl font-bold">Create an account</h3>
                </div>
                <RegisterForm />
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-full relative w-full lg:w-1/2 bg-moody-blue-600">
          <img className="lg:max-w-2xl absolute left-28 top-48 mx-auto" src={robodoc} alt="" />
            <div className="absolute bottom-20 inset-x-0 mx-auto mb-12 max-w-xl text-center" style={{"z-index": "10"}}>
              <h2 className="mb-2 text-2xl text-white font-black">Lorem ipusm</h2>
              <div className="max-w-lg mx-auto">
                <p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden bg-moody-blue-600 w-full">
            <div className="relative w-full">
              <img className="relative mx-auto max-w-sm mt-4 mb-4 block" src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png" alt="" />
            </div>
            <div className="py-10 px-3 text-center" style={{"z-index": "10"}}>
              <h2 className="mb-2 text-2xl text-white font-black">Lorem ipusm</h2>
              <p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
