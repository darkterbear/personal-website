import "./Header.scss";

const Header = ({ white }) => {
  return (
    <a href="/">
      <h3 id="header" class={white ? "white" : ""}>
        terrance li
      </h3>
    </a>
  );
};

export default Header;
