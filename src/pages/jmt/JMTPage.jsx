import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./JMTPage.scss";
import Header from "../../components/Header";

export const JMTPage = () => {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div id="jmt-page">
        <Header />
        <div id="jmt-content" class="content">
          <h1>Hiking the John Muir Trail</h1>
          <p>
            My first time backpacking was August 2024 when my friends and I
            camped at Little Yosemite Valley and summited Half Dome.
          </p>
          <div className="image-grid">
            <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1887.jpg" />
            <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1995.jpg" />
            <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1917-Enhanced-NR.jpg" />
          </div>

          <p>
            Not only was I already horribly out of shape, I had also never hiked
            such a distance and elevation gain with weight on my back. I
            struggled the entire trip with headaches from altitude and hamstring
            cramps on the way down.
          </p>
          <p>
            I thought this would be a one-time adventure, but we went on more
            trips to Desolation Wilderness, Catalina Island, and the Lost Coast.
            YouTube started recommending me PCT documentaries, and I fell down a
            rabbit hole of thru-hiking reels. I never thought of myself as
            outdoorsy, but I thought it was one of the coolest things ever.
            Hiking hundreds of miles alone in the mountains, carrying everything
            you needed along the way, it would be the experience of a lifetime.
          </p>
          <p>
            The decision to hike the JMT came with many doubts. I had never
            spent a night in the wilderness alone, let alone weeks. That 20-mile
            trip over 3 days was the longest I've ever done, and the JMT would
            be an order of magnitude longer and more difficult. My mom would
            freak out if she knew about my plans (she still doesn't know I
            completed it). If you told 15-year-old Terrance he would one day
            hike hundreds of miles alone through the Sierra, he wouldn't believe
            you. I was anxious as much as I was excited.
          </p>
          <p>
            The John Muir Trail is a 211-mile trail through the heart of the
            Sierra Nevada mountain range connecting Yosemite National Park to
            the summit of Mount Whitney, the highest peak in the continental US.
            John Muir was a conservationist in the 19th century who advocated
            for the protection of wilderness in America. The trail is also known
            as the Nüümü Poyo ("People's Trail"), in acknowledgement to the
            American Indians that have used and preserved the same valleys and
            passes long before the first European-American settlers.
          </p>
          <div className="image-grid">
            <img src="https://faroutguides.com/wp-content/uploads/2018/05/JMT_Map-e1564590637977.png" />
          </div>
          <p>
            This is the story of the hardest thing I've ever done, and I hope it
            inspires you to embark on an adventure of your own :)
          </p>
          <div className="nav">
            <div></div>
            <a href="/#/jmt/0">Day 0</a>
          </div>
        </div>
      </div>
    </>
  );
};

export const JMTAftermathPage = () => {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div id="jmt-page">
        <Header />
        <div id="jmt-content" class="content">
          <h1>Aftermath</h1>
          <p>
            I took a free shuttle from the trailhead to Yosemite Village where I
            gorged on burgers, fries, soups, sandwiches, coffee, and snacks
            galore. I was practically <i>inhaling</i> food during the hours
            before my shuttle ride back to Mammoth, to the point of being
            uncomfortably bloated on the YARTS bus. Thank god for dramamine,
            front-row seats, and short breaks at each stop because there was no
            way all that food was staying down otherwise. We also saw 2 bears on
            the bus ride up, despite not seeing any bears on trail the entire
            trip. I bought a souvenir and a Yerba Mate for the drive home.
          </p>
          <p>
            But once I got to Mammoth and hopped in my car, the exhaustion hit
            me like a truck. I had been up since 5am and the sun was already
            going down. There was no way I could safely drive another 5 hours
            home in my condition. I headed to the same hotel that I stayed at in
            the beginning, ate my fill at a nearby restaurant, took my first hot
            shower in 2 weeks, and crashed for the night.
          </p>
          <p>
            It hurt to walk for a solid 2 weeks after I got home. The soreness
            in my shoulders, quads, glutes, and hamstring went away after
            several days. But the tendons and ligaments in my feet complained
            for much longer. Thankfully there wasn't any permanent damage (as
            far as I can tell).
          </p>
          <h1>Reflections</h1>
          <p>"Why did you hike the JMT?"</p>
          <p>
            The spark and inspiration is just that I thought thru-hiking was a
            super cool thing to do, and you don't need an excuse to do something
            you find cool.
          </p>
          <p>
            The second motivator is that the JMT is <i>hard</i>. I wanted proof
            that I was strong and can do hard things. It is an accomplishment
            that can fuel my confidence that nobody can take away from me,
            permanently. And yes, there are plenty of even harder trails out
            there. But I wasn't ready to commit 4 months of my life to hiking
            the PCT, for example. The JMT was hard and ambitious, but not a
            life-changing commitment.
          </p>
          <p>
            What surprised me most on trail was how much I relied on the
            kindness of strangers, and how much I helped others. I traded snacks
            and food with Dan and Char, they provided me screenshots of maps,
            and I had accurate weather and smoke forecasts and a working water
            filter. Alejandro came in extremely clutch with the water find on
            the final night. Who knows what would have happened if I pushed on?
            I appreciated the camaraderie, the feeling that we're all in this
            together and we help each other out when we can.
          </p>
          <p>
            There were also plenty of things that went well, things that often{" "}
            <i>don't</i> go well for others. I didn't get any blisters in my
            feet, thanks for nice socks, well-fit shoes, and frequent washing. I
            also didn't twist or sprain my ankle, thanks to my ankle flexibility
            and stability. These are things that could have easily ended a hike.
          </p>
          <p>
            The trip was not without regrets, and there were things I would have
            done differently. Logistically, I wish I brought gloves, a larger
            battery bank, more Liquid IV, and a wider variety of food. But my
            biggest regret was not filming the journey. I'm not a great writer,
            and it's hard to convey what it felt like on trail with words.
            Eventually, this memory will fade from my mind as well. A video
            would have been nice.
          </p>

          <div className="nav">
            <div></div>
            <a href="/#/jmt/0">Day 0</a>
          </div>
        </div>
      </div>
    </>
  );
};
