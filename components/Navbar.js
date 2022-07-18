import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "./repeating/TextFormatting.jsx";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.mainNav}>
      <div>
        <h6>DebbieDanks</h6>
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          isNavExpanded
            ? `${styles.navigationMenu} ${styles.expanded}`
            : `${styles.navigationMenu}`
        }
      >
        <ul>
          <Link href="/">
            <a className={styles.anchor}>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/shop">
            <a className={styles.anchor}>
              <li>Shop</li>
            </a>
          </Link>
          <Link href="/archive">
            <a className={styles.anchor}>
              <li>Archive</li>
            </a>
          </Link>
          <li>
            <Button>Join free</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
