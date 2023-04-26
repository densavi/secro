import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
// import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

import {Typography} from '~/components';
// import {
//   Company1,
//   Company2,
//   Company3,
//   Company4,
//   Company5,
//   Company6,
//   Company7,
//   Company8,
//   Company9,
//   Company10,
// } from '~/assets';


import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8
} from '~/assets';

import styles from './MainPartnersCustomers.module.scss';

const MainPartnersCustomers = () => {
  // const renderIcons = useMemo(() => {
  //   const companyList = [
  //     Company3,
  //     Company6,
  //     Company9,
  //     Company4,
  //     Company10,
  //     Company2,
  //     Company5,
  //     Company8,
  //     Company7,
  //     Company1,
  //   ];
  //
  //   return companyList.map((Item, index) => (
  //     <SwiperSlide key={index}>
  //       <Item />
  //     </SwiperSlide>
  //   ));
  // }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className={styles.container}>
      <Typography
        tagName="h2"
        type="Medium"
        variant="Heading"
        transform="Uppercase"
        className={styles.title}>
        <FormattedMessage id="mainPartnersCustomers.title" />
      </Typography>
      {/* <Typography color="Gray3" type="Small" className={styles.text}>
        <FormattedMessage id="mainPartnersCustomers.text" />
      </Typography> */}


      <div className="container">
        <div className={styles.tabs_nav}>
          <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? styles.active : ''}><span>Customers</span></button>
          <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? styles.active : ''}><span>Partners</span></button>
          <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? styles.active : ''}><span>Institutional investors</span></button>
        </div>

        <div className={styles.tabs}>
          {activeTab === 0 && 
            <div className={styles.tab}>
              <Partner1 />
              <Partner2 />
              <Partner3 />
            </div>
          }
          {activeTab === 1 && 
            <div className={styles.tab}>
              <Partner4 />
              <Partner5 />
            </div>
          }
          {activeTab === 2 && 
            <div className={styles.tab}>
              <Partner6 />
              <Partner7 />
              <Partner8 />
            </div>
          }
        </div>
      </div>



      {/*<div>*/}
      {/*  <Swiper*/}
      {/*    slidesPerView={'auto'}*/}
      {/*    centeredSlides={true}*/}
      {/*    loop={true}*/}
      {/*    autoplay={{*/}
      {/*      delay: 3000,*/}
      {/*      disableOnInteraction: false,*/}
      {/*    }}*/}
      {/*    spaceBetween={70}*/}
      {/*    className="swiper__partners">*/}
      {/*    {renderIcons}*/}
      {/*  </Swiper>*/}
      {/*</div>*/}
    </section>
  );
};

export default MainPartnersCustomers;
