import {createContext} from 'react';
import PropTypes from 'prop-types';

import {useModal} from '~/hooks';
import {Modal} from '~/components';

export const ModalContext = createContext({
  modal: false,
  modalContent: null,
  openModal: (content) => {},
  closeModal: () => {},
});
ModalContext.propTypes = {
  modal: PropTypes.bool,
  modalContent: PropTypes.any,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export const ModalContextProvider = ({children, render, rest}) => {
  const useModalReturn = useModal();

  return (
    <ModalContext.Provider value={useModalReturn}>
      <div className="modal-back-content">
        <Modal {...rest} />
        {typeof render === 'function' ? render(useModalReturn) : children}
      </div>

      <div id="modal-root" />
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  render: PropTypes.element,
  children: PropTypes.element,
};
