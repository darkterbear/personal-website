import "./Copyright.scss";

const Copyright = ({ white }) => {
  return (
    <p id="copyright" className={white ? "white" : ""}>
      Copyright © Terrance Li {new Date().getFullYear()}
    </p>
  );
};

export default Copyright;
