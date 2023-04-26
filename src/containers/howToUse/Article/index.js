import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Collapse} from '~/components';
import client from '~/api/client';
import endpoints from '~/api/endpoints';

import styles from './Article.module.scss';

const Article = ({activeArticleId}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (activeArticleId) {
      try {
        client
          .get(endpoints.HowToUse.getContent(activeArticleId))
          .then((response) => {
            if (response && response.data) {
              setData(response.data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [activeArticleId]);

  const renderArticle = (articleData) => {
    return articleData.map((paragraph) => {
      const parsedTitleText = paragraph.text_input.split('\n\n');

      if (!paragraph.structure_level_3) {
        return (
          <>
            <h2>{parsedTitleText[0]}</h2>
            <p dangerouslySetInnerHTML={{__html: parsedTitleText[1]}} />
          </>
        );
      } else {
        return (
          <Collapse
            className={styles.article__collapse}
            text={parsedTitleText[0]}>
            <div className={styles.article__collapse_inner}>
              <p dangerouslySetInnerHTML={{__html: parsedTitleText[1]}} />
            </div>
          </Collapse>
        );
      }
    });
  };

  return (
    <article className={styles.article}>
      {data ? renderArticle(data) : <div />}
    </article>
  );
};

Article.propTypes = {
  activeArticleId: PropTypes.string,
};

export default Article;
