import React from 'react';

type SideBarProps ={
    isSidebarVisible: boolean
    toggleSidebar:()=>void
}
const SideBar:React.FC<SideBarProps> = ({isSidebarVisible, toggleSidebar}) =>{
    return (
        <div className={`transition-transform duration-300 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} bg-white/60 w-64 z-40 h-[50%] fixed left-0 top-0 shadow-lg`}>
            <h2 className="flex flex-row p-4 text-lg font-bold">
                <div className='w-[60%]'>세하니 사이드 바</div>
                <button onClick={toggleSidebar}
                className='w-[40%] justify-end flex'>X</button>
            </h2>
            <ul className="p-4">
                <li className="py-2">
                    <button >노션</button>
                </li>
                <li className="py-2">
                    <button>github</button>
                </li>
                <li className="py-2">
                    <button>투자 수익률</button>
                </li>
            </ul>
      </div>)
}
export default SideBar;