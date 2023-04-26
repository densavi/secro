import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import Image from 'next/image';

import {Typography} from '~/components';
import styles from './Hero.module.scss';

const Hero = ({title, text, image, imageAlt = ''}) => (
  <section className="container">
    <div className={styles.container}>
      <img className={styles.container__main_img} src={image.src} alt={imageAlt} />
      {/* <Image src={image} alt={imageAlt} /> */}
      <div className={styles.container__content}>
        <Typography
          type="Large"
          variant="Heading"
          color="Light"
          transform="Uppercase"
          className={styles.container__heading}
          tagName="h1">
          <FormattedMessage id={title} />
        </Typography>
        <Typography color="Light" className={styles.container__content_text}>
          <FormattedMessage id={text} />
        </Typography>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  imageAlt: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
