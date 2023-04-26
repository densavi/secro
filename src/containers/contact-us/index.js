import Contacts from '~/containers/contact-us/contacts';
import LetsTalk from '~/containers/contact-us/lets-talk';

import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <div className="container">
      <div className={styles.container}>
        <Contacts />
        <LetsTalk />
      </div>
    </div>
  );
};

export default ContactUs;
