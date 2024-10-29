import React, { useState } from 'react';
import './CustomCheckBox.css'; // CSS 파일 임포트

const List = ({ num, contents, removeItem }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev); // 체크박스 상태 토글
  };

  const handleRemove = () => {
    removeItem(num); // 항목 삭제
  };

  return (
    <li
      className="flex m-4 rounded"
      style={{
        width: '450px',
        opacity: isChecked ? 0.5 : 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        border: 'solid 1px black',
      }}
    >
      <form>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{
              display: 'none',
            }} // 기본 체크박스 숨기기
          />
          <span className={`checkbox ${isChecked ? 'checked' : ''}`}></span>
        </label>
      </form>
      <div
        className="flex justify-between"
        style={{ paddingLeft: '30px', width: '100%', paddingTop: '5px' }}
      >
        <div className="flex justify-center" style={{ flex: 1 }}>
          <span className="line-clamp-1 text-center">{contents}</span>
        </div>
      </div>
      <button onClick={handleRemove} className="remove-button">
        삭제
      </button>
    </li>
  );
};

export default List;
