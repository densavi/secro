import PropTypes from 'prop-types';
import OutlinedInput from '../OutlinedInput';
import {SearchIcon} from '~/assets';

const ViaSearch = ({onSearch, placeholder, value}) => {
  const handleInput = () => (event) => {
    if (event && event.target) {
      onSearch(event.target.value);
    }
  };

  return (
    <OutlinedInput
      onChange={handleInput()}
      RightIcon={SearchIcon}
      placeholder={placeholder}
      value={value}
    />
  );
};
ViaSearch.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default ViaSearch;
