'use client';

import React from 'react';
import Link from 'next/link';
import FootnoteButton from '@/components/FootnoteButton';
import PortraitReel from '@/components/PortraitReel';
import Soi6Poem from '@/components/Soi6Poem';
import PhotoEssayText from '@/components/PhotoEssayText';

const introductionTextSize = 'text-sm  lg:text-base xl:text-[18px] leading-relaxed mb-6';

const essayContent = {
  options: {
    imgSrcReplaceStr: '/pattaya/'
  },
  blocks: [{
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText divClassName="-mt-20" textSize={introductionTextSize}>
          My name is Çağdaş—I’m a software engineer currently taking a career break,
          and a hobby photographer based in Stockholm, Sweden. I started taking informal
          photography classes from my friend{" "}
          <Link href="https://halil.se"
            className="underline text-blue-400 hover:text-blue-600">
            Halil
          </Link> in May 2023.
          Between December 2023 and June 2024,
          I spent about seven weeks photographing Soi 6, a bar street in Pattaya, Thailand.
          Initially, I shared these photos privately with friends and fellow photographers,
          including Halil who oversaw most of my work,
          people encouraged me to consider publishing a book—something completely new to me.
          Another photographer friend, Duygu, let me in on an open call by the Arbetet Museum in Sweden,
          some photos from this series will be shown there later this year. And another photographer friend
          Erhan Can has been helping me with retouching before printing. It’s the first time I’m printing a photo, my hands are shaking. Big thanks to everyone
          who helped and cheered me on thus far.
          But, for the time being, I decided to create a website and share my work online
          as well as my experiences and observations. I’m doing everything by hand,
          it’s been a lot of work, but I’ve enjoyed it. If you find anything that doesn’t work please let me know, you can find my contact details on the <Link href="/about" className="underline text-blue-400 hover:text-blue-600">
            About page
          </Link>.
        </PhotoEssayText>
        <PhotoEssayText textSize={introductionTextSize}>
          Earlier this year, I revisited the project, my personal notes and photos, posting a selection
          on the&nbsp;
          <Link
            href="https://www.instagram.com/p/DIG8ZHhogrY/?img_index=1"
            className="underline text-blue-400 hover:text-blue-600"
          >
            Instagram
          </Link>{" "}&nbsp;and the{" "}
          <Link
            href="https://www.reddit.com/r/streetphotography/comments/1juqsru/documenting_nightlife_sex_work_in_pattaya/"
            className="underline text-blue-400 hover:text-blue-600"
          >
            Reddit
          </Link>.


          The strong reactions I received inspired me to write this essay.
          Many people know Pattaya by reputation — but few understand the systems at play.
          I don’t claim to understand it either.

          You don’t have to look far to see Soi 6: stock photos and YouTube walk-throughs show the bars, the girls, the spectacle—racking up thousands, sometimes millions of views. But most of them go no deeper than tourist tips. I wasn’t interested in just showing what’s there. I wanted to return, to listen, to sit with what made me uncomfortable—and bring back something more than a passing glance.


          This isn’t an exposé, nor a photojournalistic report.
          It’s a personal attempt to explore a place, the people in it,
          and my own evolving thoughts through photography and reflection.
        </PhotoEssayText>
        <PhotoEssayText textSize={introductionTextSize}>
          <strong>How to read this essay</strong>
          <br />
          This is a long and personal essay composed of many sections. You can read it from start to finish or jump straight into any chapter that interests you. It’s a long read—so if you’d rather skip the broader context, start with&nbsp;
          <a href="#welcome_to_pattaya"
            className="underline text-blue-400 hover:text-blue-600"
          >
            Welcome to Pattaya
          </a>. If you want to dive deeper into the scene, I recommend&nbsp;
          <a href="#men"
            className="underline text-blue-400 hover:text-blue-600">
            The Men
          </a> or <a href="#learning_the_ropes"
            className="underline text-blue-400 hover:text-blue-600">
            Learning the Ropes
          </a>. I enjoyed revisiting my notes and memories of pseudonymed girls like&nbsp;
          <a href="#mint"
            className="underline text-blue-400 hover:text-blue-600">
            Mint
          </a>
          &nbsp;and&nbsp;
          <a href="#namtan"
            className="underline text-blue-400 hover:text-blue-600">Namtan</a>. Otherwise, thank you for joining me at the beginning.
        </PhotoEssayText>
        <PhotoEssayText textSize={introductionTextSize}>
          <strong>About the photos: black & white and color</strong>
          <br />
          Most photos here are in black and white—the only versions I still have from June 2024 are lower-quality black & white exports. For where neon light or color makes sense, I’ve included color versions. If available, you can switch between black & white and color using the button at the top right of the image.
          You can also turn off the photo-essay mode at the top of the page, just below the title, to view a separate photo gallery featuring a different set of images. that gallery has a less documentary tone and leans more toward a photobook style.
        </PhotoEssayText>
        <PhotoEssayText textSize={introductionTextSize}>
          This essay has long been a work in progress — much like my thoughts on Pattaya, and the world it reflects.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'heading',
    id: 'introduction',
    text: 'Introduction'
  },
  {
    type: 'text',
    content: `I first arrived in Pattaya in December 2023. My photography teacher—also a close friend— Halil had arranged a place for me to stay. It was partly an escape from the Swedish winter, partly wanderlust. I can't recall whether I’d first heard of Pattaya from him, or if it was its reputation that had reached me. Either way, I was curious. I had three weeks of vacation from my software engineering job, which was draining the life out of me, and I decided to take it all.`
  },
  {
    type: 'component',
    collapsible: true,
    render: () => (
      <PhotoEssayText>
        I began photography that summer. My teacher, Halil—whom I’ll mention often here—mentored me through informal lessons and themed assignments on nightlife, dreams, and taxi drivers. His homework
        taught me how to move around with a camera,
        approach strangers, and <em>shoot with my heart, not my brain</em>.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `During one of our early homework assignments that summer, he told me, “You don’t understand the light yet. We need to work in black and white so you can see it better.” And we never switched to color. To anyone who asks why I still shoot in black and white, I jokingly say, “I haven’t been confirmed to understand light yet.” But honestly, I suspect it was partly a trick he played on me—after all, all his published books are in black and white, though not because he lacked an understanding of light. In any case, monochrome has worked for me ever since, and I prefer it—even though throughout this essay I’ve added an option to show color versions of select photos where the neon pleased me.

    But by autumn, our informal kitchen classes had come to an end. It was time for Halil to return to Pattaya, Thailand, where he spent his winters. He wasn’t the typical sex tourist; rather, staying rent-free in a friend’s Thai apartment made financial sense—just like escaping another Swedish winter. In fact, he had been talking about photographing Pattaya long before I even picked up a camera, though by now, I think he’s too disinterested to photograph and publish another book.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-05.jpg',
    caption: 'A usual Soi 6 scene, April 2024.'
  },
  {
    type: 'text',
    content: `Before he left though, he gave me the key to his apartment, where I would spend long hours in his home library. He owns more than a thousand books—mostly doorstops, many by masters, quite many signed with a dedication to him. I’d leaf through monographs, street photography collections, retrospective volumes. I cataloged them all for him, and helped sell a few in his absence, hoping it might help his finances.

    That winter, Stockholm felt lifeless. Colder and darker than usual. My job was draining me. I was drowning in mortgage payments and rising interest rates. The things I used to afford felt out of reach. I’d spend what little salary I had left on film festival screenings, then scrape by on potatoes until the month’s end. Street photography no longer gave me the same spark. Maybe it’s a weak excuse, but I still think Stockholm isn’t the most exciting place for photography—too clean, too quiet, too conforming.

    Halil and I stayed in touch. By mid-November, when I asked him about visiting him in Thailand, he said I could come. He had a place for me to stay—the vacant unit next door was his friend’s too. I asked if three weeks, all I could take off from work, would be too long. He said, “You can stay here rent-free for as long as you want.”`
  },
  {
    type: 'heading',
    id: 'welcome_to_pattaya',
    text: 'Welcome to Pattaya',
    collapsed: false,
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-02.jpg',
    caption: 'The customer is always welcome, June 2024.'
  },
  {
    type: 'text',
    content: `Halil welcomed me at the bus station in Pattaya one late December night. He took me to the condo, handed me a key, and let me rest and adjust to the tropical warmth and the time difference. The next morning, despite the jetlag, I fell into his rhythm: gym, breakfast, a walk along Beach Road, dinner at the same family-run restaurant every evening followed by another walk along Beach Road before heading home.

    He also gave me a tour of the city and a few landmarks. While doing so, he outlined the city for me—the main road, Pattaya Klang, which led down to Beach Road. He showed me the streets that ran parallel to Beach Road, like Third Road and Soi Bukhao, pointing out which were one-way streets and noting various details. This introduction helped me orient myself within the city’s geography and daily flow right from the start.

    I broke my camera in Stockholm just before the trip and worried I wouldn’t be able to shoot—especially with all the hype around Pattaya’s contrasts, like white men buying sex from poorer locals. Luckily, he lent me his old Fujifilm X-Pro1, which I’d practiced with that summer before splurging on my own X-Pro3, a newer model with better capabilities. We shared the same 18mm f/2.0 lens. The setup was lightweight and unobtrusive—wide enough for the intimate shots I wanted. It wasn’t as good as my own in low light, but its softness somehow added a fleeting glow where light was scarce.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-17.jpg',
    color: true,
    caption: 'Fleeting glows, December 2023.'
  },
  {
    type: 'component',
    render:
      () => (
        <>
          <PhotoEssayText>
            I was hungry for all of it. Everything was new.
            At first, I photographed whatever caught my eye—stray dogs, food carts, fish markets, signs I couldn’t read.
          </PhotoEssayText>
          <PhotoEssayText>
            Utility poles tangled with cables crowded every street. Halil warned me to watch my head. ‘Japan has poles like these for earthquakes,’ he said, ‘but Pattaya isn’t near any fault lines—I don’t know why.’ Still, I recognized the chaos from Moriyama’s gritty photos in his book collection. I could not resist photographing them. I felt like I had stepped into a new world.
          </PhotoEssayText>
          <PhotoEssayText>
            Another small detail that stood out early on was the supermarkets.
            I snapped photos of whatever caught my eye—which, admittedly, didn’t help with my rapidly filling Adobe cloud storage.
            Pattaya’s supermarkets boasted aisles upon aisles of dairy products: dozens of cheeses in every variety,
            milk from multiple countries, yogurts in all shapes and flavors.
            This was strikingly different from my time in a smaller town in the Philippines from my first visit to Southeast Asia,
            where such variety was rare or nonexistent.
            It quietly reminded me how Pattaya was a global crossroads, catering to tastes far beyond its tropical locale.
          </PhotoEssayText>
        </>
      )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-03.jpg',
    color: true,
    caption: 'Man with a bar-fined girl, December 2023.'
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          With my photography, I found myself repeatedly drawn to a particular pairing: international couples. Whenever I saw an older Western man—what locals call a farang, meaning foreigner—paired with a young, striking Thai woman—a common sight in Pattaya—I felt a strong urge to photograph it. The contrast spoke volumes. But what struck me just as much was the silence between them. They rarely talked. Sitting side by side at a bar or restaurant, their bodies close but their eyes elsewhere—on their phones or on nothing in particular. It was as if they existed next to each other, not together.
        </PhotoEssayText>
        <PhotoEssayText>
          I once went out with a girl who had a Swedish father and Filipina mother. She looked Asian—her broad frame and tall stature the only visible hints of her mixed heritage. She told me she stopped holding hands with her father as a teenager—people would mistake them for a mail-order couple, her dad for her husband. In Sweden, growing up not looking “ethnically Swedish” makes life hard enough. In the Philippines, locals sometimes shouted at them, accusing her of betraying her country by marrying an old white man—who was, in fact, her father.
        </PhotoEssayText>
        <PhotoEssayText>
          Before arriving in Thailand, I helped organize my teacher’s photobook collection. Two titles stood out (<em>Kungariket</em> and <em>Drottninglandet</em>), portraying Swedish–Thai couples, always with a Thai woman—their lives traced between Sweden and Thailand. Sitting with those books, flipping pages in silence, I felt the quiet distance and tender awkwardness of coexisting worlds. Even before arriving, I wondered what I might see. What I might photograph.
        </PhotoEssayText>
        <PhotoEssayText>
          Walking Pattaya, I caught myself hoping many of those older Western men and young Thai women were actually fathers and daughters. That maybe a kinder story hid behind the pairings. Even when I saw a very young Thai woman—perhaps in her teens—between two older Western men on a motorcycle, I tried to imagine a father, an uncle, a niece. I instinctively took a photo of them, one I will not share. After all my time in Pattaya, I know better now. They weren’t family.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-97.jpg',
    caption: 'Another international couple, December 2023.',
  },
  {
    type: 'text',
    content: `Halil enabled my photography from day one. He pointed out photo opportunities, translated short conversations, and showed me which alleys were safe, which bars to avoid, where the light hit just right. If I misread a moment or hesitated, he’d tell me what went wrong. He acted both as a fixer and a mentor.

    On my first night, after dinner, we went for a walk down Beach Road. Halfway along, we reached the entrance to the notorious Walking Street. Halil led the way in.

    The chaos hit immediately. Crowds of tourists clogged the narrow street. Clubs blaring different music from every side, the air thick with smoke and neon. Scantily dressed women rushed around in every direction. Vendors thrust laminated flyers into my face—some with explicit, graphic images advertising sex shows. Security guards stood outside every club, sizing everyone up. It was overwhelming. I felt like I got caught up in the eye of a neon storm of chaos.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-19.jpg',
    color: true,
    caption: 'Children were often around, March 2024.',
  },
  {
    type: 'text',
    content: `Shortly after, we returned to Beach Road. It was a breather from Walking Street, though by no means a quiet one. People of every nation and color filled the scene, mostly men. Families with small children strolled past scenes of negotiation, where freelance sex workers bargained with men under coconut trees. The shadows of swaying leaves danced in the streetlight’s glow, stretching across the sidewalk and onto the sand. We passed street vendors selling ready-to-smoke joints, Viagra substitutes, and children’s toys—often side by side. Children ran through the crowds. I saw these scenes repeated again and again.`
  },
  {
    type: 'text',
    content: `Halil stopped me and said he wanted to show me another bar street. He led me to Soi 6.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-93.jpg',
    caption: 'A different kind of overwhelming, June 2024.'
  },
  {
    type: 'text',
    content: `It was a different kind of overwhelming. The bars littered both sides of the narrow street. They were open-air, low to the ground, close enough to touch. Every sign was in English. Not Thai. This place was not for the locals. Bar girls lined the fronts, outnumbering everyone else ten to one. Flickering neon bounced off high heels and bare skin. Above the bars, TVs blared European football matches and old Western music videos—Guns N’ Roses, the Eagles, Aerosmith. From every direction came noise: thumping bass, crashing cymbals, screeching guitar solos—colliding with the constant chorus of women’s voices calling into the street. The music, the voices, the scooters, the engines—all tangled up into one shapeless, abrasive roar.

    Older men perched on bar stools overlooking the street, under a canopy of tiny ceiling fans twirling in different spiral directions, clutched beers wrapped in foam sleeves—trying and failing to keep them cold in the humid night air. If not perched, they drifted—some in groups, some alone—pilgrimming up and down the street. Food carts cluttered the few gaps left along the street. And children, quite a few of them, wove through it all—selling flowers, nuts, napkins, or any old trinket might pass as charm. Sometimes it was a toddler, added for sympathy, wrapped around a mother’s hip as she peddled roses or cashews.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-04.jpg',
    color: true,
    caption: 'Some children even part of the workforce, April 2024.'
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        It’s an oft-repeated fact, but one this photo essay bears repeating:
        Pattaya began as a sleepy fishing village.
        Its transformation is usually traced back to the Vietnam War,
        when American soldiers came here for rest and recreation.
        That first boom never really ended. Today, high-rises line Beach Road,
        rooftop bars crown luxury hotels, sprawling malls lure tourists,
        and the city never seems to stop building. It’s easy to forget this history when walking
        past bars named <em>Pussy Club</em>, <em>Horny Bar</em>, or <em>Slutz on Soi 6</em>—but the scaffolding of that
        myth still booms beneath the neon.
      </PhotoEssayText>
    )
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        As we walked, I started to understand the calls of the bar girls: “Sexy man,” “Handsome man,” “Where you go?”—basic English with an accent new to my ears, shouted with practiced ease. But it wasn’t just words. Every few meters, a girl reached out—grabbing an arm, a waist, sometimes even the groin—trying to physically pull us inside. You couldn’t just walk past. You were part of the show.
      </PhotoEssayText>
    )
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        We kept walking past bar names that,
        anywhere else in the world,
        would be pure cringe: <em>Sexy in the City</em>. <em>Seduction</em>. <em>Toy Box</em>.
        &nbsp;<em>Bender</em>—with a giant print of the alcoholic robot from <em>Futurama</em> out
        front, a reference I doubt was meant for the local population.
        Some names sounded like biblical sins:&nbsp;
        <em>Avarice</em>. <em>Wrath</em>. <em>Lust</em>.
        A few tried to look classy, but ended up even sleazier.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `By the time we reached the end of Soi 6, I was overwhelmed. Dozens of bars stretched behind me, the street crowded with hundreds—maybe thousands—of bar girls. The men kept drifting around, the warm, humid air buzzing with neon lights, voices, and the relentless pulse of music. How on earth was I going to take photos here?`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-34.jpg',
    caption: 'The Goya smile, December 2023.'
  },
  {
    type: 'text',

    content: `Then on that first night again, just to test my limits, he took me to a massive brothel lounge where women lined the walls, each with a number and a color code. The colors marked the price. I wasn’t allowed in with my camera—and even without it, I noticed certain guests, especially South Asian men, being delayed or turned away. On our way out, we stopped to chat with a few Indian tourists lingering at the entrance. I hadn't seen anything like it before.`
  },
  {
    type: 'component',
    render:
      () => (
        <>
          <PhotoEssayText>
            In my first days—while still getting to know the environment—I shot from the hip, at random, whenever the fever took me. I didn’t know what I was doing exactly. The lens was wide, the light was low, and I rarely looked through the viewfinder. I just wandered—snapping, drifting. Most of those images came out blurred, ghosted, smudged at the corners. But later, when I began editing, I grew fond of some of them. There was something dreamlike in their haze. Faces half-caught, eyes like smears of charcoal. I started calling them the <em>Goya photos</em>—they reminded me of his black paintings. A street that looked more like an end-time city than a place on a map. It made me think of Michael Ackerman’s <em>Fiction</em>, or D’Agata’s <em>Insomnia</em>—not in technique, but in tone. Flu photos, in a way. Feverish. Disoriented. Maybe that’s what happens when you walk Soi 6 with a camera and a heartbeat. A Goya painting rendered in CMOS.
          </PhotoEssayText>
        </>
      )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-49.jpg',
    color: true,
    caption: 'Another Goya face, December 2023.'
  },
  {
    type: 'component',
    render:
      () => (
        <>
          <PhotoEssayText>
            Halil spoke quite a bit of Thai and started teaching me from day one.
            <em>Sawatdee khrap</em> for hello. <em>Sabai dee mai</em>? for how are you.
            <em>Tai ruup dai mai</em>? to ask for a photo.
            I took a Thai class online through
            Preply and even visited a language school in Pattaya to inquire about joining in person.
            But honestly, I wasn’t convinced about the teaching quality or
            whether it was worth investing my time and money for just a few weeks.
            What helped me more were the textbooks and notes my teacher had kept from his own formal lessons years ago.
            He’d already made a long list of phrases on his phone,
            transliterated into Turkish with occasional typos—<em>sawatdee khrap</em> became <em>savadikap</em>,
            easier for me to read and remember.
            I’d review them before dinner.
          </PhotoEssayText>
          <PhotoEssayText>
            He was good with people—charming, quick to joke, unafraid to make a fool of himself if it helped build rapport.
            To a mother holding her toddler, he’d point at the kid and say <em>Nà-làk mâak mâak</em>, meaning very cute.
            If the heat was unbearable, he’d complain loudly to a stranger: <em>Róon</em>!
            One night, when it dropped to 22 degrees and locals pulled on hoodies,
            he hugged himself dramatically and shrieked <em>Namkeng</em>! <em>Namkeng</em>!—ice—rubbing his arms like he was freezing.
            It was also the word he used to describe Sweden whenever a local was asking about us where we came from.
            Maybe he didn’t know the word for cold. But it didn’t matter and it sure was entertaining.
          </PhotoEssayText>
        </>
      )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-88.jpg',
    caption: 'Namkeng! Namkeng!, March 2024.'
  },
  {
    type: 'text',
    content: `He moved through Pattaya with a kind of quiet deference I would observe—and fail to see—in most tourists. After our dinners at the small family-run restaurant, he’d carry the plates back to the kitchen, help stack chairs outside (habits I quickly picked up too), say many thanks, and leave a generous tip—even though he was barely getting by himself. No big spectacle, just ease. He’d nudge me when some old white man made a crass comment to a waitress, or laugh under his breath when one dropped a couple of 1-baht coins on the table and called it a tip. “That’s thirty-four baht to the dollar,” he’d say, “you wouldn’t even get a chewing gum in Sweden for that.” And I’d quietly contemplate Sweden in reverse—how it’s so often immigrants waiting tables, running pizzerias, playing their part while ethnic Swedes enjoy the evening. Here, the non-locals were being served. The locals served. But even here, where roles were reversed, the posture—the entitlement—looked the same.`
  },
  {
    type: 'heading',
    text: 'Starting to Shoot',
    id: 'starting_to_shoot',
  },
  {
    type: 'text',
    content: `We quickly decided that Soi 6 was the most photographable street—narrow, compact, alive. Motorcycles swooshed past and the occasional car crawled through, but it was highly walkable. Most people didn’t mind the camera; many vloggers wandered around with selfie sticks already live-streaming their own stories. It was different from Walking Street, where “No Photo” signs hung everywhere, bouncers waved laser pointers or flashlights at any raised lens, and most of the action was hidden behind closed doors. I didn’t go back to Walking Street again, I wasn’t interested in where I couldn’t photograph. My teacher told me that when he had first photographed Pattaya, Soi 6 had been more like Walking Street: guarded, closed off, hostile to cameras. But after the pandemic, something had shifted. And it became what it was when I was there to photograph.`
  },
  {
    type: 'image',
    src: '/images/pattaya/walking_street.jpg',
    caption: 'The entrance of a Walking Street go-go club, December 2023.',
  },
  {
    type: 'text',
    content: `Apart from a trip to Chiang Mai and Bangkok for a few days, for the rest of my stay, even though I continued taking photos wherever I was, I returned to Soi 6 almost every day as part of our Beach Road walk—sometimes twice a day, once in the afternoon and again at night. My teacher usually came with me, offering tips on how to interact. He’d watch both me and the street, and later at home, he’d offer critique—on my presence, what I did or didn’t do.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        My teacher also had a few Thai expressions he liked to throw at me, half-mocking, half-endearing.
        His favorite was <i>tin-ton farang</i>—crazy foreigner.
        He’d call me that whenever I was too enthusiastic, acting silly, or trying too hard to charm someone.
        Another was <i>mao</i>, which means drunk.
        Sometimes, while I was crouched down taking portraits on Soi 6, he’d shout <i>tin-ton farang</i>!
        from across the street, or point a finger at me and tease me with <i>maomao</i>!
        It always cracked up the bar girls I was talking to.
        Moments like those broke the ice. They helped soften the scene, loosen everyone’s guard.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `I was beginning to learn the rhythm: when the music started, when the bar stools were wiped down, when the girls stirred awake and ate breakfast right where they’d later work. In the slow hours before customers arrived, they’d sit idly at the bar, eyes locked on their phones—scrolling Instagram, binging TikToks, texting men. It was a digital lull, a quiet prelude to the chaos ahead. Then the men would start drifting in. Every hour carried a different texture. In the afternoon, the street felt softer—there was space. By evening, it turned louder, more compressed, more electric. Only a few girls remained still, vaping quietly in corners, the faint swirl of smoke mixing with the humid night air.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-59.jpg',
    caption: 'Allure of the open bar on Soi 6, December 2023.',
  },

  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          Technically, prostitution is illegal in Thailand.
          But on Soi 6—as in much of Pattaya—the law seems more like a formality than a boundary.
          The police were visible, and would happily pose for my photos,
          often giving a thumbs-up amid everything that was going on on Soi 6.
          I heard that bars pay regular “fees” to operate undisturbed.
          It seemed less about enforcement and more about maintaining the status quo and income flows.
          Everyone seemed to know their role in the system.
          And even though there have been raids in recent years,
          police reports often claim that no signs of prostitution were found in Pattaya
          <sup id="ref-fn1">
            <a href="#fn1" className="text-xs underline text-blue-500">[1]</a>
          </sup>.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-1312.jpg',
    caption: 'Even the police patrol isn’t immune from Soi 6’s rituals, April 2024.'

  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          I started walking Soi 6/1 often,
          partly to catch my breath,
          partly to find more natural moments—away from the endless calls of “handsome man” and
          the engineered performances on the main street.
          It was there that I quickly learned something else: Soi 6/1 was where many of the <em>kathoey</em>s—Thai trans women—waited for customers.
        </PhotoEssayText>
        <PhotoEssayText>
          I saw kathoeys everywhere in Thailand—working at 7-Elevens,
          in massage parlors, just walking down the street.
          They were openly visible, a natural part of everyday life.
          Some were engaged in sex work, not only in Pattaya.
          I remember one morning in Chiang Mai when a tuk-tuk driver shouted at me,
          making a crude gesture—grabbing his elbow and raising his forearm—and yelled,
          “I have ladyboy, big cock, big cock.” The bluntness was jarring,
          but what struck me more was how normalized their presence felt.
        </PhotoEssayText>
        <PhotoEssayText>
          This stood in stark contrast to Sweden, where I rarely saw openly trans people,
          and where LGBTQ+ folks were often marginalized behind closed doors,
          despite the country’s progressive reputation.
          That contrast made me realize how cultures shape visibility
          and acceptance—and how the kathoeys of Soi 6
          were far more than exotic performers; they were part of the gang.
        </PhotoEssayText>
        <PhotoEssayText>
          Of course, I’m not part of Thai society and don’t speak the language,
          so I can’t claim to know what happens in smaller circles.
          But my experience, along with documentaries
          <sup id="ref-fn2">
            <a href="#fn2" className="text-xs underline text-blue-500">[2]</a>
          </sup> I’ve watched since returning,
          convinces me that kathoeys are an integral part of the social fabric.
        </PhotoEssayText>

      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-41.jpg',
    caption: 'A trans sex worker at a Soi 6/1 bar, April 2024.'
  },
  {
    type: 'text',
    content: `Whenever I left Soi 6, I found myself back on Beach Road. It was a kind of decompression zone. The chaos thinned out a bit—but the contradictions didn’t. Russian families—some seemingly on a perpetual vacation since the war in Ukraine made going home impossible—strolled past scenes of open negotiation. Whole families with small kids, sometimes even a baby in a stroller, walked right past freelancers leaning against lampposts, haggling with men I’d later see again on Soi 6. Groups of South Asian men often surrounded and negotiated with a single sex worker, which we assumed was for a group engagement. Mostly Western white men filled the streets, but that could quickly change when a shuttle bus arrived, unloading waves of Indian and Chinese men en masse. Curious, I’d occasionally say hello and ask about their time in Pattaya. The answers could be bizarre—one man told me “Nana Plaza is better,” referring to Bangkok’s bar-packed red-light district. I often heard my native Turkish spoken. I assumed the speakers felt at ease many thousand miles from home, and maybe that’s why I caught so many unfiltered conversations—casual bragging, crude jokes, all circling around their exploits.

    During that first visit, I took many photos on Beach Road. I hadn’t yet locked in on Soi 6 as the core of the project. I was just drawn to what was unfolding in front of me—this strange ecosystem where families brushed shoulders with transactional intimacy, children in swimsuits skipped past sex workers in heels. Pattaya wasn’t hiding anything. Everyone was part of the same current.`
  },
  {
    type: 'subheading',
    text: 'Beach Road Photos',
    id: 'beach_road_photos',
  },
  {
    type: 'component',
    collapsible: false,
    render: () => {
      const beachRoadImages = Array.from({ length: 18 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/beach_road/beach_road-${num}.jpg`;
      });

      return (
        <PortraitReel
          // title="Beach Road Photos"
          images={beachRoadImages}
          orientation="landscape"
          caption="Before I had a clear focus on Soi 6, I collected photos during our twice-daily walks on the Beach Road. December 2023."
        />
      );
    }
  },
  {
    type: 'subheading',
    text: 'First Portraits',
    id: 'first_portraits',
  },
  {
    type: 'text',
    content: `Back on Soi 6, I began to recognize faces. Some bar girls would wave. A few started calling me “photo man.” They’d pull me aside from the crowd, pose, and ask me to send the pictures later. I started exchanging contact info—Instagram, Line, WhatsApp. Sometimes I’d get a message within ten minutes: “Where is my pic???” At the end of each day, back at home, I made sure to send everyone their photos. It became part of my nightly ritual—reviewing the day’s shots, selecting a few to show my teacher for critique, and sending the ones I promised to the girls. Occasionally, I’d even spot my photos posted on their profiles, and feel a quiet satisfaction.

    To keep up, I started a note on my phone titled “Soi 6 Names,” where I jotted down each name after taking a photo—along with the bar where she worked, the date we met, and, if I had it, her contact information. I reviewed it often, matching names to faces. The next time I crossed paths with one of them, I’d try to surprise her by calling her by name. It didn’t hurt. It made most interactions warmer, easier—and sometimes even opened the door to longer conversations.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-06.jpg',
    caption: 'Makeup check before work, June 2024.'
  },
  {
    type: 'text',
    content: `Carrying a camera changes the rules of engagement. I felt a duty to the women to ask permission before taking their photo. Sometimes I couldn’t—like when capturing a large scene with dozens of people and only half a heartbeat to catch it—but otherwise, I made sure to ask. I never sneaked around; if nothing else, I made myself seen in the moment.

    Some girls didn’t want to be seen. You could tell without words—a raised hand shielding their face before I even lifted my camera. I never bothered them. Occasionally, if I took a photo without asking first, I’d approach afterward to show it and make sure they were okay with it.

    I realized within a few days that the culture around photography in Thailand was very lighthearted. Smiles would naturally grow on faces when people posed, and hands often made peace signs or the Asian heart gesture. I took many photos like that—simple, joyful moments capturing everyday spirit. This was so different from Stockholm, where people are far more reserved, and the camera often feels like a barrier rather than an invitation.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-16.jpg',
    color: true,
    caption: 'Smile for the camera, April 2024.'
  },
  {
    type: 'text',
    content: `But more often, I tried to explain the kind of photos I was aiming for. I’d often show them some of my older photos on Instagram and promise to send the picture if they wanted. But what really helped was that I had gathered a few images that aligned with the project’s direction—little summaries of Soi 6 and the sex tourism scene in Thailand. I put those photos into an album on my phone and showed them to my subjects to give a clearer idea. Most of the time, they understood immediately, which made them more serious.

    I’d ask them to go back to what they were doing before I arrived with my camera. Of course, a smile might linger, so I’d often do a shush gesture—finger pressed to my lips—or mimic zipping my mouth shut to remind them—a trick Halil taught me. I have tens of thousands of shots from Soi 6, and such a sequence has become a cliché to me: a series of photos of a smiling face turning into a serious one.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-66.jpg',
    color: true,
    caption: 'Picture in a picture, April 2024.'
  },
  {
    type: 'text',
    content: `Sometimes, even with a smile, they’d instinctively cover their face or shake their head. I would not push then. That was that. Other times, they’d say they looked ugly or weren’t ready. In those moments, if I felt there was real warmth between us, I’d gently protest: “Kun suay mâak mâak nongkap”—you’re very beautiful, sister. More often than not, it cracked a smile and turned the no into a yes. Not always. But enough times to feel like I’d earned the moment.

    Sometimes, a girl would jokingly ask for money to be photographed. And rarely she was serious about it, but I’d try to turn it into a joke: “Yes, 5 photo, you pay 100 baht kap” or say, “No money, nong kap,” while pointing at the bar and adding, “I can do dishes,” rinsing the palm of my left hand as if it were a dirty plate.

    Later, I learned why some women were so cautious. Beyond what I imagine is an understandable reluctance to be photographed as a sex worker on a busy bar street in Pattaya—especially in the age of the internet—many had boyfriends, significant others, husbands, or family back in their hometown villages who didn’t know what they were really doing. Or if they did know, they believed the story they’d been told: that she worked at a restaurant, a hotel, or a 7-Eleven. A photograph could unravel that carefully maintained story. Sometimes, it was simply anxiety—a reflex born from living between two worlds.

    It was different with the men. I didn’t feel the same obligation to ask for their consent to be photographed—especially when they were rude, aggressive, or groping the women as they passed by. But I’ll get to that later.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-07.jpg',
    caption: 'A usual night at work, April 2024.'
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        Sometimes I wasn’t just “photo man”—I was a potential customer, too. Like most men on Soi 6, I’d sometimes get grabbed by the wrist and pulled toward a bar for a drink. I learned to carry myself lightly in those situations—almost like a playful little boy—smiling, joking, gently saying no. Raising my hands in a respectful <i>namaste</i> and saying, “Nong kap, mai ao kap”—sister, I don’t want—was disarming. They would smile back, salute me, and let me go.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `But as I built stronger rapport with some of the workers, I accepted their offers for a drink a few times. It was usually a small beer for me, and a “lady-drink” for them—typically a non-alcoholic juice priced at a premium. I asked around: from a 150-baht (less than 5 dollars) lady-drink, a woman might keep 30 to 50 baht. The rest went to the bar.

    Sharing a drink gave me a reason to pause—to cool off from the heat and the constant movement—and more importantly, it gave space for conversation, and for more honest photographs.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-31.jpg',
    caption: 'In such a bar, March 2024.'
  },
  {
    type: 'text',
    content: `Of course, part of me felt uneasy. I was “buying” time, and by extension, buying the photos. I couldn’t help but feel strange about it—here I was, a six-months-into-it, barely-budding photographer, buying drinks for sex workers. But when I managed to take a photograph that felt real, one that captured something more than a transaction, it somehow made up for it.

    For most, when I asked where they came from, the answer was always the same: Isan. Isan. Isan. Thailand’s northeast—a rice-farming region, poor and hard to leave. Many sex workers from Isan that I spoke to had children. Many were in their early twenties but already had multiple kids. While they earned money in Pattaya, they’d send money back home, and their children were raised by the women’s own parents. The father was always a Thai man and was typically out of the picture. The women weren’t so happy to talk about them anyway. But they spoke about their children openly and without shame. In fact, they lit up when I asked. There was a sincere, almost childlike happiness in their voices and eyes. They would scroll through the photo gallery on their mobile phones and bombard me with snaps of their little kids, laughing and proud. I vividly remember one woman tapping her phone’s lock screen and beaming, “My baby—two years!” then grinning at me like she’d pulled off a magic trick.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-94.jpg',
    caption: 'Out late on a school night, April 2024.'
  },
  {
    type: 'text',
    content: `I’d ask when they last saw their children. It was usually months. Sometimes the grandparents would visit Pattaya with the kids so the family could reunite. They'd show me pictures of those reunions. I wondered if it was a question better left alone. But I’d always ask to get more of an idea. I kept trying to make sense of the system that had brought them here—the same system that pulled in millions of men every year.

    After my first few conversations, I went home and started watching YouTube documentaries about it. As I later reaffirmed in essays and books I read about sex workers from Pattaya, many of them dreamt of building a concrete house in their village in Isan, instead of the traditional bamboo house. I immediately thought of my time in the rural parts of the underdeveloped but touristy island of Palawan in the Philippines when I visited Southeast Asia for the first time a year earlier. I would occasionally be pointed out a concrete house and told, “That means they have an Overseas Filipino Worker in the family sending remittances.”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-65.jpg',
    caption: 'Changing into pyjamas, April 2024.'
  },
  {
    type: 'heading',
    text: 'The Men',
    id: 'men',
  },
  {
    type: 'text',
    content: `Most of the attention, naturally, falls on the women. But the men are just as much a part of the street’s rhythm. They bring the money. They arrive from all over—Europe, the U.S., Australia, India, China, Japan, Korea. Some walk in groups, loud and confident. Others drift alone, slowly, trying not to be noticed even as they scan every bar.

    On Soi 6, there were the usual types: solo men in polo shirts with tanned arms, groups of Brits in football jerseys, retired men with walking sticks, a few younger travelers holding beers, looking amazed and slightly lost at the same time. People of all colors, languages, religions.

    At the call of “sexy man, handsome man”—shouted with cheerful repetition—some men beamed like schoolboys, delighted at the attention. Others avoided eye contact, unsure how to respond. But for a moment, even the most average man could feel wanted, desirable—even if only because he had cash to spend. Boom boom—as the girls referred to sex—was typically priced at 1,000 to 1,500 baht (roughly 30 to 45 dollars) for a short time. But I began to suspect that for many men on Soi 6, the real allure lay not in the sex itself, but in the warm illusion of being chosen. Of being called sexy.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        One Swedish man interviewed by journalist Joakim Medin—who traveled to Thailand posing as a fellow sex tourist to investigate the phenomenon firsthand,
        later publishing his findings in his book <em>Thailandssvenskarna</em>—described how he calculated the “value” of sex between the two countries.
        A single session that might cost 2,500 kronor in Sweden, where sex buying is illegal, could pay for multiple encounters in Pattaya.
        He was blunt in his arithmetic precision in his conclusion that he could sleep with eight times as many women in Thailand than Sweden
        <sup id="ref-fn3">
          <a href="#fn3" className="text-xs underline text-blue-500">[3]</a>
        </sup>
        . He had no interest in intimacy—only in quantity. For him, Thailand wasn’t romance. It was math.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `At first, I judged them—the men—harshly. I wanted to photograph them in a way that exposed something. I wanted to make them look guilty. A few times, I did. One night, out walking along Beach Road, I caught an old man mid-negotiation—his hand resting on a girl’s waist, whispering something into her ear. He had a walking stick. He was old enough to be her great-grandfather. I got pissed off by the walking stick. I lifted my camera and took a shot—point-blank, face to face. He gave me a half-hearted chase, swinging his walking stick and shouting, “Idiot! Come back!” in a thick German accent. I didn’t stop. I didn’t even look back.

    Later at home, Halil asked me, “What were you trying to prove?”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-47.jpg',
    caption: 'There must be some way out of here, June 2024.'
  },
  {
    type: 'text',
    content: `He said I had picked on that man because he was old and weak. That I bullied him. And he was right—I wouldn’t have dared if it had been someone like The Rock. Or a group of intimidating young men. He reminded me that good photography doesn’t humiliate. It doesn’t create enmity. It observes, reflects, connects. He told me I needed to try to empathize—not just with the sex workers, but with the men too. That moment stayed with me.

    It’s something I’m still learning from him. As he once put it—in Turkish—“Biz insanları ayrıştırmak için çabalamıyoruz, kaynaştırmak için uğraşıyoruz.” We’re not trying to divide people, but to bring them together. There’s plenty we could disagree on, plenty that could pull us apart. But instead, we meet halfway. We find common ground, and choose to look past each other’s flaws.

    That mindset helped me talk to all kinds of people on the street—especially the tourists. If they were Swedish, I’d say, “Bra, jag pratar en liten grann svenska också.” I could hold my own with Norwegians, and catch a word or two from the Danes—even though most Scandinavians weren’t too talkative. If they were French, I’d mention that I religiously practiced Duolingo every day. If they were Welsh, I’d say I used to work with a guy from Caerphilly. Japanese? I had a quote from my favorite anime ready to go. Sometimes I played the like-minded tourist.

    Sometimes I didn’t need to say much at all—just mentioning I was Turkish was enough to spark a conversation. “That’s where I got my hair transplant,” they’d say, or, “I flew there to replace my teeth.” Cheap and professional, they’d grin, showing their pearly white smiles.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-09.jpg',
    caption: 'Yankees that have been on a medical Turkish trip, June 2024.'
  },
  {
    type: 'text',
    content: `If they asked about my camera, I told them straight: I was a hobby photographer, documenting the street. Some didn’t mind at all. Some even bought me a beer. Some asked to pose. Others got serious—one said, “I’ve got a wife and kids back home, mate.” Another just shook his head and walked away.

    I stopped trying to capture shame. Instead, I tried to photograph the reality of it—not the scandal, but the quiet ordinariness. Because for them, that’s what it was: a drink, a smile, a bar stool, a question, an agreement. Nothing illegal. Nothing hidden. Just something you’re not supposed to look at too closely.`
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          A few months ago,
          watching a clip of Sam Rockwell’s monologue from <em>White Lotus</em> that went viral—
          his messy, raw confession about chasing desire—reminded me of the men
          I photographed on Soi 6. Even though it’s a fictional soliloquy
          taken to an extreme, I believe many of the men I met in Pattaya had been off the rails,
          like Rockwell’s character, enslaved in the pursuit of desire.
          That sense of searching, lost in their own ways,
          fuels this massive system financially, drawing more sex workers into it.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-92.jpg',
    caption: 'Man with a shawl, December 2023.'
  },
  {
    type: 'text',
    content: `Once, a huge guy—easily close to two meters tall—appeared out of nowhere and slammed his arm onto my back, shouting, “What’s up?” I was startled for a moment, but quickly realized he was simply high and being friendly in his own way. He was British. We exchanged a few words, I took a photo of him, and then he spotted a bar girl. Without hesitation, he wrapped a long shawl he was carrying around her shoulders and pulled her away. She didn’t resist. She just went with him. He disappeared just as suddenly as he had appeared.

    At the time, I didn’t even know about the bar-fine system—how a customer pays a fee, usually between 1,500 and 2,000 baht, to the bar to “take” a woman out. All I knew was that what I had witnessed felt absurd. And it still does—unless I somehow missed him paying.

    I liked the story more than the photo I got. The girl he pulled away kept smiling theatrically for the camera. Even stranger: later that same night, I walked past the Englishman again. He didn’t recognize me at all. He just shuffled straight without a second glance.

    As positive as I tried to keep these encounters with the men, and even though I managed to photograph many of them, I never built any real connection. Each meeting remained exactly that—a single, passing encounter.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-13.jpg',
    caption: 'An international couple, December 2023.',
  },
  {
    type: 'text',
    content: `One night at a bar, I chatted with a man nursing a small bottle of Leo beer wrapped in a foam sleeve. “You should spend your time partying mate, not photographing,” he said with a grin. He told me about taking a young waitress from a fast-food pizza chain to dinner. Later, they had sex—and to his surprise, she asked him for money afterward. He speculated that maybe, because I was young and handsome, I wouldn’t always have to pay in Pattaya. Beneath his bravado, though, I caught a wistfulness—a longing to be young again. At least here, he had the money to keep loneliness at bay. Back home in England, he didn’t.

    Another guy I ran into gave me a bit of a scare. I was retrieving my parked motorcycle when he suddenly rose from a bar stool where he’d been napping in the daytime heat. I could tell he was absolutely stoned even before I noticed the king-sized joint nestled between his ring-covered fingers. He was young and thin, unlike most tourists in Pattaya. He was Asian with a faint accent hiding behind an overdone American drawl. He told me he used to live in New York until he made a fortune during the Bitcoin surge. Now, he said, he had a penthouse in Pattaya. “I smoke weed all day,” he boasted. “And when I get bored of that, I fuck a new girl.” Then, squinting at the sun, he added, “Soi 6 is shit. They’re only sixes and sevens. Hang out with me and you can fuck tens too.” Funny enough, the next time I ran into him, he didn’t recognize me at all.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-98.jpg',
    caption: 'A made guy, March 2024.',
  },
  {
    type: 'heading',
    text: 'Learning the Ropes',
    id: 'learning_the_ropes',
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        The more I walked the street, the more I began to notice the system behind the surface.
        Every bar followed a routine. The girls would arrive around early afternoon—
        sometimes still in their pajamas, sometimes already dressed for the shift.
        A few lived upstairs; I’d seen some I knew standing on balconies, hanging laundry,
        waving at me down to the street. These rooms weren’t just dormitories—they doubled
        as short-time rooms where customers took them for sex.
        A single room might serve as both sleeping quarters and workspace,
        usually accessed via a staircase tucked inside the bar.
        When a customer paid the <em>mamasan</em>—an older Thai woman who oversees the bar—,
        they’d head up together. Others had places elsewhere in the city—some boasted of
        having a whole condo to themselves, others just a small room—and
        they’d hop on a motorbike taxi after their shift and return the next day.
        But not everyone fit the pattern. One girl, Kwang (a pseudonym),
        actually commuted by bicycle. She once let me borrow it for a slow photo tour of Soi 6.
        All this would unravel under the watch of the mamasan who recruited workers,
        managed the floor, and ensured everyone stayed in character.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `Each day had a costume. Nurse. Schoolgirl. French maid. Police. FC Barcelona jersey, cropped just above the ribs. Matching bikinis for the lot. The outfits weren’t for fun—they were assigned by the bar. I’d sometimes see the mamasan taking a lineup photo just before opening.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-10.jpg',
    caption: 'Mamasan taking the roll call, March 2024.',
  },
  {
    type: 'subheading',
    text: 'Telegram Groups',
    id: 'telegram_groups',
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        Later, I found one of the Telegram channels where those photos were uploaded—subscribed to by thousands.
        Each post showed the girls in matching outfits, standing against the same wall,
        tagged with names, short descriptions, and a bar logo. The lighting was identical.
        The framing never changed. You could scroll through them like a food delivery app.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `Some nights, if a girl was celebrating her birthday, you could spot it instantly: she’d be draped in colorful garlands of Thai baht banknotes—sometimes hundreds of them—pinned to a sash or taped to her dress. Each note, decorated with the King of Thailand’s portrait, fluttered as she moved. It was a visual symbol of both celebration and commerce.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        These birthdays weren’t private affairs.
        Bars promoted them openly on Telegram, often with a glamorous portrait of the birthday girl.
        Messages like, <code className="text-sm">“It’s Yoshi’s and Nam’s birthday party today!
          Come and make great memories with us at Toy Box Pattaya Soi 6, from 4 PM till 2 AM 🎉🎂🍻🥃🍾👩🏻🎶”
        </code>
        would pop up daily<sup id="ref-fn4">
          <a href="#fn4" className="text-xs underline text-blue-500">[4]</a>
        </sup>
        —personal milestones turned into public invitations to spend.
      </PhotoEssayText>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-80.jpg',
    caption: 'Birthday girl, June 2024.',
  },
  {
    type: 'text',
    content: `The pressure to look a certain way extended beyond costumes. I noticed many of the women went to great lengths to avoid the sun. Their skin was often pale, a stark contrast to the tropical heat. Occasionally, before the start of a working day on Soi 6, I saw white powder being carefully applied to faces to achieve a paler complexion. Usually, girls helped with each other’s makeup and grooming and dressing —I have seen for example girls help put on each other’s very sparing French maid costume and tying its straps in the back—, but there were  also local men who regularly went from bar to bar applying powder to women’s faces. Girls who didn’t live in the bars would arrive already dressed for the day—sometimes as a nurse or a police officer, with as much cleavage as possible—usually carrying umbrellas for shade.

    I remember hearing a story from a man at the gym about his Thai wife, who avoided sunlight at all costs. Even when sitting shotgun in the car, she wore long sleeves and a hat. He found it a bit obnoxious, but for her, it was just part of daily life. This quiet, consistent effort to evade the sun was a reminder of the beauty standards and cultural pressures the women in Pattaya faced every day.`
  },
  {
    type: 'subheading',
    text: 'Kids',
    id: 'kids',
  },
  {
    type: 'text',
    content: `Many of the children I saw on Soi 6 were street vendors, selling trinkets, roses, nuts, and snacks. I often saw babies huddled close to their mothers, who worked as vendors. The babies’ eyes would bounce from one corner to another, taking in everything around them with quiet curiosity. Sometimes, I saw babies and young children with the bar girls, too—usually the child of one of the women. The girls would shower the little ones with love and play, creating tender moments amid the chaos. Thank God, I never saw any kids selling condoms or marijuana, but honestly, I wouldn’t have been surprised either. It made me wonder how much these children really understood about the complex, sometimes harsh world they were growing up in.

    Later, I heard about and read reports of children being trafficked and coerced into sex work in the region—a grim reality that authorities and NGOs have long worked to combat. During my time on Soi 6, I never witnessed any child engaged in sex work myself—and of course, it’s impossible to know everyone’s true age. Still, it was clear that quite a few children lived around the fringes of this world, growing up amid its complexities and challenges. I often saw them out past bedtime on school nights—perhaps they didn’t attend school regularly. It made me reflect on what a great privilege Western children have to enjoy the kind of lifestyle they do.`
  },
  {
    type: 'subheading',
    text: 'Other Antics',
    id: 'other_antics',
  },
  {
    type: 'text',
    content: `In many bars on Soi 6, where conversation was often limited by language barriers and the transactional nature of the work, the women found ways to engage customers through games. Dice games were common, providing a lighthearted way to pass the time. I also encountered Jenga and Connect Four—games I had never played before. When I bought lady drinks, I often played Connect Four with the girls, which created brief moments of genuine interaction and playfulness amid the otherwise transactional atmosphere.`
  },
  {
    type: 'image',
    src: '/n/a/',
    caption: 'Connect four',
  },
  {
    type: 'text',
    content: `On Christmas Eve, the temperature dropped to 22 degrees Celsius. The girls on Soi 6, usually clad in bikinis, wrapped themselves in blankets and laughed as they complained about the sudden chill. Many bars had Christmas-themed outfits, making it as close to a white Christmas as one could get in Thailand—a quirky, trying-to-stay-warm contrast to the usual tropical heat.`,
  },
  {
    type: 'image',
    src: '/n/a',
    caption: 'Christmas '
  },
  {
    type: 'subheading',
    text: 'Learning Names',
    id: 'learning_names',
  },
  {
    type: 'text',
    content: `As days passed, I became friendly with many familiar faces. I was often offered bubble tea, watermelon, grilled chicken, spiced bugs, pickled mango—whatever the girls happened to be snacking on—as I walked by, whether in the morning or late at night. Looking back, I remember a general sense of warmth. But the ones I knew by name were fewer; still, by the end of my trip in December 2023, I had jotted down over a dozen names in my notes.`
  },
  {
    type: 'subheading',
    text: 'May',
    id: 'may',
  },
  {
    girl: 'May',
    type: 'text',
    content: `One of them was May—a pseudonym. She was conversational in English. She told me she had once lived in Sweden, supposedly for school, though I quietly suspected there was more to the story. When she learned I had lived there too, she lit up and started showing me photos. Her photos showed a life that felt oddly familiar to me: warm jackets, snowy sidewalks, Christmas lights, sterile IKEA interiors—though every meal still had a bowl of rice at the center.`
  },

  // <span
  //           id="ref-1"
  //           onClick={() => {
  //             const el = document.getElementById('footnote-1');
  //             if (el) el.scrollIntoView({ /* behavior: 'smooth' */ });
  //           }}
  //           className="footnote-ref cursor-pointer text-blue-600 hover:underline"
  //         >
  //           [1]
  //         </span>
  {
    girl: 'May',
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          May’s story echoed information I read in Joakim Medin’s <em>Thailandssvenskarna</em>,
          which cites that according to Sweden’s national statistics agency,
          78 percent of Thai migrants to Sweden are women, and 80–90 percent of them arrive through a relationship
          with a Swedish man. That number is striking—especially compared to countries like Afghanistan,
          where the overwhelming majority of migrants are men.
        </PhotoEssayText>
        <PhotoEssayText>
          In Medin’s book, I also learned about a Swedish-made documentary named <em>Thailanddrömmar</em> (Thailand Dreams)
          that follows the lives of several Swedish men entangled in Thailand, and Thai women in relationships with them. I’ve included a link
          {" "}<sup id="ref-fn5">
            <a href="#fn5" className="text-xs underline text-blue-500">[5]</a>
          </sup>
          {" "}&nbsp;to it in the footnotes—you can watch it with English subtitles on YouTube.
        </PhotoEssayText>
        <PhotoEssayText>
          In Sweden,
          many of these women live in legally precarious situations:
          their right to stay is tied to the continuation of the relationship.
          If it ends, they risk deportation. Medin describes women who are isolated,
          cut off from support networks, and trapped in controlling or abusive dynamics—treated as housekeepers,
          caregivers, or worse.
        </PhotoEssayText>
        <PhotoEssayText>
          I have a friend who was deported after his <em>sambo</em>—cohabiting partner in Sweden—told the authorities their relationship had ended.
          It wasn’t ideal. And I’ve lived in Sweden with a temporary residence permit for four years myself,
          so I know the anxiety that comes with it. Compared to my anthill, theirs must be a mountain.
          For these women, the power imbalance is built into the system.
        </PhotoEssayText>
        <PhotoEssayText>
          With May, I gently asked if she had married a Swedish man before moving.
          She always stayed loyal to the student narrative. Perhaps she was a student.
          But I can’t help but think she was deported after a failed relationship.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-08.jpg',
    caption: 'Street scene, June 2024.',
  },
  {
    type: 'subheading',
    text: 'Linda',
    id: 'linda',
  },
  {
    girl: 'Linda',
    type: 'text',
    content: `I met Linda—another pseudonym—early on, and from that first encounter, she always waved when she saw me on the street. She liked being photographed. Every time I sent her a picture—or showed one on the camera’s small display—she’d reply with mock outrage: “Ugly!!! No want photo!” But the next day, there she was again, posing and laughing like nothing had changed. It became our ritual.

    Linda was older than most of the women I met on Soi 6. You could see it in the lines on her face. She said she didn’t have children and carried herself with a kind of confidence that stood out. I noticed how the younger girls at her bar looked to her—not with fear, but with quiet deference. She wasn’t the mamasan; there was already one at her bar. But Linda held her own space.

    When I passed by, she’d sometimes grab my arm and say she was hungry, asking for pizza. There was only one place on Soi 6 that sold it—a little shop crammed between bars. It felt like a luxury amid the usual local stalls. I got her a slice a few times. She’d smile, thank me, and go back to work—unless she wanted ice cream, that is.

    Her English was limited, so when conversation got tricky, she’d pull out her phone and use a translator bot on Line. She tapped diligently on the screen, smoothly turning the interaction into a real exchange. I wasn’t sure if she was just tech-savvy or had developed the habit over time. These chats usually happened over a drink—me ordering her a lady-drink and a small Chang for myself. It was a reprieve, and I was glad she was just in it for the conversation—no touchiness, no pressure for another round. She often shared gossip about the customers—funny stories, and some not so funny, which left me quietly sad.

    She had also traveled for work before, freelancing a few times in Singapore where the money was good. But she wanted to go to the United States instead—she knew someone who could arrange a green card. Working there would be more profitable for her. I would sit in amazement and bewilderment at her future plans and grow more confused about the world.

    She taught me a lot about the street in a short time. You could tell she handled people well. She wasn’t the loudest or the most aggressive, but her experience showed.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-71.jpg',
    caption: 'With a customer, April 2024.',
  },
  {
    type: 'subheading',
    text: 'Mint',
    id: 'mint',
  },
  {
    girl: 'Mint',
    type: 'text',
    content: `One of the people I grew close to on Soi 6 was Mint—a kathoey, and under another pseudonym. At first, she saw me as a potential customer. She was upfront from the start: the first thing she said was, “I’m ladyboy.” I gently explained I wasn’t interested in that—but asked if I could take her photograph. She lit up at the idea. When I raised the camera, she posed like a seasoned model—serious expression, sharp angles—flowing effortlessly from one stance to the next while I scrambled to frame her properly amid the chaos of Soi 6.

    Mint became my most enthusiastic model. If I didn't show up one day, she’d text: “I have nice makeup today...no photo?” If I walked past her bar without stopping, she’d run out and drag me back—literally, with strong arms. She was taller than me, stronger too, and completely at ease in her body.

    She didn’t just pose for herself—she brought me in. She’d take me by the wrist and pull me into her bar, introducing me to the other girls: “He is my friend.” That word—friend—mattered. People trusted her, and through her, they started to trust me. Mint gave me access I wouldn’t have earned alone. Her energy, her confidence, her joy in being photographed—it opened doors. She helped me reach the kind of intimacy I was always chasing with my camera.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-82.jpg',
    caption: 'Nightfall after the water fights during Songkran, April 2024.',
  },
  {
    type: 'subheading',
    text: 'Namtan',
    id: 'namtan',
  },
  {
    girl: 'Namtan',
    type: 'text',
    content: `I first photographed Namtan—yet another pseudonym— in December 2023. She was lively, confident, and always camera-ready. We followed each other on Instagram—I’d send her the pictures I took of her, and in return, I got small glimpses into her life. Unlike many of the women I met, Namtan didn’t have children, and she moved with a kind of freedom that stood out on Soi 6.

    Her stories were often from upscale clubs on Walking Street—flashing lights, expensive bottles, selfies from the VIP section. Then one day, she posted from a hospital bed—she’d drunk too much. A few hours later, she was back behind the bar, working like nothing had happened. She’d drink a beer with me without hesitation. Her nights felt like a Jim Morrison bender—flashing lights, too many drinks, and no plans to stop.

    She once told me she had a Western boyfriend who sent her money regularly. But she made good money on her own, too. She didn’t talk about struggle or sacrifice—not in the way others did. Her life felt fast-paced, unstable, but self-directed. Over time, she began posting more photos with her boyfriend—a middle-aged man with a shaved head and tattoos—like a badge of stability and sponsorship. They seemed to spend a lot of time together, laughing often—at least judging by her social media.`
  },
  {
    type: 'subheading',
    text: 'Rooms to Let, 400 Baht',
    id: 'rooms_to_let_400_baht',
  },
  {
    type: 'text',
    content: `I snuck upstairs in a Soi 6 bar once to grab some pictures. The place looked like a hotel corridor, with many doors lining a narrow hallway. I was too scared to step inside any of the rooms, knowing this was a brothel after all—I didn’t want to open any doors and find a farang with a bar girl. When I returned to the bar, the mamasan shook her finger at me in a reprimanding way; she had seen me on the CCTV, but she didn’t make it a big deal. Another time, at a different bar, I’d beg the mamasan, with whom I was on good terms, to let me go upstairs. Once, I even feigned being sleepy—pressing open hands to the side of my head as if to say “sleep”—but, of course, I was always rebuked.

    On two other occasions, I agreed with a bar girl to go upstairs. One of those times was with Linda. At first, she was confused—she thought I wanted to have sex. I explained that I just wanted to see the rooms and, if possible, take some photos. She was still puzzled as to why anyone would be interested in the rooms, but said she’d take me upstairs without asking for money—though I’d still have to pay the mamasan 400 baht to rent the room, which is the standard fee for any man having short-time intercourse with a bar girl on Soi 6.

    I even considered photographing a customer with a girl in one of those rooms, but I never encountered a situation where I could do that respectfully—or safely. I met many men, some of whom I photographed and occasionally chatted with—sometimes even over a beer—but I never felt like lingering around them longer than necessary. It seems impossible to me that a Western man today would be comfortable being photographed during sex—let alone a sex worker. And anyway, I didn’t see the point of taking such photos.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        Still, it remains a mystery to me how Mary Ellen Mark managed to capture
        such intimate images—so precise, so masterful—in her work on <em>Falkland Road</em> in India, even photographing customers in the cage rooms with the girls. Maybe times were different. She’d been sent by a magazine, after all, and that kind of access likely doesn’t exist anymore. Maybe it’s no longer possible to do documentary projects like that—at least not easily. Still, I can’t help but feel a little disappointed that she set the bar so high for this kind of photography.
      </PhotoEssayText>
    )
  },
  {
    type: 'subheading',
    text: 'Pattaya Online',
    id: 'pattaya_online',
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          Much of the male foreign engagement in Pattaya was visible not only in person on
          Soi 6 but also online—in forums like Flashback in Sweden and subreddits such as{" "}
          <Link
            href="https://www.reddit.com/r/Pattaya"
            className="underline text-blue-400 hover:text-blue-600"
          >
            r/pattaya
          </Link>

          . Many posts come from English-speaking men, primarily tourists or expats, and frequently refer to local women using the common name “Ploy,”
          turning the women into a meme-like character.
        </PhotoEssayText>
        <PhotoEssayText>
          I noted down a few posts when I browsed the Pattaya subreddit in April 2025.
          But let’s be clear: it’s always possible to find posts like these.
          Today’s hot topic, as I write this, is a debate about whether it’s weird to bar-fine a girl for a long-time.
          <sup id="ref-fn6">
            <a href="#fn6" className="text-xs underline text-blue-500">
              [6]
            </a>
          </sup>
          {" "}&nbsp;Two schools of thought dominate: one camp says that after sex—once “post-nut clarity” kicks in—the girl becomes too much to handle; the other enjoys the extended company, and the sex, which can happen multiple times.
        </PhotoEssayText>
        <PhotoEssayText>
          One post I noted was titled “Ploy broke up with me and ghosted me after 5 months for a rich sugar daddy in his 70s”
          <sup id="ref-fn7">
            <a href="#fn7" className="text-xs underline text-blue-500">
              [7]
            </a>
          </sup> laments the end of a relationship after the woman moved on to someone new. The top comment reads: “You never own Ploy, it’s just your turn. Always rent, never buy.”
        </PhotoEssayText>
        <PhotoEssayText>
          Another thread wonders: “So I met a girl last trip and now she has someone paying her money every month. But this trip she is still seeing me and hasn’t asked for any money. What is she looking for?”
          <sup id="ref-fn8">
            <a href="#fn8" className="text-xs underline text-blue-500">
              [8]
            </a>
          </sup>
          {" "}&nbsp;One commenter sums it up with brutal pragmatism:
          “Y’all are always surprised when Ploy would rather stay in your nice AC hotel room and you pay for all her meals in a restaurant. Otherwise, she’s sharing a dorm room above a bar with 3 other Ploys per bed and eating off food carts.”
        </PhotoEssayText>
        <PhotoEssayText>
          Just scrolling through the content created by visiting or resident farangs, I came across a wave of AI-generated images and videos mocking Ploys, nostalgic posts about missing Pattaya, elaborate plans to return, and even advice-seeking threads on how to arrange group encounters with five or six bar girls at once. But I think just this much gives you an idea.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'subheading',
    text: 'Friends from Soi 6',
    id: 'friends_from_soi_6',
  },
  {
    type: 'component',
    collapsible: false,
    render: () => {
      const portraitImages = Array.from({ length: 29 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/portraits/soi6_portrait-${num}.jpg`;
      });

      return <PortraitReel
        images={portraitImages}
        caption="Taken across March, April, and June 2024." />;
    }
  },
  {
    type: 'heading',
    text: 'Sweden',
    id: 'sweden',
  },
  {
    type: 'text',
    content: `I had loved Thailand. The sun, the warmth, the rhythm, even the chaos—it all felt alive in a way Stockholm hadn’t for years. And the warmth wasn’t just in the weather. People were warm too—quick to smile, to talk, to include you. The moment the plane landed back home, I was filled with dread. Minus temperatures outside. A wall of gray. In my head, I heard Halil’s voice—how he was always the last to get off the plane at Arlanda, dragging his feet, dreading the cold. And he didn’t even have to return to December in Stockholm—where, in my case, a freezing minus twenty and a cloudy day gave way to nineteen hours of night.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        I hadn’t had many chances to travel during my six-plus years in Sweden.
        Gaining citizenship took time and mental stamina—even if my wait wasn’t as long as it is for some.
        And now, after finally getting that little EU passport of top-tier privilege,
        I was returning to a place that felt emotionally colder than ever.
        Even as I write this, I’m still not at ease.
        The incumbent government collaborates with neo-Nazis,
        and there’s open talk of rewriting the constitution to revoke already-granted citizenships
        <sup id="ref-fn9">
          <a href="#fn9" className="text-xs underline text-blue-500">[9]</a>
        </sup>
        .
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `Back in Stockholm, what hit me most was how social and easygoing Thailand had been. I’d grown used to joining my palms and greeting everyone with a cheerful “sawatdee khrap”—and seeing warm, smiling faces respond. So during my first few morning runs back in Stockholm, I instinctively said “god morgon” to people passing by. Most looked at me like I was insane. The silence stung. I also remembered I was a Middle Eastern immigrant—the word expat in Sweden being mainly reserved for people from the States, Australia, or Western Europe. Unlike in Thailand, where I was read as a white tourist, here I was just another foreigner in the wrong category—which did not necessarily open the doors.

    I missed Thai food too. Before I left, the family who ran the little restaurant we ate at almost every night had gifted me a small bag of spices—real, serious chili. Back in Sweden, I added it to everything. It was the only way I could feel some heat.

    I started plotting how to move to Asia. I looked for tech jobs in Japan and Singapore. Anything to take a break from Sweden. I was still buzzing from what I’d shot. My teacher said I’d made strong work. But I didn’t feel I had much. A few decent frames, sure—but not enough to show Pattaya to people who’d never heard of it. Not enough for a real series. Not enough to tell a story.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-90.jpg',
    caption: 'All alone and lost, April 2024.',
    color: true,
  },
  {
    type: 'text',
    content: `Still, I made a small album on my phone with what I thought were the best shots. I showed it to a few friends. They were astonished—and full of questions about Pattaya. While volunteering as a photographer at the film festival in Gothenburg, I met Anders—a friend of my teacher Halil’s—at an exhibition. He was another experienced photographer. Later, when I visited him in his darkroom in Stockholm’s old town, he told me I had to make a book from the photos—but that I also had to go back and get closer. That part stuck with me. Asking to get photos published was easy for him to say. But for a hobbyist with no name, it wasn’t so simple. Still, I was flattered. The reactions I got made me want to return. To go deeper.

    But life in Stockholm was far from great. Work was still draining me. Money was tight. I spent most of my time holed up in a tiny bedsit, praying for sunlight. The thought of enduring a few more months of Swedish winter filled me with dread. I had no leads on work in Asia and was already burned out from software engineering—but I knew one thing for sure: I didn’t want to linger in Stockholm. I had nothing left in the tank.

    Then in February 2024, my manager set up a meeting. I got fired—part of a global layoff that affected thousands of people across the company. And honestly, I couldn’t have been happier. At least for myself.

    February 2024 marked a turning point for me. For the first time in years, I had time for myself. I wasn’t heading back to work anytime soon, and I had been given generous severance money. Having naturalized as a Swedish citizen a year earlier, I no longer had to stay in Sweden out of fear of losing my residence permit. It felt like a rare chance to step back, breathe, and explore something new—something I’d always wanted to do but never quite had the space for. I felt so relieved.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        For a brief moment, I was overwhelmed by the sheer possibilities:
        Take a classic working-class vacation to Portugal or Spain?
        Visit Africa or the Americas—which I have never done.
        Do an Interrail all around Europe?
        Bikepack across Europe to Turkey to my parents’—something
        I’d long dreamed of and{" "}
        <Link href="/bikepacking" className="underline text-blue-400 hover:text-blue-600">
          eventually and luckily managed later that year.
        </Link>
        &nbsp;Or stay put in Stockholm and search for another job? But in the end, it was dead clear.
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `In a swirl of urgency, I rented out my tiny Stockholm bedsit—just enough to cover the mortgage—and booked a one-way ticket to Singapore. Halil joined me there. We walked, took pictures, ate well. After a few days of sightseeing, we returned to Pattaya. The plan was simple: take photos, travel somewhere new in Asia, return to our base in Pattaya, and repeat.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-11.jpg',
    caption: 'Flower-selling girls putting on makeup, April 2024.'
  },
  {
    type: 'heading',
    text: 'Pattaya as a Base',
    id: 'back',
  },
  {
    type: 'text',
    content: `When I got back to Pattaya in March, I was surprised to find that quite a few people on Soi 6 recognized me. The recognition was warm—smiles, waves, the occasional “photo man!” called out from a bar. That familiarity made the return feel softer.

    I spent a week in Pattaya that March. This time, my teacher didn’t join me on Soi 6. He said the street drained him. I understood—it wasn’t light work. But I felt more at ease there now, and I had a clear goal: to take as many photos as I could while I was in town. We had plans to move on soon anyway—to the Philippines and Taiwan, two of the few countries in Asia Halil hadn’t yet visited.

    A few days before I was to leave on a trip to the Philippines with Halil, I got to know an elderly South African man at the gym. He spoke about his ex-girlfriend from the Philippines—generalizing the beauty of Filipina women in his own blunt way and wistfully wishing he was my age and visiting the Philippines now—but then again, that was part of the scene’s rough honesty. Despite this, he had clearly made an effort to speak fluent Thai and understand local customs, and he talked about his Thai girlfriend with respect. That set him apart from many others who do not deign to be part of Thai society, except to spend money.

    I’d been to the Philippines before and helped translate here and there and assumed the tour guide's mantle. A few days after the earthquake in Taiwan we were back in our base.

    What I hadn’t planned for was a motorcycle accident—another rider crashed into me just before we left for the Philippines. I twisted my ankle badly. Thirteen months later, as I write this, it still hurts. I never got it checked out properly—a long story in itself. We continued the trip regardless, but my ankle definitely made things harder.

    During our travels—whether in Singapore, Davao City, or Cebu City—we came across scenes that echoed Pattaya’s nightlife and sex work culture, though always on a smaller scale. Pattaya remained unmatched in size, openness, and intensity. And when we returned there in April, I wasn’t ready to face that intensity again. The pain lingered, and mentally, I just didn’t have the energy to put myself out there. I stayed home some days. But eventually, I pushed through. I figured I’d keep photographing while I still had the energy, and start traveling again once I needed space. A win-win. I spent another couple of weeks photographing Soi 6 in Pattaya that April.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-75.jpg',
    caption: 'Tourist from London and bar girls posing, June 2024.'
  },
  {
    type: 'text',
    content: `Linda had reached out while I was traveling in Taiwan. One morning, she texted me saying she’d heard I was in Pattaya. I explained I wasn’t—I was on the road with Halil. I sent her a photo of the three of us: me, him, and an old friend from Taiwan who had been showing us around. Linda asked if my Taiwanese friend was my “boyfriend.” At first, I thought she was teasing—but later, I learned that the Thai word แฟน (faen) doesn’t specify gender. It just means “romantic partner.”

    We hadn’t talked in a while, so I told her we could get a coffee and catch up once I was back. She said okay.

    When I returned to Pattaya, she messaged again. She said a customer had “bought” her out of the bar and would keep her for the next ten days. “Linda did it because Linda needed money to live like this,” she wrote. “The bar was very quiet.” I asked, “Are you happy?” Her reply was, “Yes, he is very nice. He is 56 years old.”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-78.jpg',
    caption: 'Linda in the water, April 2024.',
    color: true,
  },
  {
    type: 'text',
    content: `A few days later, the tone changed. “Can’t be with the customer,” she wrote. “He’s doing drugs.” I asked if she was alright. She eventually told me, “Yes, some days he hurts Linda, but Linda can’t go anywhere, so she has to wait until he returns because he already received his money.”

    When I saw her again during Songkran, she was back at the bar, working like nothing had happened. The whole thing stayed with me—not just what she endured, but the fact that she had reached out to me. Maybe she didn’t have many people to talk to. Maybe she wasn’t looking for help. But she wanted someone to know. And for reasons I still don’t fully understand, I was one such someone.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-77.jpg',
    caption: 'Ineffective weapon during Songkran, April 2024.',
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          Halil had returned to Sweden just as Songkran began.
          He got splashed a little—but nothing compared to what was waiting for me.
          Luckily for me, he had spoken to his friend who owned the two apartments and, I suspect,
          put in a good word. I was allowed to stay as long as I wanted.
        </PhotoEssayText>
        <PhotoEssayText>
          Despite my hurting ankle, I couldn’t miss Songkran.
          I went out on a couple of days with my backup camera, an OM System TG-7—waterproof,
          just as it needed to be. I took quite a few photos, some of which I’ve included{" "}
          <Link href="/brief/songkran" className="underline text-blue-400 hover:text-blue-600">
            <strong>here</strong>
          </Link>
          .
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-00.jpg',
    caption: 'Collapsed woman, April 2024. (Photographed with an OM System TG-7)'

  },
  {
    type: 'text',
    content: `After that I returned to my rhythm. After Songkran in April, once my ankle had started to not make life too miserable for me, I was walking Soi 6 regularly again and taking photos that I thought were good. I felt more productive at least, which otherwise felt like being kind of stuck in the world’s brothel with no friends. I did, however, take more pauses during my walks and spent more time sitting down for drinks, talking with the women. Conversations usually happened over a lady-drink and a smartphone—usually an expensive iPhone—using Google Translate. I’d inadvertently see the translations pop up, along with dozens of other notifications sliding in from the top of their screens: usually messages from foreign men, and usually obscene. It was a strange window into their daily life—something halfway between public and private.

    Phone conversations would also get funny. Over these broken, phone-assisted chats, I was asked more than once if I had a boyfriend or a husband. Sometimes, when a woman proudly showed me photos of her children, I couldn’t help but notice what else was on the screen. In the same photo gallery, right next to pictures of smiling toddlers, there would be dozens of selfies taken with different farangs. It was jarring. Before my beer was finished, they often asked to take a selfie with me too—adding me, I guess, to that same ongoing gallery.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-32.jpg',
    caption: 'There is too much confusion, June 2024.'
  },
  {
    type: 'text',
    content: `Sometimes, I’d go to the bar’s toilet even if I didn’t need to—just to catch my breath, or to hunt for photos. The bathrooms were small, dimly lit, often with cracked mirrors and dusty fans spinning slowly overhead. It was also where many of the sex workers touched up their makeup before stepping back out.

    On one such visit, a woman I’d spoken to earlier agreed to let me photograph her as she applied her lipstick in front of the mirror. It had taken a little convincing—not for taking her photograph, but to get her to hold a serious, almost anxious expression. I was hoping to catch that quiet, reflective moment before she stepped back into her shift.

    Then, mid-composure, an African American customer burst into the bathroom. I’d seen him earlier at the bar with his friends—loud, cheerful, clearly drunk. He looked at us, flashed a thumbs-up, and without hesitation stumbled straight to the urinal, without so much as even closing the door halfway even. The scene was so absurd it almost made me laugh—but I knew this was a moment worth capturing. He filled in the empty space beside her, a gap that screamed in the frame. Technically, it wasn’t one of my strongest shots—but something about it stayed with me. The absurdity. The composition. The questions. It made the final cut.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-38.jpg',
    caption: 'Powder room, April 2024.'
  },
  {
    type: 'text',
    content: `When I returned to Soi 6, I saw that Namtan and Mint—still pseudonyms—were still on the street. But I couldn’t find May. I texted her, and she told me she had gone back to her hometown in Korat, in the Isan province. She said she was tired of Pattaya.

    I asked if I could visit her in Isan. She said I could. By then, I was starting to feel I had to see Isan with my own eyes—to understand what drives so many young women to sex work in Pattaya. I began toying with the idea of expanding the project beyond Soi 6—maybe even developing two parallel photo series. Of course, I had no idea how to do this as a hobby photographer, but I thought May could give me a lead. And the least I could do was take photos.

    Before returning to Thailand from Taiwan, I had already booked a flight to Siem Reap—a pre-planned visa run on the cheapest international route I could find. I figured I’d spend a few days exploring Cambodia, then return to Thailand with a clearer plan—maybe finally visit Isan, possibly even by motorcycle.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-95.jpg',
    caption: 'Law and order, March 2024.'
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          Then I was in Cambodia.
          I went to see Angkor Wat and had a fantastic time touring the temple complex by motorcycle—dodging the thirty-seven-dollar entrance fee for foreigners that is lifted just before sunset.
          A relatively normal town, it turned into a much-needed breather from Pattaya.
          I missed being on the road, in more ordinary places, far from the world’s sex tourism capital.
          So I kept going. I forced myself to walk everywhere.
          Slowly, the pain in my ankle began to subside.
          I took photos constantly, slipping into places I doubt many tourists ever did. I visited
          Battambang, the Cardamom Mountains,
          Khemarak Phoumin, Pursat, and Sihanoukville—where I took some of the photos I
          share{" "}
          <Link href="/brief/sihanoukville" className="underline text-blue-400 hover:text-blue-600">
            <strong>here</strong>
          </Link>
          . I went to Koh Rong, where I even managed a run along the white beach,
          and eventually made it to Kampot—the once French colonial city—before heading to the capital, Phnom Penh.
        </PhotoEssayText>
        <PhotoEssayText>
          My first night in Phnom Penh, I started noticing familiar signs—ads from the Nightwish Group, saying they own more than 30 bars in Pattaya.
          I was immediately alerted.
          The ad was plastered on the side of a passing tuk-tuk and it promoted that they <i>finally</i> opened a bar in Phnom Penh too.
          There I already noticed I was on a red-light street of sorts.
          Not as brazen as Pattaya’s any, but I noticed young women idling outside bars on their smartphones.
          A sight not too far off that of Soi 6’s bars.
          It must have been the same machinery, just smaller.
          Built on the same logic of exploitation and now one bar by the same people that exploit Thai sex workers in Pattaya.
          It made my stomach turn.
          I remember immediately texting Halil who was back in Stockholm.
          He said to be careful, and not be too rash to take photos.
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/cambodia.jpg',
    caption: 'At a Phnom Penh bar, May 2024.',
  },
  {
    type: 'text',
    content: `This above photo is from that night still haunts me. At the time, I didn’t fully realize what I was seeing, but I had a bad feeling about it. I took a photo of this boy next to the bar girls at a bar’s entrance in Phnom Penh’s red light street. Then I gave him a few coins as pocket money and went in for a beer and to see what it’s like. I got my beer, but the mamasan that show my interest in the kid brought him to my table and said he wants an orange juice. I said sure get him one, but she sat the boy on my table next to me and was making him say thank you and everything. I felt really bizarre and soon left. I thought it was her kid, but that bad feeling lingered. Only later, when editing my photos from Cambodia, did the horror hit. I researched. I found reports. I found NGOs fighting child trafficking in Cambodia. I contacted them, but never heard back. But just the sheer fact that such NGOs must exist fills me with dread.

    I never saw any underage sex workers on Soi 6 or elsewhere. And from what I’ve read since returning, there do seem to be serious efforts to curb that part of the trade.

    I’d also heard—before and during my time in Pattaya—that many sex workers weren’t Thai at all. People said they came from Myanmar, Laos, Cambodia, even China. But on Soi 6, I didn’t knowingly meet any. In restaurants, yes—I spoke to a few Burmese workers who’d fled civil war—but none in the bars. Then again, not everyone reveals where they’re from. And even when they do, you never really know if it’s true.`
  },
  {
    type: 'component',
    render: () => (
      <PhotoEssayText>
        But even still, there’s something from my reading after returning that stuck with me:
        Kevin Bales, a "professor of contemporary slavery", in an essay written two decades ago,
        describes how many Lao women pose as Thai, speak fluent Thai, and carry fake ID cards.
        In Thailand’s northeast, where Thai and Lao languages merge, it’s often impossible to tell locals from migrants
        <sup id="ref-fn10">
          <a href="#fn10" className="text-xs underline text-blue-500">[10]</a>
        </sup>.
        Research from the Empower Foundation echoes this: many Lao and Chinese women cross into Thailand undocumented,
        work for a while, then return home to obtain proper papers before coming back legally
        <sup id="ref-fn11">
          <a href="#fn11" className="text-xs underline text-blue-500">[11]</a>
        </sup>.
        Most are literate in Thai, and in daily life and work, they’re indistinguishable from local Thai sex workers.
        So maybe they were there all along — I just never noticed.`
      </PhotoEssayText>
    )
  },
  {
    type: 'text',
    content: `After seeing that Night Wish group ad in Phnom Penh, I kept migrant sex workers in mind and stayed alert for anything Pattaya-like on my journey. I crossed into Vietnam by land, traveling south to north, then into Laos. I was walking again, with less pain, discovering wonderful places and taking many photos. I didn’t see signs of sex work beyond faint traces in Saigon and Hanoi, two sprawling cities in Vietnam.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-12.jpg',
    caption: 'A short getaway, December 2023.',
  },
  {
    type: 'heading',
    text: 'Last Days',
    id: 'last_days',
  },
  {
    type: 'text',
    content: `I was in Luang Prabang when I got the news—my mother had been diagnosed with cancer back in Turkey. I cut the trip short, hitchhiked to the Laotian capital and began making my way back to Pattaya, trying to figure out how to return home.

    On the way, I stopped in Udon Thani and Khon Kaen cities in the Isan region, the same part of Thailand where many of the women I’d met in Pattaya had come from. I had originally hoped to stay longer and cover many towns and villages, to meet people, to see the poor villages the girls in Pattaya had described. I wanted to understand what made them leave. I wanted to photograph what I found. But I didn’t have time. I passed through quickly, knowing these would be my final days photographing Soi 6.

    On the way to Khon Kaen, I met a younger South African man traveling with his Thai girlfriend and their baby. They seemed like a healthy, balanced couple—joking and laughing together, sharing physical affection. They happily posed for a few photographs. Their relationship felt on another level compared to many others I’d seen in Pattaya—a reminder that amid Pattaya’s complicated nightlife, real connections and family life for international couples quietly persist elsewhere in Thailand.

    From Khon Kaen, I arrived in Ayutthaya for an overnight stay—partly to figure out how to get to Pattaya, partly to see the old capital of Siam. I was amazed by how many magnificent temples were scattered so densely across the town. That evening, I met two Slovak backpackers who casually asked if I’d seen a ping-pong show. I thought I had, but I didn’t even know what it was. They explained it to me, and honestly, I could’ve done without the knowledge.

    Once again, I was reminded: after all this time, after all these photos, there’s still an entire world I haven’t seen. Even after immersing myself in the thick of it, I still can’t begin to gauge how much I’ve missed.

    The day after, I was back in Pattaya for what would be my last stay there, lasting another week. I spent my remaining days in June—right up until my flight—on Soi 6. I stayed longer than usual each day, moving slower, shooting more deliberately. I gave it everything I had in those final days, trying to get closer to people. Some of my favorite photos—most of the ones I ended up picking—came from that stretch.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-33.jpg',
    caption: 'French maids, June 2024.',
  },
  {
    type: 'text',
    content: `It was also then that I noticed a shift. More Western bar managers had appeared since I’d returned from my trip. They noticed me too. A few came up to me, trying to intimidate me. Some threatened me outright—speaking in British or American accents, telling me not to take photos if I liked my face the way it was. The space felt tighter. And maybe that meant it was time to stop. One manager I met was from Norway, of all places. We could’ve spoken in Norwegian or Swedish, but I stuck to English to catch every nuance. He seemed friendly enough toward me, though always in a rush—he said he managed three or four bars at once and was constantly running between them.

    In June, there was one particular vlogger I saw almost every day on the street. He was crude—groping women, lifting their skirts if they wore one. Sometimes he’d point his selfie stick straight between their legs and live-stream it. To my surprise, many of the women went along with it. I took photos of him, and he’d flash a thumbs-up, happily posing with the women before returning to his antics.

    But one day, when I photographed him again, he got unexpectedly angry. It was as if we were interacting for the first time and he’d just had a wake-up call. He said I couldn’t take his photo. I asked, “How is that different from you filming these women?” He shrugged: “At least I pay them.”

    While we talked, a Western man—who I assumed was the manager—stepped out of a bar and tried to intimidate me into leaving, calling me a “lowlife” for “ratting them out.” The vlogger just lingered nearby, continuing as if nothing had happened.

    The whole moment left me shaken—caught between complicity and confrontation. But I didn’t dwell on it too much. I knew I’d be heading to Turkey soon, and these were probably my last shots on Soi 6 anyway.

    I remember praying for rain. I had never seen Soi 6 in the rain, and I longed for that different kind of light, that different kind of mood. It came—just once. And I went out with my camera. But by then, I’d already exhausted what little energy I had left. That was it.`
  },
  {
    type: 'component',
    render: () => (
      <>
        <PhotoEssayText>
          On the last day of June I flew to Turkey and went straight to my parents. Cancer is never easy, but my mom was doing better than I feared. I was relieved.
        </PhotoEssayText>
        <PhotoEssayText>
          Later that year, I took more time off and did something I had dreamed of for years:{" "}
          <Link href="/bikepacking" className="underline text-blue-400 hover:text-blue-600">I cycled from Sweden to Turkey</Link>. A journey I’d made many times before—by plane, in a few hours—but never like this. It cured my mid-life crisis and ate up the last of my severance money. I figured if not now, then when?
        </PhotoEssayText>
      </>
    )
  },
  {
    type: 'text',
    content: `The ride was long, beautiful, and not without hardship. But it recharged me. I met wonderful people. I laughed a lot. It gave me the energy I needed to return to the Pattaya photos—months later, finally ready to sit with them. To edit. To remember. To really look.

    My hard drive—where I kept the original files—broke. I neither have the money nor know the right person to attempt a proper recovery. Luckily, I do have backups from before June, and low-resolution JPEG exports for some of the photos from that final week in June. They’re only good enough to print at A5—but just fine for sharing online.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-lost.jpg',
    caption: 'Frenchman, a photo whose export is missing too, only a low-resolution preview survived, June 2024.'
  },
  {
    type: 'component',
    collapsible: false,
    render: () => {
      const scenes = Array.from({ length: 24 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/scenes/scene-${num}.gif`;
      });

      return (
        <PortraitReel
          title={'"Scenes"'}
          images={scenes}
          caption={`In June 2024, during my final week in Pattaya, I shot a lot in bursts. Some sequences felt like silent films. Hoping to maybe stitch a short film later, I exported everything as low-res JPEGs right after I left. Thanks to that, I still have something to show from that all-out week. Most of these are from June, with a few from April. Just wide enough for a screen—so here we go.`}
        />
      );
    }
  },
  {
    type: 'heading',
    text: 'Reflections',
    id: 'reflections',
  },
  {
    type: 'text',
    content: `Pattaya is not a mystery. It’s a system. It runs on movement, memory, and transaction. Some come for a week. Some never leave. Many of the women I met were supporting families. Most of the men were running from something. And me? I came back with photographs—fragments of a place that’s always shifting, always just out of frame.

    I’m not sure what these photos are for. Will any of this ever change? The men won’t stop being rich. The women won’t stop needing money. The Thai state turns away, so long as the tourists keep coming and the economy moves. Money still makes our world go round.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-14.jpg',
    caption: 'Breaking the fourth wall, April 2024.',
  },
  {
    type: 'text',
    content: `Sometimes I wonder if I really documented anything—or if I just circled around it. I walked. I watched. I listened. I photographed. That’s what I brought back.

    Before writing this, I reached out to every NGO I could find operating in Pattaya. I told them briefly what I had done—offered to mention their work here to give anyone reading this and looking at the pictures a way to help. But honestly, I’m not sure how to help myself. And I didn’t hear back from any of them.

    And yet—despite everything—photography brought me joy. Maybe that’s the most complicated part.

    This is what remains: the fragments of a place, its people, and the stories that I had to share. I leave them here, for you to see, to remember and to reckon with.`
  },
  {
    type: 'heading',
    text: 'A Closing Scribble',
    id: 'scribble',
    collapsed: true,
  },
  {
    type: 'component',
    collapsible: false,
    noWrap: true,
    render: () => (
      <div className="">
        <Soi6Poem />
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-15.jpg',
    alt: 'Closing image from Soi 6',
    caption: 'Dog with a bottle, December 2023.',
  },
  {
    type: 'heading',
    id: 'glossary_and_references',
    text: 'Glossary & References'
  },
  {
    type: 'glossary',
    items: [
      { term: 'Farang - ฝรั่ง', definition: 'Thai slang for foreigner, typically white Westerners.' },
      { term: 'Faen - แฟน', definition: 'Thai word for “romantic partner” or “significant other.” Unlike English, faen is gender-neutral and can refer to a boyfriend, girlfriend, or spouse. The term is widely used in Thai conversation and doesn’t specify the legal status or gender of the relationship. It’s common for Thais to refer to long-term partners simply as faen regardless of whether they’re married.' },
      { term: 'Kathoey - กะเทย', definition: 'A Thai term referring to people assigned male at birth who present femininely. This can include transgender women and, in some contexts, effeminate gay men. While some people in Thailand embrace the term, others may prefer to be identified simply as women or by other labels. The English word “ladyboy” is often used by the locals as well as commonly used in media and tourism but is often considered disrespectful by Western standards.' },
      { term: 'Soi - ซอย', definition: 'A small side street branching off a major road in Thailand.' },
      { term: 'Boom boom', definition: 'Colloquial Thai-English term used by sex workers to mean sexual intercourse.' },
      { term: 'Bar fine', definition: 'A fee paid to a bar to take a worker out, typically covering lost income for that night.' },
      { term: 'Freelancer', definition: 'A sex worker who works independently, not tied to any bar, often finding clients directly on the street or nearby.' },
      { term: 'Lady drink', definition: 'A non-alcoholic or lightly alcoholic drink that customers buy for sex workers to keep them company.' },
      { term: 'Long time', definition: 'A longer paid engagement, typically lasting several hours or overnight, often involving a hotel or private room.' },
      { term: 'Mamasan', definition: 'Originally a Japanese term (ママさん) used to respectfully address a woman in charge of a bar or hostess club. In Thai bar culture, it refers to the woman—often older—who manages the bar and its workers. She recruits staff, oversees daily operations, and enforces rules.' },
      { term: 'Short time', definition: 'A brief paid encounter, usually about an hour or less, often arranged quickly at a bar or nearby location.' },
      { term: 'Soi 6/1', definition: 'A sub-street or alley adjacent to Soi 6.' }
    ]
  },
  {
    type: 'footnotes',
    items: [
      {
        id: 'fn1',
        content: (
          <>
            Tanakorn, Aim. “No Suspected Sex Workers Found During Pattaya Tourist Police’s Inspection, According to Police.” The Pattaya News, 15 Jan. 2023,
          </>
        ),
        link: 'thepattayanews.com/2023/01/15/no-suspected-sex-workers-found-during-pattaya-tourist-polices-inspection-according-to-police/'
      },
      {
        id: 'fn2',
        content: (
          <>
            Dropping one that I quite enjoyed here, it’s on a French Youtube channel called Investigations et Enquêtes. There is a multitude of well-made documenatries from all around the world, especially if you’re looking for French practice.
          </>
        ),
        link: 'https://www.youtube.com/watch?v=PFWn44BDI78'
      },
      {
        id: 'fn3',
        content: (<>
          Medin, Joakim. <em>Thailandssvenskarna</em>. Verbal förlag, 2019.
        </>),
        excerpt: `(translated to English) David falls silent for a moment. Then he starts calculating out loud how the costs look. As far as he understands, most women in Thailand’s sex industry usually charge between 1,000 and 1,500 Thai baht—about 300 to 450 SEK—for what’s known as a short time with a foreign sex buyer. A short time is a sexual service that lasts between one and two hours. A long time, where the woman stays several hours or the whole night, costs at least twice as much.

        David doesn’t want to sleep with the women. He’s not interested in spending much time with them either. He just wants to have sex with as many as possible while he’s here.

        “Say I fuck four girls back home in Sweden. That’s 10,000 kronor. Down here I can fuck 23 girls for the same money. Damn, what a difference.”`
      },
      {
        id: 'fn4',
        content: (
          <>
            From an announcement posted on 17 April 2025 in the ‘We Love Soi 6’ Telegram channel, which had 8,032 subscribers as of 30 April 2025. This channel features daily photos of bar girls from over a dozen bars.
          </>
        ),
        link: 'https://t.me/soi6ladiespattaya',
      },
      {
        id: 'fn5',
        content: (
          <>
            <em>Thailanddrömmar</em> (Thailand Dreams). Directed by Renzo & Hanna Aneröd. A Swedish documentary exploring the complex relationships between Swedish men and Thai women. Available with English subtitles on YouTube:
          </>
        ),
        link: 'https://www.youtube.com/watch?v=k65aRELdW7o',
      },
      {
        id: 'fn6',
        content: (
          <>
            Reddit user post titled “Do you guys find LT to be a little awkward?” r/Pattaya, June 2025.
          </>
        ),
        link: 'https://www.reddit.com/r/Pattaya/comments/1l30dr9/do_you_guys_find_lt_to_be_a_little_awkward/'
      },
      {
        id: 'fn7',
        content: (
          <>
            Reddit user post titled “Ploy broke up with me and ghosted me after 5 months for a rich sugar daddy in his 70s” r/Pattaya, April 2025.
          </>
        ),
        link: 'https://www.reddit.com/r/Pattaya/comments/1kesaxm/ploy_broke_up_with_me_and_ghosted_me_after_5/',
      },
      {
        id: 'fn8',
        content: (
          <>
            Reddit user post titled “So i met a girl last trip and now she has someone paying her money every month. But this trip she is still seeing me and hasn’t asked for any money. What is she looking for?” r/Pattaya, April 2025.
          </>
        ),
        link: 'https://www.reddit.com/r/Pattaya/comments/1kfzgu9/so_i_met_a_girl_last_trip_and_now_she_has_someone/',
      },
      {
        id: 'fn9',
        content: (
          <>
            Government Offices of Sweden. “Government Commissions Inquiry on Revocation of Citizenship.” government.se, May 26, 2025.
          </>
        ),
        link: 'https://government.se/press-releases/2025/05/government-commissions-inquiry-on-revocation-of-citizenship/',
      },
      {
        id: 'fn10',
        content: (
          <>
            Bales, Kevin. “Because She Looks Like a Child.” <em>Global Woman: Nannies, Maids, and Sex Workers in the New Economy</em>, edited by Barbara Ehrenreich and Arlie Russell Hochschild, Henry Holt, 2004, pp. 185–205.
          </>
        ),
        excerpt: '“It is difficult to know how many Lao women and girls are brought into Thailand. In the northeast many Thais speak Lao, which makes it difficult to tell whether a prostitute is a local Thai or has actually come from Laos. Since they are illegal aliens, Lao girls will always claim to be local Thais and will often have false identity cards to prove it. In the brothels their lives are indistinguishable from those of Thai women.”'
      },
      {
        id: 'fn11',
        content: (
          <>
            Empower Foundation. <em>Hit & Run: The Impact of Anti-Trafficking Policy and Practice on Sex Workers’ Human Rights in Thailand</em>. Empower Foundation, 2012. Accessed 2 June 2025.`,
          </>
        ),
        link: 'https://www.aidsdatahub.org/sites/default/files/resource/hit-and-run-impact-anti-trafficking-policies-eng-empower-2012.pdf',
        excerpt: '“In some situations, women from Laos and China will travel to Thailand without documentation, cross the border at informal crossing points using local transport where they work to earn money for their passport. When they have enough they return home and purchase the correct documents to come back to Thailand legally.”'
      },
    ]
  },
  ]
};

export default essayContent;