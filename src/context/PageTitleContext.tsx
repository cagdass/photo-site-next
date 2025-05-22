// src/context/PageTitleContext.tsx
'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

const PageTitleContext = createContext<[string, (title: string) => void]>(['', () => { }]);

export function usePageTitle() {
  return useContext(PageTitleContext);
}

export function PageTitleProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState('');
  return (
    <PageTitleContext.Provider value={[title, setTitle]}>
      {children}
    </PageTitleContext.Provider>
  );
}