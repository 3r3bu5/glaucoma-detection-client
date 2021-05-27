import quote from '../../Assests/svg/quote.svg'
import teambg from '../../Assests/svg/team-bg.svg'
export default function Team() {
    return (
      <section id='team' className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{"background-image": `url(${teambg})`}}>
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <img className="mx-auto" src={quote} alt="" />
          <h2 className="mt-10 text-3xl md:text-4xl font-black font-heading">Meet The Team</h2>
          <p className="text-gray-400 leading-loose">Glaucoma lab is developed by</p>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl ">Ashraf Gehad</p>
                  <p className="text-moody-blue-900 font-bold">Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
              <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl">Alaa</p>
                  <p className="text-moody-blue-900 font-bold">Machine Learning Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
              <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl">Omar Hamed</p>
                  <p className="text-moody-blue-900 font-bold">Machine Learning Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
              <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl">Omar Moaaz</p>
                  <p className="text-moody-blue-900 font-bold">Android Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
              <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl">Armia Amir</p>
                  <p className="text-moody-blue-900 font-bold">Flutter Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
              <img className="h-16 w-16 rounded-full object-cover" src="https://via.placeholder.com/500" alt="" />
                <div className="pl-4">
                  <p className="text-xl">Abanod </p>
                  <p className="text-moody-blue-900 font-bold">IOS Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
