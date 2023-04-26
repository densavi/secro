import {SeoLayout, MainLayout} from '~/components';
import {UseCases} from '~/containers';

const UseCasePage = () => (
  <SeoLayout title="UseCasePage" metaDescription="UseCasePage description">
    <MainLayout>
      <UseCases />
    </MainLayout>
  </SeoLayout>
);

export default UseCasePage;
