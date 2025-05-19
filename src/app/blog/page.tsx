// app/blog/page.tsx
import Link from 'next/link';

const posts = [
  { id: 'starting-to-shoot', title: 'Starting to Shoot' },
  // add more posts here
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog (under construction)</h1>
      <ul className="space-y-4">
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`} className="text-blue-600 hover:underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}