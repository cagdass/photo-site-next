'use client';

import React from 'react';
import Link from 'next/link';
import FootnoteButton from '@/components/FootnoteButton';
import PortraitReel from '@/components/PortraitReel';
import Soi6Poem from '@/components/Soi6Poem';

const component_p_className = "essay-text text-lg leading-8 md:text-xl md:leading-9 whitespace-pre-line"
const component_div_className = "w-full max-w-[900px] mx-auto px-4 text-lg leading-8 md:text-xl md:leading-9"

const essayContent = [
  {
    type: 'heading',
    id: 'intro',
    text: 'Introduction'
  },
  {
    type: 'text',
    content: `I first arrived in Pattaya in December 2023. My photography teacher—a close friend—had arranged a place for me to stay. It was partly an escape from the Swedish winter, partly wanderlust. I’d heard of Pattaya before—maybe from him, maybe just from its reputation. Either way, I was curious. I had three weeks of vacation from my software engineering job, which was draining the life out of me, and I decided to take it all.`
  },
  {
    type: 'component',
    collapsible: true,
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          I had just started photography that summer. My teacher, to whom I inevitably refer a lot throughout this writing and pay a proper homage in{" "}
          <Link href="/blog/starting-to-shoot" className="underline text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400">
            <strong>this blog post</strong>
          </Link>
          , mentored me with informal lessons and themed assignments like nightlife, dreams, and taxi drivers. His homework taught me how to move around with a camera, approach strangers, and <em>shoot with my heart, not my brain</em>.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `But by September, our informal kitchen classes came to an end. It was time for my teacher to return to Pattaya, Thailand, where he spent his winters. He wasn't the typical sex tourist—rather, staying in a friend’s apartment in Thailand rent-free made financial sense, and so did escaping another Swedish winter. In fact, he had been talking about photographing Pattaya long before I even picked up a camera, though by now, I think he’s too disinterested to photograph and publish another book.

    He gave me a key to his apartment though and I spent long hours in his home library. He owns more than a thousand books—mostly doorstops, many by masters, quite a few signed to his name. I’d leaf through monographs, street photography collections, retrospective volumes. I cataloged them all for him, and helped sell a few in his absence, hoping it might help his finances.

    That winter, Stockholm felt lifeless. Colder and darker than usual. My job was draining me. I was buried under my mortgage and rising interest rates. I could barely afford to do the things I used to. I'd spend what little remained of my salary on a few screenings at the film festival, then scraping by on potatoes till the end of the month. Street photography no longer gave me the same spark. Maybe it’s a weak excuse, but I still think Stockholm isn’t the most exciting place for photography—too clean, too quiet, too conforming.

    We stayed in touch often. When I asked him about visiting him in Thailand, he said I could come. He had a place for me to stay—the vacant unit next door was his friend’s too. I asked if three weeks, all I could take off from work, would be too long. He said, “You can stay here rent-free for as long as you want.”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-02.jpg',
    caption: 'The customer is always welcome, June 2024.'
  },
  {
    type: 'heading',
    id: 'pattaya',
    text: 'Pattaya'
  },
  {
    type: 'text',
    content: `He welcomed me at the bus station in Pattaya, took me to the flat, handed me a key, and let me rest. The next morning, despite the jetlag, I fell into his rhythm: gym, breakfast, a walk along Beach Road, dinner at the same family-run restaurant every evening.

    I had broken my camera back in Stockholm just before the trip. I worried I wouldn’t be able to photograph anything—especially after all the hype about Pattaya’s sex tourism—but he lent me his: the older Fujifilm X-Pro1 I had practiced with during the summer. We shared the same 18mm f/2.0 lens. The setup was lightweight, unimposing. Just wide enough for the kind of close, intimate frames I wanted. Not the best in low light, but somehow the softness suited the city.`
  },
  {
    type: 'component',
    render:
      () => (
        <div className={component_div_className}>
          <p className={component_p_className}>
            I was hungry for all of it. Everything was new.
            At first, I photographed whatever caught my eye—stray dogs, food carts, fish markets, signs I couldn’t read.
            I was especially drawn to international couples.
            Whenever I saw an older Western man—what locals call a <i>farang</i>—paired with a young, striking Thai woman—a common sight in Pattaya—I felt a strong urge to photograph it.
            The contrast spoke volumes. But what struck me just as much was the silence between them.
            I rarely saw them talk.
            They’d sit next to each other at a bar or restaurant, their bodies close but their eyes elsewhere—on their phones,
            on the street, on nothing in particular.
            It was as if they existed side by side, not together.
          </p>
        </div>
      )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-03.jpg',
    caption: 'Man with a bar-fined girl, December 2023.'
  },
  {
    type: 'text',
    content: `My teacher enabled my photography from day one. He pointed out photo opportunities, translated short conversations, and showed me which alleys were safe, which bars to avoid, where the light hit just right. If I misread a moment or hesitated, he’d tell me what went wrong.

    On my first night, after dinner, we went for a walk down Beach Road—something that quickly became our daily ritual. Halfway along, we reached the entrance to the notorious Walking Street. My teacher led me in.

    The chaos hit immediately. Crowds of tourists clogged the narrow street. Clubs blaring different music from every side, the air thick with smoke and neon. Scantily dressed women rushed around in every direction. Vendors thrust laminated flyers into my face—some with explicit, graphic images advertising sex shows. Security guards stood outside every club, sizing everyone up. It was overwhelming. I felt like I was in the eye of a neon storm, with no way to think clearly, only try to make sense of it.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-19.jpg',
    caption: 'Children were often around, March 2024.',
  },
  {
    type: 'text',
    content: `That same night, we returned to Beach Road. It was another kind of madness. I saw people of every nation and color—many foreign women too, mostly Western. Families with small children strolled past scenes of negotiation, where freelance sex workers bargained with men under the coconut trees. The shadows of the swaying leaves danced in the glow of the streetlights, stretching across the sidewalk and onto the sand. I’d see the same scenes again and again.

    We passed street vendors selling ready-to-smoke joints, Viagra substitutes, and children’s toys—often side by side. Children ran through the crowds. Thousands of people moved past, each one a character of their own.`
  },
  {
    type: 'text',
    content: `My teacher said he wanted to show me another bar street. He led me to Soi 6.

    It was a different kind of overwhelming. The bars were open-air, low to the ground, close enough to touch. Bar girls lined the fronts, outnumbering everyone else ten to one. Flickering neon bounced off high heels and bare skin. Above the bars, TVs blared European football matches and old Western music videos—Guns N’ Roses, the Eagles, Aerosmith. From every direction came noise: thumping bass, crashing cymbals, screeching guitar solos—colliding with the constant chorus of women’s voices calling into the street. The music, the voices, the scooters, the engines—all tangled up into one shapeless, abrasive roar.

    Older men perched on bar stools overlooking the street, under a canopy of tiny ceiling fans twirling in different spiral directions, clutched beers wrapped in foam sleeves—trying and failing to keep them cold in the humid night air. If not perched, they drifted—some in groups, some alone—pilgrimming up and down the street. Food carts cluttered the few gaps left along the street. And children, quite a few of them, wove through it all—selling flowers, nuts, napkins, or any old trinket might pass as charm. Sometimes it was a toddler, added for sympathy, wrapped around a mother’s hip as she peddled roses or cashews.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-04.jpg',
    caption: 'Some even part of the workforce, April 2024.'
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          It’s an oft-repeated fact,
          but one this photo essay bears repeating here:
          Pattaya began as a sleepy fishing village.
          Today, high-rises line Beach Road,
          rooftop bars crown luxury hotels,
          sprawling malls lure in tourists,
          and the city never seems to stop building.
          The origin of this transformation is usually
          traced back to the Vietnam War, when American
          soldiers came here for rest and recreation.
          That first boom never really ended.
          It’s easy to forget this history
          when walking past bars named <em>the Pussy Club</em>,
          <em>Horny Bar</em>, or
          <em>Slutz on Soi 6</em>—but the scaffolding of that myth still booms beneath the neon.
        </p>
      </div>
    )
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          As we walked, I started to understand the calls of the bar girls: “Sexy man,” “Handsome man,” “Where you go?”—basic English, shouted with practiced ease. But it wasn’t just words. Every few meters, a girl reached out—grabbing an arm, a waist, sometimes even the groin—trying to physically pull us inside. You couldn’t just walk past. You were part of the show.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `The bars on Soi 6 lined both sides of the narrow street, packed so tight there wasn’t a single gap between them—just one flashing threshold after another, each one pumping out music like a siren call. Every sign was in English. Not Thai. Not even bilingual. Just English. This wasn’t for locals. It was a red-light welcome mat for foreign men.`
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          We kept walking past bar names that,
          anywhere else in the world,
          would be pure cringe: <em>Sexy in the City</em>. <em>Seduction</em>. <em>Toy Box</em>.
          &nbsp;<em>Bender</em>—with a giant print of the alcoholic robot from <em>Futurama</em> out
          front, a reference I doubt was meant for the local population.
          Some names sounded like biblical sins:&nbsp;
          <em>Avarice</em>. <em>Wrath</em>. <em>Lust</em>.
          A few tried to look classy, but ended up even sleazier. No bouncers. No doors.
          Just open-front bars, fully exposed. The street was alive—and it was built to feed.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `From the top of the street, I couldn’t see the end. Neon signs blurred into one another. The bars stretched as far as the eye could follow—and outside each, five, ten, sometimes more women waited. Sitting on stools. Smoking. Busy on their smartphones. Scanning every man who passed. If you counted both sides, every bar, every shift—it wasn’t a stretch to say over a thousand women were working Soi 6 at any given moment. And that was just the ones attached to a bar.`
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
    type: 'heading',
    id: 'impressions',
    text: 'First Impressions',
  },
  {
    type: 'text',
    content: `In my first days, whenever I saw such a pair, I had an instinct to take a photo. And I thought about a girl I once went out with. She had a Swedish father and a Filipina mother. She looked Asian, with little to give her heritage away except for her broad frame and tall height.

    She once told me she had stopped walking hand in hand with her father when she was barely a teenager—people would mistake them for a mail-order couple, and her dad for her husband. I remember how bizarre it sounded, and how deeply it must have hurt. In Sweden, growing up not looking “ethnically Swedish” already makes life hard enough. In the Philippines, she said, locals would sometimes shout at them in the street, accusing her of betraying her country by marrying an old white man—who was, in fact, her father.

    I thought about that story often in Pattaya. I caught myself hoping, foolishly, that many of the older Western men and young Thai women I saw were actually fathers and daughters. That maybe there was a happier story hidden in the pairings. Even when I saw a very young Thai woman—perhaps even underage—sandwiched between two older Western men on a motorcycle at a traffic light, even though disgust rose in me, I tried to write a kinder story in my head: maybe a father, an uncle, a niece.

    Still, I instinctively took the photo. It’s a photo that haunts me—her distressed expression frozen mid-glance. One I will not share. I didn’t ask permission, and they never noticed me. And after all the time I spent in Pattaya, I know better now. They weren’t family.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-49.jpg',
    caption: 'Another Goya face, December 2023.'
  },
  {
    type: 'component',
    render:
      () => (
        <div className={component_div_className}>
          <p className={component_p_className}>
            My teacher spoke quite a bit of Thai and started teaching me from day one. <em>Sawatdee khrap</em> for hello. <em>Sabai dee mai?</em> for how are you. <em>Tai ruup dai mai?</em> to ask for a photo. He’d already made a long list of phrases on his phone, transliterated into Turkish—<em>sawatdee khrap</em> became <em>savadikap</em>, easier for me to read and remember. I’d review them before dinner. He was good with people—charming, quick to joke, unafraid to make a fool of himself if it helped build rapport. To a mother holding her toddler, he’d say <em>Nà-làk mâak mâak</em>, meaning very cute. If the heat was unbearable, he’d complain loudly to a stranger: <em>Róon!</em> One night, when it dropped to 22 degrees and locals pulled on hoodies, he hugged himself dramatically and shrieked <em>Namkeng! Namkeng!</em>—ice—rubbing his arms like he was freezing. Maybe he didn’t know the word for <em>cold</em>. But it sure was entertaining.
          </p>
        </div>
      )
  },
  {
    type: 'text',
    content: `I even took a Thai class online through Preply, and visited a language school in Pattaya to inquire about joining in person. But honestly, I wasn’t satisfied with the teaching. What helped more were the textbooks my teacher had kept from when he’d taken formal lessons years ago. I practiced with those instead, combining them with YouTube classes, and slowly built up the basics.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-05.jpg',
    caption: 'A usual Soi 6 scene, April 2024.'
  },
  {
    type: 'text',
    content: `He moved through Pattaya with a kind of quiet deference I would observe—and fail to see—in most tourists. After our dinners at the small family-run restaurant, he’d carry the plates back to the kitchen, help stack chairs outside (habits I quickly picked up too), say many thanks, and leave a generous tip—even though he was barely getting by himself. No big spectacle, just ease. He’d nudge me when some old white man made a crass comment to a waitress, or laugh under his breath when one dropped a couple of 1-baht coins on the table and called it a tip. “That’s thirty-four baht to the dollar,” he’d say, “you wouldn’t even get a chewing gum in Sweden for that.” And I’d quietly contemplate Sweden in reverse—how it’s so often immigrants waiting tables, running pizzerias, playing their part while ethnic Swedes enjoy the evening. Here, the non-locals were being served. The locals served. But even here, where roles were reversed, the posture—the entitlement—looked the same.`
  },
  {
    type: 'heading',
    text: 'Photographing Soi 6',
    id: 'soi_6',
  },
  {
    type: 'text',
    content: `We quickly decided that Soi 6 was the most photographable street—narrow, compact, alive. There were motorcycles and the occasional car, but it was walkable. Most people didn’t mind the camera; many vloggers wandered around with selfie sticks already. It was different from Walking Street, where “No Photo” signs hung everywhere, bouncers waved laser pointers at any raised lens, and most of the action was hidden behind closed doors. I didn't go back to the Walking Street again, I wasn't interested in where I couldn't photograph. My teacher told me that when he had first photographed Pattaya, Soi 6 had been more like Walking Street: guarded, closed off, hostile to cameras. But after the pandemic, something had shifted. And it became what it was when I was there to photograph.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-59.jpg',
    caption: 'Allure of the open bar, December 2023.',
  },
  {
    type: 'text',
    content: `Apart from a trip to Chiang Mai and Bangkok for a few days, for the rest of my stay, even though I continued taking photos wherever I was, I returned to Soi 6 almost every day as part of our Beach Road walk—sometimes twice a day, once in the afternoon and again at night. My teacher usually came with me, offering tips on how to interact. He’d watch both me and the street, and later at home, he’d offer critique—on my presence, what I did or didn’t do.

    I was starting to learn the rhythm: when the music started, when the bar stools were wiped down, when the girls stirred awake and had breakfast right where they’d work later. Later in the day, before customers started rolling in, they’d often sit idly at the bar, eyes glued to their smartphones—scrolling Instagram, dancing for TikTok, replying to messages. It was a digital lull, a quiet prelude to the chaos ahead. When the men began drifting in. Every hour had a different texture. In the afternoon, the street felt softer. There was space. By evening, it grew louder, more compressed, more electric.`
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          My teacher also had a few Thai expressions he liked to throw at me, half-mocking, half-endearing.
          His favorite was <i>tin-ton farang</i> (ติ๊นต๊องฝรั่ง)—crazy foreigner.
          He’d call me that whenever I was too enthusiastic, acting silly, or trying too hard to charm someone.
          Another was <i>mao</i>, which means drunk.
          Sometimes, while I was crouched down taking portraits on Soi 6, he’d shout <i>tin-ton farang</i>!
          from across the street, or tease me with <i>maomao</i>! It always cracked up the bar girls nearby.
          Moments like those broke the ice. They helped soften the scene, loosen everyone’s guard.
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-1312.jpg',
    caption: 'Even the police patrol isn’t immune from Soi 6’s rituals, April 2024.'

  },
  {
    type: 'text',
    content: `Technically, prostitution is illegal in Thailand. But on Soi 6, like in many red-light areas, the law seems more like a formality than a boundary. The police were visible, and would happily pose for my photos, often giving a thumbs-up amid everything that was going on on Soi 6. From what I gathered, bars pay regular “fees” to operate undisturbed. It’s less about enforcement than about maintaining order, appearances, and income flows. Everyone seemed to know their role in the system. And even though there have been raids in recent years, police reports often claim that no signs of prostitution were found in Pattaya.`,
  },
  {
    type: 'text',
    content: `Sometimes, when the constant commotion of Soi 6 grew overwhelming, I would slip into the alley that ran parallel to it—Soi 6/1. It was narrower, darker, and quieter. The back sides of the bars opened onto it: kitchens, trash bins, stacked crates, washing lines. It wasn’t meant for show.`
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          I started walking Soi 6/1 often,
          partly to catch my breath,
          partly to find more natural moments—away from the endless calls of “handsome man” and
          the engineered performances on the main street.
          It was there that I quickly learned something else: Soi 6/1 was where many of the <em>kathoey</em>s—Thai trans women—waited for customers.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `In the shadows of the bigger show, another reality unfolded. It was quieter, less aggressive, more vulnerable somehow. And it taught me that Pattaya’s economy of desire had many layers—not all of them equally seen.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-41.jpg',
    caption: 'A trans sex worker at a Soi 6/1 bar, April 2024.'
  },
  {
    type: 'text',
    content: `Whenever I left Soi 6, I found myself back on Beach Road. It was a kind of decompression zone. The chaos thinned out a bit—but the contradictions didn’t. Russian families—some seemingly on a perpetual vacation since the war in Ukraine made going home impossible—strolled past scenes of open negotiation. Whole families with small kids, sometimes even a baby in a stroller, walked right past freelancers leaning against lampposts, haggling with men I’d later see again on Soi 6. Groups of South Asian men often surrounded a single sex worker, which I assumed was for a group engagement. I saw tour buses offloading Indian and Chinese men en masse. Curious, I’d sometimes say hi and ask about their time in Pattaya. The answers could be bizarre—one man told me “Nana Plaza is better,” referring to Bangkok’s bar-packed red-light district. I also heard Turkish often. I assumed the speakers felt at ease many thousand miles from home, and maybe that’s why I caught so many unfiltered conversations—casual bragging, crude jokes, all circling around their exploits. Some men laughed loudly. Others scanned the street in silence.

    During that first visit, I took many photos on Beach Road. I hadn’t yet locked in on Soi 6 as the core of the project. I was just drawn to what was unfolding in front of me—this strange ecosystem where families brushed shoulders with transactional intimacy, children in swimsuits skipped past sex workers in heels. Pattaya wasn’t hiding anything. Everyone was part of the same current.`
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
          title="Beach Road Photos"
          images={beachRoadImages}
          orientation="landscape"
          caption="Before I had a clear focus on Soi 6, I collected photos during our twice-daily walks on the Beach Road. December 2023."
        />
      );
    }
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
    content: `Carrying a camera changes the rules of engagement. I felt I had a duty to the women to ask for their permission before taking a photo. A few times I couldn’t—like when photographing a big scene with dozens of people and only half a heartbeat to catch it—but otherwise, I made sure to ask. Some didn’t want to be seen. You could tell even without words: a hand raised to cover their face before I even lifted my camera. I never bothered them. Sometimes, if I took a photo without asking first, I would go up afterward, show it to them, and make sure they were okay with it.

    I'd sometimes need to muster some backing up to myself. I’d show them some of my older photos on Instagram, explain I wasn’t just some random tourist, and promise to send the picture if they wanted. Sometimes, even with a smile, they’d instinctively cover their face or shake their head. I would not push then. That was that. Other times, they’d say they looked ugly or weren’t ready. In those moments, if I felt there was real warmth between us, I’d gently protest: “Kun suay mâak mâak”—you’re very beautiful. More often than not, it cracked a smile and turned the no into a yes. Not always. But enough times to feel like I’d earned the moment.

    Later, I would learn why some women were so cautious. Many had boyfriends, significant others, husbands, or family back in their hometown villages—people who didn’t know they were working in Pattaya. Or if they knew, they believed what they had been told: that she worked at a restaurant, a hotel, or a 7-Eleven. A photograph could unravel a carefully maintained story. And sometimes, it was simply anxiety—a reflex born from living between two worlds.

    While I was still learning the ropes, it was different with the men—especially when they were rude or aggressive toward the women. I didn’t feel the same obligation to ask them. But I’ll get to that later.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-07.jpg',
    caption: 'A usual night at work, April 2024.'
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          Sometimes I wasn’t just “photo man”—I was a potential customer, too. Like most men on Soi 6, I’d sometimes get grabbed by the wrist and pulled toward a bar for a drink. I learned to carry myself lightly in those situations—almost like a playful little boy—smiling, joking, gently saying no. Raising my hands in a respectful <i>namaste</i> and saying, “Nong kap, mai ao kap”—sister, I don’t want—was disarming. They would smile back, salute me, and let me go.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `But as I built stronger rapport with some of the workers, I accepted their offers for a drink a few times. It was usually a small beer for me, and a “lady-drink” for them—typically a non-alcoholic juice priced at a premium. I asked around: from a 150-baht lady-drink, a woman might keep 30 to 50 baht. The rest went to the bar.

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

    But for most, when I asked where they came from, the answer was always the same: Isan. Isan. Isan. Thailand’s northeast. A rice-farming region. Poor. Hard to leave. After my first few conversations, I went home and started watching YouTube documentaries about it.

    They spoke about their children openly and without shame. In fact, they lit up when I asked. There was a sincere, almost childlike happiness in their voices, in their eyes. They would scroll through photos, laughing, proud. One woman tapped her phone’s lock screen and beamed: “My baby—two year!” Then grinned at me like she’d pulled off a magic trick.

    I’d ask when they last saw their children. It was usually months. Maybe that was a question better left alone. But I cared. I kept wondering about it. I kept trying to make sense of the system that had brought them here—the same system that pulled in millions of men every year.`
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
    content: `Most of the attention, naturally, falls on the women. But the men are just as much a part of the street’s rhythm. They bring the money. They arrived from all over—Europe, the U.S., Australia, India, China, Japan, Korea. Some walked in groups, loud and confident. Others drifted alone, slowly, trying not to be noticed even as they scanned every bar.

    On Soi 6, there were the usual types: solo men in polo shirts with tanned arms, groups of Brits in football jerseys, retired men with walking sticks, a few younger travelers holding beers, looking amazed and slightly lost at the same time. People of all colors, languages, religions.`
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          At the call of “sexy man, handsome man”—shouted with cheerful repetition—some men beamed like schoolboys, delighted at the attention. Others avoided eye contact, unsure how to respond. But for a moment, even the most average man could feel wanted, desirable—even if only because he had cash to spend. I began to suspect that for many, this was the real allure. Not just the promise of <i>boom boom</i>—as the girls referred to sex—, but the warm illusion of being chosen.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `At first, I judged them—harshly. I wanted to photograph them in a way that exposed something. I wanted to make them look guilty. A few times, I did. One night, out walking along Beach Road, I caught an old man mid-negotiation—his hand resting on a girl’s waist, whispering something into her ear. He had a walking stick. He was old enough to be her great-grandfather. I got pissed off. I lifted my camera and took a shot—point-blank, face to face. He gave me a half-hearted chase, swinging his walking stick and shouting, “Idiot! Come back!” in a thick German accent. I didn’t stop. I didn’t even look back.

    Later at home, my teacher asked, “What were you trying to prove?”`
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

    That mindset helped me talk to all kinds of people on the street—especially the tourists. If they were Swedish, I’d say, “Bra, jag pratar en liten grann svenska också.” I could hold my own with Norwegians, and catch a word or two from the Danes. If they were French, I’d mention that I religiously practiced Duolingo every day. If they were Welsh, I’d say I used to work with a guy from Caerphilly. Japanese? I had a quote from my favorite anime ready to go. Sometimes I played the like-minded tourist.

    Sometimes I didn’t need to say much at all—just mentioning I was Turkish was enough to spark a conversation. “That’s where I got my hair transplant,” they’d say, or, “I flew there for my teeth.” Cheap and professional, they’d grin, showing their pearly white smiles.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-09.jpg',
    caption: 'Yankees that have done several medical Turkish trips, June 2024.'
  },
  {
    type: 'text',
    content: `If they asked about my camera, I told them straight: I was a hobby photographer, documenting the street. Some didn’t mind at all. Some even bought me a beer. Some asked to pose. Others got serious—one said, “I’ve got a wife and kids back home, mate.” Another just shook his head and walked away.

    I stopped trying to capture shame. Instead, I tried to photograph the reality of it—not the scandal, but the quiet ordinariness. Because for them, that’s what it was: a drink, a smile, a bar stool, a question, an agreement. Nothing illegal. Nothing hidden. Just something you’re not supposed to look at too closely.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-92.jpg',
    caption: 'Man with a shawl, December 2023.'
  },
  {
    type: 'text',
    content: `Once, a huge guy—easily close to two meters tall—appeared out of nowhere and slammed his arm onto my back, shouting, “What’s up?” I was startled for a moment, but quickly realized he was simply high. He was English. We exchanged a few words, I took a photo of him, and then, just as suddenly, he spotted a bar girl. Without hesitation, he wrapped a long shawl he was carrying around her shoulders and pulled her away. She didn’t resist. She just went with him.

    At the time, I didn’t even know about the bar-fine system—how a customer pays a fee, usually between 1,500 and 2,000 baht, to the bar to “take” a woman out. All I knew was that what I had witnessed felt absurd. And it still does—unless I somehow missed him paying.

    I liked the story more than the photo I got. The girl he pulled away kept smiling theatrically for the camera. Even stranger: later that same night, I ran into the Englishman again. He didn’t recognize me at all. He just walked past without a second glance.

    As positive as I tried to keep these encounters with the men, and even though I managed to photograph many of them, I never built any real connection. Each meeting remained exactly that—a single, passing encounter.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-13.jpg',
    caption: 'An international couple, December 2023.',
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
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
        </p>
      </div>
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
    type: 'text',
    content: `Later, I found one of the Telegram channels where those photos were uploaded—subscribed to by thousands. Each post showed the girls in matching outfits, standing against the same wall, tagged with names, short descriptions, and a bar logo. The lighting was identical. The framing never changed. You could scroll through them like a food delivery app.`
  },
  {
    type: 'text',
    content: `Some nights, if a girl was celebrating her birthday, you could spot it instantly: she’d be draped in colorful garlands of Thai baht banknotes—sometimes hundreds of them—pinned to a sash or taped to her dress. Each note, decorated with the King of Thailand’s portrait, fluttered as she moved. It was a visual symbol of both celebration and commerce.`
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          These birthdays weren’t private affairs. Bars promoted them openly on Telegram, often with a glamorous portrait of the birthday girl. Messages like, <code className="text-sm text-gray-600">“It’s Yoshi’s and Nam’s birthday party today! Come and make great memories with us at Toy Box Pattaya Soi 6, from 4 PM till 2 AM 🎉🎂🍻🥃🍾👩🏻🎶”</code><FootnoteButton number={1} note={"From an announcement on 17 April 2025, posted in the \"We Love Soi 6\" Telegram channel with 8,032 subscribers as of 30 April 2025."} /> would pop up daily—personal milestones turned into public invitations to spend.
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-80.jpg',
    caption: 'Birthday girl, June 2024.',
  },
  {
    type: 'heading',
    text: 'Learning Names',
    id: 'names',
  },
  {
    girl: 'May',
    type: 'text',
    content: `As days passed, I became friendly with many familiar faces. I was often offered bubble tea, fruit, grilled chicken—whatever the girls happened to be snacking on—as I walked by, whether in the morning or late at night. Looking back, I remember a general sense of warmth. But the ones I knew by name were fewer; still, by December 2023, I had already jotted down over a dozen names in my notes.

    One of them was May—a pseudonym. She was conversational in English. She told me she had once lived in Sweden, supposedly for school, though I quietly suspected there was more to the story. When she learned I had lived there too, she lit up and started showing me photos. Her photos showed a life that felt oddly familiar to me: warm jackets, snowy sidewalks, Christmas lights, sterile IKEA interiors—though every meal still had a bowl of rice at the center.`
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
      <div className={component_div_className}>
        <p className={component_p_className}>
          May’s story echoed what Swedish journalist Joakim Medin explores in his 2019 book Thailandsvenskarna.
          In addition to traveling to Thailand to investigate the phenomenon firsthand,
          Medin also draws on revealing demographic data.
          According to Sweden’s national statistics agency, 78 percent of Thai migrants to Sweden are women,
          and 80–90 percent of them arrive through a relationship with a Swedish
          man.
          That number is striking—especially when compared to countries like Afghanistan,
          where the overwhelming majority of migrants are men.
        </p>
        <p className={component_p_className}>
          In Sweden,
          many of these women live in legally precarious situations:
          their right to stay is tied to the continuation of the relationship.
          If it ends, they risk deportation. Medin describes women who are isolated,
          cut off from support networks, and trapped in controlling or abusive dynamics—treated as housekeepers,
          caregivers, or worse.
        </p>
        <p className={component_p_className}>
          As someone who has lived in Sweden with a temporary residence permit for 4 years,
          my anxiety with the Swedish Migration Authority must have been an anthill.
          For these women, the power imbalance is built in.
        </p>
      </div>

    )
  },
  {
    girl: 'May',
    type: 'text',
    content: `At the time of writing this, Medin is imprisoned in Turkey—my home country—while his wife awaits the birth of their daughter.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-08.jpg',
    caption: 'Street scene, June 2024.',
  },
  {
    girl: 'Linda',
    type: 'text',
    content: `I met Linda—a pseudonym— early on, and from that first encounter, she always waved when she saw me on the street. She liked being photographed—or at least, she played that part well. Every time I sent her a picture, she’d reply with mock outrage: “Ugly!!! No want photo!” But the next day, there she was again, posing and laughing like nothing had changed. It became our ritual.

    Linda was older than most of the women I met on Soi 6. You could see it in the lines on her face. She said she didn’t have children, and she carried herself with a kind of confidence that stood out. I noticed how the younger girls at her bar looked to her—not with fear, but with a quiet deference. She wasn’t the mamasan; there was already one at her bar. But Linda held her own space.

    When I passed by, she’d sometimes grab my arm and say she was hungry, asking for pizza. There was only one place on Soi 6 that sold it—a little shop crammed between bars. It felt like a luxury amid the usual local stalls. I got her a slice a few times. She’d smile, thank me, and go back to work—unless she wanted ice cream, that is.

    We shared a few drinks together—usually me ordering her a lady-drink and a small Chang for myself. Her English was limited, but she knew how to navigate conversations with customers using her phone and body language. You could tell she’d done it a thousand times. She wasn’t the loudest, or the most aggressive, but her experience showed.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-71.jpg',
    caption: 'With a customer, April 2024.',
  },
  {
    girl: 'Mint',
    type: 'text',
    content: `One of the people I grew close to on Soi 6 was Mint—a kathoey and under another pseudonym. She was upfront from the beginning. As she put it, “I’m ladyboy.”. At first, she saw me as a potential customer. I gently explained I wasn’t interested in that—but asked if I could take her photograph. She absolutely loved the idea. She posed like an experienced model—serious expression, sharp angles—flowing from one stance to the next while I scrambled to frame her properly amid the chaos of Soi 6.

    Mint became my most enthusiastic model. If I hadn’t shown up one day, she’d text: “I do nice makeup today...no photo?” If I walked past her bar without stopping, she’d run out and drag me back—literally, with strong arms. She was taller than me, stronger too, and completely at ease in her body.

    She didn’t just pose for herself—she brought me in. She’d take me by the wrist and pull me into her bar, introducing me to the other girls: “He is my friend.” That word—friend—mattered. People trusted her, and through her, they started to trust me. Mint gave me access I wouldn’t have earned alone. Her energy, her confidence, her joy in being photographed—it opened doors. She helped me reach the kind of intimacy I was always chasing with my camera.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-82.jpg',
    caption: 'Nightfall after the water fights during Songkran, April 2024.',
  },
  {
    girl: 'Namtan',
    type: 'text',
    content: `I first photographed Namtan—yet another pseudonym— in December 2023. She was lively, confident, and always camera-ready. We followed each other on Instagram—I’d send her the pictures I took of her, and in return, I got small glimpses into her life. Unlike many of the women I met, Namtan didn’t have children, and she moved with a kind of freedom that stood out on Soi 6.

    Her stories were often from upscale clubs on Walking Street—flashing lights, expensive bottles, selfies from the VIP section. Then one day, she posted from a hospital bed—she’d drunk too much. A few hours later, she was back behind the bar, working like nothing had happened. She’d drink a beer with me without hesitation.

    She once told me she had a Western boyfriend who sent her money regularly. But she made good money on her own, too. She didn’t talk about struggle or sacrifice—not in the way others did. Her life felt fast-paced, unstable, but self-directed. She often posted photos with her boyfriend too—a middle-aged man with a shaved head and tattoos—like a badge of stability and sponsorship.

    She reminded me of how Ray Manzarek once described Jim Morrison in his autobiography: someone who could drink until collapse, then get up and keep going like nothing happened. That was Namtan. She burned through nights, smiled at the hangovers, and stayed standing through it all. Not every story on the street followed the same script. Hers ran louder, looser, and very much on her own terms.`
  },
  {
    type: 'component',
    collapsible: false,
    render: () => {
      const portraitImages = Array.from({ length: 29 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/portraits/soi6_portrait-${num}.jpg`;
      });

      return <PortraitReel title="Friends from Soi 6" images={portraitImages} caption="Taken across March, April, and June 2024." />;
    }
  },
  {
    type: 'heading',
    text: 'Sweden',
    id: 'sweden',
  },
  {
    type: 'text',
    content: `I had loved Thailand. The warmth, the rhythm, even the chaos—it felt alive in a way Stockholm hadn’t for years. I was filled with dread the moment the plane landed. Minus temperatures outside. A wall of gray. In my head, I heard my teacher’s voice—how he was always the last to get off the plane at Arlanda, dragging his feet, dreading the cold—even though he only returns in spring.

    I hadn’t had many chances to travel during my six-plus years in Sweden. Gaining citizenship took time and mental stamina, even if I didn’t have to wait as long as some people do. And now, after finally getting that little EU passport of top-tier privilege, I was returning to a place that felt emotionally colder than ever.

    What hit me most was how social and easygoing Thailand had been. I’d grown used to joining my palms and greeting everyone with a cheerful “sawatdee khrap”—and seeing warm, smiling faces respond. So during my first few morning runs back in Stockholm, I instinctively said “god morgon” to people passing by. Most looked at me like I was insane. The silence stung. I also remembered I was a Middle Eastern immigrant—the word expat in Sweden reserved for people from the States, Australia, or Western Europe. Unlike in Thailand, where I was read as a white tourist, here I was just another foreigner in the wrong category—one that closes doors, not opens them.

    I missed Thai food too. Before I left, the family who ran the little restaurant we ate at almost every night had gifted me a small bag of spices—real, serious chili. Back in Sweden, I added it to everything. It was the only way I could feel some heat.

    I started plotting how to move to Asia. I looked for tech jobs in Japan and Singapore. Anything to take a break from Sweden. I was still buzzing from what I’d shot. My teacher said I’d made strong work. But I didn’t feel I had much. A few decent frames, sure—but not enough to show Pattaya to people who’d never heard of it. Not enough for a real series. Not enough to tell a story.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-90.jpg',
    caption: 'All alone and lost, April 2024.'
  },
  {
    type: 'text',
    content: `Still, I made a small album on my phone of what I thought were the best. I showed it to a few friends. They were astonished. A photographer I look up to told me I should get them published—easy for him to say, but I was flattered. Their reactions made me want to return. To go deeper.

    But life in Stockholm was far from great. Work was still draining me. Money was tight. The thought of enduring another few months of Swedish winter filled me with dread. I started looking for another job, but the idea of jumping straight into another software engineering role without a real break felt unbearable. I had no energy left.

    Then in February 2024, my manager set up a meeting. I got fired—part of a global layoff that affected thousands of people across the company. And honestly, I couldn’t have been happier. At least for myself.

    I rented out my Stockholm bedsit, which more or less covered the mortgage, and booked a one-way ticket to Singapore. My teacher joined me there. We walked, took pictures, ate well. After a few days of sightseeing, we returned to Pattaya. The plan was to take photos, travel somewhere new in Asia, return to our base in Pattaya and repeat.`
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
    content: `When I got back to Pattaya in March, some people on Soi 6 recognized me. The recognition was warm—smiles, waves, the occasional “photo man!” called out from a bar. That familiarity softened my return.

    I spent a week in Pattaya that March. This time, my teacher didn’t join me in Soi 6. He said that street drained him. I understood. It wasn’t light work. We continued on to the Philippines and Taiwan—two of the few countries in Asia my teacher hadn’t yet visited. I’d been to the Philippines before and helped translate here and there and assumed the tour guide's mantle. A few days after the earthquake in Taiwan we were back in our base. And soon later my teacher returned to Stockholm. Now I was alone.

    What I hadn’t planned for was a motorcycle accident. It happened just before we left for Manila—another motorcyclist crashed into me, and I twisted my ankle badly. I still feel it at the time of writing this, 13 months after the crash and I still haven't managed to see a doctor about it, which is a long story in itself. We, anyways, continued the trip, but my ankle certainly didn't make it easier. After a few weeks of touristing, we returned to Pattaya. During our travels—whether in Singapore, Davao City, or Cebu City—we stumbled upon scenes that echoed Pattaya’s nightlife and sex work culture, though always on a smaller scale. Pattaya remained unmatched in scale, openness, and intensity. And I wasn't ready to deal with that intensity when we returned to Pattaya in April, the pain lingered and I just didn't mentally have the energy to put myself out there. I stayed home some days. But later on, I pushed through. I figured I’d keep photographing for the project while I still had the energy, and start traveling once I needed space. A win-win. I spent another three weeks in Pattaya that April.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-75.jpg',
    caption: 'Tourist from London and bar girls posing, June 2024.'
  },
  {
    type: 'text',
    content: `Linda had reached out while I was traveling in Taiwan. One morning, she texted me saying she’d heard I was in Pattaya. I explained I wasn’t—I was on the road with my teacher. I sent her a photo of the three of us: me, him, and an old friend from Taiwan who had been showing us around. Linda asked if my Taiwanese friend was my “boyfriend.” At first, I thought she was teasing—but later, I learned that the Thai word แฟน (faen) doesn’t specify gender. It just means “romantic partner.”

    We hadn’t talked in a while, so I told her we could get a coffee and catch up once I was back. She said okay.

    When I returned to Pattaya, she messaged again. She said a customer had “bought” her out of the bar and would keep her for the next ten days. “Linda did it because Linda needed money to live like this,” she wrote. “The bar was very quiet.” I asked, “Are you happy?” She replied, “Yes, he is very nice. He is 56 years old.”

    A few days later, the tone changed. “Can’t be with the customer,” she wrote. “He’s doing drugs.” I asked how she was. She eventually told me, “Yes, some days he hurts Linda, but Linda can’t go anywhere, so she has to wait until he returns because he already received his money.”

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
      <div className={component_div_className}>
        <p className={component_p_className}>
          My teacher had returned to Sweden just as Songkran began.
          He got splashed a little—but nothing compared to what was waiting for me.
          Luckily for me, he had spoken to his friend who owned the two apartments and, I suspect,
          put in a good word. I was allowed to stay as long as I wanted.
        </p>
        <p className={component_p_className}>
          Despite my hurting ankle, I couldn’t miss Songkran.
          I went out on a couple of days with my backup camera, an OM System TG-7—waterproof,
          just as it needed to be. I took quite a few photos, some of which I’ve included{" "}
          <Link href="/brief/songkran" className="underline text-blue-600 hover:text-blue-800">
            <strong>here</strong>
          </Link>
          .
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-00.jpg',
    caption: 'Collapsed woman, April 2024. (Photographed with an OM System TG-7)'

  },
  {
    type: 'text',
    content: `After that I returned to my rhythm. After Songkran in April, once my ankle had started to not make life too miserable for me, I was walking Soi 6 regularly again and taking photos that I thought were good. I felt more productive at least, which otherwise felt like being kind of stuck in the world's brothel with no friends. I did, however, take more pauses during my walks and spent more time sitting down for drinks, talking with the women. Conversations usually happened over a lady-drink and a smartphone—usually an expensive iPhone—using Google Translate. I’d inadvertently see the translations pop up, along with dozens of other notifications sliding in from the top of their screens: usually messages from foreign men, and usually obscene. It was a strange window into their daily life—something halfway between public and private.

    Phone conversations would also get funny. Over these broken, phone-assisted chats, I was asked more than once if I had a boyfriend or a husband. Sometimes, when a woman proudly showed me photos of her children, I couldn’t help but notice what else was on the screen. In the same photo gallery, right next to pictures of smiling toddlers, there would be dozens of selfies taken with different farangs. It was jarring. Before the night was over, they often asked to take a selfie with me too—adding me, I guess, to that same ongoing gallery.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-32.jpg',
    caption: 'There is too much confusion, June 2024.'
  },
  {
    type: 'text',
    content: `Sometimes, I’d go to the bar’s toilet even if I didn’t need to—just to catch my breath, or to hunt for photos. The bathrooms were small, dimly lit, often with cracked mirrors and dusty fans spinning slowly overhead. It was also where many of the sex workers touched up their makeup before stepping back out.

    On one such visit, a woman I’d spoken to earlier agreed to let me photograph her as she applied her lipstick in front of the mirror. It had taken a little convincing—not for permission, but to get her to hold a serious, almost anxious expression. I was hoping to catch that quiet, reflective moment before she stepped back into her shift.

    Then, mid-composure, an African American man burst into the bathroom. I’d seen him earlier at the bar with his friends—loud, cheerful, clearly drunk. He looked at us, flashed a thumbs-up, and without hesitation stumbled straight to the urinal, without so much as even closing the door halfway even. The scene was so absurd it almost made me laugh—but I knew this was a moment worth capturing. He filled in the empty space beside her, a gap that screamed in the frame. Technically, it wasn’t one of my strongest shots—but something about it stayed with me. The absurdity. The composition. The questions. It made the final cut.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-38.jpg',
    caption: 'Powder room, April 2024.'
  },
  {
    type: 'text',
    content: `When I returned to Soi 6, I saw that Namtan and Mint—pseudonyms—were still on the street. But I couldn’t find May. I texted her, and she told me she had gone back to her hometown in Korat, in the Isan province. She said she was tired of Pattaya.

    I asked if I could visit her in Isan. She said I could. By then, I was starting to feel I had to see Isan with my own eyes—to understand what drives so many young women to sex work in Pattaya. I began toying with the idea of expanding the project beyond Soi 6—maybe even developing two parallel photo series. Of course, I had no idea how to do this as a hobby photographer, but I thought May could give me a lead. And the least I could do was take photos.

    But my visa-free month in Thailand was nearly up, ever since we’d returned from Taiwan. I had already booked a flight to Siem Reap in Cambodia—the cheapest international route I could find—to avoid trouble at the border. I figured I’d spend a few days exploring Cambodia, and then return to Thailand with a clearer plan to visit Isan—maybe even by motorcycle.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-95.jpg',
    caption: 'Law and order, March 2024.'
  },
  {
    type: 'component',
    render: () => (
      <div className={component_div_className}>
        <p className={component_p_className}>
          Then I was in Cambodia.
          I went to see Angkor Wat and had a fantastic time touring the temple complex by motorcycle—dodging the $37 entrance fee for foreigners that is lifted just before sunset.
          Originally, my trip was supposed to be just a visa run—but it turned into a much-needed breather from Pattaya.
          I missed being on the road, in more ordinary places, far from the world’s sex tourism capital.
          So I kept going. I forced myself to walk everywhere.
          Slowly, the pain in my ankle began to subside.
          I took photos constantly, slipping into places I doubt many tourists ever did. I visited
          Battambang, the Cardamom Mountains,
          Khemarak Phoumin, Pursat, and Sihanoukville—where I took some of the photos I
          share{" "}
          <Link href="/brief/sihanoukville" className="underline text-blue-600 hover:text-blue-800">
            <strong>here</strong>
          </Link>
          . I went to Koh Rong, where I even managed a run along the white beach,
          and eventually made it to Kampot—the once French colonial city—before heading to the capital, Phnom Penh.
        </p>
        <p className={component_p_className}>
          My first night in Phnom Penh, I started noticing familiar signs—ads from the Nightwish Group, saying they own more than 30 bars in Pattaya.
          I was immediately alerted.
          The ad was plastered on the side of a passing tuk-tuk and it promoted that they <i>finally</i> opened a bar in Phnom Penh too.
          There I already noticed I was on a red-light street of sorts.
          Not as brazen as Pattaya's any, but I noticed young women idling outside bars on their smartphones.
          A sight not too far off that of Soi 6's bars.
          It must have been the same machinery, just smaller.
          Built on the same logic of exploitation and now one bar by the same people that exploit Thai sex workers in Pattaya.
          It made my stomach turn.
          I remember immediately texting my teacher who was back in Stockholm.
          He said to be careful, and not be too rash to take photos.
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/cambodia.jpg',
    caption: 'At a Phnom Penh bar, May 2024.',
  },
  {
    type: 'text',
    content: `This above photo is from that night still haunts me. At the time, I didn’t fully realize what I was seeing, but I had a bad feeling about it. I took a photo of this boy next to the bar girls at a bar's entrance in Phnom Penh's red light street. Then I gave him a few coins as pocket money and went in for a beer and to see what it's like. I got my beer, but the mamasan that show my interest in the kid brought him to my table and said he wants an orange juice. I said sure get him one, but she sat the boy on my table next to me and was making him say thank you and everything. I felt really bizarre and soon left. I thought it was her kid, but that bad feeling lingered. Only later, when editing my photos from Cambodia, did the horror hit. I researched. I found reports. I found NGOs fighting child trafficking in Cambodia. I contacted them, but never heard back. But just the sheer fact that such NGOs must exist fills me with dread.

    Sorry for the digression—but it had to be said. After Phnom Penh, I crossed into Vietnam by land, traveling from the south all the way to the north. Then into Laos. I was back to walking again without so much pain, saw wonderful things. I'm grateful for that getaway.`
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
    content: `That’s when I got the news—my mother had been diagnosed with cancer back in Turkey. I cut the trip short, hitchhiked to the Laotian captial and began making my way back to Pattaya, trying to figure out how to return home.

    On the way, I stopped in Khon Kaen and Udon Thani—two cities in the Isan region, the same part of Thailand where many of the women I’d met in Pattaya had come from. I had hoped to stay longer, to meet people, to see the poor villages they had described. I wanted to understand what made them leave. I wanted to photograph what I found. But I didn’t have time. I passed through quickly, knowing these would be my final days photographing Soi 6.

    I spent my remaining days in June—right up until my flight—on Soi 6. I stayed longer than usual each day, moving slower, shooting more deliberately. I gave it everything I had in those final days, trying to get closer to people. Some of my favorite photos—most of the ones I ended up picking—came from that stretch.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-33.jpg',
    caption: 'French maids, June 2024.',
  },
  {
    type: 'text',
    content: `It was also then that I noticed a shift. More Western bar managers had appeared since I’d returned from my trip. They noticed me too. A few came up to me, trying to intimidate me. Some threatened me outright—speaking in British or American accents, telling me not to take photos if I liked my face the way it was. The space felt tighter. And maybe that meant it was time to stop.

    I remember praying for rain. I had never seen Soi 6 in the rain, and I longed for that different kind of light, that different kind of mood. It came—just once. And I went out with my camera. But by then, I’d already exhausted what little energy I had left. That was it.`
  },

  {
    type: 'text',
    content: `Afterwards, I flew to Turkey and went straight to my parents. Cancer is never easy, but my mom was doing better than I feared. I was relieved.

    That summer, I took more time off and did something I had dreamed of for years: I cycled from Sweden to Turkey. A journey I’d made many times before—by plane, in a few hours—but never like this. My youth felt like it was slipping, and the severance money wasn’t gone yet. I figured if not now, then when?

    I convinced my parents, packed light, and started pedaling from Sweden in late August. I crossed countries slowly, watching autumn unfold one European country at a time, and arrived home just before Christmas—though in Turkey, that’s just another day.`
  },

  {
    type: 'text',
    content: `The ride was long, beautiful, and not without hardship. But it recharged me. I met wonderful people. I laughed a lot. It gave me the energy I needed to return to the Pattaya photos—months later, finally ready to sit with them. To edit. To remember. To really look.

    My hard drive—where I kept the original files—broke. I neither have the money nor know the right person to attempt a proper recovery. Luckily, I do have backups from before June, and low-resolution JPEG exports for some of the photos from that final week in June. They’re only good enough to print at A5—but just fine for sharing online.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-lost.jpg',
    caption: 'Frenchman, a photo I had not exported, only a low-resolution preview survived, June 2024.'
  },
  {
    type: 'text',
    content: `I don’t know what else to do with these photos.`
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
          caption={`In June 2024, during my stay in Pattaya for about a week I did a lot of "burst" shots. And I noticed some of them play out like an old silent film. Thanks to this realization and with an intention perhaps to stitch together a short film out of them, right after I left Pattaya I exported all my photos in low-resolution JPEGs. Thanks to that I still have something to show from my all-out week. They are just wide enough to display on a computer screen so here we go. And here are the fragmented scenes that led to the mass export.
            Big majority from June 2024, and a few from April 2024.`}
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
    content: `Pattaya is not a mystery. It’s a system. It’s built on mobility, memory, exchange. Some people come for a week. Some never leave. Many of the women I met were supporting families. Most of the men were running from something. And me? I came back with photographs—fragments of a place that’s always moving, always just out of frame.

    Now I don’t know what these photos are for. Will this system ever change? The men won’t stop being rich, and they won’t stop wanting these women. The women won’t stop being poor, and they won’t stop wanting to make money. The Thai government looks the other way, as long as the economy moves and the tourists keep coming.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-14.jpg',
    caption: 'Breaking the fourth wall, April 2024.',
  },
  {
    type: 'text',
    content: `Sometimes I wonder if I documented something or just circled around it. But I kept walking. I kept looking. And these photos—what’s left of them—are what I brought back.

    And still—through all of it—photography brought me joy. Maybe that’s the most complicated part.`
  },
  {
    type: 'heading',
    text: 'Closing',
    id: 'closing',
  },
  {
    type: 'component',
    collapsible: false,
    noWrap: true,
    render: () => (
      <div className={component_div_className}>
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
  // {
  //   item: 'footnotes',
  //   type: 'component',
  //   collapsible: false,
  //   render: () => (
  //     <section className="mt-12 border-t pt-6" id="footnotes">
  //       <h2 className="text-lg font-semibold mb-4">Footnotes</h2>
  //       <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
  //         <li id="footnote-1" className="mt-10 text-sm text-gray-600">
  //           [1] Joakim Medin, <i>Thailandsvenskarna</i>, 2019.
  //           <a href="https://joakimmedin.se/wp-content/uploads/2018/12/Welcome-to-Sin-City-Schyst-resande-okt-2018.pdf"
  //             className="footnote-ref text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
  //             PDF ↗
  //           </a>
  //           <span
  //             onClick={() => {
  //               const el = document.getElementById('ref-1');
  //               if (el) el.scrollIntoView({ /* behavior: 'smooth' */ });
  //             }}
  //             className="ml-2 cursor-pointer text-blue-600 hover:underline"
  //           >
  //             ↩︎
  //           </span>
  //         </li>
  //         {/* more footnotes */}
  //       </ol>
  //     </section>
  //   )
  // }
];

export default essayContent;