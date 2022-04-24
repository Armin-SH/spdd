import React from 'react';
import Link from 'next/link';
import {Button, Div, Text} from '@elements';
import styles from "./footer.module.css";
import Image from "next/image";
import {FooterProps} from "./footer.props";

const dataLinks = [
  {
    slug: "users",
    title: "پزشکان",
    url: "users",
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
    slug: "home-care",
    title: "خدمات پزشکی در منزل",
    url: "/home-care",
  },
  {
    slug: "posts",
    title: "مجله سلامت",
    url: "posts/",
  },
  {
    slug: "faq",
    title: "سوال های متداول",
    url: "faq",
  },
  {
    slug: "about-us",
    title: "درباره ما",
    url: "about-us",
  },
  {
    slug: "contacts",
    title: "تماس با ما",
    url: "contacts",
  },
];


const Footer = (props: FooterProps) => {
  const {gray, withoutFooter} = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (withoutFooter) {
    return null;
  }

  return (
    <Div desktop={"column"}>
        <Div desktop={"column"} className={styles.container}>
          <Div onClick={scrollToTop} className={styles.arrowUpContainer}>
            <Div className={styles.arrowUp}>
              <Image src={'/vercel.svg'} alt={"arrow up"} layout={"fill"}/>
            </Div>
          </Div>
          <Div desktop={"column"} className={styles.footerLogo}>
            <Div className={styles.footerLogoWrapper}>
              <Image src={"/images/home-screen/footer-logo.webp"} alt={"logo"} layout={"fill"} quality={100}/>
            </Div>
            <Div className={styles.footerTitleLogoWrapper}>
              <Image src={"/images/home-screen/footer-logo-title.webp"} alt={"logo"} layout={"fill"} quality={100}/>
            </Div>
          </Div>
          <Div tablet={"column"} className={styles.mediaContainer}>
            <Div className={styles.aboutTextContainer}>
              <Text color={"grey.500"} typography={"subtitle"} className={styles.aboutText}>
                پزشک بوک سامانه جامع سلامت و درمان کشور است. در این سامانه میتوانید از بین پزشکان عضو پزشک بوک نوبت
                آنلاین بگیــرید ، پرونده الکتــرونیک و ســابقه درمانی خود را همیشه در گوشـی همــراه خود بهمـراه
                داشتـه باشید، مشـاوره بگیرید، اطلاعات بیمارستان ها و داروخانه ها و مراکز تصـویر برداری نزدیک خود را مشاهده
                کنید. این ســامانه هوشمند پس از ویزیت پزشـک نیز همراه شما بوده و با توجه به تجویز پزشک ، شما را تا
                اتمام پروسـه درمان شما همـــراهی می کند
              </Text>
            </Div>
            <Div className={styles.logoContainer}>
              <Div>
                <a referrerPolicy="origin" target="_blank" href='https://ecunion.ir/verify/pezeshkbook.com?token=618411060ace8d9d5082'>
                  <Div className={styles.footerLogoRes}>
                    <Image layout={"fill"} alt={"logo etehadie"} src={"/images/etehadie.webp"}/>
                  </Div>
                </a>
              </Div>
              <Div>
                <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=116892&amp;Code=illAlZD9lVotcSjzIBOv">
                  <Div className={styles.footerLogoRes}>
                    <Image layout={"fill"} alt={"logo enamad"} src={"/images/enamad.webp"}/>
                  </Div>
                </a>
              </Div>
              <Div>
                <a referrerPolicy="origin" target="_blank" href="https://logo.samandehi.ir/Verify.aspx?id=132924&p=rfthxlaouiwkpfvluiwkaods">
                  <Div className={styles.footerLogoRes}>
                    <Image layout={"fill"} alt={"logo samandehi"} src={"/images/samandehi.webp"}/>
                  </Div>
                </a>
              </Div>
            </Div>
          </Div>
          <Div tablet={"column-reverse"} className={styles.footerLinksContainer}>
            <Div tablet={"row-reverse"} desktop={"column"} className={styles.contact}>
              {dataLinks.map((item: any, index) => (
                <Link
                  key={`footerItem${index}`}
                  href={item?.url.indexOf('/') === 0 ? item?.url : `/${item?.url}`}>
                  <a
                    className={styles.headerLinkContainer}
                    color={"secondary"}>
                    <Div className={styles.footerLinkContainer}>
                      <Div className={styles.dot}/>
                      <Text typography={"body"} color={"grey.400"}>
                        {item?.title}
                      </Text>
                    </Div>
                  </a>
                </Link>
              ))}
            </Div>
            <Div desktop={"column"} className={styles.socialMediaWrapper}>
              <Div className={styles.socialMedia}>
                <Div className={styles.socialMediaIcons}>
                  <Link href={"https://www.aparat.com/pezeshkbook"}>
                    <a target={"_blank"}>
                      <Div className={styles.socialMediaContainer}>
                        <Image src={'/vercel.svg'} layout={"fill"} alt={"logo"}/>
                      </Div>
                    </a>
                  </Link>
                  <Link href={"https://www.linkedin.com/company/pezeshkbook"}>
                    <a target={"_blank"}>
                      <Div className={styles.socialMediaContainer}>
                        <Image src={'/vercel.svg'} layout={"fill"} alt={"logo"}/>
                      </Div>
                    </a>
                  </Link>
                  <Link href={"https://t.me/joinchat/AAAAAE6cuQzNfNxNhFhFow"}>
                    <a target={"_blank"}>
                      <Div className={styles.socialMediaContainer}>
                        <Image src={'/vercel.svg'} layout={"fill"} alt={"logo"}/>
                      </Div>
                    </a>
                  </Link>
                  <Link href={"https://www.instagram.com/pezeshkbook/"}>
                    <a target={"_blank"}>
                      <Div className={styles.instagramWrapper}>
                        <Div className={styles.socialMediaContainer}>
                          <Image src={'/vercel.svg'} layout={"fill"} alt={"logo"}/>
                        </Div>
                        <Div className={styles.instagramContainer}>
                          <Image src={"/images/home-screen/logo/instagram.webp"} layout={"fill"} alt={"logo"}/>
                        </Div>
                      </Div>
                    </a>
                  </Link>
                </Div>
              </Div>
              <Div desktop={"column"} className={styles.authBox}>
                <Text color={"grey.400"} align={"right"} type={"bold"} typography={"body"}>سامانه ثبت نام پزشکان و مراکز</Text>
                <Button
                  href={{pathname: `https://${process.env.APP_SITE_URL}/user/register`}}
                  className={styles.register}>
                  <Text type={"bold"} typography={"body"} color={"control.main"}>ثبت نام اولیه پزشکان</Text>
                </Button>
                <Button
                  href={{pathname: `https://${process.env.APP_SITE_URL}/user/login`}}
                  variant={"outlined"}
                  className={styles.register}>
                  <Text type={"bold"} typography={"body"} color={"info.main"}>ورود به حساب کاربری پزشکان</Text>
                </Button>
              </Div>
            </Div>
          </Div>
          <Div mobile={"row-reverse"} desktop={"column"} className={styles.footerMobile}>
            <Div desktop={"column"} className={styles.addressContainer}>
              <Text className={styles.addressText} typography={"caption"} color={"grey.400"}>
                دفتر مرکزی: تهران - خیابان ولیعصر - خیابان ناهید غربی - پلاک 48 - طبقه سوم - واحد 304
              </Text>
              <Div mobile={"column"} className={styles.address}>
                <Div className={styles.support}>
                  <Text typography={"h2"} color={"grey.400"}>
                    پشتیبانی پزشک بوک
                  </Text>
                  <Text className={styles.hiddenText} typography={"caption"} color={"grey.400"}>
                    (پاسخ دهی ۸ تا ۲۲):
                  </Text>
                </Div>
                <Text className={styles.number} typography={"body"} color={"grey.400"}>
                  <a href="tel:+982191004191">021-91004191</a>
                </Text>
              </Div>
            </Div>
          </Div>
        </Div>
      <Div className={styles.footer}>
        <Text typography={"caption"} color={"control.main"} className={styles.footerText}>
          <Link href={"https://www.appcosolution.com/"}>
            <a target={"_blank"}>
              کلیه حقوق مادی و معنوی متعلق به شرکت پردازش موازی آریا است
            </a>
          </Link>
        </Text>
      </Div>
    </Div>
  )
}


export default Footer;
