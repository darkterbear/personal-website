const key = "building-a-drone";
const title = "Building a drone";
const date = "August 25th, 2020";
const description = `Follow along as I take you through my experience of building my own
drone! This also serves as a tutorial if you want to replicate this
work.`;

const content = (
  <>
    <h1 class="section-title">Contents</h1>
    <ol>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#disclaimer">Disclaimer</a>
      </li>
      <li>
        <a href="#how-a-quadcopter-works">How a Quadcopter Works</a>
      </li>
      <li>
        <a href="#parts">Parts</a>
      </li>
      <li>
        <a href="#tools">Tools</a>
      </li>
      <li>
        <a href="#assembly">Assembly</a>
      </li>
      <li>
        <a href="#software">Software</a>
      </li>
      <li>
        <a href="#conclusion">Conclusion</a>
      </li>
    </ol>
    <h1 id="introduction" class="section-title">
      Introduction
    </h1>
    <p>
      I've always thought it'd be cool to have a drone. Not only to fly around
      and take pictures, but also because when I think of the future, I imagine
      societies relying on drones for common functions. Drones for delivering
      packages and mail, for defense, for surveying and research, and the like.
      I want to live in a world where I can order a coffee on the street and
      have a drone fly it to my hands. But before we build drones that deliver
      food, I must first build a drone (that flies).
    </p>
    <h1 id="disclaimer" class="section-title">
      Disclaimer
    </h1>
    <p>
      This blog post is for educational purposes only. You may attempt to
      recreate this work at your own risk, but I will not be liable for any
      injuries you may sustain, or if you fail to build a working drone from
      this tutorial. I may not provide support if you ask me questions about
      this tutorial.
    </p>
    <h1 id="how-a-quadcopter-works" class="section-title">
      How a Quadcopter Works
    </h1>
    <img src="https://files.terranceli.com/blog/building-a-drone/quadcopter-operation.png" />
    <h5>
      Blue props run CCW, red props run CW. Larger props represent higher
      thrust, smaller props represent lower thrust.
    </h5>
    <p>
      <b>
        A quadcopter relies on 4 propellers pushing air downwards to generate
        lift as a reaction force.
      </b>{" "}
      The propellers can't all spin in the same direction, however; the motors
      would collectively exert torque on the frame, causing it to spin
      uncontrollably. Thus, two motors must spin clockwise, and the other two
      counterclockwise. Different amounts of throttle are applied to each prop
      to achieve different attitudes, as shown above.
    </p>
    <p>
      <b>
        At the start of this project, I toyed with the idea of writing my own
        flight controller using an Arduino.
      </b>
      A flight controller basically takes in user and sensor input and figures
      out how much throttle each prop needs to maintain level flight or carry
      out joystick instructions. As it turns out, this is extremely complicated
      and involves math, electrical engineering, and control theory knowledge
      that I have yet to discover. So instead, I'll be buying a flight
      controller to do all the work for me :)
    </p>
    <img src="https://files.terranceli.com/blog/building-a-drone/system-schematic.png" />
    <h5>High-level system design</h5>
    <p>
      My quadcopter will be powered by a LiPo battery, which will power the
      Raspberry Pi, FC, ESCs, and motors. The Raspberry Pi will run a script to
      receive joystick instructions from an Android app over Bluetooth. Those
      instructions are translated into RC commands and sent along a USB serial
      connection using the Multiwii Serial Protocol.
    </p>
    <h1 id="parts" class="section-title">
      Parts
    </h1>
    <p>
      After a quick Google search, I've put together a list of parts that will
      go into each quadcopter. I've also added some optional parts that came in
      handy for me.
    </p>
    <p>
      There are some quick things to note. Instead of buying a separate remote
      controller, I've decided to use a Raspberry Pi flight computer, which I
      will connect to using Bluetooth from my phone. Also, instead of buying a
      frame, I got my friend Neal to 3D print one for me! Check out his{" "}
      <a href="https://github.com/nmadev" target="blank">
        GitHub
      </a>
      !
    </p>
    <p>
      Each quadcopter requires a few general components; we'll go into my
      selection for each one-by-one.
    </p>
    <ol>
      <li>Frame</li>
      <li>Motors</li>
      <li>Propellers</li>
      <li>Flight Controller (FC)</li>
      <li>Electronic Speed Controllers (ESCs)</li>
      <li>Battery</li>
      <li>Radio Receiver or Flight Computer</li>
    </ol>
    <h2>1. Frame</h2>
    <p>Huge shoutout to Neal for designing and printing this awesome frame!</p>
    {/* <img src="https://files.terranceli.com/blog/building-a-drone/frame.png" /> */}
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/frame-real.jpg"
    />
    <h2>2. Motors</h2>
    <p>
      These are <b>XING-E 2207 1800KV 6S</b> brushless motors. What do all these
      numbers mean? 2207 can be broken down into 22 (stator diameter) and 07
      (stator height). Generally, larger numbers mean more power and higher
      torque. The KV rating is the theoretical increase in RPM for a 1V input
      increase with no load. Higher KV motors have a higher top speed, and lower
      KV motors have more torque. Finally, 6S refers to the maximum number of
      LiPo battery cells the motor can be connected to: 6. Don't use a battery
      that exceeds the limits of your components!
    </p>
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/motor.jpg"
    />
    <h2>3. Propellers</h2>
    <p>
      These are <b>Gemfan 51466 Hurricane (5.1x4.66x3)</b> propellers. 5.1
      refers to the 5.1in prop diameter. Larger diameter props are more
      powerful, and require higher torque to spin. 4.66 refers to the pitch (how
      much the blade is angled). Specifically, it is how far the prop would move
      if it was forced to spin in a soft solid. The higher the pitch, the more
      thrust it can produce for the same speed, and the more torque it takes to
      spin. Finally, the 3 refers to the 3 blades on the prop. More blades =
      more thrust = more torque required.
    </p>
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/propeller.jpg"
    />
    <h2>4, 5. Flight Controller + ESC Stack</h2>
    <p>
      This is the <b>Mamba F405 Mk 2 + Mamba F40 Mk 2 40A 3-6S</b> Flight
      Controller + ESC stack. You could buy a flight controller and your ESCs
      separately, but I find that it's more compact to buy them stacked
      together. The F405 Mk 2 is a Betaflight (firmware) flight controller. The
      F40 Mk 2 is a 4-in-1 ESCs that can handle power distribution to all 4
      motors at once. It can handle 40A per motor continuously, and accepts 3-6
      LiPo cells.
    </p>
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/fc.jpg"
    />
    <h2>6. Battery</h2>
    <p>
      This is the <b>R-Line Tattu 4S 1300mAh 95C</b> LiPo battery. 4S refers to
      the number of cells in the battery. The standard for LiPo cells dictates
      that each cell has a nominal voltage of 3.8V, maximum of 4.2V, and
      absolute minimum of 3.0V (you really shouldn't discharge below 3.4V).
      1300mAh is the amount of charge that it can hold, and 95C refers to
      discharge rate. Take the the 1300mAh from the capacity, chop off the 'h'
      to get 1300mA, and multiply by the C rating to get 1.3A * 95 = 123.5A.
    </p>
    <p>
      Do your research on LiPo batteries! Make sure you know how to charge and
      take care of them; if you don't, they WILL catch fire and explode!
    </p>
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/battery.jpg"
    />
    <h2>7. Flight Computer</h2>
    <p>
      Since I'm not using a radio receiver and remote control, I'll be using a{" "}
      <b>Raspberry Pi 3B</b> to send commands to the FC. This is also useful for
      my future endeavors, such as flying autonomously. For now, it will serve
      as a link between my Android phone and the flight controller.
    </p>
    <img
      class="small"
      src="https://files.terranceli.com/blog/building-a-drone/rpi.jpg"
    />
    <h2>8. Miscellaneous</h2>
    <p>
      There are some other parts and hardware that I used. They aren't
      particularly noteworthy and are self-explanatory, so I'll just list them
      here.
    </p>
    <ul>
      <li>Samsung 64GB MicroSD Card (for RPi)</li>
      <li>LiPo Battery Monitor and Buzzer</li>
      <li>M5x50mmx0.8mm Alloy Steel Bolts</li>
      <li>M5x0.8mm Nylock Nuts</li>
      <li>M2.5x20mmx0.45mm Steel Screws</li>
      <li>M2.5x0.45mm Steel Nuts</li>
      <li>12'x3/4" Double-sided VELCRO</li>
      <li>XT60 3-6S to USB 5V Adapter</li>
      <li>XT60 Y-Splitter</li>
    </ul>
    <h1 id="tools" class="section-title">
      Tools
    </h1>
    <p>
      I also had to obtain certain tools in order to assemble the quadcopter.
      The specific tools I used are of less importance, so I'll just list them
      here.
    </p>
    <ul>
      <li>Peripherals for RPi (monitor, HDMI cable, keyboard, mouse)</li>
      <li>Wire stripper and cutter</li>
      <li>Soldering station</li>
      <li>LiPo-safe fireproof bag</li>
      <li>LiPo balance charger</li>
      <li>Power drill</li>
      <li>Screwdriver set</li>
      <li>Pliers</li>
    </ul>
    <h1 id="assembly" class="section-title">
      Assembly
    </h1>
    <p>Physically assembling the drone was straightforward, albeit tedious.</p>
    <ol>
      <li>Put the arms and plate together to form the frame</li>
      <li>Install motors onto arms</li>
      <li>
        Solder the XT60 connector (and capacitor, if you have one) to the 4-in-1
        ESC battery input.
      </li>
      <li>
        Loosely secure the FC stack to where is supposed to be; solder the
        motors to the ESC underneath the FC. Remember the directions of the
        props! Each motor has 3 wires, each of which can go to any of 3 pads on
        the ESC. Swap any 2 of 3 wires to reverse drive direction. This took me
        forever :(
      </li>
      <li>Securely install the FC stack to the frame</li>
      <li>Install the RPi to the frame</li>
      <li>Strap the battery to the bottom of the frame using VELCRO</li>
      <li>
        Add wiring; connect the splitter to the battery, one side to the USB
        power adapter and the other to the FC. Connect the USB power adapter to
        the RPi. Finally, connect the RPi to the FC using USB-MicroUSB.
      </li>
      <li>
        Install props on motors. Make sure nothing is obstructing your props.
      </li>
    </ol>
    <img src="https://files.terranceli.com/blog/building-a-drone/assembled-drone.jpg" />
    <h5>Assembled drone (without wiring and battery)</h5>
    <h1 id="software" class="section-title">
      Software
    </h1>
    <p>
      Now, we have to code our drone! Specifically, we need two pieces of
      software:
    </p>
    <ol>
      <li>
        A Python script run on the Raspberry Pi to receive joystick positions
        from our Android phone over Bluetooth, process those commands, and send
        them to the FC over a serial connection (USB).
      </li>
      <li>
        An Android app with joystick inputs that connects to the Raspberry Pi.
      </li>
    </ol>
    <p>
      The code (and CAD files) are public for your perusal in{" "}
      <a href="https://github.com/darkterbear/drone/" target="blank">
        this GitHub repository
      </a>
      .
    </p>
    <h2>Android Controller App</h2>
    <p>
      The Android app was heavily inspired by{" "}
      <a href="https://bluedot.readthedocs.io/en/latest/" target="blank">
        Blue Dot
      </a>
      . I modified the source code to give me 2 joystick pads, with the left pad
      for throttle and rudder, and the right pad for elevator and aileron.
    </p>
    <img src="https://files.terranceli.com/blog/building-a-drone/android-controller.png" />
    <h5>Dual d-pad remote control on Android app</h5>
    <h2>Raspberry Pi Python Script</h2>
    <p>
      To receive joystick data via Bluetooth, I used the aforementioned Blue Dot
      library. The data received is in the form of coordinates on each d-pad,
      while the format I needed to send to the FC is an RC command over the
      Multiwii Serial Protocol (MSP).
    </p>
    <p>
      There are libraries out there that abstract away the inner workings of
      MSP; I made some of my own changes to{" "}
      <a href="https://github.com/alduxvm/pyMultiWii" target="blank">
        pymultiwii
      </a>
      , an open source project. However, I needed to build the RC command
      myself. An RC command is composed of 8 short integers, each on a range of
      1000-2000, representing{" "}
      <b>aileron, elevator, throttle, rudder, aux1, aux2, aux3, aux4</b>,
      respectively. You can see some of the processing code below:
    </p>
    <div class="code-section">
      <code>
        # calculate roll, pitch, yaw and throttle from dpad positions <br />
        x, y = 0.0, -1.0
        <br />
        if leftStick and leftStick.is_pressed:
        <br />
        x, y = leftStick.position.x, leftStick.position.y
        <br />
        throttle = (y + 1.0) / 2.0
        <br />
        rudder = x<br />
        <br />
        x, y = 0.0, 0.0
        <br />
        if rightStick and rightStick.is_pressed:
        <br />
        x, y = rightStick.position.x, rightStick.position.y
        <br />
        aileron = x<br />
        elevator = y<br />
        <br />
        # roll, pitch, yaw, throttle, aux1, aux2, aux3, aux4, each from 1000 to
        2000
        <br />
        buf = []
        <br />
        push16(buf, int(aileron * 500 + 1500))
        <br />
        push16(buf, int(elevator * 500 + 1500))
        <br />
        push16(buf, int(throttle * 1000 + 1000))
        <br />
        push16(buf, int(rudder * 500 + 1500))
        <br />
        push16(buf, 1500)
        <br />
        push16(buf, 1000)
        <br />
        push16(buf, 1000)
        <br />
        push16(buf, 1000)
        <br />
      </code>
    </div>
    <p>
      Finally, to run the script on boot, head into <code>/etc/profile</code>{" "}
      and add the command to start the Python script:
    </p>
    <terminal>
      ...
      <br />
      python3 /home/pi/Documents/drone/raspberry-pi/remote-control.py
    </terminal>
    <h1 id="conclusion" class="section-title">
      Conclusion
    </h1>
    <p>
      If you've been following along and building your own drone, you should
      have a flyable drone now! Please observe drone laws in your locality, and
      fly safely. I do plan on implementing autonomous functionality into my
      drone by way of the Raspberry Pi and more sensors (barometer and GPS), and
      I'll keep this blog posted on how it all goes! For now, have a video of me
      flying my drone :)
    </p>
    <video controls>
      <source
        src="https://files.terranceli.com/blog/building-a-drone/flying.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </>
);

export default {
  key,
  title,
  date,
  description,
  content,
};
