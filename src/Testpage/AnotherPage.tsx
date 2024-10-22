import React from 'react';

const AnotherPage = ({ goHome }) => {
  return (
    <div>
      <h1>다른 페이지입니다!</h1>
      <p>여기서 다양한 내용을 추가할 수 있습니다.</p>
      <button onClick={goHome}>홈으로 돌아가기</button>{' '}
      {/* 홈으로 돌아가는 버튼 */}
    </div>
  );
};

export default AnotherPage;
