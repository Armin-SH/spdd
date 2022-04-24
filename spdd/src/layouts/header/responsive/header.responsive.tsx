import React, {useState} from 'react';
import {Button, Div, Text, ToolBar} from "@elements";
import styles from "./header.responsive.module.css";
import {Drawer} from "@mui/material";
import Image from "next/image";
import DrawerMenu from '../sub-component/drawer/drawer-menu'
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
    isNew: true
  },
  {
    slug: "home-care",
    title: "خدمات پزشکی در منزل",
    url: "/home-care",
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

const HeaderResponsive = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const otpModalToggle = () => {
    setOpenDrawer(false);
    setOpen(true);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <ToolBar>
      <Div className={styles.navbar}>
        <Div>
          <Link href={"/"}>
            <a>
              <Div className={styles.logo}>
                <Image src={"/images/header/logo.webp"} layout={"fill"} alt={"logo"} quality={100}/>
              </Div>
            </a>
          </Link>
        </Div>
        <Div>
          <Div className={styles.iconButton}>
            <UserInfo/>
          </Div>
          <Div className={styles.iconButton}>
            <Link href={"tel://02191004191"}>
              <a>
                <Div className={styles.icon}>
                  <Image src={'/vercel.svg'} layout={"fill"} alt={"تلفن"}/>
                </Div>
              </a>
            </Link>
          </Div>
          <Div className={styles.hamWrapper}>
            <Div className={styles.icon} onClick={toggleDrawer(true)}>
              <Image src={'/vercel.svg'} layout={"fill"} alt={"تلفن"}/>
            </Div>
          </Div>
        </Div>
        <Drawer
          anchor={"left"}
          open={openDrawer}
          onClose={toggleDrawer(false)}>
          <DrawerMenu openDrawer={openDrawer} menuCallBack={otpModalToggle} items={headerLinks} onClick={toggleDrawer(false)}/>
        </Drawer>
      </Div>
    </ToolBar>
  )
}

const UserInfo = () => {

  return (
    <>
      <Button
        color={"tertiary"}
        className={styles.loginButton}
        variant={"outlined"}>
        <Text className={styles.userInfoName} color={"tertiary.main"} typography={"body"}>ورود / ثبت نام</Text>
      </Button>
    </>
  )
}


export default HeaderResponsive;
