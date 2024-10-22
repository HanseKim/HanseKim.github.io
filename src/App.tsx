import React, { useState } from 'react';
import { Header } from './HeaderComp/Header';
import Login from './Login/Login';
import Dashboard from './Login/Dashboard';

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState('#f5f5f5'); // 기본 배경색
  const [mdColor, setmdColor] = useState('#808080');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 상태 관리
  const [mode, setMode] = useState<boolean>(false); // 로그인 상태 관리

  const changeBackgroundColor = () => {
    console.log('click');
    setBgColor((prevColor) =>
      prevColor === '#f5f5f5' ? '#696969' : '#f5f5f5'
    ); // 클릭할 때마다 배경색 변경
    setmdColor((prevColor) =>
      prevColor === '#808080' ? 'rosybrown' : '#808080'
    );
    setMode((preMode) => !preMode);
  };
  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
  };
  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 시 상태 업데이트
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen flex items-center justify-center"
    >
      <div
        className="bg-white rounded-lg"
        style={{ width: '500px', height: '500px', backgroundColor: bgColor }}
      >
        <Header
          className="flex justify-between rounded-lg"
          modeName="rounded-lg m-1"
          mdColor={mdColor}
          Click={changeBackgroundColor}
          elseName="flex"
          dot="bg-red-500 w-[50px] h-[25px]"
          wow="rounded-lg bg-yellow-500 m-1"
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          mode={mode}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            //alignItems: 'center',
            height: '450px',
            backgroundColor: { bgColor },
          }}
        >
          {isLoggedIn ? (
            <Dashboard mode={mode} /> // 로그인 상태에 따라 Dashboard 표시
          ) : (
            //여기 다시 로그인으로 수정하면 돌아옴
            //<Dashboard />
            <Login onLogin={handleLogin} mode={mode} /> // 로그인 상태가 아닐 때 Login 컴포넌트 표시
          )}
        </div>

        <footer
          style={{
            marginTop: '100px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#777',
          }}
        >
          &copy; {new Date().getFullYear()} SehanKim. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
