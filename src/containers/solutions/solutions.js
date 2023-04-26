

import React, {useState, useEffect} from 'react';

import {Hero, BottomBanner} from '~/containers';

import {
  UseCasesHero,
} from '~/assets';

import {Routes} from '~/constants';

import styles from './Solutions.module.scss';



const Solutions = () => {

  const [activeTab, setActiveTab] = useState(0);

  const [isFixed, setIsFixed] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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

  return (
    <>
      <Hero title="useCases.title" text="useCases.text" image={UseCasesHero} />
      <section className="container">
        <div className={styles.solutions}>
          <div className={styles.solutions__wrap}>
            <ul className={styles.solutions__list}>
              <li>
                <h3 className={styles.solutions__title}>Confidently trade with the world</h3>
                <div className={styles.solutions__descr}>
                  <ul>
                    <li>Digitally exchange original bills of lading with everyone, everywhere.</li>
                    <li>Legal validity without the need for cumbersome, private agreements.</li>
                    <li>If required by local regulations, easily convertible into paper bill of lading.</li>
                    <li>Attach supporting documents</li>
                  </ul>
                </div>
              </li>
              <li>
                <h3 className={styles.solutions__title}>
                  One digital platform to optimize your manual workflows
                </h3>
                <div className={styles.solutions__descr}>
                  <div className={styles.wrap}>
                    <div className={styles.col}>
                      <h3>Real-time collaboration</h3>
                      <p>Secro allows you, your colleagues, and contributors from other organizations to securely collaborate in real time, on- line, on any document:</p>
                      <ul>
                        <li>Draft bill of ladings</li>
                        <li>Negotiate terms</li>
                        <li>Digitally sign</li>
                        <li>Attach supporting documents</li>
                      </ul>
                    </div>
                    <div className={styles.col}>
                      <h3>Digital Vault</h3>
                      <p>
                      Your personal, encrypted and secured digital storage for negotiable instruments, enabling you to perform in few seconds:
                      </p>
                      <ul>
                        <li>Transfer</li>
                        <li>Surrendering</li>
                        <li>Indorsements</li>
                        <li>Split / change of destination</li>
                      </ul>
                    </div>
                  </div>
                  <h4>Certified Notarization</h4>
                  <p>
                  Secro establishes a certified and notarized chain of trust, from the KYC, AML, KYB identification of counterparts and signing individuals, to the digital encryption of each signed document. Our private blockchain ledger provides non-repudiable traceability of the document’s ownership and content, reducing legal and financial risk and increasing accountability.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.tabs__container}>
            <div className={styles.tabs__wrap}>
              <div className={styles.tabs__buttons} id="target">
                <h6>Solution for:</h6>
                {/* <div className={styles.tabs_overflow}> */}
                <div className={styles.tabs_overflow + ' ' + (isFixed ? styles.fixed : '')}>
                  <div className={styles.tabs_width}>
                    <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? styles.active : ''}>Banks and financial institutions</button>
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? styles.active : ''}>Carriers</button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? styles.active : ''}>Cargo interest</button>
                  </div>
                </div>
              </div>
              <div className={styles.tabs}>
                {activeTab === 0 && 
                  <div className={styles.tabs__content}>
                    <h1 className={styles.tabs__title}>Solutions for Banks and financial institutions</h1>

                    <div className={styles.tabs__block}>
                      <h3>Operational efficiency and reduced cost</h3>
                      <p>In today’s fast-paced and complex international trades, the original bill of lading travels between multiple stakeholders. This process alone causes costs and delays, financial risks, opportunities for fraudulent activity, and overall operational inefficiency.</p>
                      <p>
                      On the contrary, the digitalization of financial assets, enables banks and financial institutions to obtain security over goods swiftly. It increases control over documents, improves security, and enables quick and secured performance of a bill of lading.
                      </p>
                      <div className={styles.quote}>
                        “So far, paper-based documentation constitutes the backbone of traditional trade finance instruments ... Preparation, processing and verification of paper-based documentation across the trade (finance) chain remains highly cost-ineffective and time-consuming.”
                        <span>“Trade finance for SMEs in the digital era”, The Organization for Economic Cooperation and Development</span>
                      </div>
                    </div>


                    <div className={styles.tabs__block}>
                      <h3>Enabled trade finance opportunities</h3>
                      <p>The electronic bill of lading enables automation, process scalability and data-driven credit decisioning. Trade finance assets can be made available to a wider market in a secure way.</p>
                      <div className={styles.quote}>
                      “The International Chamber of Commerce (ICC) estimates that digitalization would add $9 trillion to the G7 trade by 2026—a piece of good news for corporates and their banking partners.”
                        <span>“Corporate Banks Prepare to Embrace Digital Trade Documentation”, Tushar Chitra, Oracle Financial Services</span>
                      </div>
                    </div>



                    

                  </div>
                }

                {activeTab === 1 && <p>Content for tab 2.</p>}
                {activeTab === 2 && <p>Content for tab 3.</p>}
              </div>
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

export default Solutions;
