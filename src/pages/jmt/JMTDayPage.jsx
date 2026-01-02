import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./JMTPage.scss";
import Header from "../../components/Header";
import { ScrollToTop } from "./ScrollToTop";

export const JMTDayPage = () => {
  const { day } = useParams();

  const dayInt = parseInt(day);
  if (isNaN(dayInt) || dayInt < 0 || dayInt > 15) {
    return <Navigate to="/404" />;
  }

  const nav = (
    <div className="nav">
      {dayInt == 0 ? (
        <a href={"/#/jmt/"}>Prev</a>
      ) : (
        <a href={"/#/jmt/" + (dayInt - 1)}>Prev</a>
      )}
      {dayInt == 15 ? (
        <a href={"/#/jmt/aftermath"}>Next</a>
      ) : (
        <a href={"/#/jmt/" + (dayInt + 1)}>Next</a>
      )}
    </div>
  );

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <ScrollToTop />
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
      <h1>Day 0: Vigil</h1>
      <p>
        My journey started with a long 5-hour drive from the Bay Area to
        Mammoth. I parked my car in the designated area for overnight
        backpackers, and took a shuttle down into town to stay the night.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0621.jpg" />
      </div>
      <caption>Walking to the shuttle from the parking lot to town</caption>
      <p>
        My thoughts raced with excitement and worry. This was when everything
        felt real. This was no longer{" "}
        <i>something that I'll do in the future</i>, it is <i>happening</i>. I
        forced down a sub sandwich for dinner despite my lack of appetite, while
        my eyes were glued to the weather forecast: 30% chance of thunderstorms
        over New Army Pass tomorrow afternoon.
      </p>
      <p>
        I didn't sleep well that night. I typically don't sleep well on the
        first night of anything new, only this time was my last night on a real
        bed for a while.
      </p>
    </>
  ),
  1: (
    <>
      <h1>Day 1: In the Deep End</h1>
      <h4>12.2mi +2600/-2200ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/00SeeaHrR82AmqLI5CoctE5N/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
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
        hike. Instead, there's a group of individuals that offer private shuttle
        services. Perhaps the most well-known is "Lone Pine Kurt". He picked me
        up and two others, and we made our way up the eastern slopes of the
        Sierras. The other folks were a couple, also doing the JMT but on a
        leisurely 25-day pace. They would have their wedding shortly after. One
        of them serves in Cal Fire.
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
        the face of the pass, <s>motivating</s> scaring me into hiking faster.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0633.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0635.jpg" />
      </div>
      <caption>New Army Pass, 12350ft</caption>
      <p>
        In the end, no thunderstorm came to pass. I made my way down to Rock
        Creek where I met a nice German couple who were here to summit Mt.
        Whitney. We set up camp and ate dinner together. I tried to eat my
        repackaged double-serving of Mountain House Biscuits and Gravy, but
        despite my efforts I could not force down the entire meal.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0643.jpg" />
      </div>
      <caption>Trying to eat with no appetite</caption>
    </>
  ),
  2: (
    <>
      <h1>Day 2: Quiet Before Battle</h1>
      <h4>13.5mi +3200/-2100ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/A9osOLGtoPjS2IyhgxCzNUeV/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        My first night's rest was okay, probably due to exhaustion from lack of
        sleep the night before. My legs were sore the first half of the night,
        and it got chilly in the second. The right side of my tent was wet from
        condensation. I packed up at 7:30am and hit the trail. My legs were
        still adjusting as I joined the PCT and trekked up Guyot Pass.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0651.jpg" />
      </div>
      <caption>View from Guyot Pass, 10900ft</caption>
      <p>
        As I passed Crabtree Meadows towards Guitar Lake, I met a ranger who
        warned that the weather around Whitney was not looking good the next few
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
        A reliable way to avoid nasty weather is to be early. I wanted to be at
        the summit by 8am with a 9am turn-around time. I met another older
        couple on the way up to Guitar Lake who shared the same weather worries.
        They planned to start hiking around 2:30am, so I figured I would too.
        Falling asleep was hard. This was, technically, the hardest part of the
        trail. I was stressed and anxious of what was to come tomorrow, afraid
        both of failing to even approach the southern terminus of the JMT, and
        of the dangers of weather and altitude that lie ahead.
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
      <h1>Day 3: The Highest I've Ever Stood</h1>
      <h4>16.3mi +5100/-6200ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/lngphe45YLALxCRe5yI6H4rU/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        The sound of my alarm woke me up at 1:45am to the cold nipping at my
        nose. I put in my contacts, stuffed some food, water, and my sleeping
        quilt into my bag, and started hiking. I left my tent set up since I'll
        be back later, saving me some weight.
      </p>
      <p>
        There was no moon, and it would have been pitch black if it weren't for
        my headlamp. It wasn't long until I caught up to the same couple I met
        yesterday. We slogged our way up the back of the mountain, a black,
        imposing silhouette against the stars. I popped a few sour patch kids in
        my mouth every couple switchbacks. The altitude and freezing cold made
        it hard to breathe, especially with a buff around my face.
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
        I summited as the sun rose over the horizon. It was an incredible
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
        water, and my tent was soon covered with mosquitoes. Impressive, I
        thought, given it was almost September. My dinner involved taking a bite
        and running around maniacally, swatting the bugs out of my face. Rinse
        and repeat. Won't be making that mistake again.
      </p>
    </>
  ),
  4: (
    <>
      <h1>Day 4: Just Keep Swimming</h1>
      <h4>16.0mi +3500/-3900ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/XELzllNUEV6Q4ayUgjPH2hEi/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
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
        tomorrow. I found what I would later consider to be one of my favorite
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
      <h4>14.2mi +3400/-4900ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/YDnj71P62TaLbjcIrvj8FVhZ/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
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
        were fires developing both east and west of the trail. Although the
        trail wasn't in danger of fire, the note warned of impending smoke.
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
        rewarded with the beauty of Rae Lakes. It was a popular camping spot for
        those hiking the Rae Lakes Loop. But with the hard uphill out of the
        way, I kept pushing towards Woods Creek to get closer to Pinchot Pass
        for tomorrow.
      </p>
      <p>
        After setting up camp, I washed up in the creek, did some laundry, and
        set up a clothesline between a couple of trees using my tent's guy
        lines. There was a bridge over the creek, which was mentally jarring
        given I haven't seen any large man-made structures in the last several
        days. Makes you wonder how they built it in the middle of the mountains.
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
        on Pinchot Pass tomorrow. The strenuous hike was also starting to wear
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
          reserve?{" "}
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
      <h4>14.1mi +5100/-2800ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/EY92aQ8LHc1n7Q98o0wY8DAS/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        Pinchot Pass was another long slog. It was the largest elevation gain
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
        he loved. He seemed like a great guy from the reels I watched where he
        ferries hikers between the trail and VVR. His passing was a great loss
        to the community. Any hikers resupplying at VVR felt this immediately as
        they now needed to hike an extra 8 miles to get to VVR.
      </p>
      <p>
        A ranger checked my permits and talked about the incoming weather during
        my descent. I once again pushed past the planned stopping point to get
        closer to the pass tomorrow. I appeared to be hiking alone while
        trekking up to Upper Basin, and I was anxious at the prospect of
        cresting Mather Pass alone in the wind, rain, and possible thunder. But
        to my relief, I encountered the same couple that I met yesterday at
        Woods Creek.
      </p>
      <p>
        Dan and Char are from Bend, Oregon, and they were also hiking the JMT
        northbound. We shared stories around dinner, chatted about gear and our
        experience on trail so far. Dan worked in the Forest Service and Char
        was a pharmacist, which felt refreshing coming from a world where almost
        everyone I meet is an engineer. They gave me some extra electrolytes for
        my cramping, and I let them use my water filter since theirs was clogged
        to a trickle. I felt my anxiety evaporate as even more hikers, both
        north- and southbound, gathered in the area to camp. I learned just how
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
      <h4>14.0mi +1900/-4700ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/CIyl6FsGK7bx6zYhftSfLHtV/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        The morning felt like Mt. Whitney all over again. We hauled ass in the
        dark and cold watching for clouds in the sky, dark splotches against the
        stars. We swore we saw flashes of lightning in the distance, but we
        didn't hear any thunder. For all we know, it could have been our own
        headlamps.
      </p>
      <p>
        Mather Pass was far easier than the others so far, given we pretty much
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
        just as much of a bitch going down. Each step shredded my ankles. This
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
        &mdash; Dragonhearted
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
      <h4>18.9mi +5100/-3200ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/1033CQpejJMyT0y9dMcxezR5/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        We got up at 4:30am to get an early start in case we encounter good
        enough weather to make it over Muir Pass. I had left my shoes out to dry
        overnight. But that progress quickly vanished as I lost my balance when
        filling up water at the river and stepped into the water.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0881.jpg" />
      </div>
      <caption>Residual fog evaporating in Big Pete Meadow</caption>
      <p>
        The initial climb up to Big Pete Meadow was mild, despite one shoe being
        fully soaked. We continued slogging up towards Starr Camp, the last
        section below treeline before Muir Pass. If we continued, it was 9 miles
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
        chance given there's no guarantee tomorrow's weather will be better. And
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
        the Muir Hut. "Let's take 2 minutes, then we skedaddle down." We took a
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
      <h4>18.3mi +3800/-3500ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/toFYJogYsuXJA4WHDYXQuBrb/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        This was a big day for me. I started the entire trip with many doubts,
        the primary being <i>what if I just can't do it?</i>
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
        We set up camp at Sallie Keyes Lakes to give us a head start on
        tomorrows climb over Selden Pass. I felt good: a fresh resupply of food
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
  10: (
    <>
      <h1>Day 10: Not Invincible</h1>
      <h4>15.0mi +2300/-4600ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/8POWousO2SW5VBc0QWASBxI1/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        I woke up with a massive ant in my tent, which I quickly evicted with
        some precise flicking. I'm usually not a fan of insects, but I was{" "}
        <s>numb</s> 1 grime of camping by now.
      </p>
      <p>
        Remember those spam slices I had at MTR yesterday? In hindsight, I
        should've thought twice before eating random food out of a hiker box.
        Sure, it was sealed and not close to expiration, but who knows how long
        it has been sitting in the sun. To spare the details, I had to spend
        quite some time in the bushes before my guts calmed down.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0973.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0980.jpg" />
      </div>
      <caption>
        First: View of Sallie Keyes Lakes on the way up Selden Pass, 10800ft.
        Second: Marie Lakes on the way down.
      </caption>
      <p>
        We made as much progress as we could before the sun came up and the
        smoke set in. We had a slow lunch at Bear Creek Trail junction, taking
        our time to dip our feet in the river. Although my anxiety eased after
        MTR, Char was worried about the worsening fire and smoke. It smelled
        like we were perpetually hiking through a barbecue.
      </p>
      <p>
        The ascent and descent over Bear Ridge was massive for not being a pass.
        We also didn't get any signal at the top like we were anticipating based
        on FarOut reports. There were long sections where we didn't speak at
        all. My hamstring became extremely tight on the downhill to VVR
        junction, to the point where I couldn't walk with a normal gait.
        Stretching did little to help. To top it off, a bird shat on my tent
        shortly after I set it up. We were exhausted, and morale was low.
      </p>
      <p>
        The same doubts resurfaced.{" "}
        <i>
          What if my hamstring doesn't feel better tomorrow? I could just end my
          hike at Reds Meadow, take the bus to Mammoth and go home. In just 2
          days I could take a hot shower and sleep in a soft bed.{" "}
        </i>
        A tempting prospect, but I knew I would never forgive myself if I gave
        up so easily. So many things have to go right for a thru-hike like this
        to succeed. I've already made it past the most difficult parts, I would
        not throw away this opportunity so lightly. My thoughts quickly faded
        into sleep.
      </p>
    </>
  ),
  11: (
    <>
      <h1>Day 11: Cozy Company</h1>
      <h4>13.4mi +5100/-2700ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/HHGnZpiq5EvHc53k06gFBh24/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        Thankfully, my hamstring did feel better. We had a nice, early start to
        Silver Pass. Being on the west side of the ridge meant we were shaded
        from the sun well into the day. We ate an early lunch atop Silver Pass.
        Although "lunch" is really just trail mix and sour patch kids.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_0990.jpg" />
      </div>
      <caption>Silver Pass, 10800ft</caption>
      <p>
        We continued with an uneventful descent down into Fish Creek and back up
        to Lake Virginia. This lake was one of the most beautiful campsites on
        trail so far, but it came with its own challenges. The vast open area
        and lake meant strong winds. My tent blew over once before I hunkered it
        down with all my available guy lines, and this was in the middle of a
        grove of trees.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1009.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1007.jpg" />
      </div>
      <caption>
        My tent tucked in a grove of trees, and the view from our campsite
      </caption>
      <p>
        I also overheard a group next to us speaking Chinese, which was a
        pleasant surprise. I haven't met anyone on trail so far that spoke
        primarily Chinese. In hindsight, I regret not striking up a conversation
        with them.
      </p>
      <p>
        We spent the rest of the day telling more stories from our past trips,
        showing each other cat pictures, and sharing food for dinner. I shared a
        biscuits and gravy with Dan, and I had another beef stroganoff for
        myself. Despite our aching feet, everything was looking up again.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1005.jpg" />
      </div>
      <caption>Post-dinner selfie with Dan and Char</caption>
    </>
  ),
  12: (
    <>
      <h1>Day 12: Bidding Farewell</h1>
      <h4>15.7mi +1800/-4500ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/L7urW6sSxHIQIn5lSpOKkpxR/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        The cold this morning made me wish once again that I brought gloves. By
        now, the moon stayed up well into the morning, providing
        much-appreciated light in the early hours.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1015.jpg" />
      </div>
      <caption>
        A full moon in the morning while descending from Lake Virginia
      </caption>
      <p>
        The downhill from Lake Virginia was another ankle shredder and the smoke
        grew ever thicker, but the allure of real food kept us going. Our
        conversations faded away and our steps accelerated as we rushed towards
        Reds Meadow.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1027.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1031.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1036.jpg" />
      </div>
      <caption>On the way to Reds Meadow</caption>
      <p>
        Reds Meadow has bus service from Mammoth, lodging, a general store,
        showers, and above all, an actual restaurant with Real Food&trade;. I
        stuffed myself with two double cheeseburgers, a bag of chips, a mac
        salad, 2 ice cream bars, and a Coke with other snacks from our
        resupplies. Gotta make up for the insane calorie deficit somehow.
      </p>
      <p>
        I ate all my food inside the general store to avoid the scavenging wasps
        and squirrels. I couldn't hold a burger for a few seconds with a bunch
        of wasps trying to grab a bite for themselves. And leaving your backpack
        unattended outside is practically inviting a squirrel to chew a hole in
        it. They tried to get into my pack even when I was <i>right there</i>. I
        resorted to using my hiking pole to shoo away the squirrels if they
        tried to get into my pack. It wasn't long before a particularly unlucky
        squirrel made a dash for my pack and I accidentally whacked it across
        the head. It squealed and struggled to move, but after many minutes of
        writhing in pain, we knew it wasn't going to make it. We picked it up
        with some cardboard and laid it down in the tall grass. Guilt weighed on
        my conscience for the rest of the day.
      </p>
      <p>
        It was also my last day hiking with Dan and Char. While I was ready to
        crank out some miles and get the trail over with, they wanted to take
        more time with the last part. We had a great 6 days hiking and camping
        together, telling stories, sharing food, and helping each other out. I
        may never see them again, but I'm glad they were a part of my adventure.
      </p>
      <blockquote>
        Should the day ever come that we are not together, you will continue to
        shine like gold in my memories. &mdash; Zhongli, Genshin Impact
      </blockquote>
      <p>
        They booked the last available cabin for the night and took showers. We
        chatted over dinner and exchanged a couple last gifts from the general
        store before I walked to the campsite. The sky is now a darker orange,
        and the AQI is well into the 200s. Tomorrow was going to be one smoky
        day, and the anxiety of backpacking alone crept in once more.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1052.jpg" />
      </div>
      <caption>Orange, smoky skies above Reds Meadow</caption>
    </>
  ),
  13: (
    <>
      <h1>Day 13: Alone Once More</h1>
      <h4>18.2mi +5200/-3100ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/mHH82YG1E0O8ZH257VcCn1Cb/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        It was another cold night with heavy condensation inside my tent. Only
        this time, the outside was also covered in ash. It was the smokiest day
        so far. Usually the smoke only rolls in during the afternoon, but it was
        already suffocating in the morning. I started wearing my buff as a mask.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1064.jpg" />
      </div>
      <caption>Devil's Postpile</caption>
      <p>
        After hiking past Devil's Postpile, a wasp flew into my hair. I
        reflexively tried to bat it away, and in return it stung me in the head.
        Despite the sting itself not being that painful, I had never been stung
        by a bee or wasp before. I could be allergic and just not know it. I ran
        into another hiker a few minutes later, and he graciously agreed to sit
        and chat with me for 15 minutes in case I had a reaction.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1074.jpg" />
      </div>
      <caption>
        The smoke was so thick I could barely see across this lake
      </caption>
      <p>
        The smoke thinned out as I regained the elevation I lost yesterday. I
        was greeted with the majestic views of Garnet Lake and Thousand Island
        Lake. This was my planned stopping point for the day, but I decided to
        continue and send it over Island Pass given my legs felt fine. I ended
        my day at Rush Creek junction. It was nearly as windy as Lake Virginia,
        so I had to employ all my guy lines once more as I set up my tent under
        the cover of a few trees. I soaked in the solitude, save for a few
        southbound hikers who just descended from Donohue Pass.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1097.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1104.jpg" />
      </div>
      <caption>
        Left: Thousand Island Lake. Right: PCT sign at Rush Creek Junction.
      </caption>
      <p>
        I was pretty confident I could do the rest of the trail in 2 days. But I
        still had a full bear can from the recent resupply. So I ate <i>good</i>
        . I cooked myself a 3 course dinner: Peak Refuel Chicken Alfredo Pasta,
        Mountain House Chili Mac w/ Beef, and a Peak Refuel Strawberry Granola
        for dessert. I went to bed under the howling wind, cozying up in my
        quilt with a full stomach.
      </p>
    </>
  ),
  14: (
    <>
      <h1>Day 14: Double Pass</h1>
      <h4>26.8mi +3700/-4000ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/TDvROlnZo0713mCYKvtjRis8/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        The day's goal was to get over Donohue Pass and Cathedral Pass, which is
        over 26 miles of hiking. This would be the hardest day of hiking in the
        entire trip. I needed to start hiking at 5am, be over Donohue by 7am,
        and arrive in Tuolumne at noon if I wanted to grab food and still be in
        time to pitch my tent in Sunrise High Sierra Camp by 4pm. It was a long
        day ahead of me.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1108.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1109.jpg" />
      </div>
      <caption>Views on the way up Donohue Pass</caption>
      <p>
        Donohue Pass is the border between Ansel Adams Wilderness and Yosemite
        National Park. Wilderness permits from Yosemite do not allow exiting
        over Donohue Pass unless specifically stated. Cresting this pass means
        I'm entering Yosemite, the final public land on this trail. It was home
        stretch.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1113.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1118.jpg" />
      </div>
      <caption>
        First: Border between Yosemite and Ansel Adams Wilderness atop Donohue
        Pass, 11000ft. Second: Looking down into Lyell Canyon.
      </caption>
      <p>
        Despite the breathtaking views and crisp fresh air, I was physically and
        mentally exhausted. It wasn't anxiety or muscle cramps, but a yearning
        for a hot shower and a warm bed, and the aching tendons and ligaments in
        my feet. They were feeling the strain of the past two weeks of
        continuous hiking, and the steep, rocky descent down the north face of
        Donohue Pass didn't help. Every step hurt, I felt grimy, and my sleep
        had been mediocre at best even by camping standards. My sleep relies on
        pure exhaustion overriding the uncomfortable sleeping pad.{" "}
        <i>If only I could fast-forward time.</i>
      </p>
      <p>
        Lyell Canyon is 9 miles of relatively flat and boring hiking. I don't
        listen to music when I hike, but I do play music in my head. It gives me
        a rhythm to walk to, and motivation to keep going.
      </p>
      <p>
        I wanted hot food at Tuolumne Meadows, but I wasn't sure exactly where
        to find it. Without cell signal, I resorted to asking other folks on
        trail who pointed me to Tuolumne Meadows Lodge. This turned out to be a
        lie, and instead of hot food I only got some snacks. After a 1-mile
        detour and asking some more kind strangers, I eventually got to the
        Tuolumne Meadows Grill and ordered my well-deserved burger.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1124.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1127.jpg" />
      </div>
      <caption>
        First: Hiking along Lyell Canyon. Second: Snacks at Tuolumne Meadows
        Lodge.
      </caption>
      <p>
        Cathedral Pass is the last pass before the northern terminus, and it's
        also the most tame. You wouldn't know it's a pass just by hiking it.
        When I got to Sunrise High Sierra Camp, my legs and feet were spent. I
        met another older guy who also wanted to camp here, but we quickly
        realized <i>there was no water</i>. All the water sources have dried up
        this late into the season. I only had a quarter liter of electrolyte
        water left, neither enough nor suitable for making dinner. Alejandro
        wanted to backtrack for water, while I wanted to press forward. Not a
        minute after we headed our separate ways, I hear a sharp whistle pierce
        the air. "Hello?" "I found water!" He had found a barely-trickling
        stream with a couple of small puddles. It was the saddest "water source"
        I drank from on trail, but it will have to do for tonight. There was no
        way I could fill my water bladders from the shallow puddle, but
        Alejandro had a gravity filter with a bag to easily collect the puddle
        water. He graciously gave me a couple liters of water to fill my bottle
        and cook dinner. We set up camp next to each other and we spent the rest
        of the night eating dinner and chatting about our adventures.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1135.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1139.jpg" />
      </div>
      <caption>
        Left: Cathedral Pass, 9700ft. Right: Sunrise High Sierra Camp.
      </caption>
      <p>
        This is my last camp, and tomorrow will be the end of this adventure.
        I'm a fairly sentimental person, and this is a bittersweet moment.
        Earlier today I wanted to "fast-forward time," for this to be over. And
        now, I just soaked in the ambiance of the journey. I reflected on how
        incredibly lucky I am to embark on this adventure, how far I'd come, and
        how I surprised myself with my own strength and capability.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1142.jpg" />
      </div>
      <caption>Last camp</caption>
    </>
  ),
  15: (
    <>
      <h1>Day 15: The Final Step</h1>
      <h4>13.5mi +2000/-7300ft</h4>
      <iframe
        className="map-frame"
        src="https://www.gaiagps.com/public/j2OG2rCiQo7x31YReIQuwxIn/?embed=True"
        seamless
      ></iframe>
      <div className="map-blocker" />
      <p>
        It was an especially cold night despite being lower in elevation. I was
        well-adjusted to the feeling of waking up with a cold nose. My bear can
        was covered in a thin case of ice, frozen from condensation. My hands
        went numb as I tore down and packed up my tent for the last time.
        Alejandro had cowboy camped, and he mentioned some mice were trying to
        get into his backpack last night. We bid our farewells, and I embarked
        on the last day of hiking. Part of me didn't want it to end, but another
        part of me was ready to be done with the trail.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1152.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1153.jpg" />
      </div>
      <caption>
        Sunrise views on the way down to Little Yosemite Valley.
      </caption>
      <p>
        The scenery gradually became more familiar as I descended past Clouds
        Rest towards Little Yosemite Valley. More day hikers spawned in; mostly
        Half Dome day hikers at first, then more folks simply hiking the Mist
        Trail.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1158.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1163.jpg" />
      </div>
      <caption>
        First: View of Half Dome from the north. Second: Liberty Cap and Nevada
        Falls
      </caption>
      <p>
        I felt an overwhelming sense of pride. The Mist Trail is no joke and
        Half Dome is a great feat, but my journey was extraordinary in
        comparison. One of these day-hikers saw my backpack and asked where I
        hiked from, and I gave my most nonchalant "I'm just wrapping up my
        northbound thru-hike of the JMT." His eyes widened, "oh <i>wow</i>,
        you're all the way from Whitney? That's incredible, congratulations!" It
        was a confidence I've hardly felt before, bordering on uncomfortable
        arrogance.
      </p>
      <p>
        I always imagined my last steps on the JMT would be strongly emotional.
        This was a moment I rehearsed in my head a thousand times. For the
        better part of the past year, this was what I dreamed of and trained
        for. In reality, I was not overwhelmed with tears like I always
        imagined. It was a mixture of awe, pride, relief, and a healthy dose of{" "}
        <i>I can't believe I just fucking did that</i>.
      </p>
      <blockquote>
        Don't call me lucky. I failed more times than you tried. &mdash; Unknown
      </blockquote>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/IMG_1166.jpg" />
      </div>
    </>
  ),
};
