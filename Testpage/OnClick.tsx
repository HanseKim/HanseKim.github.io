import React from 'react';
import type { SyntheticEvent } from 'react';

export default function OnClick() {
  const onClick = (e: SyntheticEvent) => {
    console.log('Hello');
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{ textTransform: 'none' }}
    >
      Button
    </button>
  );
}
