import {useEffect, useContext} from 'react';
import {useRouter} from 'next/router';

import {SeoLayout, MainLayout, ContractSales} from '~/components';
import {ModalContext} from '~/context/Modal';
import {Modals} from '~/constants';
import {
  MainHero,
  MainServices,
  MainPerform,
  MainDifference,
  MainVideo,
  MainPartnersCustomers,
} from '~/containers';

export const ModalsComponents = {
  [Modals.MODAL_NAMES.contactSales]: ContractSales,
};

const HomePage = () => {
  const {asPath} = useRouter();
  const {openModal} = useContext(ModalContext);

  useEffect(() => {
    if (asPath.includes('#')) {
      const hashParam = asPath.split('#')[1];
      if (Modals.MODALS_LIST.includes(hashParam)) {
        const ModalComponent = ModalsComponents[hashParam];
        openModal(<ModalComponent />);
      }
    }
  }, []);

  return (
    <SeoLayout
      title="SECRO"
      metaDescription="Secro is end-to-end transaction management with main goal to eradicate frauds, inefficiencies and exploitation from international trade">
      <MainLayout isHeaderLight withHeaderOverlay>
        <MainHero />
        <MainServices />
        <MainPerform />
        <MainDifference />
        <MainVideo />
        <MainPartnersCustomers />
      </MainLayout>
    </SeoLayout>
  );
};

HomePage.getInitialProps = async () => {
  return {};
};

export default HomePage;
