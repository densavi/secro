import {SeoLayout, MainLayout} from '~/components';
import {UseCases} from '~/containers';

import Solutions from '~/containers/solutions/solutions';

const SolutionsPage = () => (
  <SeoLayout title="SolutionsPage" metaDescription="SolutionsPage description">
    <MainLayout>
      <Solutions />
    </MainLayout>
  </SeoLayout>
);

export default SolutionsPage;
