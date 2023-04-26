import {MainLayout, SeoLayout} from '~/components';
import {Features} from '~/containers';

const FeaturesPage = () => (
  <SeoLayout title="FeaturesPage" metaDescription="Features description">
    <MainLayout>
      <Features />
    </MainLayout>
  </SeoLayout>
);

export default FeaturesPage;
