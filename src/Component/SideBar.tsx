import React from 'react';

type SideBarProps ={
    isSidebarVisible: boolean
    toggleSidebar:()=>void
}
const SideBar:React.FC<SideBarProps> = ({isSidebarVisible, toggleSidebar}) =>{
    return (
        <div className={`transition-transform duration-300 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} bg-white/60 rounded-r-xl w-40 z-40 h-[50%] fixed left-0 top-0 shadow-lg`}>
            <h2 className="flex h-[20%] flex-row p-4 text-lg font-bold">
                <div className='w-[60%]'>훔쳐보기</div>
                <button onClick={toggleSidebar}
                className='w-[40%] justify-end flex'>X</button>
            </h2>
            <ul className="p-4 h-[80%] flex flex-col justify-evenly">
                <li className="py-2">
                    <button onClick={()=>{alert("아직 준비중입니다")}}>노션</button>
                </li>
                <li className="py-2">
                    <button onClick={()=>{alert("아직 준비중입니다")}}>github</button>
                </li>
                <li className="py-2">
                    <button onClick={()=>{alert("아직 준비중입니다")}}>투자 수익률</button>
                </li>
            </ul>
      </div>)
}

export default SideBar;