// SideBar component
import { Link } from "react-router-dom";
import BreakfastIcon from "../icons/BreakfastIcon";
import BrunchIcon from "../icons/BrunchIcon";
import DinnerIcon from "../icons/DinnerIcon";
import HomeIcon from "../icons/HomeIcon";
import LunchIcon from "../icons/LunchIcon";
import styles from "./Header.module.css";

// sidebar menu: name & icon component
const menu = [
  {
    name: "Home",
    icon: <HomeIcon />,
    smallIcon: <HomeIcon size="small" />,
  },
  {
    name: "Breakfast",
    icon: <BreakfastIcon />,
    smallIcon: <BreakfastIcon size="small" />,
  },
  {
    name: "Lunch",
    icon: <LunchIcon />,
    smallIcon: <LunchIcon size="small" />,
  },
  {
    name: "Dinner",
    icon: <DinnerIcon />,
    smallIcon: <DinnerIcon size="small" />,
  },
  {
    name: "Brunch",
    icon: <BrunchIcon />,
    smallIcon: <BrunchIcon size="small" />,
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <div className={styles.logoContainer}>
          <span className={styles.appTitle}>My Cafe</span>
          <span className={styles.appDesc}>
            PRISMS Cafeteria Analysis Service
          </span>
        </div>
      </Link>

      <ul className={styles.menuContainer}>
        {menu.map((item) => (
          <li className={styles.menuItem} key={item.name}>
            <Link
              className={styles.itemWrapper}
              to={item.name === "Home" ? "/" : item.name.toLowerCase()}
            >
              {item.icon}
              <p className={styles.itemName}>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
