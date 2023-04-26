import English from './en.json';

export const shortLocale = (locale) => {
  const [shortLocale] = locale ? locale.split('-') : ['en'];
  return shortLocale;
};

export const chooseMessages = (locale) => {
  const currentLocale = shortLocale(locale);

  switch (currentLocale) {
    // SEC-6033 https://secrodev.atlassian.net/browse/SEC-6033
    // Enable language selection when translations are ready

    // case 'de':
    //   return German;
    // case 'en':
    //   return English;
    default:
      return English;
  }
};
