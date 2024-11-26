
import CurrentLink from "./CurrentLink/CurrentLink";
import styles from "./Header.module.css";
import HomeLink from "./HomeLink/HomeLink";
import Today from "./Today/Today";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <Today />
      <CurrentLink />
      <HomeLink />
    </header>
  );
};

export default Header;
