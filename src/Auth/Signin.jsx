import React from 'react'

const Signin = () => {
    return (
        <div className='flex flex-col lg:flex-row overflow-hidden bg-white'>
          <div className='hidden lg:flex flex-col h-screen bg-blue-600 w-[45%]'>
            <div className='m-7 text-white font-medium text-[20px]'>Webminds</div>
            <div className='m-8 my-auto'>
              <h1 className='text-white text-[40px] leading-[60px] font-semibold'>Course past questions at your fingertips.</h1>
              <p className='text-white w-96 font-light text-[15px] mt-6'>Powerful, self-serve product and growth analytics to help you flip homes and resell to the market.</p>
            </div>
            <img className='' width={477} height={237} alt='Auth image' src="/Auth.png" />
          </div>
    
          {/* Form component */}
          <div className='flex flex-col'>
            <div className='flex flex-col pl-0 mt-[75px] lg:mt-[75px] lg:pl-24 gap-4 my-auto m-24'>
              <h1 className='text-[40px]'>👋🏾 Welcome Back</h1>
              <p className='text-[20px] text-[#7A7A7A]'>Lets log you into your account</p>
              <form className="px-0 pt-6 pb-8 mb-4 overflow-hidden">
                <div className="mb-4">
                  <label className="block text-[#7A7A7A] text-sm font-display font-regular mb-2" htmlFor="username">
                    Email:
                  </label>
                  <input
                    label="username"
                    name="username"
                    className="shadow focus:border-[#0061FE] appearance-none border rounded w-full py-2 px-3 font-display text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John@mail.com" />
                </div>
                <div className="mb-4 mt-4">
                  <label className="block text-[#7A7A7A] text-sm font-display font-regular mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    label="Create password"
                    name="password"
                    className="shadow focus:border-[#0061FE] appearance-none border rounded w-full py-2 px-3 font-display text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="•••••••••••••••" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <button className="bg-[#0061FE] hover:bg-[#0061FE] w-full text-white font-display font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    {/* {isLoading ? 'Loading...' : 'Create free account'} */}
                    Create Account
                  </button>
                  {/* <p className="text-grey text-xs mt-2 mb-4">Already have an account <NavLink className="underline text-[#0061FE]" to="/signin">Sign in</NavLink></p> */}
                </div>
              </form>
            {/* <Image className='border' width={477} height={237} alt='Auth image' src="/Auth.png" /> */}
            </div>
          </div>
        </div>
      )
}

export default Signin