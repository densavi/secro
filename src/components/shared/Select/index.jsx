import styles from './Select.module.scss';
import {useMemo, useRef, useState} from 'react';
import {useOnClickOutside} from '~/hooks';
import PropTypes from 'prop-types';
import {Input, Typography} from '~/components';
import {DownIcon} from '~/assets';
import ViaSearch from './ViaSearch';
import classNames from 'classnames';

const Select = ({
  disabled,
  placeholder,
  options = [],
  onSelect,
  value,
  searchable,
  searchPlaceholder,
  errorMessage,
  menuPlacement,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');

  const selectRef = useRef(null);

  const handleSelect = (option) => () => {
    onSelect && onSelect(option);
    setExpanded(false);
  };

  useOnClickOutside({
    ref: selectRef,
    handler: () => {
      if (!disabled && expanded) {
        setExpanded(false);
      }
    },
  });

  const onSearch = () => (search) => {
    setSearch(search);
  };

  const searchedOptions = useMemo(
    () =>
      [...options].filter(
        (option) =>
          option.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >
          -1,
      ),
    [search, options],
  );

  const rowClassnames = classNames(styles.wrapper__list_row_wrapper_row, {
    [styles.wrapper__list_row_wrapper_row_search]: searchable,
  });

  const listClassnames = classNames(styles.wrapper__list, {
    [styles.wrapper__list__top]: menuPlacement === 'top',
  });

  return (
    <div ref={selectRef} className={styles.wrapper}>
      <Input
        readOnly={true}
        errorMessage={errorMessage}
        value={value ? value.name : ''}
        onClick={() => setExpanded((prev) => !prev)}
        viaCursor={true}
        RightIcon={
          expanded ? (
            <div className={styles.wrapper__expanded}>
              <DownIcon />
            </div>
          ) : (
            <DownIcon />
          )
        }
        label={placeholder}
      />
      {expanded && !!options.length && (
        <div className={listClassnames}>
          {searchable && (
            <div className={styles.wrapper__list_search}>
              <ViaSearch
                value={search}
                placeholder={searchPlaceholder}
                onSearch={onSearch()}
              />
            </div>
          )}
          <div className={styles.wrapper__list_row_wrapper}>
            {searchedOptions.map((option) => (
              <div
                key={option.id}
                className={rowClassnames}
                onClick={handleSelect(option)}>
                <Typography
                  className={styles.wrapper__list_row_wrapper_row_name}>
                  {option.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
Select.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.any,
  onSelect: PropTypes.func,
  searchable: PropTypes.bool,
  errorMessage: PropTypes.string,
  menuPlacement: PropTypes.string,
};

export default Select;
