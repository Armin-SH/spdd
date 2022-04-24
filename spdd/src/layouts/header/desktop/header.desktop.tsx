import React from 'react';
import styles from "./header.desktop.module.css";
import {Button, Div, Text, ToolBar} from "@elements";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from 'next/link';

const headerLinks = [
  {
    slug: "users",
    title: "پزشکان",
    url: "/users",
  },
  {
    slug: "labs",
    title: "آزمایش پزشکی در منزل",
    url: "/labs",
  },
  {
    slug: "pharmacies",
    title: "داروخانه",
    url: "/pharmacies",
  },
  {
    slug: "posts",
    title: "مجله سلامت",
    url: "/posts",
  },
  {
    slug: "faq",
    title: "سوال های متداول",
    url: "/faq",
  },
  {
    slug: "about-us",
    title: "درباره ما",
    url: "/about-us",
  },
  {
    slug: "contacts",
    title: "تماس با ما",
    url: "/contacts",
  },
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
            <Text color={isCurrent ? "primary" : "grey.500"} type={"bold"} typography={"caption"}>{title}</Text>
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
                <Div className={styles.headerIcon}>
                  <Image src={"/images/header/logo-icon.webp"} layout={"fill"} alt={"logo"} quality={100}/>
                </Div>
                <Div className={styles.headerTitle}>
                  <Image src={"/images/header/logo-title.webp"} layout={"fill"} alt={"logo"} quality={100}/>
                </Div>
              </Div>
            </a>
          </Link>
        </Div>
        <Div className={styles.menuButtonsContainer}>
          {getMenuButtons()}
        </Div>
        <Div desktop={"row"} className={styles.loginButtonContainer}>
          <UserInfo/>
        </Div>
      </Div>
    </ToolBar>
  )
};

const UserInfo = () => {

  return (
    <>
      <Button
        color={"tertiary"}
        className={styles.loginButton}
        variant={"outlined"}>
        <Text className={styles.userInfoName} color={"grey.300"} typography={"caption"}>{"ورود / ثبت نام"}</Text>
      </Button>
    </>
  )
}

export default HeaderDesktop;
