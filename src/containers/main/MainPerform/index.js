import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import Image from 'next/image';
import {
  Button,
  ContactSalesModal,
  RequestDemoModal,
  Typography,
} from '~/components';
import {ModalContext} from '~/context';
import {MainServices} from '~/assets';
import styles from './MainPerform.module.scss';

const MainPerform = () => {
  const {openModal} = useContext(ModalContext);

  return (
    <section>
      <div className={styles.container}>
        <Typography
          tagName="h2"
          type="Extra"
          variant="Heading"
          transform="Uppercase">
          <FormattedMessage id="mainPerform.title" />
        </Typography>
        <Typography color="Gray4" className={styles.container__text}>
          <FormattedMessage id="mainPerform.text" />
        </Typography>
        <div className={styles.container__buttons}>
          <Button
            size="medium"
            variant="primary"
            onClick={() => openModal(<RequestDemoModal />)}>
            <FormattedMessage id="common.button.requestDemo" />
          </Button>
          <Button
            size="medium"
            variant="ghost"
            onClick={() => openModal(<ContactSalesModal />)}>
            <FormattedMessage id="common.button.contactSales" />
          </Button>
        </div>
      </div>
      <div className={styles.container__image}>
        <Image src={MainServices} alt="" />
      </div>
    </section>
  );
};

export default MainPerform;
