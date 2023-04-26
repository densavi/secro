import React from 'react';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';
import getConfig from 'next/config';

import {SecroLight} from '~/assets';
import {Typography} from '~/components';
import styles from './Footer.module.scss';

const {publicRuntimeConfig} = getConfig();

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={classNames(styles.container, 'container')}>
      <div className={styles.container__column}>
        <SecroLight className={styles.container__logo} />
      </div>
      <div className={styles.container__column}>
        <Typography
          type="Small"
          variant="Text"
          color="Accent"
          className={styles.container__column_title}>
          <FormattedMessage id="footer.information" />
        </Typography>
        <ul>
          <li>
            <a
              href="https://shared-secro-s3.s3.us-west-1.amazonaws.com/Privacy+policy+and+compliance.pdf"
              rel="noreferrer"
              target="_blank"
              className={classNames(
                styles.container__text,
                styles.container__link,
              )}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container__column}>
        <Typography
          type="Small"
          variant="Text"
          color="Accent"
          className={styles.container__column_title}>
          <FormattedMessage id="footer.socials" />
        </Typography>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/secro-inc/"
              rel="noreferrer"
              target="_blank"
              className={classNames(
                styles.container__text,
                styles.container__link,
              )}>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container__column}>
        <Typography
          type="Small"
          variant="Text"
          color="Accent"
          className={styles.container__column_title}>
          <FormattedMessage id="footer.contacts" />
        </Typography>
        <ul>
          
          <li>
            <a 
              href="mailto:sales@secro.io"
              rel="noreferrer"
              className={classNames(
                styles.container__text,
                styles.container__link,
              )}
            >
              sales@secro.io
            </a>
          </li>

        </ul>
      </div>
      <div className={styles.container__column}>
        <Typography
          type="Small"
          variant="Text"
          color="Accent"
          className={styles.container__column_title}>
          <FormattedMessage id="footer.office" />
        </Typography>
        <ul>
          <li>
            <span className={styles.container__text}>Secro Inc.</span>
          </li>
          <li>
            <span className={styles.container__text}>
              251 Little Falls Drive, 19808, Wilmington
            </span>
          </li>
          <li>
            <span className={styles.container__text}>Delaware, US</span>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.copy}>
      <div className="container">
        <p>© Secro 2021, all rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
