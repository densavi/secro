import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import {
  Button,
  Typography,
  RequestDemoModal,
  ContactSalesModal,
} from '~/components';
import {VideoHero} from '~/containers';
import {ModalContext} from '~/context/Modal';
import styles from './MainHero.module.scss';

const MainHero = () => {
  const {openModal} = useContext(ModalContext);

  return (
    <section className={styles.container}>
      <div className={styles.container__video}>
        <VideoHero
          renderSlides={(slideNumber) => {
            return (
              <div className={styles.container__wrapper}>
                <div className={styles.container__inner}>
                  <div className={styles.container__heading}>
                    <Typography
                      tagName="h1"
                      variant="Heading"
                      type="Large"
                      color="Light"
                      transform="Uppercase">
                      <FormattedMessage
                        id={'mainHero.heading-slide' + (slideNumber + 1)}
                      />
                    </Typography>
                  </div>
                  <div className={styles.container__buttons}>
                    <Button
                      size="medium"
                      variant="secondary"
                      className={styles.container__gutter}
                      onClick={() => openModal(<RequestDemoModal />)}>
                      <FormattedMessage id="common.button.requestDemo" />
                    </Button>
                    <Button
                      size="medium"
                      variant="outlined"
                      onClick={() => openModal(<ContactSalesModal />)}>
                      <FormattedMessage id="common.button.contactSales" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};

export default MainHero;
