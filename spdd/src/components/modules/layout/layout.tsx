import React from 'react';
import {Div} from '@elements'
import {Footer, Header} from '@layouts'
import styles from "./layout.module.css";
import {LayoutProps} from "./layout.props";

const Layout = ({children, withoutFooter}: LayoutProps) => {
  return (
    <Div desktop={"column"} className={styles.container}>
      <Header/>
      <Div desktop={"column"} className={styles.container}>
        {children}
        <Footer withoutFooter={withoutFooter} gray={true}/>
      </Div>
    </Div>
  )
};

export default Layout


