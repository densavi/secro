const endpoints = {
  ContactUsService: {
    sentForm: () => '/api/landing/send-email/lets-talk',
  },
  MainService: {
    sendContactSales: () => '/api/landing/send-email/contact-sales',
    getCountries: () => '/api/landing/send-email/country-list',
    sendRequestDemo: () => '/api/landing/send-email/request-demo',
  },
  HowToUse: {
    getContent: (sL2 = '') => `/api/landing/how-to-use/${sL2}`,
  },
};

export default endpoints;
