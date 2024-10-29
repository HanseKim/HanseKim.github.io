import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';
import { Mode } from './Mode';
import { makeClass } from '../MakeClass/MakeClass';
import { Else } from './Else';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export type HeaderProps = TextProps & {
  modeName: string;
  opacity: number;
  elseName: string;
  dot: string;
  wow: string;
  Click?: () => void;
  isLoggedIn: boolean;
  mode: boolean;
};
/**flex justify-between */
export const Header: FC<HeaderProps> = ({
  className: _className,
  modeName,
  elseName,
  dot,
  wow,
  Click,
  mdColor,
  isLoggedIn,
  onLogout, // 추가된 부분
  mode,
}) => {
  const className = makeClass(_className);
  return (
    <div
      className={className}
      style={{
        height: '50px',
        border: '2px solid black',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <Mode
        className={`${makeClass(modeName)}`}
        Click={Click}
        mdColor={mdColor}
        style={{ width: '50px' }}
      />
      <p
        className="font-bold text-3xl text-center p-1"
        style={{ width: '390px' }}
      >
        To Do List
      </p>
      <Else
        style={{ width: '60px' }}
        elseName={elseName}
        dot={dot}
        wow={wow}
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
      />
    </div>
  );
};
