import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SideBar from './Component/SideBar';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };

    return (
      <div className='flex flex-col items-center'>
        <Header toggleSidebar={toggleSidebar}/>
        
        <div className='flex'>
          <SideBar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>
          <div className='flex flex-col w-full'>
            <div className='w-screen bg-orange-300 h-[600px] z-0'></div>
            <div className='z-10 w-screen h-64 bg-white'>sehan</div>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default App;
