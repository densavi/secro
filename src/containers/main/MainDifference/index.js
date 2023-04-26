import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import {Typography} from '~/components';
import {MainSlide1, MainSlide2, MainSlide3} from '~/assets';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import styles from './MainDifference.module.scss';

SwiperCore.use([Pagination, Autoplay]);

const MainDifference = () => {
  return (
    <section>
      <div className={styles.container}>
        <Typography
          tagName="h2"
          type="Medium"
          variant="Heading"
          className={styles.heading}
          transform="Uppercase">
          <FormattedMessage id="mainDifference.title" />
        </Typography>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="swiper__main">
          <SwiperSlide>
            <div className="swiper__main_slide">
              <Typography
                tagName="h3"
                variant="Heading"
                transform="Uppercase"
                className={styles.carousel__heading}>
                <FormattedMessage id="mainDifference.slide1.title" />
              </Typography>
              <div className={styles.carousel__text}>
                <Typography color="Gray3" type="Small">
                  <FormattedMessage id="mainDifference.slide1.text" />
                </Typography>
              </div>
              <div className={styles.carousel__image}>
                <MainSlide1 />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__main_slide">
              <Typography
                tagName="h3"
                variant="Heading"
                transform="Uppercase"
                className={styles.carousel__heading}>
                <FormattedMessage id="mainDifference.slide2.title" />
              </Typography>
              <div className={styles.carousel__text}>
                <Typography color="Gray3" type="Small">
                  <FormattedMessage id="mainDifference.slide2.text" />
                </Typography>
              </div>
              <div className={styles.carousel__image}>
                <MainSlide2 />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__main_slide">
              <Typography
                tagName="h3"
                variant="Heading"
                transform="Uppercase"
                className={styles.carousel__heading}>
                <FormattedMessage id="mainDifference.slide3.title" />
              </Typography>
              <div className={styles.carousel__text}>
                <Typography color="Gray3" type="Small">
                  <FormattedMessage id="mainDifference.slide3.text" />
                </Typography>
              </div>
              <div className={styles.carousel__image}>
                <MainSlide3 />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MainDifference;
