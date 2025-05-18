import React from 'react';

type Props = {
  children: React.ReactNode;
  divClassName?: string;
  pClassName?: string;
  textSize?: string;
};

export default function PhotoEssayText({ children, divClassName = '', pClassName = '', textSize = 'text-xl' }: Props) {
  return (
    <div className={`w-full mb-10 mt-6 max-w-3xl mx-auto px-4 leading-8 md:leading-9 ${textSize} ${divClassName}`}>
      <p className={`${pClassName} px-2 tracking-wide leading-relaxed essay-text leading-8  md:leading-9 whitespace-pre-line ${pClassName}`}>
        {children}
      </p>
    </div>
  );
}