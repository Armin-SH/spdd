import React from 'react';
import styles from "./header.desktop.module.css";
import {Div, Text, ToolBar} from "@elements";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from 'next/link';
import {Logo} from '@image'

const headerLinks = [
  {
    slug: "products",
    title: "محصولات",
    url: "/products",
  },
  {
    slug: "blog",
    title: "مقالات",
    url: "/blog",
  },
  {
    slug: "about-us",
    title: "درباره ما",
    url: "/about-us",
  },
  {
    slug: "contact-us",
    title: "تماس با ما",
    url: "/contact-us",
  },
  {
    slug: 'gallery',
    title: 'گالری تصاویر',
    url: '/gallery'
  }
];

const HeaderDesktop = () => {
  const router = useRouter();

  const getMenuButtons = () => {
    return headerLinks.map(({title, url}: any) => {
      const isCurrent = router.pathname.indexOf(url) !== -1;
      return (
        <Link
          key={title}
          href={url}>
          <a className={styles.headerLinkContainer}>
            <Text color={isCurrent ? "control.main" : "info.main"} type={"bold"} typography={"caption"}>{title}</Text>
            {isCurrent ? <Div className={styles.currentHeaderLink}/> : null}
          </a>
        </Link>
      )
    })
  };

  return (
    <ToolBar>
      <Div className={styles.navBar}>
        <Div className={styles.logoWrapper}>
          <Link href={"/"}>
            <a>
              <Div className={styles.logo}>
                <Image alt={'logo'} src={Logo} layout={'fill'} objectFit={"contain"}/>
              </Div>
            </a>
          </Link>
        </Div>
        <Div className={styles.menuButtonsContainer}>
          {getMenuButtons()}
        </Div>
      </Div>
    </ToolBar>
  )
};

export default HeaderDesktop;
