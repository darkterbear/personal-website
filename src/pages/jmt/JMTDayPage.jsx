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
      <h1>Day 0: Drive to Mammoth</h1>
      <p>
        My journey started with a long drive from the bay to Mammoth. I parked
        my car in the designated area for overnight backpackers, and took a
        shuttle down to town to stay the night.
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
      <h1>Day 1: A Chaotic Start</h1>
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
      <h1>Day 2: Anticipation</h1>
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
        time. I had met another older couple on the way up to Guitar Lake who
        shared the same weather worries. They planned to start hiking around
        2:30am, so I figured I would too. Falling asleep was hard. This was,
        technically, the hardest part of the trail. I was stressed and anxious
        of what is to come tomorrow, afraid both of failure to even approach the
        southern terminus of the JMT, and of the dangers of the weather and
        altitude that lie ahead.
      </p>
      <blockquote>
        The brave man is not he who does not feel afraid, but he who conquers
        that fear
        <br />
        &mdash; Nelson Mandela
      </blockquote>
    </>
  ),
};
