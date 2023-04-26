import {useContext, useMemo, useRef, useState} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';
import {useOnClickOutside} from '~/hooks';
import {ModalContext} from '~/context/Modal';

const Modal = ({animation = 'reveal'}) => {
  const contentRef = useRef(null);
  const [isOut, setIsOut] = useState(false);
  const {modal, modalContent, closeModal} = useContext(ModalContext);

  const animationKey = `container__${animation}`;

  const containerClasses = useMemo(
    () =>
      classNames(styles.container, {
        [`${animationKey}_out`]: isOut,
        [styles[animationKey]]: modal,
      }),
    [animationKey, isOut, modal],
  );

  useOnClickOutside({
    ref: contentRef,
    handler: () => {
      setIsOut(true);
      closeModal();
    },
  });

  if (!modal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={containerClasses}>
      <div
        className={`${styles[`${animationKey}__background`]} ${
          styles.container__background
        }`}>
        <div
          ref={contentRef}
          className={`${styles[`${animationKey}__background__content`]} ${
            styles.container__content
          }`}>
          {modalContent}
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root'),
  );
};

export default Modal;
