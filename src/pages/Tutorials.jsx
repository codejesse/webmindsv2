import React from 'react'
import { Link } from 'react-router-dom'
import Sidenav from '../components/Sidenav';

const Tutorials = () => {
    return (
        <div className='w-[100%] bg-[#F7FAFC] h-screen'>
            <Sidenav />
            <div className='flex flex-row my-auto p-7 lg:ml-24 w-[60%]'>
                {/* <Link to="/dashboard"><CgArrowLeft className='' size={30} /></Link> */}
                <h1 className='flex-1 text-[20px] md:text-[30px] lg:text-[40px] my-auto font-medium'>🚀 Tutorials</h1>
            </div>
            <div className='bg-white p-7 w-[80%] md:w-full lg:w-[80%] h-fit mt-8 rounded-3xl lg:rounded-xl ml-10 lg:ml-[150px] border'>
                <h1 className='text-[25px] lg:text-[30px] text-center font-medium'>Tutorials</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-4'>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/c8xSz0O90Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/LkcbabVODx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/Qcle3DXbhl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/StSrkPX7np4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/FrF1QBP8ejo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="338" height="229" src="https://www.youtube.com/embed/O_Ul5aPsKIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Tutorials