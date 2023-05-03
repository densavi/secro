import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from '../Bio/Bio.module.scss';
import {Typography} from '~/components';
import {CrossIcon, In} from '~/assets';
import {ModalContext} from '~/context';

import { useIntl } from 'react-intl';

const Team = ({advisor}) => {
  const {closeModal} = useContext(ModalContext);

    const intl = useIntl();
  const {name, avatar} = advisor;
  const linkedinUrl = intl.formatMessage({ id: `company.advisor.people.${name}.linkedin` });

  return (
      <div className={styles.container}>
          <div className={styles.container__close} onClick={closeModal}>
              <CrossIcon />
          </div>
          <div className={styles.container__info}>
              <div className={styles.container__head}>
                  <div className={styles.container__avatar}>
                      <Image src={avatar} alt={`Secro team member: ${name}`} />
                  </div>
                  <div className={styles.container__info}>
                      <Typography
                          className={styles.container__info_name}
                          variant="Heading"
                      >
                          <FormattedMessage id={`company.advisor.people.${name}.name`} />
                      </Typography>
                      <Typography className={styles.container__info_role}>
                          <FormattedMessage id={`company.advisor.people.${name}.role`} />
                      </Typography>

                      {linkedinUrl && (
                          <ul className={styles.container__socials}>
                              <li>
                                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                      <In />
                                  </a>
                              </li>
                          </ul>
                      )}
                  </div>
              </div>
              <div className={styles.container__info_bio}>
                  <FormattedMessage
                      id={`company.advisor.people.${name}.bio`}
                      values={{
                          br: <br />,
                      }}
                  />
              </div>
          </div>
      </div>
  );
};
Team.propTypes = {
  teamsMember: PropTypes.object.isRequired,
};

export default Team;
