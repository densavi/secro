import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Hero} from '~/containers';
import {HowToUseMain} from '~/assets';
import client from '~/api/client';
import endpoints from '~/api/endpoints';

import NavBar from './navBar';
import Search from './search';
import Article from './Article';
import SearchResult from './SearchResult';
import styles from './HowToUse.module.scss';

const HowToUse = ({
  id: activeArticleId = 'Secro collaborative environment',
}) => {
  const [searchText, setSearchText] = useState('');
  const [navList, setNavList] = useState(null);
  const [navListOrder, setNavListOrder] = useState(null);

  useEffect(() => {
    const formatData = (data) => {
      const navListOrder = [];
      const navList = {};
      data.forEach(({structure_level_1, structure_level_2}) => {
        if (navList[structure_level_1]) {
          if (structure_level_2) {
            navList[structure_level_1].add(structure_level_2);
          }
        } else {
          navListOrder.push(structure_level_1);
          navList[structure_level_1] = new Set(); // The Set() is used to avoid 'structure_level_2' repeats
          navList[structure_level_1].add(structure_level_2);
        }
      });

      return {navList, navListOrder};
    };

    try {
      client.get(endpoints.HowToUse.getContent()).then((response) => {
        if (response && response.data) {
          const {navList, navListOrder} = formatData(response.data);
          setNavList(navList);
          setNavListOrder(navListOrder);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (searchText.length) {
      setSearchText('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeArticleId]);

  return (
    <>
      <Hero
        title="howToUse.title"
        text="howToUse.description"
        image={HowToUseMain}
      />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <section className={styles.container}>
        <NavBar
          activeArticleId={activeArticleId}
          navList={navList}
          navListOrder={navListOrder}
        />
        {searchText.length > 0 ? (
          <SearchResult searchText={searchText} />
        ) : (
          <Article activeArticleId={activeArticleId} />
        )}
      </section>
    </>
  );
};

HowToUse.propTypes = {
  id: PropTypes.string,
};

export default HowToUse;
