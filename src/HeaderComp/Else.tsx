import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';
import { makeClass } from '../MakeClass/MakeClass';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export type ElseProps = TextProps & {
  elseName: string;
  dot: string;
  wow: string;
  isLoggedIn: boolean;
};
/**<div className="flex">
            <div className="bg-red-500 w-[50px] h-[25px]">...</div>
            <div className="rounded-tr-lg">와</div>
          </div>*/
export const Else: FC<ElseProps> = ({
  elseName,
  dot,
  wow,
  isLoggedIn,
  onLogout,
}) => {
  const className = makeClass(elseName, 'text-center');
  return (
    <div className={className}>
      {isLoggedIn ? (
        <button
          className={wow}
          style={{ width: '60px', fontSize: '15px' }}
          onClick={onLogout} // 수정된 부분
        >
          로그아웃
        </button>
      ) : (
        <div style={{ width: '60px', fontSize: '15px' }}></div>
      )}
    </div>
  );
};
