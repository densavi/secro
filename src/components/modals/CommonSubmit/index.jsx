import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {Button, Typography} from '~/components';
import {ModalContext} from '~/context';

import styles from './CommonSubmit.module.scss';

const CommonSubmit = ({
  onSubmit,
  onDecline,
  text,
  textDeclineButton,
  textSubmitButton,
  title,
  hasDeclineButton = true,
}) => {
  const {closeModal} = useContext(ModalContext);

  return (
    <div className="modal-common">
      <div>
        {title && (
          <Typography
            className={styles.container__title}
            variant="Heading"
            type="Small">
            {title}
          </Typography>
        )}

        {text && (
          <Typography type="Small" color="Gray3">
            {text}
          </Typography>
        )}
      </div>
      <div className="modal-common__footer">
        {hasDeclineButton && (
          <Button
            type="button"
            size="medium"
            variant="ghost"
            onClick={onDecline || closeModal}>
            {textDeclineButton || 'No'}
          </Button>
        )}

        <Button
          type="submit"
          size="medium"
          variant="primary"
          onClick={onSubmit}>
          {textSubmitButton || 'Yes'}
        </Button>
      </div>
    </div>
  );
};

CommonSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onDecline: PropTypes.func,
  text: PropTypes.element,
  textDeclineButton: PropTypes.string,
  textSubmitButton: PropTypes.string,
  title: PropTypes.string,
  hasDeclineButton: PropTypes.bool,
};

export default CommonSubmit;
