import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Component/Home';
import SideBar from './Component/SideBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Detail from './Component/Detail';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <HashRouter>
      <div className='flex flex-col items-center'>
        <Header toggleSidebar={toggleSidebar}/>
        <div className='flex flex-col'>
          <SideBar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
