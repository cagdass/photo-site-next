import { render, screen, within, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renders Çağdaş', () => {
    render(<Navbar />);
    const matches = screen.getAllByText('Çağdaş');
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders navigation links in desktop navbar with correct hrefs', () => {
    render(<Navbar />);
    const desktopNav = screen.getByRole('navigation'); // or query by class/label if needed
    const links = within(desktopNav).getAllByRole('link');

    expect(links.some(link => link.textContent === 'Home' && link.getAttribute('href') === '/')).toBe(true);
    expect(links.some(link => link.textContent === 'Contact' && link.getAttribute('href') === '/contact')).toBe(true);
  });

  it('opens and closes mobile menu when toggled', () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole('button', { name: /☰|✖/ }); // matches ☰ (open) or ✖ (close)
    expect(toggleButton).toBeInTheDocument();

    // Initially mobile menu is hidden
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toHaveClass('opacity-0');

    // Click to open
    fireEvent.click(toggleButton);

    // Menu should now be visible
    expect(mobileMenu).toHaveClass('opacity-100');

    // Click again to close
    fireEvent.click(toggleButton);

    // Menu should be hidden again
    expect(mobileMenu).toHaveClass('opacity-0');
  });
});