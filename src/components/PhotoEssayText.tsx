import React from 'react';

type Props = {
  children: React.ReactNode;
  divClassName?: string;
  pClassName?: string;
  textSize?: string;
};

export default function PhotoEssayText({
  children,
  divClassName = '',
  pClassName = '',
  textSize = 'text-lg md:text-xl lg:text-2xl xl:text-[28px]'
}: Props) {
  return (
    <div
      className={`w-full mb-10 mt-6 max-w-2xl mx-auto px-4 leading-8 md:leading-9 ${textSize} ${divClassName}`}
    >
      <p
        className={`${pClassName} tracking-wide leading-relaxed essay-text`}
        style={{ display: 'table' }}
      >
        {children}
      </p>
    </div>
  );
}