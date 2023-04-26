import {useState} from 'react';
import useLockedBody from '../useLockedBody';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useLockedBody(modal);

  const openModal = (content) => {
    setModal(true);

    if (content) {
      setModalContent(content);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return {modal, modalContent, openModal, closeModal};
};

export default useModal;
