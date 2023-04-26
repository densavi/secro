import React, {useMemo, useState} from 'react';

import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';
import getConfig from 'next/config';
import {LocaleChoose} from '~/containers';
// import {Button} from '~/components';
import {Routes} from '~/constants';
import {SecroIcon} from '~/assets';
import styles from './Header.module.scss';

const {publicRuntimeConfig} = getConfig();

const Header = ({isHeaderLight, withHeaderOverlay, isOpenMenu, onMenuOpen}) => {
  const {asPath} = useRouter();


  const mobileMenuToggle = () => {
    onMenuOpen(!isOpenMenu);
  };

  const headerLinks = [
    {
      href: Routes.UseCases,
      textId: 'header.link1',
    },
    {
      href: Routes.Solutions,
      textId: 'Solutions',
    },
    {
      href: Routes.Features,
      textId: 'header.link2',
    },
    {
      href: Routes.Company,
      textId: 'header.link5',
    },
    {
      href: Routes.ContactUs,
      textId: 'header.link6',
    },
  ];

  const renderNav = useMemo(
    () =>
      headerLinks.map((link) => (
        <li key={link.textId} className={styles.header__nav_item}>
          <NextLink href={link.href}>
            <a
              className={classNames(styles.header__nav_text, {
                [styles.header__nav_text_common]: !isHeaderLight,
                [styles.header__nav_text_light]: isHeaderLight,
                [styles.header__nav_text_active]: asPath.includes(link.href),
                [styles.header__nav_text_active_common]:
                  asPath.includes(link.href) && !isHeaderLight,
                [styles.header__nav_text_active_light]:
                  asPath.includes(link.href) && isHeaderLight,
              })}>
              <FormattedMessage id={link.textId} />
            </a>
          </NextLink>
        </li>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [asPath, isHeaderLight],
  );

  return (
    <header
      className={classNames(styles.header, {
        [styles.with_overlay]: withHeaderOverlay,
      })}>
      <div className="container">
        <div
          className={classNames(styles.header__container, {
            [styles.header__container_normal]: !isHeaderLight,
            [styles.header__container_light]: isHeaderLight,
          })}>
          <div className={styles.header__image}>
            <NextLink href="/">
              <a>
                <SecroIcon />
              </a>
            </NextLink>
          </div>

          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>{renderNav}</ul>
          </nav>

          <div className={styles.header__actions}>
            <LocaleChoose />
            <div>
              <a
                href={`${publicRuntimeConfig?.platformUrl}/sign-in`}
                className={classNames(styles.header__link, {
                  [styles.header__link_normal]: !isHeaderLight,
                  [styles.header__link_light]: isHeaderLight,
                })}>
                <FormattedMessage id="header.buttonSignin" />
              </a>
            </div>
            <button 
              className={`${styles.header__menu_open} ${isOpenMenu ? styles.active : ''}` + ' ' + (isHeaderLight ? styles.white : '')}
              onClick={mobileMenuToggle}
              >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>

  );
};

Header.propTypes = {
  isHeaderLight: PropTypes.bool.isRequired,
  withHeaderOverlay: PropTypes.bool.isRequired,
};

export default Header;
