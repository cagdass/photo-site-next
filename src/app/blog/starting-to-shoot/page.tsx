// app/blog/starting-to-shoot/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Starting to Shoot – Summer 2023 (Work in Progress)",
  description:
    "An early look at my journey learning photography with my teacher in summer 2023. Homework, challenges, and first successes.",
  openGraph: {
    title: "Starting to Shoot – Summer 2023",
    description:
      "An early look at my journey learning photography with my teacher in summer 2023. Homework, challenges, and first successes.",
    images: [
      {
        url: "/images/blog/starting-to-shoot/cover.jpg",
        width: 1200,
        height: 675,
        alt: "Photo walk with teacher, summer 2023",
      },
    ],
  },
};

const publishedDate = "May 18, 2025";

export default function StartingToShootPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <h1>
        Starting to Shoot – Summer 2023{" "}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          (Work in Progress)
        </span>
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Published on {publishedDate}
      </p>

      <Image
        src="/images/blog/starting-to-shoot/cover.jpg"
        alt="Photo walk with teacher, summer 2023"
        width={1200}
        height={675}
        className="rounded-lg my-6"
        priority
      />

      <p>
        This is an early look at my journey learning photography with my teacher during the summer
        of 2023. It’s a <em>work in progress</em> — I’ll update this post as I continue to practice,
        grow, and reflect.
      </p>

      <h2>The First Meeting</h2>
      <p>
        In summer 2023, I began working seriously on my photography skills. I was lucky to meet a
        skilled teacher who shared not only techniques but also a deep passion for seeing the world
        through the lens. Our first meetings were full of enthusiasm and big goals.
      </p>

      <h2>Homework Assignments</h2>
      <p>
        To improve, I was given assignments like shooting only in natural light, practicing framing
        and composition, and studying influential photographers. These helped me slow down and
        really think about my images.
      </p>

      <h2>Challenges and Early Struggles</h2>
      <p>
        Learning was not without difficulty. I struggled with exposure, focus, and patience, but my
        teacher’s feedback helped me improve and stay motivated.
      </p>

      <p>
        Thanks for reading this skeleton of a work in progress! I’ll update this post regularly and wrap it up at some point. Stay tuned.
      </p>
    </main>
  );
}