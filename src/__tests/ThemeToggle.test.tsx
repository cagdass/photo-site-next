import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  });

  it('toggles dark mode when clicked', () => {
    const { getByTitle } = render(<ThemeToggle />);

    const button = getByTitle('Toggle theme');

    // Initially not dark
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Toggle to dark
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.theme).toBe('dark');

    // Toggle back to light
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.theme).toBe('light');
  });
});