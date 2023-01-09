const key = "building-mahjong";
const title = "Building Mahjong";
const publishedDate = "December 15th, 2021";
const updatedDate = undefined;
const description = `As the boredom of quarantine sets in, I embarked on a project to build
multiplayer Mahjong as a web app so I can play with my friends. Read
about the rules, my design, and some challenges of the implementation!`;

const content = (
  <>
    <h1 class="section-title">Contents</h1>
    <ol>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#mahjong">How is Mahjong Played?</a>
      </li>
      <li>
        <a href="#implementation">Design and Implementation</a>
      </li>
      <li>
        <a href="#conclusion">Conclusion</a>
      </li>
    </ol>
    <h1 id="introduction" class="section-title">
      Introduction
    </h1>
    <p>
      Mahjong is a tile-based game originating in 19th-century China. It's
      played with 4 players, and is highly strategic. Somewhere down the line, a
      Solitaire-based version of the game emerged, involving a single player
      selecting identical uncovered tiles to take them off the board. It was
      surprisingly difficult to find a good online version of the traditional
      game. Everywhere I search, I find Mahjong Solitaire. Thus, I set out to
      build it myself.
    </p>
    <h1 id="mahjong" class="section-title">
      How is Mahjong Played?
    </h1>
    <p>
      There are countless variations of Mahjong, so my explanation of the rules
      is bound to upset at least some portion of the Mahjong community. I will
      talk about a simple variation that I play and have implemented. I will
      also only discuss the "practical" aspects of the game, and not any of the
      complicated formalities in dealing and shuffling.
    </p>
    <h2>Tiles</h2>
    <img src="https://files.terranceli.com/blog/building-mahjong/tiles.png" />
    <h5>
      Standard Mahjong tiles.{" "}
      <a
        target="_blank"
        href="https://commons.wikimedia.org/wiki/Category:SVG_Oblique_illustrations_of_Mahjong_tiles"
        rel="noreferrer"
      >
        Mahjong tiles
      </a>{" "}
      by{" "}
      <a
        target="_blank"
        href="https://commons.wikimedia.org/wiki/User:Cangjie6"
        rel="noreferrer"
      >
        Cangjie6
      </a>{" "}
      is licensed under CC BY-SA 4.0.{" "}
    </h5>

    <p>
      There are a total of 136 tiles, divided among 5 suits. The <b>dots</b>,{" "}
      <b>characters</b>, and <b>bamboo</b> suits have 9 ranks each, with 4
      identical tiles for each rank. The <b>dragon</b> and <b>wind</b> suits
      have 3 and 4 types of tiles, respecticely, with each type having 4
      identical tiles. There are more special tiles used in other variations of
      Mahjong; check out{" "}
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/Mahjong#Bonus_tiles"
        rel="noreferrer"
      >
        this page
      </a>{" "}
      to learn more.
    </p>

    <h2>Rules</h2>
    <p>
      Mahjong is a turn-based game, with the turn going counter-clockwise. There
      is an intricate (dare I say, superstitious) shuffling process that I won't
      go into. A hand is 13 tiles, initially completely concealed. During a
      player's turn, they draw a tile from the "wall" (deck), and discard one of
      their choice. The goal is to obtain certain combinations of tiles, called{" "}
      <b>melds</b>.
    </p>

    <img
      style={{ maxWidth: 400 }}
      src="https://files.terranceli.com/blog/building-mahjong/melds.png"
    />
    <h5>Melds. Left: pong, right: chow (5, 6, 7).</h5>

    <p>
      3 identical tiles forms a <b>pong</b>. 3 tiles of the same suit in
      consecutive rank forms a <b>chow</b>. Note that dragon and wind suits
      cannot create chows since those tiles don't have ranks. Finally, 2
      identical tiles forms a pair.
    </p>
    <p>
      The objective of the game is to create a hand with 4 chows/pongs and 1
      pair with 14 tiles. In many variations, players can also win with 7 pairs,
      though this is incredibly rare and is not something I included in my
      implementation. Notice that because a hand is 13 tiles, players must draw
      or "steal" a tile to complete a winning hand.
    </p>

    <img
      style={{ maxWidth: 400 }}
      src="https://files.terranceli.com/blog/building-mahjong/win.png"
    />
    <h5>
      A winning hand. From left to right: chow (5, 6, 7 characters), chow (4, 5,
      6 dots), chow (3, 4, 5 dots), pair (4 bamboo), chow (4, 5, 6 bamboo).
    </h5>

    <p>
      <b>Stealing</b> is an integral part of the game. Players can "steal" the
      discarded tiles from other players if they can create a chow/pong/win by
      stealing that tile. The stealing player must expose the created meld or
      victory. Exposed tiles cannot be discarded afterwards.
    </p>

    <p>
      Since multiple steals may be possible by different players for any
      discard, there is an order of priority.
      <ol>
        <li>Win: stealing to win has highest priority</li>
        <li>
          Pong: since it requires 3 identical tiles and there are only 4 of each
          tile, there can only be 1 pong for any discard.
        </li>
        <li>
          Chow: a tile can form a chow with tiles from multiple players. Thus,{" "}
          <b>
            only the player directly after the discarder is eligible to chow
          </b>
          .
        </li>
      </ol>
    </p>

    <h1 id="implementation" class="section-title">
      Design and Implementation
    </h1>

    <h2>Architecture</h2>
    <p>
      Like any game, the bulk of it involves players making actions and
      receiving game state updates. I used a hybrid REST + Socket.io API
      architecture on Express, a React client, all written in Typescript for
      that sweet ~object-oriented programming~. All server state will be held in
      memory, no need for a database.
    </p>

    <img
      style={{ maxWidth: 400 }}
      src="https://files.terranceli.com/blog/building-mahjong/architecture.png"
    />
    <h5>High-level architecture</h5>

    <h2>Game State</h2>
    <p>
      I will be holding all state in memory. These games are played in real-time
      anyways, so there no need to persist data. To maintain the state of
      lobbies and games, I built several object classes.
    </p>

    <div class="code-section">
      <code>
        export default class Room {"{"} <br />
        &nbsp; code: string; <br />
        &nbsp; players: Player[]; <br />
        &nbsp; leader?: Player; <br />
        &nbsp; deck: Tile[]; <br />
        &nbsp; turn: number; <br />
        &nbsp; pendingAction?: ActionIntent;
        <br />
        &nbsp; winner: number;
        <br />
        &nbsp; <br />
        &nbsp; private static rooms: Map{"<"}string, Room{">"} = new Map();
        <br />
        &nbsp; <br />
        &nbsp; // ...
        <br />
        {"}"} <br />
      </code>
      <code>
        export default class Player {"{"}
        <br />
        &nbsp; id: string;
        <br />
        &nbsp; username: string;
        <br />
        &nbsp; room?: Room;
        <br />
        &nbsp; handConcealed: Tile[];
        <br />
        &nbsp; handExposed: Tile[][];
        <br />
        &nbsp; discarded: Tile[];
        <br />
        &nbsp; socket?: Socket;
        <br />
        <br />
        &nbsp; private static players: Map{"<"}string, Player{">"} = new Map();
        <br />
        <br />
        &nbsp; // ... <br />
        {"}"}
        <br />
      </code>
    </div>

    <p>
      The main role of the server logic itself is to receive requests from users
      (e.g. play this tile in my hand), update the central game state, and emit
      updates to other players in the lobby.
    </p>

    <h2>Challenges</h2>
    <h4>Win Condition</h4>
    <p>
      The first main challenge was determining whether or not a hand is winning.
      After perusing it for a bit, I decided there was no simple, elegant
      algorithm for this. For instance, 1, 2, 2, 3, 3, 4 forms 2 melds: 1, 2, 3
      and 2, 3, 4. The other challenge is that tiles may participate in multiple
      melds, but perhaps only one configuration leads to victory. Consider 2, 3,
      4, 4, 5, 6. Should the 4's participate in a pair, or should 2 consecutive
      melds be formed?
    </p>
    <p>
      I approached this recursively:{" "}
      <b>
        try every possible meld that we can make with the given hand, and ask
        whether or not the remaining tiles are enough to finish the winning hand
      </b>
      . At face value, the complexity of this algorithm seems atrocious. In
      practicality, the depth of this recursion never exceeds 4, and each hand
      likely contains few combinations of tiles that form potential melds. I
      have also considered memoization for dynamic programming, but it works
      well enough that I haven't found the need for this optimization.
    </p>

    <h4>Window of Opportunity</h4>
    <p>
      Mahjong is slightly different from many other games in that after a player
      discards, there is a time period in which others have the opportunity to
      steal the tile. There is also a challenge in handling multiple steals in
      order of priority.
    </p>
    <p>
      The server maintains an <code>ActionIntent</code> object that represents
      the current pending action. After a certain amount of time without
      interruption, the action will be finalized. This allows the pending action
      to be cancelled if a higher priority action (e.g. pong over chow)
      overrides it.
    </p>
    <div class="code-section">
      <code>
        export default class ActionIntent {"{"}
        <br />
        &nbsp; username: string;
        <br />
        &nbsp; action: Action;
        <br />
        &nbsp; tile: Tile;
        <br />
        &nbsp; timeout: NodeJS.Timeout;
        <br />
        &nbsp; executionTime: number;
        <br />
        <br />
        &nbsp; ... <br />
        {"}"}
        <br />
      </code>
    </div>

    <h1 id="conclusion" class="section-title">
      Conclusion
    </h1>
    <p>
      This project has been a great exercise in both design and algorithms :) I
      plan on maintaining this in the long term. Feel free to{" "}
      <a target="_blank" href="https://mahjong.terranceli.com" rel="noreferrer">
        play with friends
      </a>
      , check out the{" "}
      <a
        target="_blank"
        href="https://github.com/darkterbear/mahjong"
        rel="noreferrer"
      >
        code
      </a>
      , and let me know if you find any bugs!
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
