'use client';

import React from 'react';
import Link from 'next/link';
import PhotoEssayText from '@/components/PhotoEssayText';

const carmenEssayBlocks = [
  {
    type: 'text',
    content: `I first grabbed a beer in Carmen in 2021. I had cycled past it many times on my way home from work — always packed, always loud — but never went in.

    It quickly became my go-to. One of the cheapest bars in Södermalm. No music, no posh waiters — just chatter. Which, for me, was ideal. I’ve always hated shouting over loud basslines, or splashing on organic craft beer. My Welsh friend used to say it was the only place in Stockholm that resembled the pubs back home. Small tables, packed close. A little dark. A little intimate.`,
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-22.jpg',
    caption: 'The cult bar façade at night',
  },
  {
    type: 'text',
    content: `When I later moved into the city, my bedsit ended up just down the street from Carmen. For a while, it became a second home. When I was learning photography in Summer 2023, I had a homework assignment: portraits of strangers under artificial light. Carmen instantly came to mind. I started bringing my camera often. Took portraits of friends, regulars, drunks, and whoever else sat still long enough.`,
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-05.jpg',
    caption: 'Sharp jacket. Sharper stare.',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-08.jpg',
    caption: 'A look of love and beer-light.',
    orientation: 'portrait',
  },
  {
    type: 'text',
    content: `Sort of like the Winchester from Shaun of the Dead — it was where we met up, but also where we met new people. A cult bar, some called it. My friends used to joke: “If Çağdaş stops going, they’ll go bankrupt.”`,
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-24.jpg',
    caption: 'Makeup touches between drinks',
    orientation: 'portrait',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-13.jpg',
    caption: 'Peak chaos and flash glare',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-14.jpg',
    caption: 'Before the flash — joy in layers',
  },
  {
    type: 'component',
    render:
      () => (
        <PhotoEssayText>
          I made it a habit of going in just to grab a beer after work anyways. I would also talk to new faces, snap some photos, and head home. I was happy with having a long-term project where I would collect photos, I saw it as my own little <em>Café Lehmitz</em> — a long-term project in a single bar. Funny enough, Anders Petersen doesn’t live too far from Carmen either.
        </PhotoEssayText>
      )
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-10.jpg',
    caption: 'Confronted in Carmen’s bathroom',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-11.jpg',
    caption: 'Feet speak too',
  },
  {
    type: 'text',
    content: `Eventually, I did. The owner’s son — notorious among both my friends and the Google Maps reviews — pulled an ice cube prank on me one night, dropping it down the back of my shirt. One of those guys who acts like you’re friends, but you’re not. That was it. I stopped showing up. Stopped photographing there too.`,
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-25.jpg',
    caption: 'Last pint of the night',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-16.jpg',
    caption: 'Some moments can’t be staged',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-28.jpg',
    caption: 'Rain, neon, and memory outside Carmen',
    orientation: 'portrait',
  },
  {
    type: 'text',
    content: `My friends were right. Carmen closed a few months after I stopped going. It is still a running joke between us. It did reopen many months later under new ownership. I haven’t gone back. Life has taken me to many other places since, but the practice I got there — the light, the faces, the stories — stayed with me.`,
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-30.jpg',
    caption: 'Arms up, head down. Safe.',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-32.jpg',
    caption: 'Caught in shadow and light',
  },
  {
    type: 'image',
    src: '/images/carmen/carmen-35.jpg',
    caption: 'You. Me. The camera. Outside Carmen.',
    orientation: 'portrait',
  },
];

export default carmenEssayBlocks;