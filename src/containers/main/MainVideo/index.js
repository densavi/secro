import React, {useRef, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {Play} from '~/assets';
import {Typography} from '~/components';
import styles from './MainVideo.module.scss';

const MainVideo = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    // HTML video fires 'pause' event when seeking
    // To avoid wrong pause we check for video 'readyState'
    if (videoRef.current.readyState === 4) {
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__video_wrapper}>
        <video
          ref={videoRef}
          controls={isPlaying}
          src="https://secre-dev-s3.s3.eu-central-1.amazonaws.com/Secro+video+explainer+long+cut.mp4"
          onPause={handlePause}
        />
        {!isPlaying && (
          <div className={styles.container__video_info}>
            <div className={styles.container__video_info_text}>
              <Typography
                tag="h2"
                type="Extra"
                variant="Heading"
                transform="Uppercase"
                className={styles.heading}
                color="Light">
                <FormattedMessage id="mainVideo.title" />
              </Typography>
              <Typography
                type="Small"
                color="Light"
                className={styles.container__video_info_text_subtitle}>
                <FormattedMessage id="mainVideo.text" />
              </Typography>
            </div>
            <div className={styles.container__video_info_button}>
              <button
                type="button"
                onClick={handleStart}
                className={styles.container__video_info_button_play}>
                <span>
                  <Play />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainVideo;
