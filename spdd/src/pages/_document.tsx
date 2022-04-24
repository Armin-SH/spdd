import React from 'react';
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@mui/styles';
import {theme} from "@config/material-config/web-theme";
import {createEmotionCache} from "@utils";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document<DocumentContext & {emotionStyleTags: any}> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style type="text/css"/>
          <meta content={theme.palette.info.main} name="theme-color"/>
          {this.props.emotionStyleTags}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const {extractCriticalToChunks} = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App: any) =>
      (props) => sheets.collect(<App emotionCache={cache} {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    emotionStyleTags,
  };
};