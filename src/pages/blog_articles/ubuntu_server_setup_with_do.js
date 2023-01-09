export default (
  <>
    <a href="/">
      <h3 id="header">terrance li</h3>
    </a>
    <div class="article-page">
      <div class="content">
        <h1>Ubuntu Server Setup with DigitalOcean</h1>
        <span>Published May 10th, 2020</span>
        <p class="description">
          When we talk about the "cloud" and the services that run on the
          Internet such as Facebook and Twitter, we cannot avoid talking about{" "}
          <b>servers</b>. Servers interact with clients over the Internet to
          provide different services, such as streaming videos, hosting
          gameplay, and serving content. In this tutorial, you'll learn how to
          set up your very own server with <b>DigitalOcean</b>, a cloud-hosting
          provider!
        </p>
        <h1 class="section-title">Contents</h1>
        <ol>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#prerequisites">Prerequisites</a>
          </li>
          <li>
            <a href="#ssh-keys">SSH Keys</a>
          </li>
          <li>
            <a href="#digitalocean-droplet">DigitalOcean Droplet</a>
          </li>
          <li>
            <a href="#accessing-your-server">Accessing Your Server</a>
          </li>
          <li>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ol>
        <h1 id="introduction" class="section-title">
          Introduction
        </h1>
        <p>
          Alright, let's rewind. <b>What are servers?</b> Servers are just
          computers that provide services to other client computers over the
          Internet. Your computer can be a server if you tried hard enough
          (albeit an insecure one). There are different protocols servers can
          use to communicate with clients, such as HTTP and FTP. Internally,
          servers run programs that handle these communications with the client
          to perform their function.
        </p>
        <p>
          Nearly every service on the Internet has at least one server behind
          it. Snapchat? Server. This website? Server. Google? Lots and lots of
          servers. Take a webpage server; a server that serves HTML files to the
          client so they can see a webpage (just like this one). The client and
          server communicate over HTTP, working together to get this HTML file
          on your screen.
        </p>
        <h1 id="prerequisites" class="section-title">
          Prerequisites
        </h1>
        <ul>
          <li>
            A DigitalOcean account. Sign up{" "}
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </li>
          <li>
            A terminal with <code>ssh</code> and <code>ssh-keygen</code>. Git
            Bash, macOS Terminal, and Unix terminals should work
          </li>
          <li>
            DigitalOcean Droplets cost money, starting at $5/mo. However, they
            often give free credits to new users.
          </li>
        </ul>
        <h1 id="ssh-keys" class="section-title">
          SSH Keys
        </h1>
        <p>
          <b>
            If you already have an SSH keypair on your local machine, you can
            skip this step.
          </b>{" "}
          SSH is a tool and network protocol that lets us interact with our
          server using a secure shell terminal. To set this up, we must first
          generate some cryptographic keys using <code>ssh-keygen</code>.
        </p>
        <terminal>$ ssh-keygen -t rsa</terminal>
        <p>
          You can enter where you want the keys to be located, but its nice to
          keep them in their default locations at
          <code>~/.ssh/id_rsa</code> and <code>~/.ssh/id_rsa.pub</code> by{" "}
          <b>leaving the locations blank.</b>
        </p>
        <p>
          The <code>id_rsa</code> file is the private key, which should be kept
          exactly that: private. The
          <code>id_rsa.pub</code> file is the public key, which will allow the
          server to communicate with you. The result should look something like
          this:
        </p>
        <terminal>
          $ ssh-keygen -t rsa <br />
          Generating public/private rsa key pair.
          <br />
          Enter file in which to save the key (~/.ssh/id_rsa):
          <br />
          Enter passphrase (empty for no passphrase): <br />
          Enter same passphrase again: <br />
          Your identification has been saved in ~/.ssh/id_rsa.
          <br />
          Your public key has been saved in ~/.ssh/id_rsa.pub.
          <br />
          The key fingerprint is:
          <br />
          SHA256:gIv4xUtNCRJ9auLwo+BfTxU/+5s4MC8c1knNzd3GvP8 User@Computer
          <br />
        </terminal>
        <p>
          Head into the DigitalOcean dashboard, and go to Settings -> Security.
          From there, you should be able to add the SSH public key that you just
          generated. Open up the <code>id_rsa.pub</code> file and copy-paste the
          contents into the DigitalOcean interface.
        </p>
        <img src="https://files.terranceli.com/blog/ubuntu-server-setup-with-do/ssh.png" />
        <h5>The SSH section in Settings -> Security</h5>
        <h1 id="digitalocean-droplet" class="section-title">
          DigitalOcean Droplet
        </h1>
        <p>
          Now, we will spin up a DigitalOcean "Droplet", which is a virtual
          private server. You can think of this as renting your own server for
          as low as 5 bucks a month.
        </p>
        <ol>
          <li>In the top-right of the DigitalOcean dashboard, click Create</li>
          <li>Select "Droplets"</li>
          <li>
            For "image", choose any supported version of Ubuntu (I recommend the
            latest LTS version)
          </li>
          <li>
            Choose any plan that suits your needs. For most personal use, the
            cheapest $5/mo plan works
          </li>
          <li>Select the datacenter closest to your location</li>
          <li>Optional: enable Monitoring and IPv6</li>
          <li>
            <b>
              Select "SSH Keys" for authentication, and check the SSH key that
              you added to DigitalOcean earlier. This allows you to access your
              Droplet via SSH
            </b>
          </li>
          <li>
            Give your Droplet a readable hostname rather than the pregenerated
            gibberish
          </li>
          <li>Hit Create Droplet :)</li>
        </ol>
        <img src="https://files.terranceli.com/blog/ubuntu-server-setup-with-do/ssh-droplet.png" />
        <h5>
          Droplet authentication options; make sure you have "SSH keys" selected
        </h5>
        <h1 id="accessing-your-server" class="section-title">
          Accessing Your Server
        </h1>
        <p>
          Once your Droplet is done initializing, you should be able to see its
          public IPv4 address. On the Droplets dashboard, you should see
          something like this:
        </p>
        <img src="https://files.terranceli.com/blog/ubuntu-server-setup-with-do/droplet.png" />
        <h5>Droplet dashboard; you can see your Droplet's IP address here</h5>
        <p>
          Copy the IP address to your clipboard; we will use it to SSH into the
          server. From the same local machine you used to create the SSH keys in
          the first step, run the following in terminal:
        </p>
        <terminal>$ ssh root@[YOUR DROPLET'S IP HERE]</terminal>
        <p>
          If all goes well, you should be SSH'ed into your server! You can treat
          this terminal as if it were directly connected to your server.
        </p>
        <h1 id="conclusion" class="section-title">
          Conclusion
        </h1>
        <p>
          This concludes my tutorial on setting up an Ubuntu server on
          DigitalOcean! Make sure to secure your server and build cool things! I
          will be coming out with security and development tutorials in the
          future :)
        </p>
      </div>
    </div>
    <p id="copyright">Copyright © Terrance Li 2022</p>
  </>
);
