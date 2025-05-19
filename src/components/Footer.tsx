import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer py-6 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-16">
      <p>© {new Date().getFullYear()} Çağdaş. All rights reserved.</p>
      <p>No cookies, no tracking, see the{" "}
        <Link
          className="underline text-blue-600 dark:text-blue-400"
          href="/privacy_policy">
          privacy policy
        </Link>.</p>
      <p>
        This site uses{' '}
        <a
          href="https://www.goatcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 dark:text-blue-400"
        >
          GoatCounter
        </a>{' '}
        for anonymous visit counts.
      </p>
    </footer>
  );
};

export default Footer;