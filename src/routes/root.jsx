import React from 'react'
import Sidenav from '../components/Sidenav'
import { Link } from 'react-router-dom'
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import pdf1 from "../assets/pdf1.pdf"

const Root = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

    return (
        <main className="flex flex-row bg-[#F7FAFC] overflow-hidden h-full lg:h-full">
            <Sidenav />
            <div className='flex flex-col p-7 lg:ml-24 w-full'>
                {/* Nav containing searchbar */}
                <div className='flex flex-row w-full h-fit'>
                    <div className='flex flex-row w-full h-fit'>
                        <h1 className='flex-1 text-[20px] md:text-[30px] lg:text-[40px] my-auto font-medium'>👋🏾 Welcome user </h1>
                        <input
                            className="hidden lg:flex focus:border-[#0061FE] appearance-none border w-[400px] rounded-xl h-[57px] py-2 px-3 font-display text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search for past questions" />
                        <div className='my-auto ml-4 flex lg:hidden'><img width={20} height={30} alt='search-icon' src="/Search_icon.svg" /></div>
                        {/* Avatar and icon */}
                        <div className='flex flex-row my-auto gap-4 ml-8'>
                            <img width={15} height={15} alt='logo' src="/saved_icon.svg" />
                            <img className='hidden  md:flex lg:flex' height={50} width={50} alt='avatar' src="/Avatar.png" />
                            {/* {user ? (
                                <>
                                    <Button className="" href="/" type="link">
                                        {user.username}
                                    </Button>
                                </>
                            ) : (
                                <>
                                </>
                            )} */}
                        </div>
                    </div>
                </div>
                {/* Dashboard Wrapper */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* Dashboard cards */}
                    <div className='flex flex-col w-full md:w-fit lg:w-fit'>
                        {/* Stats cards */}
                        <div className='flex flex-row gap-4 mt-10 w-[1000px] md:w-full snap-x overflow-scroll lg:w-fit'>
                            <div className="flex flex-row text-left bg-white p-6 gap-2 rounded-xl w-full lg:w-[296px]">
                                <img height={50} width={50} alt='avatar' src="/Stat1.svg" />
                                <div className='flex flex-col m-auto'>
                                    <h2>0</h2>
                                    <p className='text-[15px] font-semibold text-[#4B6EFA]'>Past questions posted</p>
                                </div>
                            </div>
                            <div className="flex flex-row text-left bg-white p-6 gap-2 rounded-xl w-full lg:w-[296px]">
                                <img height={50} width={50} alt='avatar' src="/Stat2.svg" />
                                <div className='flex flex-col m-auto'>
                                    <h2>0</h2>
                                    <p className='text-[15px] font-semibold text-[#4B6EFA]'>Registered contributors</p>
                                </div>
                            </div>
                            <div className="flex flex-row text-left bg-white p-6 gap-2 rounded-xl w-full lg:w-[296px]">
                                <img height={50} width={50} alt='avatar' src="/Stat3.svg" />
                                <div className='flex flex-col m-auto'>
                                    <h2>0</h2>
                                    <p className='text-[15px] font-semibold text-[#4B6EFA]'>Saved past questions</p>
                                </div>
                            </div>
                        </div>
                        {/* Past question cards container */}
                        <div className='bg-white w-full md:w-full lg:w-full h-fit lg:h-fit mt-8 rounded-3xl lg:rounded-xl p-4'>
                            <h1 className='text-[25px] lg:text-[30px] font-medium'>📚 Past Questions "All"</h1>
                            <div className='flex flex-col gap-5 p-4'>
                                {/* <img className='mx-auto mt-10' width={30} height={30} alt='logo' src="/icon.svg" />
                                <h1 className='text-[#7A7A7A] text-center'>Nothing here to show</h1> */}
                                {/* <h1><Link to="/upload" >Upload first file</Link></h1> */}
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                                    <div className='border border-blue-500 h-[297px] rounded-xl'>
                                    <iframe src="https://drive.google.com/file/d/1G0ek3z8yf8kZLhmXYGdAmb20ZeXM7ZTK/preview" className='rounded-xl object-contain w-full' width="270" height="307" allow="autoplay"></iframe>
                                    </div>
                                    <div className='border border-blue-500 h-[297px] rounded-xl'>
                                    <iframe src="https://drive.google.com/file/d/1BF7ELj733LcTqz38QCL9E7FTdBucXpsE/preview" className='rounded-xl object-contain w-full'  width="270" height="307" allow="autoplay"></iframe>
                                    </div>
                                    <div className='border border-blue-500 h-[297px] rounded-xl'>
                                    <iframe src="https://drive.google.com/file/d/164jKyGaGf0s2EQtyz03N-eCRdCHhHRmQ/preview"  className='rounded-xl object-contain w-full'  width="270" height="307" allow="autoplay"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row cursor-pointer bg-[#4C6FFF] bg-[url(/wavy.png)] border bg-no-repeat bg-cover h-[104px] rounded-xl w-full mt-9'>
                            <img className='ml-[-22px]' width={200} height={200} alt='stacy' src="/stacy.svg" />
                            <h2 className='font-semibold my-auto ml-[-10px] text-white text-[15px]'>Click to join our newsletter</h2>
                        </div>
                        {/* News feed */}
                        <div className='bg-white h-full mt-7 rounded-xl p-4'>
                            <h1>Latest news</h1>
                            <div className='flex flex-col m-14 pt-14 pb-8'>
                                <img className='mx-auto mb-4' width={20} height={20} alt='article' src="/article_icon.svg" />
                                <p className='text-center'>Nothing here yet</p>
                                {/* {files && files.map(({ id, title }) => (
                                    <li key={id}>
                                        <h3>{title}</h3>
                                        <h1>test</h1>
                                    </li>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-50 w-96 lg:w-full lg:hidden h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="sr-only">Home</span>
                    </button>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                        </svg>
                        <span className="sr-only">Wallet</span>
                    </button>
                    <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Wallet
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                            <span className="sr-only">New item</span>
                        </button>
                    </div>
                    <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                        </svg>
                        <span className="sr-only">Settings</span>
                    </button>
                    <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Settings
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span class="sr-only">Profile</span>
                    </button>
                    <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Root