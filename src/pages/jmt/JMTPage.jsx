import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./JMTPage.scss";
import Header from "../../components/Header";
import { ScrollToTop } from "./ScrollToTop";

export const JMTPage = () => {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <ScrollToTop />
      <div id="jmt-page">
        <Header />
        <div id="jmt-content" class="content">
          <div className="nav">
            <div></div>
            <a href="/#/jmt/0">Day 0</a>
          </div>
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
      <ScrollToTop />
      <div id="jmt-page">
        <Header />
        <div id="jmt-content" class="content">
          <div className="nav">
            <a href="/#/jmt/15">Day 15</a>
            <div></div>
          </div>
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
          <p>
            Finally, I had quite a few friends that made this trip possible.
            Eric and Neeraj, thanks for keeping in touch with me over satellite
            messaging. The weather and smoke updates were helpful, but more
            importantly, knowing you guys had my back gave me the confidence I
            needed to go forward. Also a huge thanks to Jenny for letting me
            borrow your bear can, and other Eric for your advice and wisdom from
            your time working on the JMT :)
          </p>
          <h1>Preparation</h1>
          <p>
            I put this part at the very end. The main point of this was to tell
            you my story, not to bore you with the logistics. But in case you're
            planning a similar adventure of your own, here's how I did it.
          </p>
          <h2>Permit</h2>
          <p>
            Generally, you need a permit to camp in the American backcountry.
            There are only a few permits that let you do the entire JMT.
            <ul>
              <li>
                Happy Isles, Donohue Pass Eligible (from Yosemite NP, lottery
                5mo prior, southbound)
              </li>
              <li>
                Mount Whitney, Overnight (from Inyo NF, lottery Feb.,
                northbound)
              </li>
              <li>
                Cottonwood Pass (from Inyo NF, FCFS 6mos prior at 7am,
                northbound)
              </li>
              <li>
                Cottonwood Lakes (from Inyo NF, FCFS 6mos prior at 7am,
                northbound)
              </li>
              <li>
                PCT Long-Distance Permit (from PCTA, requires you do at least
                500mi in a single, continuous trip)
              </li>
            </ul>
            There are also some creative alternatives, like day hike from Happy
            Isles to Tuolumne Meadows the day before, then entering with a Lyell
            Canyon, Donohue Pass Eligible permit from Yosemite NP.
          </p>
          <p>
            I tried for all the permits (besides the PCT permit), but didn't
            land any of the lotteries. Luckily the first-come-first-serve
            permits weren't hard to snag at 7am.
          </p>
          <h2>Training</h2>
          <p>
            I trained with 3 exercises: stairmaster, incline treadmill, and
            rucking Mission Peak, a local 3-mile 2200ft peak.
            <ul>
              <li>Stairmaster: level 9, 100 floors, 2x/week</li>
              <li>Incline treadmill: 15% 3mph, 30 minutes, 1x/week</li>
              <li>Rucking: 25-30lb pack, 2-3 hours, 1x/week</li>
            </ul>
            I also had several multi-day backpacking trips under my belt by the
            time I embarked on the JMT, including the Trans-Catalina Trail (a
            little under 40 miles) and the Lost Coast Trail (25 miles). Some
            folks are able to do the JMT without prior training or even
            backpacking experience, but I found both to be helpful.
          </p>
          <h2>Messaging and Bailout Plan</h2>
          <p>
            Some hikers like to truly disconnect from the outside world and
            forgo any satellite messaging. I found it helpful to talk with my
            friends while on trail. They helped me look up more detailed
            forecasts for weather and smoke, and reassured me that they can
            swoop me up in case something goes wrong.
          </p>
          <p>
            I highly recommend carrying a satellite message device like the
            Garmin Inreach Mini 2. Set up a protocol for when you will check in,
            when you will start and stop tracking, and under what circumstances
            your friends should be concerned and contact the authorities (and
            which authorities). Find all the feasible bailout points (e.g.
            Kearsarge Pass, Bishop Pass, etc.) and have a plan for
            transportation once you bail. For me, having these plans in place
            eased my anxiety and allowed me to focus on the challenge ahead.
          </p>
          <h2>Transportation</h2>
          <p>
            One-way hikes are always difficult in terms of transportation. The
            JMT especially so since the start and end are on different sides of
            the Sierras.
          </p>
          <p>
            I was lucky enough to be driving distance from the area, so I drove
            and parked in Mammoth, up the mountain in area B which is designated
            for overnight backpackers. I took an ESTA shuttle from Mammoth to
            Lone Pine, then I hired "Lone Pine Kurt" to shuttle me to the
            trailhead. After I finished, I took a YARTS bus from there to
            Mammoth. Both ESTA and YARTS are reservable in advance.
          </p>
          <p>
            But if I were to do this again, I would park at the Happy Isles
            overnight parking lot and take the YARTS to Mammoth beforehand. I
            would still stay a night in Mammoth for acclimation, then take the
            ESTA to Lone Pine, etc. This would save me from going over Tioga
            Pass twice, about an hour of time.
          </p>
          <h2>Resupplies</h2>
          <p>
            I resupplied twice, once at MTR and once at Reds Meadow. Both
            involved paying online and shipping a 5-gallon bucket full of your
            stuff. I included food, electrolytes, toilet paper, contact lenses,
            first aid materials, and some treats. Keep in mind that you can't
            ship cannisters of fuel. I shipped my buckets 3 weeks in advance.
          </p>
          <h2>Gear</h2>
          <p>
            Big 4:
            <ul>
              <li>Backpack: REI Flash 55 Medium</li>
              <li>Quilt: Katabatic Flex 30 Long 850fp</li>
              <li>Pad: Nemo Tensor Insulated Long Wide</li>
              <li>
                Tent: Durston X-Mid 1 Pro Woven, with MSR Groundhog and
                Sea-to-Summit Ground Control stakes
              </li>
            </ul>
            Toiletries:
            <ul>
              <li>Contacts</li>
              <li>Toothbrush, toothpaste, and floss</li>
              <li>Trowel</li>
              <li>Toilet paper</li>
              <li>Hand sanitizer</li>
              <li>SPF lipbalm and sunscreen</li>
            </ul>
            Food & Water:
            <ul>
              <li>Fuel cannister 110g</li>
              <li>Bear can: BearVault BV475</li>
              <li>Stove: Soto Amicus</li>
              <li>Pot: TOAKS 750</li>
              <li>Filter: Sawyer Squeeze</li>
              <li>Smartwater bottle + 2x Sawyer 1L plastic bladder</li>
              <li>Titanium spork</li>
            </ul>
            Clothing:
            <ul>
              <li>Sunglasses</li>
              <li>2x REI Sahara Shade sun hoodie</li>
              <li>Smartwool base layer</li>
              <li>Patagonia Polartech Powerstretch fleece</li>
              <li>Decathlon Forclaz MT100 Puffer</li>
              <li>Montbell Peak Shell</li>
              <li>2x Exofficio Give-n-Go</li>
              <li>Patagonia Terrebone trail joggers</li>
              <li>Montbell Super Dry-Tec pants</li>
              <li>2x Darn Tough socks</li>
              <li>Altra Lone Peak 8 shoes</li>
            </ul>
            Accessories:
            <ul>
              <li>Garmin InReach Mini 2</li>
              <li>Durston Iceline trekking poles</li>
              <li>Nitecore NU20 Classic headlamp</li>
              <li>Merino wool buff</li>
              <li>Extra gallon ziploc bags</li>
              <li>Battery bank, cables, wall adapter</li>
              <li>
                First Aid Kit (bandaids, KT tape, blister kit, gauze, small pair
                of scissors, etc.)
              </li>
              <li>Prescription glasses</li>
              <li>Phone</li>
              <li>Permit</li>
            </ul>
          </p>
          <div className="nav">
            <a href="/#/jmt/15">Day 15</a>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
