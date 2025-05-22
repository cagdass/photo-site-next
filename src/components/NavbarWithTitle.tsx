'use client';

// src/components/NavbarWithTitle.tsx
import Navbar from './Navbar';
import { usePageTitle } from '@/context/PageTitleContext';

export default function NavbarWithTitle() {
  const [title] = usePageTitle();

  return <Navbar pageTitle={title} />;
}