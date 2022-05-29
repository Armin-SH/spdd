import React from 'react';
import Link from 'next/link';
import {Div, Text} from '@elements';
import styles from "./footer.module.css";
import Image from "next/image";
import {FooterProps} from "./footer.props";
import {ArrowUpCircle, Logo} from '@image'

const dataLinks = [
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
    <Div style={{backgroundColor: '#141C27'}} desktop={"column"}>
      <Div desktop={"column"} className={styles.container}>
        <Div onClick={scrollToTop} className={styles.arrowUpContainer}>
          <Div className={styles.arrowUp}>
            <Image src={ArrowUpCircle} objectFit={'contain'} alt={"arrow up"} layout={"fill"}/>
          </Div>
        </Div>
        <Div desktop={"column"} className={styles.footerLogo}>
          <Image src={Logo} alt={"logo"} objectFit={'contain'} layout={"fill"} quality={100}/>
        </Div>
        <Div tablet={"column"} className={styles.mediaContainer}>
          <Div className={styles.aboutTextContainer}>
            <Text align={'center'} color={"grey.500"} typography={"subtitle"} className={styles.aboutText}>
              شرکت سازگان پرداز قبل از آماده سازی تشکیلات اداری خود در سال ۱۳۷۹ با گردآوری دانشجویان و مهندسین نخبه جهت ارائه خدمت به کشور عزیزمان ایران شروع به فعالیت نمود . یکی از نمونه کارها مونتاژ دستگاه های سنجش سلامتی بود که با حروف اختصاری wpst عرضه گردید .در آن زمان توانست حداقل اطلاعات پزشکی را در اختیار مردم قرار دهد که مورد استقبال نیز قرار گرفت.
            </Text>
          </Div>
        </Div>
        <Div className={styles.contact}>
          {dataLinks.map((item: any, index) => (
            <Link
              key={`footerItem${index}`}
              href={item?.url.indexOf('/') === 0 ? item?.url : `/${item?.url}`}>
              <a
                className={styles.headerLinkContainer}
                color={"secondary"}>
                <Div className={styles.footerLinkContainer}>
                  <Div className={styles.dot}/>
                  <Text typography={"body"} color={"control.main"}>
                    {item?.title}
                  </Text>
                </Div>
              </a>
            </Link>
          ))}
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
