import "./Header.scss";

const Header = ({ to, label }) => {
  return (
    <div id="header">
      <a href={to}>← {label}</a>
    </div>
  );
};

export default Header;
