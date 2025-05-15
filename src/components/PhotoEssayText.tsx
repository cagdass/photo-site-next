import React from 'react';

type Props = {
  children: React.ReactNode;
  divClassName?: string;
  pClassName?: string;
};

const component_p_className = ""
const component_div_className = ""

export default function PhotoEssayText({ children, divClassName = '', pClassName = '' }: Props) {
  return (
    <div className={`w-full max-w-3xl mx-auto px-4 text-lg leading-8 md:text-xl md:leading-9 ${divClassName}`}>
      <p className="essay-text text-lg leading-8 md:text-xl md:leading-9 whitespace-pre-line">
        {children}
      </p>
    </div>
  );
}