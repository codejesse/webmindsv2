import React from 'react'

const Sidenav = () => {
    return (
        <div className='hidden lg:flex flex-col mx-auto bg-white h-full w-[107px] fixed'>
            {/* Todo: Make the nav items links to other pages */}
            {/* Todo: Add active state indicator on the active page */}
            {/* Todo: Create a universal navbar component in layout and make it only visible when in mobile and maybe tablet */}
            {/* Todo: Implement Authentication */}
            {/* Todo: Implement uploading pdf file */}
            <img className='mx-auto mt-10' width={50} height={50} alt='logo' src="/icon.svg" />
            <div className='flex flex-col gap-10 mx-auto mt-8'>
                <img width={20} height={20} alt='logo' src="/home_icon.svg" />
                <img width={24} height={24} alt='logo' src="/tutor.svg" />
                <img className='ml-[2px]' width={15} height={15} alt='logo' src="/saved_icon.svg" />
                <img width={20} height={20} alt='logo' src="/article_icon.svg" />
                <img width={20} height={20} alt='logo' src="/adjust_icon.svg" />
                <div className='lg:pt-20'>
                    <img width={20} height={20} alt='logo' src="/Logout_icon.svg" />
                </div>
            </div>
        </div>
    )
}

export default Sidenav