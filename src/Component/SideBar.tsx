import React from 'react';
import { useNavigate } from 'react-router-dom';

type SideBarProps ={
    isSidebarVisible: boolean
    toggleSidebar:()=>void
}
const SideBar:React.FC<SideBarProps> = ({isSidebarVisible, toggleSidebar}) =>{
    const navigater = useNavigate();

    return (
        <div className={`transition-transform duration-300 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} bg-white/60 rounded-r-xl w-40 z-40 h-[50%] fixed left-0 top-0 shadow-lg`}>
            <h2 className="flex h-[20%] flex-row p-4 text-lg font-bold">
                <div className='w-[60%]'>훔쳐보기</div>
                <button onClick={toggleSidebar}
                className='w-[40%] justify-end flex'>X</button>
            </h2>
            <ul className="p-4 h-[80%] flex flex-col justify-evenly">
                <li className="py-2">
                    <p onClick={()=>{navigater('/'); toggleSidebar()}}>홈</p>
                </li>
                <li className="py-2">
                    <a href="https://github.com/HanseKim" target="_blank" rel="noopener noreferrer" className="w-full text-left">깃허브</a>
                </li>
                <li className="py-2">
                    <a href="https://lavish-carpet-8f6.notion.site/25-03-18-1ba0070cb764804ea523e6dd9d478bdb?pvs=4" target="_blank" rel="noopener noreferrer" className="w-full text-left">백준 노션 정리</a>
                </li>
                <li className="py-2">
                    <a href="https://btc-production-9f7f.up.railway.app/" target="_blank" rel="noopener noreferrer">자동매매</a>
                </li>
            </ul>
      </div>)
}

export default SideBar;