import React from 'react';
import PropTypes, {instanceOf} from 'prop-types';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import {useRouter} from 'next/router';

import {Typography, Collapse} from '~/components';
import styles from './navBar.module.scss';

const NavBar = ({activeArticleId, navList, navListOrder}) => {
  const router = useRouter();

  const handleClick = (text) => () => {
    router.push({
      pathname: router.pathname,
      query: {id: text},
    });
  };

  const renderRows = (item) => {
    const array = [...navList[item]]; // Convert Set to Array
    return (
      <div className={styles.container__navigation_collapsed}>
        {array.map((child) => (
          <Typography
            onClick={handleClick(child)}
            key={child}
            className={classNames(styles.container__navigation_collapsed_row, {
              [styles.container__navigation_collapsed_row_active]:
                activeArticleId === child,
            })}>
            {child}
          </Typography>
        ))}
      </div>
    );
  };

  return (
    <aside className={styles.container}>
      <div className={styles.container__navigation}>
        <Typography className={styles.container__navigation_title}>
          <FormattedMessage id={`howToUse.navBar.title`} />
        </Typography>
        {!navListOrder || !navList ? (
          <div />
        ) : (
          <>
            {navListOrder.map((item) => (
              <div key={item}>
                <Collapse
                  className={styles.container__navigation_row}
                  text={item}
                  defaultOpen={navList[item].has(activeArticleId)}>
                  {renderRows(item)}
                </Collapse>
              </div>
            ))}
          </>
        )}
      </div>
    </aside>
  );
};

NavBar.propTypes = {
  activeArticleId: PropTypes.string,
  navListOrder: PropTypes.arrayOf(PropTypes.string),
  navList: PropTypes.shape({
    [PropTypes.string]: instanceOf(Set),
  }),
};

export default NavBar;
