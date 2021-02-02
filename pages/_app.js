import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import React from 'react';
import ClientRouter from '../components/ClientRouter';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});

class MyApp extends App {
  render() {



    const { Component, pageProps, shopOrigin } = this.props;   
    const config = {apiKey: API_KEY, shopOrigin, forceRedirect: true };
    // const config = { ngrokBack: KEY_NGROCBACK, apiKey: API_KEY, shopOrigin, forceRedirect: true };

    //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    //console.log("ngrockBack, apiKey")
    //console.log(ngrokBack)
    //console.log(apiKey)
     return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
        <ClientRouter />
        <AppProvider i18n={translations}>            
        <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
        </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

/*const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

*/
MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  }
}

export default MyApp;