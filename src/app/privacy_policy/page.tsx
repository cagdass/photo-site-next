'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicySection = ({ heading, paragraph }: { heading: string; paragraph: React.ReactNode }) => (
  <>
    <h2 className="mt-8 text-xl font-semibold">{heading}</h2>
    <p className="mt-2">{paragraph}</p>
  </>
);

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 ">
      <h1 className="text-2xl">Privacy Policy</h1>
      <p className="mt-6">
        This site respects your privacy. No personal data is collected or stored here.
        There are no cookies or third-party trackers active on this website.
      </p>
      <PrivacyPolicySection
        heading="Analytics"
        paragraph={(
          <>
            To keep basic statistics of anonymous visitor counts, an analytics tool called <a
              href="https://www.goatcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400"
            >
              GoatCounter
            </a> is used.
            It does not use cookies or collect personal information. The country the user is visiting from and which pages they visit is stored only.
            If you use ad blockers, please consider disabling them for this site to help support the project.
          </>
        )}
      />
      <PrivacyPolicySection
        heading="Email Subscription"
        paragraph={(
          <>
            The site offers an email subscription powered by <a
              href="https://buttondown.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400"
            >Buttondown</a>.
            When you subscribe, your email is sent directly to Buttondown’s servers,
            and your subscription data is handled according to their privacy policy.
            No email data is collected or stored by this website itself.
          </>
        )}
      />
      <PrivacyPolicySection
        heading="Data Security"
        paragraph="Since no personal data is collected or stored, there is no risk of data breaches or misuse.
        The site does not track you or share data with third parties."
      />
      <PrivacyPolicySection
        heading="Third-Party Services"
        paragraph=" The website is hosted on reliable infrastructure but does not integrate external tracking or marketing services.
        Only the self-hosted GoatCounter analytics is used."
      />
      <PrivacyPolicySection
        heading="Changes to This Policy"
        paragraph="This privacy policy may be updated occasionally. Please check back here for any changes."
      />
      <PrivacyPolicySection
        heading="Contact"
        paragraph={(
          <>
            If you have any questions or concerns about privacy, please contact me at{" "}
            <a
              href="mailto:cagdasmore@gmail.com"
              className="underline text-blue-600 dark:text-blue-400"
            >
              cagdasmore[at]gmail.com
            </a>.
          </>
        )}
      />
    </main>
  );
}