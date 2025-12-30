import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./JMTPage.scss";
import Header from "../../components/Header";

export const JMTDayPage = () => {
  const { day } = useParams();

  const dayInt = parseInt(day);
  if (isNaN(dayInt) || dayInt < 0 || dayInt > 15) {
    return <Navigate to="/404" />;
  }

  const nav = (
    <div className="nav">
      {dayInt == 0 ? (
        <a href={"/#/jmt/"}>Prelude</a>
      ) : (
        <a href={"/#/jmt/" + (dayInt - 1)}>Day {dayInt - 1}</a>
      )}
      {dayInt == 15 ? (
        <a href={"/#/jmt/aftermath"}>Aftermath</a>
      ) : (
        <a href={"/#/jmt/" + (dayInt + 1)}>Day {dayInt + 1}</a>
      )}
    </div>
  );

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div id="jmt-page">
        <Header />
        <div id="jmt-content" class="content">
          {nav}
          {CONTENT[dayInt]}
          {nav}
        </div>
      </div>
    </>
  );
};

const CONTENT = {
  0: (
    <>
      <h1>Day 0: Leaving Home</h1>
      <p>
        My journey started with a long 5-hour drive from the Bay Area to
        Mammoth. I parked my car in the designated area for overnight
        backpackers, and took a shuttle down into town to stay the night.
      </p>
      <p>
        My thoughts raced with excitement and worry. This was when everything
        felt <i>real</i>. This was no longer "something that I'll do soon", it
        is <i>happening</i>. I forced down a sub sandwich for dinner despite my
        lack of appetite with my eyes glued to the weather forecast. 30% chance
        of thunderstorms over New Army Pass in the afternoon.
      </p>
      <p>
        Needless to say, I didn't sleep well that night. I typically don't sleep
        well on the first night of anything new, only this time was my last
        night on a real bed for a while.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0621.jpg" />
      </div>
    </>
  ),
  1: (
    <>
      <h1>Day 1: No Appetite</h1>
      <p>
        My day started with a 2-hour shuttle ride from Mammoth to Lone Pine,
        just <i>perfect</i> for someone who gets notoriously carsick. I was in
        terrible shape and nearly threw up, despite being on an empty stomach.
        "You need potassium," the driver remarked as I stumbled my way off.
      </p>
      <p>
        The bus dropped me off at McDonalds in Lone Pine, where I stuffed a
        thousand calories into my system despite the nausea. There is no public
        shuttle service from Lone Pine to Horseshoe Meadows, the start of my
        hike. Instead, theres a group of individuals that offer private shuttle
        services. Perhaps the most well know of these is "Lone Pine Kurt". He
        picked up me and two others, and we made our way up the eastern slopes
        of the Sierra. The other folks were a couple, also doing the JMT but on
        a leisurely 25-day pace. They would have their wedding shortly after.
        One of them serves in Cal Fire.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0631.jpg" />
      </div>
      <caption>Sign at the Cottonwood Lakes trailhead</caption>
      <p>
        I bid Kurt and the two other hikers farewell, applied some sunscreen,
        and started hiking at 11:30am. I kept a wary eye on the sky, watching
        for any clouds forming as I hauled ass to try and make it over New Army
        Pass before the thunderstorm window at 3pm. It looked mostly clear as I
        approached the base of the pass at 2pm, and I decided to send it.
      </p>
      <p>
        At an elevation of over 12000ft, New Army Pass was no joke, especially
        for my first day on trail. Dark, fluffy clouds formed as I trekked up
        the face of the pass, <s>motivating</s> scaring me to hike faster.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0633.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0635.jpg" />
      </div>
      <caption>New Army Pass, 12350ft</caption>
      <p>
        In the end, no thunderstorm came to pass. I made my way down to Rock
        Creek where I met a nice German couple who were here to summit Mount
        Whitney. We set up camp and ate dinner together. I tried to eat my
        repackaged double-serving of Mountain House Biscuits and Gravy, but
        despite my efforts I could not force down the entire meal.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0643.jpg" />
      </div>
      <caption>Trying to eat a meal with no appetite</caption>
    </>
  ),
  2: (
    <>
      <h1>Day 2: The Day Before</h1>
      <p>
        My first night's rest was okay, probably due to exhaustion from lack of
        sleep the night before. My legs were sore first half of the night, and
        it got chilly in the second. The right side of my tent was wet from
        condensation. I packed up at 7:30am and hit the trail. My legs were
        still adjusting as I joined the PCT and trekked up Guyot Pass.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0651.jpg" />
      </div>
      <caption>View from Guyot Pass, 10900ft</caption>
      <p>
        As I passed Crabtree Meadows towards Guitar Lake, I met a park ranger
        who warned the weather around Whitney was not looking good the next few
        days. She told me to watch the clouds and come down if it gets sketchy.
        Like clockwork, it started raining and hailing while I set up camp.
        There were a dozen other tents and the wind was quite manageable, but it
        still gave me flashbacks of my rough time in Norway. Eventually, the sun
        broke through and the precipitation stopped. I ate a warm meal and
        changed into my warmer clothing.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0670.jpg" />
      </div>
      <caption>View from my tent in Guitar Lake after hail and rain</caption>
      <p>
        I needed to sleep early. A reliable way to avoid nasty weather is to be{" "}
        <i>early</i>. I wanted to be at the summit by 8am with a 9am turn-around
        time. I met another older couple on the way up to Guitar Lake who shared
        the same weather worries. They planned to start hiking around 2:30am, so
        I figured I would too. Falling asleep was hard. This was, technically,
        the hardest part of the trail. I was stressed and anxious of what is to
        come tomorrow, afraid both of failure to even approach the southern
        terminus of the JMT, and of the dangers of the weather and altitude that
        lie ahead.
      </p>
      <blockquote>
        The brave man is not he who does not feel afraid, but he who conquers
        that fear
        <br />
        &mdash; Nelson Mandela
      </blockquote>
    </>
  ),
  3: (
    <>
      <h1>Day 3: The Highest I've Ever Walked</h1>
      <p>
        The sound of my alarm wakes me up at 1:45am to the cold nipping at my
        nose. I put in my contacts, stuffed some food, water, and my sleeping
        quilt into my bag, and started hiking. I left my tent set up since I'll
        be back later, saving me some weight in my pack.
      </p>
      <p>
        There was no moon, and it would have been pitch black if it weren't for
        my headlamp. It wasn't long until I caught up to the same couple I met
        yesterday. We slogged our way up the back of the mountain, a black,
        imposing silhouette against the starts. I popped a few sour patch kids
        in my mouth every couple switchbacks. The altitude and freezing cold
        made it hard to breathe, especially with a buff around my face.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0674.jpg" />
      </div>
      <caption>Complete darkness on the hike up Mt. Whitney</caption>
      <p>
        The horizon brightened to a dark blue as we reached Trail Crest, where
        the JMT intersects with the trail to Whitney Portal. We were among the
        first several groups of the day, all taking a break before continuing on
        the 2-mile long traverse to the summit.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0675.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0676.jpg" />
      </div>
      <caption>Trail Crest and the final traverse at dawn</caption>
      <p>
        As the air got thinner, the couple in front of me pulled ahead, and
        eventually out of sight. The last 500 vertical feet were some of the
        most humbling steps I've ever hiked. I couldn't take a few dozen steps
        without stopping to catch my breath.
      </p>
      <p>
        I summitted as the sun rose over the horizon. It was an incredible
        feeling. The thrill of achievement and dreams come true made me forget
        the shivering cold and biting wind. I dropped my pack, climbed onto the
        highest frost-covered rock I could find without slipping, held up the
        icy metal sign, and scribbled my name into the logbook with what little
        dexterity I had left in my fingers.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0681.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0689.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0695.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0698.jpg" />
      </div>
      <caption>Mt. Whitney summit, 14505ft</caption>
      <p>
        Returning along the same path in broad daylight revealed many sketchy
        portions and cliff edges that didn't seem so bad in the dark. The hike
        down was uneventful, and I packed up my tent upon reaching Guitar Lake.
        During my planning, I was unsure how far I could make it this day after
        summitting Whitney. My legs felt fine after reaching Crabtree Meadows,
        so I just kept going.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0715.jpg" />
      </div>
      <caption>
        Descending from Mt. Whitney, with Guitar Lake in the background
      </caption>
      <p>
        When I neared Wallace Creek, I encountered the same ranger from the day
        before. She remarked at how long my day had been, and agreed I should
        get some rest at Wallace Creek. I set up camp way too close to the
        water, and my tent was soon covered with mosquitos. Impressive, I
        thought, given it was almost September. My dinner involved taking a bite
        and running around maniaclly, swatting the bugs out of my face. Rinse
        and repeat. Won't be making that mistake again.
      </p>
    </>
  ),
  4: (
    <>
      <h1>Day 4: Up and Over</h1>
      <p>
        I had a good night's sleep despite the freezing cold from the nearby
        river. Today's challenge was Forester Pass, the highest point on the
        PCT.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0718.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0732.jpg" />
      </div>
      <caption>
        Views on the way to Forester Pass. You can see Forester Pass in the 2nd
        picture, slightly left of center
      </caption>
      <p>
        It would prove to be a long, exposed, upward slog. As I got closer, I
        kept looking at my GPS app to try and visually identify the pass. It
        felt cool to point into the distance and say "I'm going to walk there
        today." I filled up on water at the last stream before the pass, and the
        gradual slope turned into steep switchbacks. Cresting passes is always a
        magical experience. You can't see what's on the other side until you get
        to the top, like unlocking a new region in a game.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0750.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0753.jpg" />
      </div>
      <caption>
        Forester Pass, 13200ft. 1st picture faces south, 2nd faces north
      </caption>
      <p>
        I pushed past my planned stop at Center Basin junction since my legs
        allowed and I had time, and I wanted to get closer to Glen Pass for
        tomorrow. I found what I would later consider to be one my favorite
        campsites in Lower Vidette Meadow. I had shade from the trees, close
        access to water, a place to dip my feet in, and minimal mosquito
        presence. Life on trail was becoming routine. The anxiety of the unknown
        and of novelty was fading, and I got into a rhythm: wake up, walk,
        sleep, repeat.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0758.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0761.jpg" />
      </div>
      <caption>My camp at Lower Vidette Meadow, next to Vidette Creek</caption>
    </>
  ),
  5: (
    <>
      <h1>Day 5: Cramps and Doubts</h1>
      <p>
        The physical exertion from the last several days was catching up to me.
        My quads started cramping on the way up to Glen Pass.{" "}
        <i>
          If I'm cramping on day 5, how will I ever make it past day 10 or 15?
        </i>{" "}
        I compensated by putting more weight on my trekking poles and drinking
        more electrolytes. The cramps went away as the day progressed, but my
        doubts lingered.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0765.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0766.jpg" />
      </div>
      <caption>
        First: View on the way to Glen Pass. Second: Note from the Charlotte
        Lake Ranger.
      </caption>
      <p>
        On the way up, I saw a note from the Charlotte Lake Ranger that there
        were fires developing both east and west of trail. Although the trail
        wasn't in danger of fire, the note warned of impending smoke.
      </p>
      <p>
        Though not as high as Forester or Whitney, Glen Pass still kicked my
        ass. It was a steeper climb than most of Forester, I was carrying more
        stuff than during my Whitney summit, and now my legs felt like they were
        giving up on me. "One foot in front of the other" once seemed so simple,
        but it had never felt more difficult.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0778.jpg" />
      </div>
      <caption>Glen Pass, 11900ft</caption>
      <p>
        The pass itself was a razor's edge with precipitous drops on both sides.
        I can only imagine how much more difficult navigating this crest would
        be if it was covered in snow and ice, as it would be for the vast
        majority of PCT hikers. As I descended down the north face, I was
        rewarded with the beauty of the Rae Lakes. It was a popular camping spot
        for those hiking the Rae Lakes Loop. But with the hard uphill out of the
        way, I kept pushing towards Woods Creek to get closer to Pinchot Pass
        for tomorrow.
      </p>
      <p>
        After setting up camp, I washed up in the creek, did some laundry, and
        set up a clothesline between a couple trees using my tent's guy lines.
        There was a bridge over the creek, which was mentally jarring given I
        haven't seen any large man-made structures in the last several days.
        Makes you wonder how they built it in the middle of the mountains.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0795.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0798.jpg" />
      </div>
      <caption>
        First: Woods Creek Bridge. Second: My camp at Woods Creek
      </caption>
      <p>
        I met another couple who mentioned the weather was not looking too hot
        the next several days. They pressed further upwards to get a head start
        on Pinchot pass tomorrow. The strenuous hike was also starting to wear
        on my equipment. My right hiking pole was missing its carbide tip from
        an earlier trip so the plastic is wearing out faster than expected, and
        I discovered a small hole in the bottom of my tent. Nothing a quick
        patch can't fix.
      </p>
      <p>
        I ended the day with a warm meal, but my thoughts lingered on the
        troublesome weather ahead.{" "}
        <i>
          Where would I bail out if I needed to? I have 1 day of extra food.
          Would I rather bail immediately if the weather doesn't permit, or use
          my extra food to wait for better weather and leave myself with no
          buffer?{" "}
        </i>
        The thoughts quietly faded as I dozed off from exhaustion.
      </p>
      <blockquote>
        We are the inheritors of memory and legend. Those who grew alongside sun
        and wind. Those who forged our own destiny and future. &mdash; Kachina,
        Genshin Impact
      </blockquote>
    </>
  ),
  6: (
    <>
      <h1>Day 6: Dan and Char</h1>
      <p>
        Pinchot pass was another long slog. It was the largest elevation gain
        since Whitney, but my legs were getting stronger. I was getting my
        "trail legs" as they say. I started stretching and drinking my
        electrolytes first thing in the morning, which helped with the cramps.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0801.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0806.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0812.png" />
      </div>
      <caption>View leading up to and atop Pinchot Pass, 12100ft</caption>
      <p>
        I chatted with a few folks atop the pass who told me the ferryman at
        Vermillion Valley Resort had a heart attack and passed away, doing what
        he loved. He seemed a great guy from the reels I watched where he
        ferries hikers between the trail and VVR. His passing was a great loss
        to the community. Any hikers resupplying at VVR felt this immediately as
        they now needed to hike an extra 8 miles to get to VVR.
      </p>
      <p>
        A ranger checked my permits and talked about the incoming weather during
        my descent. I once again pushed past the planned stopping point to get
        closer to the pass tomorrow. I appeared to be hiking alone while
        trekking up to Upper Basin, and I was anxious at the prospect of
        cresting Mather Pass alone in the rain, wind, and possible thunder. But
        to my relief, I encountered the same couple that I met yesterday at
        Woods Creek.
      </p>
      <p>
        Dan and Char were from Bend, Oregon, and they were also hiking the JMT
        northbound. We shared stories around dinner, chatted about gear and our
        experience on trail so far. Dan worked in the Forest Service and Char
        was a pharmacist, which felt refreshing coming from a world where almost
        everyone I meet is an engineer. They gave me some extra electrolytes for
        my cramping, and I let them use my water filter since theirs was clogged
        to a trickle. I felt my anxiety evaporate as even more hikers, both
        north- and south-bound, gathered in the area to camp. I learned just how
        anxious I can become when I'm <i>alone</i> in the wild. But now, we're
        in this together.
      </p>
      <p>
        We agreed to wake up at 3:30am to try and crest Mather Pass before
        sunrise. As the sun descended below the mountains, the smoke rolled in
        and turned the sky orange. We tucked in for an early morning tomorrow.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0827.png" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0833.png" />
      </div>
      <caption>
        First: Our camp in Upper Basin. Second: Hazy, smoky views from our
        campsite.
      </caption>
    </>
  ),
  7: (
    <>
      <h1>Day 7: Rock Bottom</h1>
      <p>
        The morning felt like Mt. Whitney all over again. We hauled ass in the
        dark and cold watching for clouds in the sky, dark splotches against the
        stars. We swore we saw flashes of lightning in the distance, but we
        didn't hear any thunder. For all we know, it could have been our own
        headlamps.
      </p>
      <p>
        Mather pass was far easier than the others so far, given we pretty much
        camped at its base. The sky revealed numerous wispy clouds as we
        crested. It's unusual for there to be so many clouds this early in the
        morning.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_DAY7_0.png" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_DAY7_1.png" />
      </div>
      <caption>
        Views from Mather Pass, 12100ft. First facing south, second facing north
      </caption>
      <p>
        As we descended, the clouds disappeared. "Where's the weather?" we
        wondered as we descended down Palisade Lakes and the infamous Golden
        Staircase, known for its long and steep climb. But I would argue it's
        just as much as a bitch going down. Each step shredded my ankles. This
        was also the most poorly-maintained section of trail so far, with
        overgrown shrubs and lack of drainage creating swampy, muddy
        slip-and-slides. We could also see the alleged plume of smoke coming
        from the Garnet fire.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_DAY7_2.png" />
      </div>
      <caption>Storm clouds rolling in.</caption>
      <p>
        And soon enough, thick, dark clouds rolled in. Thunder echoed through
        the canyon. At first, no rain. Then a light drizzle. Then an absolute
        downpour of hail. We threw on our rain gear as fast as we could, but no
        time to put on rain pants. We scurried down the rest of the way to
        Middle Fork Kings River. The trail itself turned into an ankle-deep
        stream, our feet splashing in the muddy, rushing water with every step.
        The lower half of my body was soaked. The lightning and thunder
        practically coincided, the storm was on top of us. We could see the
        bolts of light strike the peaks above.
      </p>
      <p>
        We looked for a spot to camp; flat, but not so low that water would
        pool, or that the river would flood into. We threw up our tents, hopped
        inside, and dried ourselves off. We were wet, cold, and miserable, and
        it was only noon. I had a lukewarm double serving of chicken and rice as
        consolation.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0876.jpg" />
      </div>
      <caption>The face of joy and happiness /s</caption>
      <blockquote>
        We'll see the sun come up again / We will climb higher than we've been
        &mdash; TryHardNinja, Dragonhearted
      </blockquote>
      <p>
        Several hours later, the storm passed and the sun appeared once more. We
        could have packed up and continued hiking, but we were <i>pooped</i>.
        All our gear was wet and weighed down with water. We were mentally done
        for the day.
      </p>
    </>
  ),
  8: (
    <>
      <h1>Day 8: Full Send</h1>
      <p>
        We got up at 4:30am to get an early start in case we encounter good
        enough weather to make it over Muir Pass. I had left my shoes out to dry
        overnight. But that progress quickly vanished as I lost my balance when
        filling up water at the river, and I took a stepped into the water.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0881.jpg" />
      </div>
      <caption>Residual fog evaporating in Big Pete Meadow</caption>
      <p>
        The initial climb up to Big Pete Meadow was mild, despite one shoe being
        fully soaked. We continued slogging up towards Starr Camp, the last
        section below treeline before Muir Pass. If we continued, it's 9 miles
        of completely exposed terrain until we're below treeline again, and the
        weather forecast showed possible thunderstorms in the area. Our original
        plan was to stop early at Starr Camp and get an early start tomorrow.
      </p>
      <p>
        The sky looked promising. The sky was dotted with fluffy clouds, but not
        too ominous. But the same voice keeps popping up in my head.{" "}
        <i>
          What if a storm rolls in halfway through? We'll be several miles from
          any treeline or cover.
        </i>{" "}
        The prospect of getting caught in a thunderstorm in exposed terrain
        terrified me. But another solo hiker passed us saying "this is the best
        weather I've seen all week." And he was right, this might be the best
        chance given there's no guarantee tomorrows weather will be better. And
        if we stayed put today, I would be eating through my only reserve day of
        food. So we decided to send it.
      </p>
      <blockquote>
        It's not an adventure if you know how it ends &mdash; Unknown
      </blockquote>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0891.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0897.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0906.jpg" />
      </div>
      <caption>
        First: Helen Lake. Second: Muir Hut at the crest of Muir Pass, 12000ft.
        Third: My name in the Muir Hut logbook.
      </caption>
      <p>
        Ominous clouds formed behind us as we climbed the last thousand feet to
        the Muir Hut. "Lets take 2 minutes, then we skedaddle down." We took a
        quick gander inside, wrote our names in the log, snapped some pictures,
        then took off. Although I was still on edge about the weather, Dan and
        Char were less concerned now. And rightfully so, given we passed a trail
        crew from the California Conservation Corps working on the trail. It was
        a reassuring sight; surely they know better than me when it comes to
        being safe with the weather.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0914.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0925.jpg" />
      </div>
      <caption>
        Dan and Char on the way down from Muir Pass and crossing Evolution Creek
      </caption>
      <p>
        An older guy hiking southbound hit us with an unskippable cutscene. A
        detailed story about him pooping on a hill and dropping his toilet
        paper, which promptly rolled down the mountain.
      </p>
      <p>
        We hauled another several miles down below treeline to set up camp. It
        was a tough 18.6 mile day, the longest day so far for us all. Tomorrow
        was the resupply at Muir Trail Ranch and I had my extra day of food, a
        mac and cheese. I turned it into a snack for the crew, and I had another
        biscuits and gravy for myself. Hiker hunger was hitting hard. The smoke
        from the nearby fire was thicker than ever. It made the sunsets pretty,
        but doing 12 hours of cardio a day in 150 AQI started getting
        uncomfortable. We ended the day with a family of deer approaching our
        campsite to graze.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0931.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0938.jpg" />
      </div>
      <caption>
        First: Smoky orange sunset from our campsite. Second: Family of deer
        coming near our camp to graze
      </caption>
    </>
  ),
  9: (
    <>
      <h1>Day 9: Checkpoint</h1>
      <p>
        This was a big day for me. I started the trip with many doubts, the
        primary being <i>what if I just can't do it?</i>
      </p>
      <p>
        I knew the first 9 days would be the most difficult. Legs still
        adjusting, carrying 9 days of food, more difficult passes, and higher
        elevation in general compared to the rest of the trail. I told myself{" "}
        <i>if I can make it to MTR, I can finish the JMT.</i> Today is the day
        to hike to MTR.
      </p>
      <p>
        We started downhill, losing the remaining elevation from Muir Pass
        yesterday. The downhill took a toll on my ankles and knees, and I relied
        heavily on my poles to alleviate the stress on my feet. The slow trickle
        of Evolution Creek above treeline turned into a wide rushing river down
        low. Our second crossing of this creek required shoes off (or shoes
        wet).
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0944.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0954.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0957.jpg" />
      </div>
      <caption>
        First: Weather update, likely from the McClure Meadow Ranger. Second:
        2nd crossing of Evolution Creek. Third: An unnamed feeder creek while
        hiking to MTR
      </caption>
      <p>
        MTR was a much-needed break. We fetched our resupplies, refilled our
        bear cans, charged our devices, talked with other hikers, and washed our
        faces. I made sure to eat my fill before leaving MTR, even finding a
        couple of sealed packs of spam in the hiker boxes.
      </p>
      <p>
        As much as we would have loved to stay in a cabin at MTR, we had to get
        going. The slog up from MTR was steep, made worse with the afternoon
        smoke setting in. We encountered another older couple with a black and
        white spotted dog named Lucy, who kept us company on the steepest parts.
      </p>
      <p>
        We set up camp at Sallie Keyes lakes to give us a head start on
        tomorrows climb over Seldon Pass. I felt good: a fresh resupply of food
        with plenty of reserves, improving weather, easier passes ahead, and a
        renewed confidence that <i>I can do it</i>.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0964.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0969.jpg" />
      </div>
      <caption>
        First: Hazy view hiking up north from MTR. Second: Our camp at Sallie
        Keyes.
      </caption>
    </>
  ),
};
