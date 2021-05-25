import logo from '../../Assests/svg/logo.svg'
export default function MainNavBar() {
    return (
        <>
  <nav className="relative  px-6 py-6 flex justify-between items-center bg-gray-50">
    <div className='w-3/4 mx-auto'>
    <a className="text-3xl font-bold leading-none" href="#/">
    <img className="h-12 flex  " src={logo} alt="" width="auto" /></a>
  
    <ul className="hidden absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
    <li><a className="text-sm text-gray-400 font-bold hover:text-moody-blue-200" href="/">Home</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 font-bold hover:text-moody-blue-200" href="#features">Features</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 font-bold hover:text-moody-blue-200" href="#hiw">How It Works</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 font-bold hover:text-moody-blue-200" href="#team">Team</a></li>
    </ul>
    </div>
  </nav>
        </>
    )
}
