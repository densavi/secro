import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import routes from '~/constants/routes';
import styles from './SearchResultItem.module.scss';

const SearchResultItem = ({item}) => (
  <div className={styles.container}>
    <NextLink href={`${routes.HowToUse}?id=${item.structure_level_2}`}>
      <a className={styles.container__link}>
        <h2>{item.structure_level_2}</h2>
        <p>{item.text_input}</p>
      </a>
    </NextLink>
  </div>
);

SearchResultItem.propTypes = {
  item: PropTypes.shape({
    structure_level_2: PropTypes.string.isRequired,
    text_input: PropTypes.string.isRequired,
  }),
};

export default SearchResultItem;
