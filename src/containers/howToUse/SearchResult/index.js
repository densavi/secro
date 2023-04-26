import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import _debounce from 'lodash.debounce';
import {FormattedMessage} from 'react-intl';

import client from '~/api/client';
import endpoints from '~/api/endpoints';
import {Loader} from '~/components';
import SearchResultItem from '../SearchResultItem';
import SearchResultEmpty from '../SearchResultEmpty';
import styles from './SearchResult.module.scss';

const SearchResult = ({searchText}) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(
    _debounce((searchText) => {
      client
        .get(endpoints.HowToUse.getContent(), {params: {searchText}})
        .then((response) => {
          if (response && response.data) {
            setSearchResult(response.data);
            setIsLoading(false);
            console.log(response.data);
          }
        });
    }, 300),
    [],
  );

  useEffect(() => {
    try {
      setIsLoading(true);
      debounceFn(searchText);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [debounceFn, searchText]);

  return (
    <article className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        Array.isArray(searchResult) && (
          <>
            <div className={styles.container__search_title}>
              <FormattedMessage id="howToUse.searchResults" />:{' '}
              {searchResult.length}
            </div>
            {searchResult.length === 0 ? (
              <SearchResultEmpty />
            ) : (
              searchResult.map((item) => (
                <SearchResultItem key={item.id} item={item} />
              ))
            )}
          </>
        )
      )}
    </article>
  );
};

SearchResult.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default SearchResult;
