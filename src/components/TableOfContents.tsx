import React from "react";

interface ToCProps {
  headings: { id: string; text: string; type?: string }[];
  activeId?: string | null;
}

export default function TableOfContents({ headings, activeId }: ToCProps) {
  return (
    <nav
      className="hidden lg:block sticky top-24 w-48 py-2 px-4 rounded"
      aria-label="Table of contents"
    >
      <h3 className="font-semibold mb-2">Contents</h3>
      <ul className="space-y-2 text-sm">
        {/* back to top link */}
        <li>
          <a
            href="#top"
            className="text-gray-500 hover:underline"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </li>
        {headings.map(({ id, text, type }) => (
          <li
            key={id}
            className={`${type === "subheading" ? "ml-4" : ""} ${activeId === id ? "underline font-semibold" : ""
              }`}
          >
            <a href={`#${id}`} className="text-blue-500 hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}