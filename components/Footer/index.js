import React, { useState } from "react";
import Link from 'next/link'
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";

const items = [
  {
    title: "Crypter.",
    menu: [
      {
        title: "Discover",
        url: "/search01",
      },
      {
        title: "Connect wallet",
        url: "/connect-wallet",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Create item",
        url: "/upload-variants",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} href="/">
              <Image
                className={styles.pic}
                src="/images/logo-dark.png"
                srcDark="/images/logo-light.png"
                alt="Fitness Pro"
              />
            </Link>
            <div className={styles.info}>The New Creative Economy.</div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Join Newsletter</div>
            <div className={styles.text}>
              Subscribe our newsletter to get more free design course and
              resource
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Enter your email"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 UI8 LLC. All rights reserved
          </div>
          <div className={styles.note}>
            We use cookies for better service. <a href="/#">Accept</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
