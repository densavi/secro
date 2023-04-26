import {SeoLayout, MainLayout} from '~/components';
import {ContactUs} from '~/containers';

const ContactUsPage = () => (
  <SeoLayout title="ContactUsPage" metaDescription="ContactUsPage description">
    <MainLayout>
      <ContactUs />
    </MainLayout>
  </SeoLayout>
);

export default ContactUsPage;
