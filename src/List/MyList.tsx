import React from 'react';
import List from './List';

const MyList = ({ list, removeItem, mode }) => {
  return (
    <div
      className="bg-white"
      style={{
        width: '500px',
        height: '320px',
        padding: '10px',
        border: '2px solid ',
        borderRadius: '5px',
        margin: '10px',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <h1 className="text-xl font-bold">My List</h1>
      <ul>
        {list.map((item) => (
          <List
            //key={item.num}
            num={item.num}
            contents={item.contents}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyList;
