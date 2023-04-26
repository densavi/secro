import {MainLayout, SeoLayout} from '~/components';
import {HowToUse} from '~/containers';

const HowToUsePage = (pageProps) => (
  <SeoLayout>
    <MainLayout>
      <HowToUse {...pageProps} />
    </MainLayout>
  </SeoLayout>
);

export const getServerSideProps = (content) => {
  if (content.query && content.query.id) {
    const id = content.query?.id;

    return {props: {id}};
  }
  return {props: {}};
};

export default HowToUsePage;
