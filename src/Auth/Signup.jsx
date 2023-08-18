import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../libs/firebase";
import { message } from 'antd';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        const authentication = getAuth();
        setIsLoading(true)
        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                console.log(response)
                message.success('Account created successfully')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                navigate("/dashboard")
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    message.error('Email Already in Use');
                } else if (error) {
                    message.error('Please check your internet')
                }
            })
    }

    return (
        <div className='flex flex-col lg:flex-row overflow-hidden bg-white'>
            <div className='hidden lg:flex flex-col h-screen bg-blue-600 w-[45%]'>
                <div className='m-7 text-white font-medium text-[20px]'>Webminds</div>
                <div className='m-8 my-auto'>
                    <h1 className='text-white text-[40px] leading-[60px] font-semibold'>Course past questions at your fingertips.</h1>
                    <p className='text-white w-96 font-light text-[15px] mt-6'>Powerful, self-serve product and tutorial resources to help you study effectively and excel in school.</p>
                </div>
                <img className='' width={477} height={237} alt='Auth image' src="/Auth.png" />
            </div>

            {/* Form component */}
            <div className='flex flex-col'>
                <div className='flex flex-col pl-0 mt-[75px] lg:mt-[75px] lg:pl-24 gap-4 my-auto m-24'>
                    <h1 className='text-[40px]'>👋🏾 Hello there</h1>
                    <p className='text-[20px] text-[#7A7A7A]'>Lets get you started with your account.</p>
                    <form className="px-0 pt-6 pb-8 mb-4 overflow-hidden">
                        <div className="mb-4">
                            <label className="block text-[#7A7A7A] text-sm font-display font-regular mb-2" htmlFor="username">
                                Email:
                            </label>
                            <input
                                label="username"
                                name="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow focus:border-[#0061FE] appearance-none border rounded w-full py-2 px-3 font-display text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John@mail.com" />
                        </div>
                        <div className="mb-4 mt-4">
                            <label className="block text-[#7A7A7A] text-sm font-display font-regular mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                label="Create password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow focus:border-[#0061FE] appearance-none border rounded w-full py-2 px-3 font-display text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="•••••••••••••••" />
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button  onClick={onSubmit} className="bg-[#0061FE] hover:bg-[#0061FE] w-full text-white font-display font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                                {isLoading ? 'Loading...' : 'Create free account'}
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

export default Signup