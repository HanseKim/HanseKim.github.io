import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';
import { makeClass } from '../MakeClass/MakeClass';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export type ModeProps = TextProps & { onClick?: () => {} };
export const Mode: FC<ModeProps> = ({
  className: _className,
  Click,
  mdColor,
}) => {
  const className = makeClass(_className, 'text-center');
  return (
    <button
      className={className}
      style={{ width: '50px', backgroundColor: `${mdColor}` }}
      onClick={Click}
    >
      Mode
    </button>
  );
};
