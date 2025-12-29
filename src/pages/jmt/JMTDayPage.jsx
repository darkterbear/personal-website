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
      <h1>Day 0:</h1>
      <p>
        My first time backpacking was August 2024 when my friends and I camped
        at Little Yosemite Valley and summited Half Dome.
      </p>
      <div className="image-grid">
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1887.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1995.jpg" />
        <img src="https://terrance-files.s3.us-west-2.amazonaws.com/jmt/KIOH1917-Enhanced-NR.jpg" />
      </div>

      <p>
        Not only was I already horribly out of shape, I had also never hiked
        such a distance and elevation gain with weight on my back. I struggled
        the entire trip with headaches from altitude and hamstring cramps on the
        way down.
      </p>
      <p>
        I thought this would be a one-time adventure, but we went on more trips
        to Desolation Wilderness, Catalina Island, and the Lost Coast. YouTube
        started recommending me PCT documentaries, and I fell down a rabbit hole
        of thru-hiking reels. I never thought of myself as outdoorsy, but I
        thought it was one of the coolest things ever. Hiking hundreds of miles
        alone in the mountains, carrying everything you needed along the way, it
        would be the experience of a lifetime.
      </p>
      <p>
        The decision to hike the JMT came with many doubts. I had never spent a
        night in the wilderness alone, let alone weeks. That 20-mile trip over 3
        days was the longest I've ever done, and the JMT would be an order of
        magnitude longer and more difficult. My mom would freak out if she knew
        about my plans (she still doesn't know I completed it). If you told
        15-year-old Terrance he would one day hike hundreds of miles alone
        through the Sierra, he wouldn't believe you. I was anxious as much as I
        was excited.
      </p>
      <p>
        The John Muir Trail is a 211-mile trail through the heart of the Sierra
        Nevada mountain range connecting Yosemite National Park to the summit of
        Mount Whitney, the highest peak in the continental US. John Muir was a
        conservationist in the 19th century who advocated for the protection of
        wilderness in America. The trail is also known as the Nüümü Poyo
        ("People's Trail"), in acknowledgement to the American Indians that have
        used and preserved the same valleys and passes long before the first
        European-American settlers.
      </p>
      <div className="image-grid">
        <img src="https://faroutguides.com/wp-content/uploads/2018/05/JMT_Map-e1564590637977.png" />
      </div>
      <p>
        This is the story of the hardest thing I've ever done, and I hope it
        inspires you to embark on an adventure of your own :)
      </p>
    </>
  ),
};
