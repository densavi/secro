import getConfig from 'next/config';

import {RightArrow} from '~/assets';
import {Typography} from '~/components';
import styles from '../ContactUs.module.scss';

const {publicRuntimeConfig} = getConfig();

const Contacts = () => {
  return (
    <div className={styles.container__block}>
      <Typography
        variant="Heading"
        type="Large"
        className={styles.container__block_title}>
        CONTACTS
      </Typography>
      <Typography className={styles.container__block_name}>
        Communication
      </Typography>
      <a href="mailto:sales@secro.io" className={styles.container__contact}>sales@secro.io</a>

      <div style={{height: '40px'}} />
      <Typography className={styles.container__block_name}>Secro Inc.</Typography>
      <Typography className={styles.container__block_info}>
      Secro Inc. <br /> 251 Little Falls Drive <br /> Wilmington, Delaware 19808 <br /> US
      </Typography>
      <a href="https://goo.gl/maps/AvPBGhBuQc2cFiRZ6" target="_blank" className={styles.container__block_map}>
        <Typography className={styles.container__block_map_text}>
          Show on map
        </Typography>
        <div  href="https://goo.gl/maps/AvPBGhBuQc2cFiRZ6" className={styles.container__block_map_icon}>
          <RightArrow />
        </div>
      </a>

      <div style={{height: '40px'}} />
      <Typography className={styles.container__block_name}>Secro Technologies</Typography>
      <Typography className={styles.container__block_info}>
        Robotnicza str. 42A, 53-608 <br />
        Wroclaw, Poland
      </Typography>
      <a href="https://goo.gl/maps/wRJw2TrWQvh2iVQNA" target="_blank" className={styles.container__block_map}>
        <Typography className={styles.container__block_map_text}>
          Show on map
        </Typography>
        <div className={styles.container__block_map_icon}>
          <RightArrow />
        </div>
      </a>
    </div>
  );
};

export default Contacts;
