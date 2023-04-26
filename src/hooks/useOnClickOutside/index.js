import {useEffect} from 'react';
import PropTypes from 'prop-types';

const useOnClickOutside = ({ref, handler, useDataDropdownAttr}) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      const checkDataAttr =
        useDataDropdownAttr && el
          ? el.getAttribute('data-dropdown') === 'true'
          : false;

      if (!el || el.contains(event.target) || checkDataAttr) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, useDataDropdownAttr]);
};

useOnClickOutside.propTypes = {
  ref: PropTypes.any,
  handler: PropTypes.func,
  useDataDropdownAttr: PropTypes.bool,
};

export default useOnClickOutside;
