import React, { useState } from 'react';
import ArrowComponent from './ArrowComponent';
import ClassComponent from './ClassComponent';
import AnotherPage from './AnotherPage'; // 다른 페이지 컴포넌트 임포트
import Tailwindcss from './Tailwindcss';

export default function Test() {
  const [page, setPage] = useState('home'); // 현재 페이지 상태 관리

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <p className="text-center text-3xl">Hello</p>
            <p>world</p>
            <ArrowComponent href="http://www.google.com" text="으하하" />
            <ClassComponent href="http://www.google.com" text="메롱" />
            <div
              onClick={() => setPage('another')}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              클릭하여 다른 페이지로 이동
            </div>
            <Tailwindcss />
          </>
        );
      case 'another':
        return <AnotherPage goHome={() => setPage('home')} />;
      default:
        return null;
    }
  };

  return <ul>{renderPage()}</ul>;
}
