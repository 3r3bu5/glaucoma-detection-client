import greenDarkUp from '../../Assests/svg/green-dark-up.svg'
import greenDarkDown from '../../Assests/svg/wing-green-down.svg'
import bullets from '../../Assests/svg/bullets-gray-left.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <section classNameName="relative overflow-hidden">
        <div className="relative bg-gray-50 pt-12 lg:pt-20 pb-12 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 max-w-md lg:mx-auto px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-black font-heading">
                      <span>YOUR </span>
                      <span className="text-moody-blue-500"> GLAUCOMA DETECTION </span>
                      AI ASSSISTANT.
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">a Pay as you go machine learning as a service system to help detecting glaucoma disease at its first stages</p>
                    <div>
                      <Link to='/register'>
                      <a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-moody-blue-600 hover:bg-moody-blue-700 hover:text-white text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#/">
                        Get 2 FREE scans</a>
                      </Link>

                      <Link to='/login' className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white text-gray-500 hover:text-gray-700  hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#/">
                      Login</Link></div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative" style={{"z-index": 0}}>
              <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1551601651-bc60f254d532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80" alt="" />
              <img className="hidden md:block absolute" style={{"top":"-2rem", "right": "3rem", "z-index": "-1"}} src={greenDarkUp} alt="" />
              <img className="hidden md:block absolute" style={{"bottom":"-2rem", "right": "-2rem", "z-index": "-1"}} src={greenDarkDown} alt="" />
              <img className="hidden md:block absolute" style={{"top":"3rem", "right": "-3rem", "z-index": "-1"}} src={bullets} alt="" />
              <img className="hidden md:block absolute" style={{"bottom":"2.5rem", "left": "-4.5rem", "z-index": "-1"}} src={bullets} alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="/#"><img className="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" /></a>
              <button className="navbar-close">
                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-moody-blue-50 hover:text-moody-blue-500 rounded" href="#/">Start</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-moody-blue-50 hover:text-moody-blue-500 rounded" href="#/">About Us</a></li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#/">Sign In</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-moody-blue-600 hover:bg-moody-blue-700 rounded-l-xl rounded-t-xl" href="#/">Sign Up</a></div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2020 All rights reserved.</span>
              </p>
              <div className="text-center"><a className="inline-block px-1" href="#/"><img src="atis-assets/social/facebook.svg" alt=""/></a><a className="inline-block px-1" href="#/"><img src="atis-assets/social/twitter.svg" alt=""/></a><a className="inline-block px-1" href="#/"><img src="atis-assets/social/instagram.svg" alt=""/></a></div>
            </div>
          </nav>
        </div>
      </section>
    )
}
