import React from "react";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import { Button } from "./repeating/TextFormatting.jsx";
const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <div>
        <h1>MakeItPolitical.com</h1>
      </div>
      <div>
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
          <Link href="/youtube">
            <a className={styles.anchor}>
              <li>Youtube</li>
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
