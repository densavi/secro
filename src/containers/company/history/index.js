import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {Typography} from '~/components';
import {SecroPlan} from '~/mock';
import {FormattedMessage, useIntl} from 'react-intl';
import React from 'react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import styles from './History.module.scss';

SwiperCore.use([Navigation]);

const History = () => {
  const intl = useIntl();

  const renderMark = (text) => {
    const date = intl.messages[`company.plan.${text}.date`];
    const status = intl.messages[`company.plan.${text}.status`];

    const className = /^\d+$/.test(date) ? '' : styles.left;
    const dateDisable = status === 'future' ? styles.disable : '';

    return (
      <>
        <Typography
          variant="Heading"
          className={`${styles.history__top_wrapper_date} ${className} ${dateDisable}` + ' date-active'}>
          <FormattedMessage id={`company.plan.${text}.date`} />
        </Typography>
        <div className={styles.history__top_wrapper_mark}>
          <div
            className={`${styles.history__top_wrapper_mark_inner} ${styles[status]}` + ' mark-active'}
          />
        </div>
      </>
    );
  };

  const renderText = (text) => {
    let message = intl.messages[`company.plan.${text}.text`] || '';
    message = message.split('&');
    return (
      <div className={styles.history__top_wrapper_description}>
        <div className={styles.history__top_wrapper_description_lines}>
          <div
            className={styles.history__top_wrapper_description_lines_disabled}
          />
          <div className={styles.history__top_wrapper_description_lines_info}>
            <div
              className={
                styles.history__top_wrapper_description_lines_info_active
              }
            />
            <div
              className={`${styles.history__top_wrapper_description_lines_info_text}`}>
              {message.map((item) => (
                <Typography
                  key={item}
                  className={
                    styles.history__top_wrapper_description_lines_info_text_value
                  }>
                  {item}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSwiperBlock = (blocks) => (
    <div className={styles.history}>
      <div className={styles.history__line_wrapper}>
        <div className={styles.history__line_wrapper_line} />
        <div className={styles.history__top}>
          {blocks.map((block) => (
            <div key={block} className={styles.history__top_wrapper}>
              {renderMark(block)}
              {renderText(block)}
            </div>
          ))}
          <div />
        </div>
      </div>
    </div>
  );

  return (
    <div className="swiper__company">
      <Swiper 
      navigation={true}
      slidesPerView={1.3}
      breakpoints={{
        822: {
          slidesPerView: 2.3, 
        },
        1024: {
          slidesPerView: 3.3,
        },
        
      }}
      >
        {SecroPlan.map((plan, idx) => (
          <SwiperSlide key={idx}>{renderSwiperBlock(plan)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default History;
