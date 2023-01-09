const key = "basic-ubuntu-server-security";
const title = "Basic Ubuntu server security";
const publishedDate = "June 6th, 2020";
const updatedDate = undefined;
const description = `After setting up an Ubuntu server, there are many steps you can take
to lock it down and discourage attacks. We'll go over some of the
basic steps you can do to improve your server's security.`;

const content = (
  <>
    <h1 class="section-title">Contents</h1>
    <ol>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#prerequisites">Prerequisites</a>
      </li>
      <li>
        <a href="#update-and-upgrade">Update and Upgrade</a>
      </li>
      <li>
        <a href="#user-management">User Management</a>
      </li>
      <li>
        <a href="#firewall">Firewall</a>
      </li>
      <li>
        <a href="#locking-down-ssh">Locking Down SSH</a>
      </li>
      <li>
        <a href="#conclusion">Conclusion</a>
      </li>
    </ol>
    <h1 id="introduction" class="section-title">
      Introduction
    </h1>
    <p>
      This tutorial is for those who want to secure their Ubuntu servers after
      setting them up, perhaps coming from my previous{" "}
      <a href="/#/blog/ubuntu-server-setup-with-do">
        tutorial on setting up an Ubuntu server
      </a>
      . Security is incredibly important for obvious reasons, but we acknowledge
      that there is no such thing as impenetrable security. Nevertheless, we
      strive to improve security by making it more difficult for attackers to
      infiltrate our server. Keep in mind, these are only some of the basic
      first-steps you can take to secure your server. There are plenty of more
      advanced procedures and techniques to further secure your server.
    </p>
    <h1 id="prerequisites" class="section-title">
      Prerequisites
    </h1>
    <ul>
      <li>An Ubuntu server that you have SSH access to</li>
    </ul>
    <h1 id="update-and-upgrade" class="section-title">
      Update and Upgrade
    </h1>
    <p>
      An important part of security is to keep your server up to date with the
      latest security patches. Commonly used software on your server and even
      Linux and Ubuntu themselves have bugs and vulnerabilities that get patched
      out through software updates.
    </p>
    <p>
      We want to update the list of available packages and their versions in{" "}
      <code>apt</code>, and then install those newer versions of the packages
      that you already have installed. We can accomplish this with a single
      command:
    </p>
    <terminal>$ sudo apt update && sudo apt upgrade</terminal>
    <p>
      This is something you want to do regularly. In fact, you could automate
      this process if you'd like using crontab, which we won't go over here.
    </p>
    <h1 id="user-management" class="section-title">
      User Management
    </h1>
    <p>
      Separating users from each other is incredibly important for
      distinguishing permissions and leaving a papertrail. Additionally, it is
      bad practice to use the <code>root</code> user. Here, we'll discuss how to
      create a new user, give them <code>sudo</code> permissions, changing
      users, and allowing SSHing into a user account.
    </p>
    <h2>Creating a new user</h2>
    <p>
      To create a new user, run the following command and respond to the
      prompts.
    </p>
    <terminal>$ sudo adduser [USERNAME]</terminal>
    <h2>
      Giving a user <code>sudo</code> perms
    </h2>
    <p>To add a user to the group of sudo-ers, run the following:</p>
    <terminal>$ sudo usermod -aG sudo [USERNAME]</terminal>
    <h2>Switching Users</h2>
    <p>
      To switch to a user, run the following and enter the password if prompted:
    </p>
    <terminal>$ su [USERNAME]</terminal>
    <p>If you are a sudo-er, you may also switch to the root user:</p>
    <terminal>$ sudo -i</terminal>
    <p>To switch back from a user:</p>
    <terminal>$ exit</terminal>
    <h2>Allowing SSH into user accounts</h2>
    <p>
      If you're still accessing your server by SSH'ing into root, we want to
      change that. Allowing root SSH is like leaving the your safe open at home.
      Sure, a burglar needs to break into the home first, but once they do, the
      stuff in your safe is as good as gone.
    </p>
    <p>
      The solution is to directly ssh into your user, rather than into root and
      switching users. To do this, we need to add your local machine's public
      key to the <code>~/.ssh/authorized_keys</code> of the given user.
    </p>
    <p>First, switch to the given user.</p>
    <terminal>$ su [USERNAME]</terminal>
    <p>
      Create the <code>~/.ssh</code> directory if it doesn't exist.
    </p>
    <terminal>cd && mkdir .ssh</terminal>
    <p>
      Create/open the file <code>authorized_keys</code> and paste in your
      machine's SSH public key.
    </p>
    <terminal>$ nano authorized_keys</terminal>
    <p>Your public key should look something like this (my public key):</p>
    <terminal>
      ssh-rsa
      AAAAB3NzaC1yc2EAAAADAQABAAABAQCsAXPEhsmJbFefXWjisKDAS/FLfZiXU7Ptkn3QlsAJ1tJoY5VCLdjRUUAEyEpKy5kXGrzn0aOBKnUNWkPgkySzbstWoF5KQJG4cLT3z4wxbv62gABlBii7RXfjdqCajGLGHweJMePN6Sf2/LUbmJIbrjxBIr5VDufhuRVtcwpAwY8b3v/1ZknfQJRmJb8eAGOT15nwtasUeNauK+YEf2WV9/EKnVyum/2HbgSH2gb9myrDs4uv79ME5GzReXkPJSyJ2PZjihKUll39vZYddzl2Ub2OoUS6h14mNX7EuxR06nt7ROnk+h4R7iHxIwFJ8nImLprziDQy9+0FkNOaIu0x
      Terrance Li@TERRANCE
    </terminal>
    <p>
      For a refresher on how to get your local machine's public key, visit my{" "}
      <a href="/#/blog/ubuntu-server-setup-with-do#ssh-keys">
        previous tutorial
      </a>
      .
    </p>
    <h1 id="firewall" class="section-title">
      Firewall
    </h1>
    <p>
      Back in the olden days, server administrators had to worry about 2 primary
      vectors of attack: physical attacks and network attacks. Physical attacks
      involve directly accessing server hardware, injecting software using thumb
      drives, etc. With the advent of cloud computing, most attacks have shifted
      towards network-based infiltrations. Therefore, we must pay special
      attention to what Internet traffic we allow in and out of our server. We
      can control this with a <b>firewall</b>, which has configurable rules on
      what traffic to block.
    </p>
    <p>
      You need to be a sudo-er to perform these steps. We will use{" "}
      <code>ufw</code>; <code>iptables</code> is another program that suits this
      purpose, but it is more complex.
    </p>
    <p>
      By default, <code>ufw</code> denies traffic through ports. You specify
      what ports you allow traffic through:
    </p>
    <terminal>$ sudo ufw allow [PORT]</terminal>
    <p>
      We must allow port 22 (the port that SSH runs on). Depending on what else
      your server is performing, you may want to open other ports as well, such
      as 80 for HTTP.
    </p>
    <p>Finally, you must enable the firewall for it to take effect:</p>
    <terminal>$ sudo ufw enable</terminal>
    <p>
      <b>WARNING:</b> make sure that you are allowing SSH port (22 by default)
      before you enable the firewall, or else you may lock yourself out and make
      life very difficult!
    </p>
    <h1 id="locking-down-ssh" class="section-title">
      Locking Down SSH
    </h1>
    <p>
      Following the theme of the previous section, we must also secure SSH
      access. This involves disallowing <b>SSH into root</b> and{" "}
      <b>password authentication SSH</b>
    </p>
    <terminal>$ nano /etc/ssh/sshd_config</terminal>
    <p>
      This takes you into the SSH config file. Find the following configuration
      lines and set them as such:
    </p>
    <terminal>
      PermitRootLogin no
      <br />
      ...
      <br />
      PasswordAuthentication no
      <br />
    </terminal>
    <p>
      Also make sure to remove the "#" in front of the lines if they exist to
      uncomment the lines. Finally, restart the SSH service:
    </p>
    <terminal>$ sudo service ssh restart</terminal>
    <h1 id="conclusion" class="section-title">
      Conclusion
    </h1>
    <p>
      <b>
        By no means is this a comprehensive list of things you can do to secure
        your server.
      </b>{" "}
      You can continue by
      <a href="https://www.techrepublic.com/article/how-to-enable-secure-shared-memory-on-ubuntu-server/">
        securing shared memory
      </a>
      ,{" "}
      <a href="https://www.linode.com/docs/security/using-fail2ban-to-secure-your-server-a-tutorial/">
        installing fail2ban
      </a>
      , and so on. These are simply some of the most important first steps to
      take. Happy sysadmin-ing!
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
