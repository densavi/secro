import React, {useMemo, useState, useEffect} from 'react';
import {FormattedMessage} from 'react-intl';

import {
  UseCasesHero,
  UseCases1,
  UseCases2,
  UseCases3,
  UseCases4,
  UseCases5,
  UseCases6,
  UseCases7,
} from '~/assets';
import {Hero, BottomBanner} from '~/containers';
import {Typography} from '~/components';
import {Routes} from '~/constants';

import Case from './Case';

import styles from './UseCases.module.scss';

const UseCases = () => {
  const renderCases = useMemo(() => {
    const imageList = [
      <UseCases1 key={1} />,
      <UseCases2 key={2} />,
      <UseCases3 key={3} />,
      <UseCases4 key={4} />,
      <UseCases5 key={5} />,
      <UseCases6 key={6} />,
      <UseCases7 key={7} />,
    ];

    return imageList.map((item, index) => (
      <div key={index}>
        <div className={styles.table__row}>
          <div className={styles.table__column1}>
            <Typography
              type="Regular"
              variant="Heading"
              transform="Uppercase"
              tagName="h2"
              className={styles.table__column1_title}>
              <FormattedMessage id={`useCases.case${index + 1}.caseTitle`} />
            </Typography>
            <Typography color="Gray3">
              <FormattedMessage id={`useCases.case${index + 1}.caseText`} />
            </Typography>
          </div>
          <div className={styles.table__column2}>
            <div className={styles.table__column2_row}>
              <div className={styles.table__column2_row_column}>
                <div className={styles.table__column2_row_column_title}>
                  <FormattedMessage
                    id={`useCases.case${index + 1}.result1Title`}
                  />
                </div>
                <Typography color="Gray3">
                  <FormattedMessage
                    id={`useCases.case${index + 1}.result1Text`}
                  />
                </Typography>
              </div>
              <div className={styles.table__column2_row_column}>
                <div className={styles.table__column2_row_column_title}>
                  <FormattedMessage
                    id={`useCases.case${index + 1}.result2Title`}
                  />
                </div>
                <Typography color="Gray3">
                  <FormattedMessage
                    id={`useCases.case${index + 1}.result2Text`}
                  />
                </Typography>
              </div>
            </div>
            <div className={styles.table__column2_image}>
              {imageList[index]}
            </div>
          </div>
        </div>
      </div>
    ));
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isSmallScreen = window.innerWidth < 768;
      const target = document.getElementById('target');
      const targetTop = target.offsetTop;

      if (scrollTop >= targetTop && isSmallScreen) {
        setIsFixed(true);
      } else if (scrollTop < targetTop && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);


  const handleTabClick = (index) => {
    setActiveTab(index);
  }


  const CasesBanks = [
    {
      title: 'Document delays increase cost, risk, and complexity of financing​',
      scenario: 'The sale is financed with documentary Letter of Credit (L/C) and presentation of paper BL original by the Seller is mandatory to release the funds. Presentation of paper BL original is delayed with L/C about to expire (courier delays, late shipment, necessity to reissue paper BL original to satisfy L/C requirements). ​',
      painPoint: [
        {
          text: "The L/C applicant (buyer) may request an amendment to the L/C, making bank track the changes to L/C and seek approval of the beneficiary.",
        },
        {
          text: "Alternatively, the bank takes the legal risk of finalizing the transaction without the Original Bill of Lading, or against the letter of indemnity issued by the seller's bank."
        }
      ],

      solutions: {
        greenText: "Secro eBL Digital Release and Transfer",
        list: [
          {
            text: "eBL can be presented to Carrier, e-signed, released to Shipper, and then transferred to the bank within minutes, allowing Bank to obtain the security over good swiftly.​"
          },
          {
            text: 'The original eBL is stored in a secured digital "vault", allowing quick access and transfer between counterparts.​'
          },
          {
            text: "Collaboration and negotiation of the bill of lading terms and approval allows for a quick and accurate BL turn-around time.​"
          }
        ]
      },
      link: "#",
    },
    {
      title: "Financial risk resulting from countersigning LETTER OF INDEMNITY or financial guarantee",
      scenario: "Vessel is arriving at the discharging port, but the consignee has not received Original BLs (they’re lost or got delayed in transit). Consequently, the Consignee cannot surrender Original BL to Carrier to get the cargo released.",
    
      link: "#",
    },
    {
      title: "Operational inefficiency and cost around the endorsement process​",
      scenario: "In case of negotiable Bill of Lading, consigned \"to the order of\", upon receipt of the Original BL and payment from the consignee (buyer), the bank needs to indorse, and mail out the Original Bill of Lading out to the consignee (buyer).​",
    
      link: "#",
    },
    {
      title: "Limited ACCESS TO trade finance lending (raw commodities)",
      
      link: "#",
      scenario: "Many companies often lack the ability to provide evidence on their credit history​. Collateralization is done with paper-based document​"
    },
  ]

  return (
    <>
      <Hero title="useCases.title" text="useCases.text" image={UseCasesHero} />
      <section className="container">
        <div className={styles.table}>
          <div id="target" className={styles.table__tabs_wrap}>
            <div  className={styles.table__tabs_overflow + ' ' + (isFixed ? styles.fixed : '')}>
              <div className={styles.table__tabs_buttons}>
                <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? styles.active : ''}>Banks and financial institutions</button>
                <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? styles.active : ''}>Carriers</button>
                <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? styles.active : ''}>Cargo interest</button>
              </div>
            </div>
            <div className={styles.table__tabs}>
              {activeTab === 0 && 
                <div className={styles.table__cases}>
                  {CasesBanks.map((banks) => 
                    <Case content={banks} />
                  )}
                </div>
              }
              {activeTab === 1 && <p>Content for tab 2.</p>}
              {activeTab === 2 && <p>Content for tab 3.</p>}
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

export default UseCases;
