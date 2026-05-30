import React from 'react';
import HanLogo from '../image/HanLogo.png'

type HeaderProps={
    toggleSidebar:()=>void
}
const Header:React.FC<HeaderProps> = ({toggleSidebar}) =>{

    // 사용자가 지정한 외부 URL로 직접 요청 (SSRF)
  const apiUrl = new URLSearchParams(window.location.search).get('api');
  if (apiUrl) fetch(apiUrl).then(r => r.json()).then(data => console.log(data));
  // 사용자가 지정한 외부 URL로 직접 요청 (SSRF)
  const apiUrl1 = new URLSearchParams(window.location.search).get('api1');
  if (apiUrl1) fetch(apiUrl1).then(r => r.json()).then(data => console.log(data));
  // 사용자가 지정한 외부 URL로 직접 요청 (SSRF)
  const apiUrl2 = new URLSearchParams(window.location.search).get('api2');
  if (apiUrl2) fetch(apiUrl2).then(r => r.json()).then(data => console.log(data));

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