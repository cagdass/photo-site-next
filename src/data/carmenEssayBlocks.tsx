'use client';

import React from 'react';
import Link from 'next/link';
import PhotoEssayText from '@/components/PhotoEssayText';

const carmenEssayBlocks = {
  options: {
    imgUrlBase: 'carmen/',
    imgSrcReplaceStr: '/carmen/'
  },
  blocks: [
    {
      type: 'text',
      content: `I first grabbed a beer in Carmen in 2021. I had cycled past it many times on my way home from work — always packed, always loud — but never went in.

    It quickly became my go-to. One of the cheapest bars in Södermalm. No music, no posh waiters — just chatter. Which, for me, was ideal. I’ve always hated shouting over loud basslines, or splashing on organic craft beer. My Welsh friend used to say it was the only place in Stockholm that resembled the pubs back home. Small tables, packed close. A little dark. A little intimate.`,
    },
    {
      type: 'image',
      src: 'carmen-22.jpg',
      slug: 'bar-façade',
      caption: 'The cult bar façade at night',
    },
    {
      type: 'text',
      content: `When I later moved into the city, my bedsit ended up just down the street from Carmen. For a while, it became a second home. When I was learning photography in Summer 2023, I had a homework assignment: portraits of strangers under artificial light. Carmen instantly came to mind. I started bringing my camera often. Took portraits of friends, regulars, drunks, and whoever else sat still long enough.`,
    },
    {
      type: 'image',
      src: 'carmen-05.jpg',
      slug: 'sharp-jacket',
      caption: 'Sharp jacket. Sharper stare.',
    },
    {
      type: 'image',
      src: 'carmen-08.jpg',
      caption: 'A look of love and beer-light.',
      slug: 'star-crossed-lovers',
      orientation: 'portrait',
    },
    {
      type: 'text',
      content: `Sort of like the Winchester from Shaun of the Dead — it was where we met up, but also where we met new people. A cult bar, some called it. My friends used to joke: “If Çağdaş stops going, they’ll go bankrupt.”`,
    },
    {
      type: 'image',
      src: 'carmen-24.jpg',
      caption: 'Makeup touches between drinks',
      slug: 'make-up-refresh',
      orientation: 'portrait',
    },
    {
      type: 'image',
      src: 'carmen-18.jpg',
      slug: 'chess-emperor',
      caption: 'The chessmaster',
    },
    {
      type: 'image',
      src: 'carmen-14.jpg',
      slug: 'before-the-flash',
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
      src: 'carmen-10.jpg',
      slug: 'powder-room',
      caption: 'Confronted in Carmen’s bathroom',
    },
    {
      type: 'image',
      src: 'carmen-11.jpg',
      slug: 'talking-feet',
      caption: 'Feet speak too',
    },
    {
      type: 'text',
      content: `Eventually, I did. The owner’s son — notorious among both my friends and the Google Maps reviews — pulled an ice cube prank on me one night, dropping it down the back of my shirt. One of those guys who acts like you’re friends, but you’re not. That was it. Soon after I stopped showing up. Naturally, I stopped photographing there too.`,
    },
    {
      type: 'image',
      src: 'carmen-25.jpg',
      slug: 'last-call',
      caption: 'Last pint of the night',
    },
    {
      type: 'image',
      src: 'carmen-16.jpg',
      slug: 'staged-moment',
      caption: 'Some moments can’t be staged',
    },
    {
      type: 'image',
      src: 'carmen-28.jpg',
      slug: 'rainy-night',
      caption: 'Rain, neon, and memory outside Carmen',
      orientation: 'portrait',
    },
    {
      type: 'text',
      content: `My friends were right. Carmen closed a few months after I stopped going. It is still a running joke between us. It did reopen many months later under new ownership. I haven’t gone back. Life has taken me to many other places since, but the practice I got there — the light, the faces, the stories — stayed with me.`,
    },
    {
      type: 'image',
      src: 'carmen-30.jpg',
      slug: 'boys-boys',
      caption: 'Arms up, head down. Safe.',
    },
    {
      type: 'image',
      src: 'carmen-23.jpg',
      slug: 'dark-light',
      caption: 'Caught in shadow and light',
    },
    {
      type: 'image',
      src: 'carmen-35.jpg',
      caption: 'You. Me. The camera. Outside Carmen.',
      slug: 'lasse',
      orientation: 'portrait',
    },
  ],
};

export default carmenEssayBlocks;