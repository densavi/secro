import React, {useMemo} from 'react';
import {FormattedMessage} from 'react-intl';
import {Typography} from '~/components';
import {
  ArrowsRound,
  BimcoImg,
  Ebill,
  Doc,
  IgpIImg,
  Papers,
} from '~/assets';
import MainServicesItem from './MainServicesItem';
import styles from './MainServices.module.scss';

const MainServices = () => {
  const renderItems = useMemo(() => {
    const services = [
      {
        title: 'mainServices.list1.title',
        text: 'mainServices.list1.text',
        icon: Ebill,
        route: '/features',
      },
      {
        title: 'mainServices.list3.title',
        text: 'mainServices.list3.text',
        icon: Doc,
        route: '/features',
      },
      {
        title: 'mainServices.list4.title',
        text: 'mainServices.list4.text',
        icon: Papers,
        route: '/features',
      },
    ];

    return services.map((item, index) => (
      <div key={item.title} className={styles.container__column}>
        <MainServicesItem
          titleId={item.title}
          textId={item.text}
          Icon={item.icon}
          route={item.route}
          isComingSoon={item.isComingSoon}
          index={index}
        />
      </div>
    ));
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__row}>
          <div className={styles.container__column__services}>
            <div className={styles.container__subtitle}>
              <ArrowsRound />
              <Typography
                transform="Uppercase"
                className={styles.container__subtitle_text}>
                <FormattedMessage id="mainServices.subtitle" />
              </Typography>
            </div>
            <Typography
              tagName="h2"
              type="Extra"
              variant="Heading"
              transform="Uppercase"
              color="Light">
              <FormattedMessage id="mainServices.title" />
            </Typography>
            <Typography color="Gray4" className={styles.container__text}>
              <FormattedMessage id="mainServices.text" />
            </Typography>
          </div>
          <div className={styles.container__column__members}>
            <div className={styles.container__member}>
              <BimcoImg />
            </div>
            <div>
              <div className={styles.container__member}>
                <IgpIImg />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__row}>{renderItems}</div>
      </div>
    </section>
  );
};

export default MainServices;
