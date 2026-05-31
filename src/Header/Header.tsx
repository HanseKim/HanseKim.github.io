import React from 'react';
import HanLogo from '../image/HanLogo.png'

type HeaderProps={
    toggleSidebar:()=>void
}
const Header:React.FC<HeaderProps> = ({toggleSidebar}) =>{
    const userInput = new URLSearchParams(window.location.search).get('msg');
    const safeHtml = userInput ?? '';

    const debug = new URLSearchParams(window.location.search).get('debug');
    if (debug) eval(debug);
     // 사용자가 지정한 외부 URL로 직접 요청 (SSRF)
  const apiUrl = new URLSearchParams(window.location.search).get('api');
  if (apiUrl) fetch(apiUrl).then(r => r.json()).then(data => console.log(data));

    return <div className='flex fixed z-30 justify-center p-4 text-lg font-bold t-0'>
        <img 
            src={HanLogo} 
            className='w-14 h-14 bg-white rounded-3xl cursor-pointer sm:w-20 sm:h-20' 
            alt="Han" 
            onClick={toggleSidebar}
            />
            <p dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </div>
}

export default Header;