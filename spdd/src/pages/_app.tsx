import '../styles/globals.css'
import React, {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import Router from 'next/router'
import NProgress from 'nprogress';
import {theme} from "@config/material-config/web-theme";
import createCache from '@emotion/cache';
import Layout from "@modules/layout";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({showSpinner: false});


const cache = createCache({
  key: 'css',
  prepend: true,
});

function MyApp({Component, pageProps}: any) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>پزشک بوک</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link href="/favicon.ico" rel="icon"/>
        <link rel="stylesheet" type="text/css" href="/nprogress.css"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Layout withoutFooter={Component.withoutFooter}>
            <Component {...pageProps}/>
          </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp

