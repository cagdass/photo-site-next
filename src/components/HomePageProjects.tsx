'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePageProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.gallery-card')) as HTMLElement[];
    if (cards.length === 0) return;

    const containerScrollLeft = container.scrollLeft;

    const buffer = 20;

    const targetCard = direction === 'right'
      ? cards.find(card => card.offsetLeft - containerScrollLeft > buffer)
      : [...cards].reverse().find(card => containerScrollLeft - card.offsetLeft > buffer);

    if (targetCard) {
      container.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
    }
  };

  const featured = [
    {
      id: '/soi6',
      image: '/images/pattaya/portraits/soi6_portrait-01.jpg',
      title: 'Soi 6',
      caption: 'For seven weeks, I photographed a bar street in Pattaya, Thailand'
    },
    {
      id: '/brief/sihanoukville',
      image: '/images/sihanoukville/sihanoukville-07.jpg',
      title: 'Sihanoukville',
      caption: 'One day in a Cambodian city in rapid transformation'
    },
    {
      id: '/brief/songkran',
      image: '/images/songkran/songkran-01.jpg',
      objectPosition: 'object-[60%_center]',
      title: 'Songkran',
      caption: "I photographed Thailand's wettest day with a waterproof camera"
    },
    {
      id: '/brief/carmen',
      image: '/images/carmen/carmen-05.jpg',
      // objectPosition: 'object-[60%_center]',
      title: 'Carmen',
      caption: "Scenes from Stockholm's trashiest, most likely, bar"
    },
    // {
    //   id: '/brief/songkran3',
    //   image: '/images/songkran/songkran-01.jpg',
    //   objectPosition: 'object-[60%_center]',
    //   title: 'Songkran',
    //   caption: "I photographed Thailand's wettest day with a waterproof camera"
    // },
    // {
    //   id: '/brief/songkran4',
    //   image: '/images/songkran/songkran-01.jpg',
    //   objectPosition: 'object-[60%_center]',
    //   title: 'Songkran',
    //   caption: "I photographed Thailand's wettest day with a waterproof camera"
    // },
    // {
    //   id: '/brief/songkran5',
    //   image: '/images/songkran/songkran-01.jpg',
    //   objectPosition: 'object-[60%_center]',
    //   title: 'Songkran',
    //   caption: "I photographed Thailand's wettest day with a waterproof camera"
    // },
  ];

  return (
    <div className="relative">
      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="scroll-container overflow-x-auto flex space-x-6 px-4 py-2 snap-x snap-mandatory scroll-smooth"
      >
        {featured.map((project, idx) => (
          <div key={project.id || idx}
            className="gallery-card w-[360px] mr-8 shrink-0"
          >
            <Link
              key={project.id || idx}
              href={project.id}
              className="relative w-full max-w-[420px] flex-shrink-0 snap-start overflow-hidden rounded shadow transition duration-300 hover:shadow-xl hover:shadow-black/40 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-auto aspect-[2/3] object-cover transition duration-300 group-hover:brightness-110 ${project.objectPosition || 'object-center'}`}
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white px-3 py-2 h-[4.5rem] transition-all duration-300 group-hover:bg-black/80 group-hover:translate-y-[6px]">
                  <h3 className="text-base font-semibold leading-tight">{project.title}</h3>
                  <p className="text-sm opacity-90 leading-snug line-clamp-2">{project.caption}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 -translate-y-1/2 left-2 z-10
             bg-[var(--foreground)] border text-[var(--background)]
             p-2 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 -translate-y-1/2 right-2 z-10
             bg-[var(--foreground)] border text-[var(--background)]
             p-2 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}