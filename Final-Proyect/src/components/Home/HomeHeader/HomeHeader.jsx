import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import blackFriday from '../../../assets/blackFriday.jpg';
import christmas from '../../../assets/Navidad.jpg';
import newYear from '../../../assets/newYear.jpg';
import styles from './HomeHeader.module.css';

const HomeHeader = () => {
  const images = [blackFriday, christmas, newYear];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 1000); // Debe coincidir con el tiempo de transición CSS
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <NavLink to="/">
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ height: '77vh' }}
      >
        <div
          ref={sliderRef}
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'none' : 'transform 1s ease-in-out',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.sliderItem}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}
          <div
            className={styles.sliderItem}
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          ></div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeHeader;
