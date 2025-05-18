// app/page.tsx
import HeroFlip from '@/components/HeroFlip';
import HomePageProjects from '@/components/HomePageProjects';
import PhotoGallery from '@/components/PhotoGallery';
import miscPhotos from '@/data/miscPhotos';
import './home.css';

export default function Home() {
  return (
    <section className="px-4">
      <div className="hero-text text-sm sm:text-base mb-6 text-center mt-8">
        <p>
          Postcard-unfriendly photography from the places I've been
        </p>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <HomePageProjects />
        </div>
      </div>

      <div className="max-w-2xl mt-10 mb-8 mx-auto px-4">
        <p className="text-lg leading-relaxed mb-6">
          I’m a street and documentary photographer — and a budget traveler — among other things, loosely based in Stockholm, Sweden. I explore life on the margins: red light alleys in Thailand, sleepy Asian towns, right-wing extremists, obscure villages by ancient rivers, refugees, genocide memorials, poor gutters, and forgotten corners of the Balkans.
          <br /><br />
          I’ve biked across Europe along the eastern edge of the Iron Curtain, from Scandinavia to Turkey. I walk a lot, shoot way too many photos, and edit excruciatingly slowly — always aiming to capture people the way they’d want to be remembered… or at least not forgotten.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I’m currently on a break from coding (except for this site). Too restless, perhaps, for office life — as an old manager once asked me:
        </p>

        <blockquote className="mt-10 text-xl font-serif mb-2">
          “Should we chain you to your chair?”
        </blockquote>
        <p className="text-sm text-gray-500 text-right italic mb-6">— my old manager</p>

        <p className="text-lg leading-relaxed">
          Maybe he should’ve. <br />
          Now I’ve got no time for that. <br />
          I’m out capturing people of my own.
        </p>
      </div>

      <HeroFlip />

      <p className="hero text-sm sm:text-base mt-4 text-center text-gray-500 italic">
        Tag along, I'm on a journey to be king of photographers!
      </p>

      <div className="mt-4">
        <PhotoGallery photos={miscPhotos} />
      </div>
    </section>
  );
}