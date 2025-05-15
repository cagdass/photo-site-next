'use client';

import React from 'react';
import Link from 'next/link';

const sihanoukvilleEssayBlocks = [
  {
    type: 'text',
    content: `I came to Cambodia for a visa run. The plan was simple: visit Angkor Wat, stamp the passport, return to Thailand. But something shifted. I kept moving — through Cambodia, and eventually to Vietnam and Laos, all by land — on a journey that would take two months to close the loop. Somewhere near the beginning of it all, I found myself in Sihanoukville, just before heading off to the island of Koh Rong.

    I hadn’t even heard of the city before — named after King Sihanouk — and only had one day to spend there before catching the ferry. It was the 6th of May, 2024. At sunrise, I skimmed a Guardian article that hinted at what I’d see. What used to be a quiet coastal town had become a construction site of cranes, casinos, and high-rise towers — the product of rapid Chinese investment. Mandarin echoed through the streets. Entire supermarkets sold only Chinese goods — even fruit and vegetables grown in Cambodia, now reimported and priced higher. I walked into an al-fresco mall with signage only in Mandarin. A young man sat on a bench by the sea, video-calling his girlfriend in China. He didn’t speak English or Khmer. Said he ran one of the Chinese supermarkets nearby. I’d see more of them as the day went on — identical layouts, inflated prices, and entirely disconnected from the local market. The money came in, but didn’t seem to circulate.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-02.jpg',
    caption: 'Cambodian workers entering a Chinese-funded construction site'
  },
  {
    type: 'text',
    content: `Just a few blocks away, another world reappeared: patched rooftops, barefoot kids washing scooters with their dads, street vendors and trash collectors moving through the heat. Sihanoukville became a city of sharp transitions — old and new Cambodia stitched together unevenly. It reminded me of walking from Pasay into Makati in Manila: same land, different reality.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-03.jpg',
    caption: 'A young guitar hero',
    orientation: 'portrait'
  },
  {
    type: 'text',
    content: `That morning, I had already checked homestays online — and noticed prices in Sihanoukville were far higher than anywhere else I’d seen in Southeast Asia. I was traveling on a tight budget, rarely spending more than $10 on a room. Luckily, I stayed with a local family — a contact passed to me by someone I’d met in the Cardamom mountains. Throughout the day, I spoke with Cambodian workers, tuk tuk drivers, and street vendors. Almost all of them said the same thing: Chinese money was driving prices up — rent, food, everything — far beyond what locals could afford.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-04.jpg',
    caption: 'Busy street',
  },
  {
    type: 'text',
    content: `I bought a bottle of water from a woman on the roadside and greeted her in Khmer. She smiled so warmly, she refused to take my money. “The foreigners here,” she said, meaning the Chinese, “don’t bother learning even one word of Khmer.” We talked. She had worked in Malaysia, spoke fluent English, and had just returned home — only to find her city unfamiliar. “I don’t want to learn another foreign language,” she said.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-05.jpg',
    caption: 'Street vendeuse',
  },
  {
    type: 'text',
    content: `That day I passed countless casinos and malls. In one luxury shopping center, Cambodian staff mopped spotless floors while menus advertised $15–20 lunch sets — more than most meals in Sweden. I later ate down the road at a street stall for a little over a dollar. The city felt split, a staging ground where the future was being built over the present — or without it.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-06.jpg',
    caption: 'Casino St.',
  },
  {
    type: 'text',
    content: `A month later in Laos, I would begin to see how widespread the transformation was. Chinese-funded high-speed railways, slick motorways—while the national road network remained in a pitiful state—and clusters of Chinese-owned factories dotted the countryside. One bus driver who picked me up while I was hitchhiking toward Vientiane pointed at each factory we passed and simply said, “China,” in the same rhythm he used to call out the name of every town, making me repeat each one after him. It was a geography lesson wrapped in economics — and it was hard not to think of earlier maps too, from the days when this region was marked as French Indochina. Colonial powers seem to come and go — changing in name only.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-07.jpg',
    caption: 'A new colony?',
    orientation: 'portrait',
  },
  {

    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          Later that afternoon, as I walked through the casino district,
          I saw women stepping out of high-rise residential towers to collect food deliveries —
          some in flashy pajamas, others in branded slippers, their outfits skimming the edge of the workday ahead.
          It reminded me of{" "}
          <Link href="/projects/soi6" className="underline text-blue-600 hover:text-blue-800">
            <strong>Pattaya’s Soi 6</strong>
          </Link>
          , where sex workers would rise slowly in the late morning, eat breakfast,
          and prepare for another night under the neon lights.
          Here too, the rhythm of the day was shaped by nightlife,
          just veiled differently — less obvious, but still tightly orchestrated.
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-08.jpg',
    caption: 'A poor local quarter surrounded by high-rises',
  },
  {
    type: 'text',
    content: `I lost some of my photos from this part of the trip. But I shot so much in Sihanoukville that I still have something to show. These are them — a brief day in a place caught between cranes and kitchens, foreign signage and local smiles, speculation and silence. Many tourists pass through without stopping — just a transit point to get to Koh Rong. But even the island is getting an airport now.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-09.jpg',
    caption: 'Sleepy Bulldog',
  },
  {
    type: 'text',
    content: `In the end, this was never meant to be a definitive take on Sihanoukville. It’s just what I saw — and what I heard — on a single walk through a city in flux. These photos are fragments of that walk. A small attempt to remember the people still living between the scaffolding. Foreign footprints are nothing new here — from colonial railways to casino skylines — and mine was just one day afoot, spent trying to understand it.`
  },
  {
    type: 'image',
    src: '/images/sihanoukville/sihanoukville-10.jpg',
    caption: 'Tuktuk driver'
  },
];

export default sihanoukvilleEssayBlocks;