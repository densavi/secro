import PropTypes from 'prop-types';

import classNames from 'classnames';
import {FontStyles} from '~/constants';

const Typography = ({
  align = 'left',
  type = 'Regular',
  tagName = 'p',
  variant = 'Text',
  className = '',
  color,
  transform,
  children,
  ...rest
}) => {
  const alignKey = FontStyles[`Text${align}`];
  const fontKey = FontStyles[`${variant}${type}`];
  const colorKey = FontStyles[`Text${color}`];
  const transformKey = FontStyles[`Text${transform}`];
  const classes = classNames(alignKey, fontKey, colorKey, transformKey, {
    [className]: className,
  });

  const Tag = tagName;

  return (
    <Tag {...rest} className={classes}>
      {children}
    </Tag>
  );
};
Typography.propTypes = {
  align: PropTypes.string,
  type: PropTypes.oneOf(['Regular', 'Extra', 'Medium', 'Large', 'Small']),
  variant: PropTypes.oneOf(['Text', 'Heading']),
  color: PropTypes.oneOf(['Light', 'Dark', 'Accent', 'Gray4', 'Gray3']),
  transform: PropTypes.oneOf(['Uppercase']),
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.any,
};

export default Typography;
