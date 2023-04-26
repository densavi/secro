import React, {useMemo} from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {Routes} from '~/constants';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';

import styles from './MobileMenu.module.scss';

const MobileMenu = ({isHeaderLight, withHeaderOverlay, isOpenMenu}) => {
  const {asPath} = useRouter();

  const headerLinks = [
    {
      href: Routes.UseCases,
      textId: 'header.link1',
    },
    {
      href: Routes.Features,
      textId: 'header.link2',
    },
    {
      href: Routes.HowToUse,
      textId: 'header.link3',
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
    <div 
      className={`${styles.MobileMenu} ${isOpenMenu ? styles.active : ''}`}
    >
      <nav className={styles.MobileMenu__nav}>
        <ul className={styles.MobileMenu__nav_list}>{renderNav}</ul>
      </nav>
    </div>
  )
}

export default MobileMenu;