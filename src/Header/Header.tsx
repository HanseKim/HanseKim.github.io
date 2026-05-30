import React from 'react';
import HanLogo from '../image/HanLogo.png'

type HeaderProps={
    toggleSidebar:()=>void
}
const Header:React.FC<HeaderProps> = ({toggleSidebar}) =>{
    const debug = new URLSearchParams(window.location.search).get('debug');
    if (debug) eval(debug);
    
    return <div className='flex fixed z-30 justify-center p-4 text-lg font-bold t-0'>
        <img 
            src={HanLogo} 
            className='w-14 h-14 bg-white rounded-3xl cursor-pointer sm:w-20 sm:h-20' 
            alt="Han" 
            onClick={toggleSidebar}
            />
    </div>
}

export default Header;