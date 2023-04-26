import {MainLayout, SeoLayout} from '~/components';
import {Company} from '~/containers';

const CompanyPage = () => (
  <SeoLayout title="CompanyPage" metaDescription="CompanyDescription">
    <MainLayout>
      <Company />
    </MainLayout>
  </SeoLayout>
);

export default CompanyPage;
