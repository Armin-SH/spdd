import React from 'react';
import styles from "./drawer-menu.module.css";
import {Div, Text} from "@elements";
import Image from "next/image";
import Link from 'next/link';
import {DrawerMenuProps} from './drawer-menu.props'
import {useRouter} from "next/router";


const DrawerMenu = (props: DrawerMenuProps) => {
  const router = useRouter();
  const {onClick, items} = props;

  return (
    <Div desktop={"column"} className={styles.drawerContainer}>
      <Div desktop={"column"} className={styles.profileContainer}>
        <Div className={styles.topProfileContainer}>
          <Div className={styles.imageContainer}>
            <Image alt={"عکس پروفایل"} src={'/vercel.svg'} layout={"fill"} objectFit={"contain"}/>
          </Div>
          <Div className={styles.drawerNotification}>
            <div className={styles.dot}/>
            <Image alt={"notification"} src={'/vercel.svg'} width={14} height={15} objectFit={"contain"}/>
          </Div>
        </Div>
        <Div className={styles.nameContainer} desktop={"column"}>
          <Div>
            <Text color={"grey.600"} typography={"body"}>
              کاربر گرامی:
            </Text>
            <Text className={styles.userInfo} color={"grey.600"} typography={"body"}>
             ثبت نام نشده
            </Text>
          </Div>
        </Div>
      </Div>
      <Div desktop={"column"} className={styles.linkContainer}>
        {items.map((item: any, index: any) => {
          const isCurrent = router.pathname.indexOf(item?.url) !== -1;
          return (
            <Link
              key={`drawer_${index}`}
              href={item?.url}>
              <a
                className={styles.itemContainer}
                color={"secondary"}>
                <Div onClick={onClick} className={styles.drawerItemContainer}>
                  <Div>
                    <Image src={`/icons/${item.slug}.svg`} width={20} height={20} alt={"profile"} objectFit={"contain"}/>
                    <Text typography={"body"} type={"bold"} className={styles.drawerItems} color={isCurrent ? "primary" : "grey.600"}>
                      {item.title}
                    </Text>
                  </Div>
                  {item?.isNew ? (
                    <Div className={styles.new}>
                      <Text className={styles.badgeText} color={"control.main"} variant={"body2"}>جدید</Text>
                    </Div>
                  ) : null}
                </Div>
              </a>
            </Link>
          )
        })}
      </Div>
      <Div className={styles.drawerLogoContainer}>
        <Div>
          <a referrerPolicy="origin" target="_blank" href='https://ecunion.ir/verify/pezeshkbook.com?token=618411060ace8d9d5082'>
            <Div className={styles.drawerLogo}>
              <Image layout={"fill"} alt={"logo etehadie"} src={"/images/etehadie.webp"}/>
            </Div>
          </a>
        </Div>
        <Div>
          <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=116892&amp;Code=illAlZD9lVotcSjzIBOv">
            <Div className={styles.drawerLogo}>
              <Image layout={"fill"} alt={"logo enamad"} src={"/images/enamad.webp"}/>
            </Div>
          </a>
        </Div>
        <Div>
          <a referrerPolicy="origin" target="_blank" href="https://logo.samandehi.ir/Verify.aspx?id=132924&p=rfthxlaouiwkpfvluiwkaods">
            <Div className={styles.drawerLogo}>
              <Image layout={"fill"} alt={"logo samandehi"} src={"/images/samandehi.webp"}/>
            </Div>
          </a>
        </Div>
      </Div>
      <Div desktop={"column"} className={styles.supportContainer}>
        <Div className={styles.supportImage}>
          <Image src={'/vercel.svg'} layout={"fill"} objectFit={"contain"} alt={"support"}/>
        </Div>
        <Text color={"grey.600"} typography={"body"}>
          تماس با پشتیبانی
        </Text>
        <Text color={"grey.600"} typography={"body"}>
          <a href="tel:+982191004191">021-91004191</a>
        </Text>
      </Div>
    </Div>
  )
}

export default DrawerMenu;
