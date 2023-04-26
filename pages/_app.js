import {useMemo} from 'react';
import Script from 'next/script';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import {useRouter} from 'next/router';
import {IntlProvider} from 'react-intl';
import {ToastContainer} from 'react-toastify';

import {flattenMessages} from '~/helpers';
import {ModalContextProvider} from '~/context';
import {chooseMessages, shortLocale} from '~/content/locales';

import 'react-toastify/dist/ReactToastify.css';
import '~/styles/globals.scss';

const {publicRuntimeConfig} = getConfig();

const MyApp = ({Component, pageProps}) => {
  const {locale} = useRouter();

  const currentLocale = useMemo(() => shortLocale(locale), [locale]);
  const messages = useMemo(() => chooseMessages(locale), [locale]);

  return (
    <>
      <IntlProvider locale={currentLocale} messages={flattenMessages(messages)}>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
        <ToastContainer position="bottom-left" />
      </IntlProvider>
      {publicRuntimeConfig?.googleAnalytics ? (
        <>
          {/*Global site tag (gtag.js) - Google Analytics*/}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig?.googleAnalytics}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${publicRuntimeConfig?.googleAnalytics}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
