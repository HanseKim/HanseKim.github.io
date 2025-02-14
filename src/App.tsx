import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Component/Home';
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
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
