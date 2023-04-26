import React, {useRef, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import styles from './VideoHero.module.scss';

const Slider = {
  controlsCount: 5,
  slides: {},
  currentSlideNumber: null,

  initSlides(options) {
    const timePerSlide = options.totalDuration / this.controlsCount;

    for (let slideNum = 0; slideNum < this.controlsCount; slideNum++) {
      const slideTime = Math.floor(slideNum * timePerSlide);

      this.slides[slideTime] = {
        number: slideNum,
        time: slideTime,
      };
    }
  },

  getSlideByTime(time) {
    return this.slides[Math.floor(time)];
  },

  getSlideByNumber(number) {
    return Object.values(this.slides).find((slide) => slide.number === number);
  },

  canSwitchToNextSlide(slide) {
    return slide && slide.number !== this.currentSlideNumber;
  },
};

const VideoHero = ({renderSlides}) => {
  const videoRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);

  const changeSlideNumber = (slideNumber) => {
    Slider.currentSlideNumber = slideNumber;
    setSlideNumber(slideNumber);
  };

  const onSelectSlide = (slideNumber) => {
    const slide = Slider.getSlideByNumber(slideNumber);
    videoRef.current.currentTime = slide.time;
    changeSlideNumber(slide.number);
  };

  const renderControls = useMemo(
    () =>
      Array.from(Array(Slider.controlsCount).keys()).map((index) => (
        <div
          key={index}
          className={classNames(styles.container__controls_item, {
            [styles.container__controls_item_normal]: index !== slideNumber,
            [styles.container__controls_item_active]: index === slideNumber,
          })}
          onClick={() => onSelectSlide(index)}>
          <span>0{index + 1}</span>
          <FormattedMessage id={'mainHero.control' + (index + 1)} />
        </div>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slideNumber],
  );

  const [progressWidth, setProgressWidth] = useState(0);

  const onStart = (e) => {
    Slider.initSlides({
      totalDuration: e.currentTarget.duration,
    });
  };

  const onEnd = (e) => {
    setProgressWidth(0);
    e.currentTarget.play();
  };

  const onTimeUpdate = (e) => {
    const widthInPercentage = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);

    setProgressWidth(widthInPercentage);

    const slide = Slider.getSlideByTime(e.currentTarget.currentTime);

    if (Slider.canSwitchToNextSlide(slide)) {
      changeSlideNumber(slide.number);
    }
  };

  return (
    <div className={styles.container}>
      <video
        muted
        autoPlay
        playsInline
        src="https://shared-secro-s3.s3.us-west-1.amazonaws.com/Secro_bg.mp4"
        onPlay={onStart}
        onEnded={onEnd}
        onTimeUpdate={onTimeUpdate}
        ref={videoRef}
      />
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.container__controls}>
          {renderControls}
          <div
            className={styles.progressbar}
            style={{
              width: progressWidth + '%',
            }}
          />
        </div>
      </div>
      {renderSlides(slideNumber)}
    </div>
  );
};

VideoHero.propTypes = {
  renderSlides: PropTypes.func.isRequired,
};

export default VideoHero;
