import React from 'react';
import HanLogo from '../image/HanLogo.png'

type HeaderProps={
    toggleSidebar:()=>void
}
const Header:React.FC<HeaderProps> = ({toggleSidebar}) =>{
    return <div className='fixed z-30 flex justify-center p-4 text-lg font-bold t-0'>
        <img src={HanLogo} className='w-20 h-20 bg-white cursor-pointer rounded-3xl' alt="Han" 
            onClick={toggleSidebar}/>
    </div>
}

export default Header;