import React, { useState } from 'react';

const InsertList = ({ addItem, mode }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue.trim()) {
      // 입력값이 비어있지 않으면
      addItem(inputValue); // addItem 호출
      setInputValue(''); // 입력값 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddClick(); // Enter 키가 눌리면 addItem 호출
    }
  };

  return (
    <div
      className="bg-white flex justify-between"
      style={{
        width: '500px',
        height: '50px',
        padding: '10px',
        border: '2px solid ',
        borderRadius: '5px',
        margin: '10px',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="여기 입력하세요" // placeholder 추가
        onKeyPress={handleKeyPress} // Enter 키 이벤트 핸들러 추가
        onChange={(e) => setInputValue(e.target.value)} // 입력값 상태 업데이트
        style={{
          width: '400px',
          borderRadius: '5px',
          border: '2px solid black',
        }}
      />
      <button
        className="flex-end w-16 rounded"
        style={{ backgroundColor: mode ? '#808080' : 'lightgray' }}
        onClick={handleAddClick}
      >
        Insert
      </button>
    </div>
  );
};

export default InsertList;
