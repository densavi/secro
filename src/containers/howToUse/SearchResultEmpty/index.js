import React from 'react';
import {FormattedMessage} from 'react-intl';

import {EmptyResultIcon} from '~/assets';
import {Typography} from '~/components';
import styles from './SearchResultEmpty.module.scss';

const SearchResultEmpty = () => (
  <div className={styles.container}>
    <EmptyResultIcon />
    <h3 className={styles.container__title}>
      <FormattedMessage id="howToUse.resultEmpty.title" />
    </h3>
    <Typography type="Regular" variant="Text" color="Gray3">
      <FormattedMessage id="howToUse.resultEmpty.description1" />
    </Typography>
    <Typography type="Regular" variant="Text" color="Gray3">
      <FormattedMessage id="howToUse.resultEmpty.description2" />
    </Typography>
  </div>
);

export default SearchResultEmpty;
