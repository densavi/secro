import Image from 'next/image';

import {
  FeaturesMain,
  Features_doc,
  Real_time,
  Features_Partner_1,
  Features_Partner_2,
  Features_Partner_3,
  Features_Partner_4,
  Features_Partner_5,
  Features_Partner_6,
  ContributorsIcon,
  NotaryIcon,
  FeaturesIcon1, FeaturesIcon2,
} from '~/assets';

import styles from './Features.module.scss';
import {Typography} from '~/components';
// import {FormattedMessage} from 'react-intl';
import React from 'react';
import {BottomBanner, Hero} from '~/containers';
import {Routes} from '~/constants';

const Features = () => {

  const FeaturesList = [
    {
      icon: <FeaturesIcon1 />,
      title: "KYC KYB AML Compliance Solution",
      description: "Integrated state of the art Identity, Corporate verifications, Anti Money Laundering screening against global watchlists to combat digital fraud, and financial crimes. ",
      partners: [
        {
          img: Features_Partner_1,
        },
        {
          img: Features_Partner_2,
        },
        {
          img: Features_Partner_3,
        },
        {
          img: Features_Partner_4,
        },
        {
          img: Features_Partner_5,
        },
        {
          img: Features_Partner_6,
        }
      ]
    },
    {
      icon: <Real_time />,
      title: 'real-time collaborative environment',
      description: "Our intuitive interface enables secured and real-time collaboration between cargo interests, agents, ship owners, and masters. Create a draft of your eBL, negotiate terms, apply amendments, sign, release, endorse, reissue, and more- all done instantaneously, at any time, and anywhere in the world. Secro enables rapid performance of contractual terms of your digital negotiable documents.  "
    },
    {
      icon: <Features_doc />,
      title: 'Attach Docs',
      description: "Attach all freight documents to your e-BL to create a digital package that follows the journey of your eBL. Remove or add additional documents before the eBL is transferred to another party. Save on courier fees, prevent loss of your documents, eliminate operational hassle, and reduce environmental footprint."
    },

    {
      icon: <ContributorsIcon />,
      title: 'Add Contributors',
      description: "Invite More ways for users to collaborate on the eBL drafts. Grant access and edit rights to your e-BL by adding your colleagues, agent, master, or carrier representative's employees who are currently by inviting them as contributors."
    },

    {
      icon: <FeaturesIcon2 />,
      title: 'Invite Trading Partners',
      description: "Scale your network of partners on Secro with this built-in feature, available to all customers, anywhere on the platform. With just a few clicks, invite shipper, consignee, or ship owner to seamlessly collaborate on the bill of ladings. Your counterpart will gain access to the platform upon completion of a quick and self-guided onboarding.  "
    },

    {
      icon: <NotaryIcon />,
      title: 'Notary',
      description: "Secro Digital Notary records in an immutable manner each eBL, every entity and action involved in the eBL lifecycle. Thanks to private blockchain and PKI technology, this service increases trustworthiness and security of every transaction, both on and off-platform with a simple scan of the eBL QR code."
    },

  ]


  return (
    <>
      <section className={styles.container}>
        <Hero
          title="features.title"
          text="features.description"
          image={FeaturesMain}
        />
        <div className={styles.container_wrapper}>
          <div className={styles.container__body}>
            
            <div className={styles.container__wrp}>
              {FeaturesList.map((item) =>
              <div key={item.title} className={styles.container__item}>
                {item.icon &&
                  <div className={styles.container__icon}>
                    {item.icon}
                  </div>
                }
                
                <Typography variant="Heading" className={styles.container__title}>
                  {item.title}
                </Typography>
                <Typography className={styles.container__description}>
                  {item.description}
                </Typography>


                {item.partners &&
                  <div className={styles.container__bottom}>
                    {item.partners.map((img) =>
                      <img src={img.img.src} />
                    )}
                  </div>
                }

              </div>
              )}
            </div>
            
          </div>
        </div>
      </section>
      <BottomBanner
        title="common.bottomBanner.featuresTitle"
        text="common.bottomBanner.empty"
        buttonText="common.bottomBanner.contactUs"
        route={Routes.ContactUs}
      />
    </>
  );
};

export default Features;
