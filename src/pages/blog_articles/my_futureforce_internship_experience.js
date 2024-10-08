const key = "my-futureforce-internship-experience";
const title = "my futureforce internship experience";
const publishedDate = "August 6th, 2020";
const updatedDate = "September 24th, 2020";
const description = `This summer (2020), I worked at Salesforce as a Futureforce intern for
the Communities Cloud Runtime team! Read about my experience, my
project, and everything I learned.`;

const content = (
  <>
    <h1 class="section-title">contents</h1>
    <ol>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#covid">COVID</a>
      </li>
      <li>
        <a href="#team">My Team</a>
      </li>
      <li>
        <a href="#project">My Project</a>
      </li>
      <li>
        <a href="#learning">What I Learned</a>
      </li>
      <li>
        <a href="#acknowledgements">Acknowledgements</a>
      </li>
    </ol>
    <h1 id="introduction" class="section-title">
      introduction
    </h1>
    <p>
      In the fall semester of 2019, I visited Salesforce Tower with{" "}
      <a href="https://codebase.berkeley.edu" target="blank">
        Codebase
      </a>
      , a club at Cal that works on industry projects with client companies. We
      learned what Salesforce is all about, and dropped off our resumes.
      Fast-forward a month, and I was going about my day when I received my
      offer letter from Salesforce. Strap in as I take you through my experience
      as a Futureforce Intern!
    </p>
    <h1 id="covid" class="section-title">
      covid
    </h1>
    <p>
      It's worth noting that this internship took place during the height of the
      worldwide COVID pandemic. Salesforce took the safe and precautionary
      measure of having employees work from home. Although I wasn't able to
      experience free snacks and lunches in person, my team and the Futureforce
      program did a fantastic job of making sure the logistics of working
      remotely went smoothly.
    </p>
    <h1 id="team" class="section-title">
      my team
    </h1>
    <p>
      First, a little about Salesforce. Salesforce is large, and many people
      have heard of us. Yet, many are still confused: “what does Salesforce do?”
      There is no simple answer, since we do many things. But, they all revolve
      around connecting businesses to their customers. They offer a range of
      services such as analytics, website-builders, and marketing to help
      businesses better interact with their customers. I worked as a part of the
      Communities Runtime team in the{" "}
      <a
        href="https://www.salesforce.com/products/community-cloud/overview/"
        target="blank"
      >
        Communities Cloud
      </a>
      . What does that mean?
    </p>
    <p>
      Communities Cloud is a Salesforce product; it enables users to build light
      web applications (also known as Experiences) and integrate their
      Salesforce data into those applications. Some examples include e-commerce
      storefront pages and{" "}
      <a
        href="https://help.hulu.com/s/?language=en_US%3F&utm_term=+hulu++support&gclid=CjwKCAjwjqT5BRAPEiwAJlBuBZM0AYezgRC4GDh79dY_AedTxNZ5wMVmbL5k5ulpQMGGttYm4pCDCRoC3P0QAvD_BwE&utm_campaign=BM+SEM+Customer+Service+Keywords&cmp=9241&utm_medium=cpc&gclsrc=aw.ds&utm_source=google"
        target="blank"
      >
        customer support pages
      </a>
      .
    </p>
    <p>
      Many Communities Experiences are built with Lightning Web Runtime (LWR), a
      static-site generator that turns user-generated data (like templates,
      content, drag-and-dropped layouts, etc.) into a full-fledged website.
    </p>
    <p>
      Putting two and two together, the Communities Runtime team is in charge of
      building this scalable runtime platform that other Salesforce teams and
      customers build their digital experiences on.
    </p>
    <img src="https://files.terranceli.com/blog/my-futureforce-internship-experience/team.png" />
    <h5>Meet my team!</h5>

    <h1 id="project" class="section-title">
      my project
    </h1>
    <p>
      My task for the summer is to build accessibility features into LWR. Being
      red-green colorblind myself, I know exactly what it feels like when
      something just wasn’t built for you (I’m looking at you, subway maps).
      Accessibility is so often overlooked as a feature, added as an
      afterthought, or straight up forgotten, despite it sometimes being a legal
      requirement.
    </p>
    <h2>Accessibility</h2>
    <p>
      When we think of disability and accessibility, we often think of
      wheelchairs, blind individuals, and special reserved parking spots. There
      are 3 types of disability, which demonstrates how we all benefit from
      accessibility features.
    </p>
    <img
      style={{ maxWidth: 500 }}
      src="https://files.terranceli.com/blog/my-futureforce-internship-experience/types-of-disabilities.png"
    />
    <h5>Permanent, temporary, and situational disability examples</h5>
    <ol>
      <li>
        <b>Permanent disability</b>: this one is what it sounds like. Examples
        include permanent blindness, missing limbs, and permanent hearing loss.
      </li>
      <li>
        <b>Temporary disability</b>: disabilities that are expected to resolve
        in time. Examples include broken bones and concussions.
      </li>
      <li>
        <b>Situational disability</b>: disabilities that are the result of a
        certain circumstance. Say I’m a janitor trying to bring a large cart of
        equipment into the building through a flight of stairs. In this context,
        I would be situationally disabled, since it is practically impossible to
        drag a cart of equipment up a flight of stairs.
      </li>
    </ol>
    <p>
      Say the designers of the building were considerate enough to include a
      ramp into the building in addition to the flight of stairs. This benefits
      not only those with permanent and temporary disabilities, but also those
      who are situationally disabled! Even though it was designed with the
      wheelchair in mind, it also serves the janitor with the cart full of
      equipment. If we design and develop products with accessibility in mind,
      we can make life easier for everyone.
    </p>
    <img src="https://files.terranceli.com/blog/my-futureforce-internship-experience/accessible-ramp.jpg" />
    <h5>An accessible ramp is beneficial for everyone</h5>
    <p>
      My project concerns users who rely on keyboard navigation and
      screen-readers. Many of us are familiar with keyboard navigation; this is
      when you hit tab to go through a form on a webpage (another example of
      accessibility features benefitting us all).{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/Screen_reader"
        target="blank"
      >
        Screen-readers
      </a>{" "}
      are audio devices that read out screen contents to users who have trouble
      seeing things on a screen. I’ll be going over the features that I built
      into LWR to support these users.
    </p>
    <h2>F6 Navigation</h2>
    <p>
      This one’s for all you keyboard navigators out there. Have you ever tried
      to TAB through a gigantic form and end up with a cramping pinky finger?
      This feature solves that problem by allowing you to F6 through larger
      regions first, then TAB within that region to your element of choice.
      Simple, right?
    </p>
    <img src="https://files.terranceli.com/blog/my-futureforce-internship-experience/f6.png" />
    <h5>Navigating to the footer with F6 navigation</h5>

    <h2>Navigation Page Title Update and ARIA-Live Announcement</h2>
    <p>
      LWR generates a{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/SPA"
        target="blank"
      >
        Single Page Application (SPA)
      </a>
      , meaning navigation within the app is handled by a Javascript bundle that
      dynamically modifies the DOM to simulate navigation. This poses quite a
      few problems for accessibility, the first of which is that navigation is
      not natively announced. Even if you don’t use a screen-reader, you can see
      how this could be problematic; there is no confirming feedback to the user
      that they have navigated! I fixed this in two ways: first, by updating the
      page title on navigation, and second, by updating an{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
        target="blank"
      >
        ARIA-Live region
      </a>{" "}
      to “force” the screen-reader to read out the new page title.
    </p>

    <img src="https://files.terranceli.com/blog/my-futureforce-internship-experience/aria-live.png" />
    <h5>Invisible ARIA Live region injected into the DOM</h5>

    <h2>Navigation Focus Update</h2>
    <p>
      The second accessibility problem with navigating in an SPA is that the
      focus doesn’t always end up where it needs to be after navigation. For
      instance, it might be left in the footer if the footer isn’t rerendered,
      where the user expects it to be back at the top. This is, again, fixed by
      simply updating the focus to the top of the page or to the content region.
    </p>
    <h1 id="learning" class="section-title">
      what i learned
    </h1>
    <h2>About WebComponents</h2>
    <p>
      Before my internship, I had never heard of{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
        target="blank"
      >
        WebComponents
      </a>{" "}
      or the{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"
        target="blank"
      >
        shadow DOM
      </a>
      . Turns out, if you’ve used HTML, chances are, you’ve also used
      WebComponents!
    </p>
    <p>
      WebComponents is not a framework like React; it is a lower level structure
      that defines the “built-in” behavior of elements we take for granted, like{" "}
      <code>&lt;input&gt;</code>. A WebComponent has its own bundle of HTML,
      CSS, and JS that makes it work. In fact, for encapsulation, WebComponents
      have their own internal DOM tree (known as a shadow DOM) when rendered on
      a webpage. You can even nest components inside each other!
    </p>
    <p>
      LWR is built on{" "}
      <a
        href="https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html#:~:text=Lightning%20Web%20Components%20is%20the,in%20ECMAScript%207%20and%20beyond."
        target="blank"
      >
        Lightning Web Components (LWC)
      </a>
      , which is highly similar to WebComponents. To build my features into LWR,
      I often had to interact with the shadow DOMs of various components,
      something that was foreign to me, but I am glad to have had the
      experience.
    </p>
    <h2>About Accessibility</h2>
    <p>
      To complete the screen-reader features, I had to use a screen-reader
      myself. I closed my eyes and enabled VoiceOver, and attempted to navigate
      to a website using Google. How hard could it be?
    </p>
    <p>
      Immediately, I got stuck. How do I move my cursor to the search bar? What
      is even on my screen? Why is it reading so fast? I gained a new respect
      for those who rely on accessibility features and a sense of duty as a
      developer after my experience with a screen-reader.
    </p>
    <p>
      I learned not only about how some disabled people interact with technology
      in their day-to-day lives, but also how accessibility features help
      everyone, not just those who are permanently disabled. I learned the
      importance of{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
        target="blank"
      >
        semantic HTML
      </a>
      , and thought about all those times I used buttons in the place of anchor
      tags. I learned about
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
        target="blank"
      >
        ARIA
      </a>
      , a set of web page accessibility features that some glance over in
      Inspect Element but few know their function. Most importantly, I’ve gained
      a greater empathy for my users from all walks of life.
    </p>
    <h2>About Software Development</h2>
    <p>
      I would consider myself an experienced software developer for a
      19-year-old. I’ve coded at hackathons, developed software for small client
      projects, worked long hours for a startup, built cool projects for a lab,
      and led a tech team for a student organization. However, this was my first
      experience as a software engineer in a tech giant. As big as Salesforce is
      as a company, the codebase is even larger, along with the surrounding
      development infrastructure. I, specifically, want to focus on{" "}
      <b>testing</b>. I’ve written a few JUnit and Jest tests before in my life,
      but nothing that would prepare me for how seriously and rigorously testing
      is done here.
    </p>

    <p>
      Before a feature is completed, a test plan is created. This plan includes
      info on what types of tests are needed, and what specific test cases are
      there. Do we need end to end testing? Do we need performance testing?
      Localization testing? What about accessibility testing?
    </p>

    <p>
      After I’m done writing a feature, I write some Jest unit tests along with
      it, mocking out certain functionality to isolate the individual
      components. After that, I’ll write some WebDriver tests to ensure that the
      functionality works end-to-end, when the module itself is running separate
      from the Salesforce core application. Then, I’ll write some Selenium tests
      that make sure my feature functions when it is integrated into core.
      Finally, I'll do some performance analysis in Chrome Dev Tools to ensure
      that my feature isn’t burning someone’s lap. Needless to say, of the time
      I spent in the code editor, the majority of it was on writing tests. As
      monotonous as test-writing is, I admire Salesforce’s dedication to Trust
      as a core value, and the rigorous testing is a testament to Trust.
    </p>
    <h1 id="acknowledgements" class="section-title">
      acknowledgements
    </h1>
    <p>
      There are two people I’d like to thank in particular: Ronak, my manager,
      and Bob, my mentor. Ronak has been with me through my entire journey,
      always checking in on me to make sure everything was going smoothly. In
      addition to being a great leader and manager, he is also a great friend to
      whom I can chat about life with. Bob is quick to provide me with the
      resources I need to learn and become independent, and he was able to make
      me feel at home despite being a new member on the team.
    </p>

    <p>
      Also a huge shout-out to Bobby (my recruiter), Zach (my product manager),
      Donielle (for teaching me all about accessibility), and Stephen (for
      answering so many of my questions)!
    </p>
  </>
);

export default {
  key,
  title,
  publishedDate,
  updatedDate,
  description,
  content,
};
