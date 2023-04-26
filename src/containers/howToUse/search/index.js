import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {OutlinedInput} from '~/components';
import {CrossIcon, SearchIcon} from '~/assets';
import styles from './Search.module.scss';

const Search = ({searchText, setSearchText}) => {
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const resetSearch = useCallback(() => {
    setSearchText('');
  }, [setSearchText]);

  const iconsRender = useMemo(() => {
    const searchClasses = classNames(styles.container_input_icons_search, {
      [styles.container_input_icons_search_active]: !!searchText.length,
    });

    return (
      <div className={styles.container_input_icons}>
        {searchText && (
          <div
            className={styles.container_input_icons_cross}
            onClick={resetSearch}>
            <CrossIcon />
          </div>
        )}
        <div className={searchClasses}>
          <SearchIcon />
        </div>
      </div>
    );
  }, [resetSearch, searchText]);

  return (
    <div className={styles.container}>
      <OutlinedInput
        inputClassName={styles.container_input}
        placeholder="Find anything..."
        onChange={handleSearch}
        value={searchText}
        RightIcon={iconsRender}
      />
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default Search;
