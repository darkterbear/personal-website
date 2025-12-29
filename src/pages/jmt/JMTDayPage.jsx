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
        My quads started cramping on the way up to Glen Pass. "If I'm cramping
        on day 5, how will I ever make it past day 10 or 15?" I compensated by
        putting more weight on my trekking poles and drinking more electrolytes.
        The cramps went away as the day progressed, but my doubts lingered.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0765.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0766.jpg" />
      </div>
      <caption>
        Left: View on the way to Glen Pass. Right: Note from the Charlotte Lake
        Ranger.
      </caption>
      <p>
        On the way up, I saw a note from the Charlotte Lake Ranger that there
        were fires developing both east and west of trail. Although the trail
        wasn't in danger of fire, the note warned of impending smoke.{" "}
        <i>That's called foreshadowing.</i>
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
      <caption>Left: Woods Creek Bridge. Right: My camp at Woods Creek</caption>
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
        and wind. Those who forged our own destiny and future. &mdash; Kachina
      </blockquote>
    </>
  ),
};
