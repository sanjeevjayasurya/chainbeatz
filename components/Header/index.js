import React, { useState } from "react";
import { Link } from "react-router-dom";
import Link from 'next/link'
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";

const nav = [
  {
    url: "/search01",
    title: "Discover",
  },
  {
    url: "/faq",
    title: "How it work",
  },
  {
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} href="/">
          <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                href={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            href="/upload-variants"
          >
            Upload
          </Link>
        </div>
        <Notification className={styles.notification} />
        <Link
          className={cn("button-small", styles.button)}
          href="/upload-variants"
        >
          Upload
        </Link>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          href="/connect-wallet"
        >
          Connect Wallet
        </Link>
        <User className={styles.user} />
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;