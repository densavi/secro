import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './Bio.module.scss';
import {Typography} from '~/components';
import {CrossIcon} from '~/assets';
import {ModalContext} from '~/context';

const Bio = ({teamMember}) => {
  const {closeModal} = useContext(ModalContext);

  const {name, avatar} = teamMember;

  return (
    <div className={styles.container}>
      <div className={styles.container__close} onClick={closeModal}>
        <CrossIcon />
      </div>
      <div className={styles.container__info}>
        <Typography className={styles.container__info_name} variant="Heading">
          <FormattedMessage id={`company.team.people.${name}.name`} />
        </Typography>
        <Typography className={styles.container__info_role}>
          <FormattedMessage id={`company.team.people.${name}.role`} />
        </Typography>
        <div className={styles.container__info_bio}>
          <FormattedMessage
            id={`company.team.people.${name}.bio`}
            values={{br: <br />}}
          />
        </div>
      </div>
      <div className={styles.container__avatar}>
        <Image src={avatar} alt={`Secro team member: ${name}`} />
      </div>
    </div>
  );
};
Bio.propTypes = {
  teamMember: PropTypes.object.isRequired,
};

export default Bio;