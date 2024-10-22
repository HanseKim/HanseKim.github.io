import React, { useState } from 'react';
import MyList from '../List/MyList';
import InsertList from '../List/InsertList';

const Dashboard = ({ mode }) => {
  const [list, setList] = useState<{ num: number; contents: string }[]>([]);

  const addItem = (contents: string) => {
    setList((prev) => [...prev, { num: prev.length + 1, contents }]);
  };

  const removeItem = (num: number) => {
    setList((prev) => prev.filter((item) => item.num !== num)); // num에 해당하는 항목 제거
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <InsertList addItem={addItem} mode={mode} />
      <MyList list={list} removeItem={removeItem} mode={mode} />{' '}
      {/* removeItem 함수를 props로 전달 */}
    </div>
  );
};

export default Dashboard;
