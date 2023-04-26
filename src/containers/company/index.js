import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './Company.module.scss';
import {BioModal, Typography, TeamModal} from '~/components';
import {
  ArrowRight,
  ChipIcon,
  CompanyNew,
  CompanyPlanning1,
  CompanyPlanning2,
  CompanyPlanning3,
  GroupIcon,
  HammerIcon,
  HouseIcon,
  LeafIcon,
} from '~/assets';
import {secroTeam, advisors, directors} from '~/mock';
import {ModalContext} from '~/context';
import {Routes} from '~/constants';
import {BottomBanner} from '~/containers';
import History from './history';

const Advisory = ({title, list}) => {
  const {openModal} = useContext(ModalContext);
  const handleTeam = (advisor) => () => {
    openModal(<TeamModal advisor={advisor} />);
  };
  // console.log(directors);
  // console.log(list);
  return (
    <div className={styles.container__advisory}>
      <Typography
        variant="Heading"
        className={styles.container__advisory_title}>
        {title}
      </Typography>
      <div className={styles.container__advisory_list}>
        {list && list.map((advisor, i) => (
          <div
            className={classNames(styles.container__advisory_list_item, {
              [styles['even-column']]: i % 2 === 0,
            })}
            key={advisor.name + i}>
            <div className={styles.container__advisory_list_item_avatar}>
              <Image
                src={advisor.avatar}
                alt={`Advisor name: ${advisor.name} `}
              />
            </div>
            <div className={styles.container__advisory_list_item_info}>
              <Typography
                className={styles.container__advisory_list_item_info_name}
                variant="Heading">
                <FormattedMessage
                  id={`company.advisor.people.${advisor.name}.name`}
                />
              </Typography>
              <div
                className={styles.read_more}
                onClick={handleTeam(advisor)}>
                <Typography className={styles.card__btn_more_text}>
                  <FormattedMessage id="common.readBio" />
                </Typography>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const {openModal} = useContext(ModalContext);

  const handleBio = (teamMember) => () => {
    openModal(<BioModal teamMember={teamMember} />);
  };
  return (
    <div className={styles.container__team}>
      <Typography variant="Heading" className={styles.container__team_title}>
        <FormattedMessage id="company.team.title" />
      </Typography>
      <div className={styles.container__team_list}>
        {secroTeam.map((teamMember) => (
          <div key={teamMember.name} className={styles.card}>
            <div className={styles.card__avatar}>
              <Image
                src={teamMember.avatar}
                alt={`Secro team member: ${teamMember.name}`}
              />
            </div>
            <Typography variant="Heading" className={styles.card__heading}>
              <FormattedMessage
                id={`company.team.people.${teamMember.name}.name`}
              />
            </Typography>
            <Typography className={styles.card__description}>
              <FormattedMessage
                id={`company.team.people.${teamMember.name}.role`}
              />
            </Typography>
            <div className={styles.card__divider} />
            <div
              className={styles.card__btn_more}
              onClick={handleBio(teamMember)}>
              <Typography className={styles.card__btn_more_text}>
                <FormattedMessage id="common.readBio" />
              </Typography>
              <ArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <>
      <section className={styles.container}>
        <Typography variant="Heading" className={styles.container__title}>
          <FormattedMessage id="company.title" />
        </Typography>
        <Typography className={styles.container__description}>
          <FormattedMessage id="company.description" />
        </Typography>

        <div className="container">
          <div className={styles.container__icon}>
            <CompanyNew />
          </div>
        </div>

        <div className="container">
          <div className={styles.container__story}>
            <Typography
              variant="Heading"
              className={styles.container__story_title}>
              <FormattedMessage id="company.story.title" />
            </Typography>
            <Typography className={styles.container__story_description}>
              <FormattedMessage id="company.story.description1" />
              <br />
              <br />
              <b>In 2021</b>, after the Singapore Electronic Transaction act was passed, we took the step of translating our vision into a roadmap to deliver a new digital product to the industry, and we founded our company, Secro, to execute on this roadmap. In 2022 Secro delivered the first digital negotiable instrument solution providing e-bill of lading service without any private rulebook agreement. This is a totally novel approach, that challenges the core assumptions at the basis of the e-bill of lading as we used to know it so far. What we are basically saying is that the world is not flat, and there is a totally different way we can take to grow e-BL adoption across the globe. A way that is more robust from the legal point of view and easier to adopt from the customer experience point of view.​
              <br />
              <br />
              <FormattedMessage id="company.story.description3" />
            </Typography>

            {/* <Typography className={styles.container__story_end}>
              <FormattedMessage id="company.story.end" />
            </Typography> */}
            {/* <Typography className={styles.container__story_author}>
              <FormattedMessage id="company.story.author" />
            </Typography> */}
          </div>

        
          <div className={styles.container__values}>
            <Typography
              variant="Heading"
              className={styles.container__values_title}>
              <FormattedMessage id="company.values.title" />
            </Typography>
            <Typography className={styles.container__values_description}>
              <FormattedMessage id="company.values.description" />
            </Typography>
            <div className={styles.container__values__blocks}>
              <div className={styles.container__values__blocks_block}>
                <div className={styles.container__values__blocks_block_title}>
                  <div
                    className={styles.container__values__blocks_block_title_icon}>
                    <GroupIcon />
                  </div>
                  <Typography
                    className={styles.container__values__blocks_block_title_text}>
                    <FormattedMessage id="company.values.rows.customer.title" />
                  </Typography>
                </div>
                <Typography
                  className={styles.container__values__blocks_block__description}>
                  <FormattedMessage id="company.values.rows.customer.description" />
                </Typography>
              </div>
              <div className={styles.container__values__blocks_block}>
                <div className={styles.container__values__blocks_block_title}>
                  <div
                    className={styles.container__values__blocks_block_title_icon}>
                    <LeafIcon />
                  </div>
                  <Typography
                    className={styles.container__values__blocks_block_title_text}>
                    <FormattedMessage id="company.values.rows.resource.title" />
                  </Typography>
                </div>
                <Typography
                  className={styles.container__values__blocks_block__description}>
                  <FormattedMessage id="company.values.rows.resource.description" />
                </Typography>
              </div>
              <div className={styles.container__values__blocks_block}>
                <div className={styles.container__values__blocks_block_title}>
                  <div
                    className={styles.container__values__blocks_block_title_icon}>
                    <HouseIcon />
                  </div>
                  <Typography
                    className={styles.container__values__blocks_block_title_text}>
                    <FormattedMessage id="company.values.rows.community.title" />
                  </Typography>
                </div>
                <Typography
                  className={styles.container__values__blocks_block__description}>
                  <FormattedMessage id="company.values.rows.community.description" />
                </Typography>
              </div>
              <div className={styles.container__values__blocks_block}>
                <div className={styles.container__values__blocks_block_title}>
                  <div
                    className={styles.container__values__blocks_block_title_icon}>
                    <HammerIcon />
                  </div>
                  <Typography
                    className={styles.container__values__blocks_block_title_text}>
                    <FormattedMessage id="company.values.rows.trade.title" />
                  </Typography>
                </div>
                <Typography
                  className={styles.container__values__blocks_block__description}>
                  <FormattedMessage id="company.values.rows.trade.description" />
                </Typography>
              </div>
              <div className={styles.container__values__blocks_block}>
                <div className={styles.container__values__blocks_block_title}>
                  <div
                    className={styles.container__values__blocks_block_title_icon}>
                    <ChipIcon />
                  </div>
                  <Typography
                    className={styles.container__values__blocks_block_title_text}>
                    <FormattedMessage id="company.values.rows.technology.title" />
                  </Typography>
                </div>
                <Typography
                  className={styles.container__values__blocks_block__description}>
                  <FormattedMessage id="company.values.rows.technology.description" />
                </Typography>
              </div>
            </div>
          </div>

          
          <div className={styles.container__planning}>
            <div className={styles.container__planning_images}>
              <div className={styles.container__planning_images_first}>
                <Image src={CompanyPlanning1} />
              </div>
              <div className={styles.container__planning_images_group}>
                <div className={styles.container__planning_images_group_first}>
                  <Image src={CompanyPlanning2} />
                </div>
                <Image src={CompanyPlanning3} />
              </div>
            </div>
            <div className={styles.container__planning_description}>
              <Typography
                variant="Heading"
                className={styles.container__planning_description_title}>
                <FormattedMessage id="company.planning.title" />
              </Typography>
              <Typography
                className={styles.container__planning_description_description}>
                <FormattedMessage id="company.planning.description1" />
                <br /> <br />
                <FormattedMessage id="company.planning.description2" />
              </Typography>
            </div>
          </div>
        </div>

        <div className={styles.container__history}>
          <Typography
            variant="Heading"
            className={styles.container__history_title}>
            <FormattedMessage id="company.history.title" />
          </Typography>
          <Typography className={styles.container__history_description}>
            <FormattedMessage id="company.history.description" />
          </Typography>
          <History />
        </div>
        
        <div className="container">

          <div className={styles.container__peoples}>
            <Team />
            <Advisory title={<FormattedMessage id="company.advisor.titleDirectors" />} list={advisors} />
            {/* <Advisory title={<FormattedMessage id="company.advisor.titleAdvisors" />} list={} /> */}
          </div>

        </div>
        
      </section>
      <BottomBanner
        title="common.bottomBanner.globalTrade"
        text="common.bottomBanner.vision"
        buttonText="common.bottomBanner.letsTalk"
        route={Routes.ContactUs}
      />
    </>
  );
};

export default Company;
