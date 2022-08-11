import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { PageContainer } from '../PageContainer';

export const Hero = () => {
  let animation = useRef(null);
  useEffect(() => {
    animation.current = anime({
      targets: '.hero-target',
      direction: 'alternate',
      rotateX: { value: '+=180', delay: 700 },
      easing: 'easeInOutSine',
      duration: 1400,
      autoplay: true,
      loop: true
    });
  }, []);
  return (
    <PageContainer>
      <div className="h-full w-full text-right flex justify-center items-start">
        <div className="w-3/5 font-light">
          <div className="text-lg font-normal mb-2">Hi, my name is</div>
          <div className="text-xl font-thin text-right flex flex-col items-end">
            <div className="font-bold md:text-6xl text-4xl mb-4">Vaisakh Nalu Purakkal.</div>
            <div className="hero-target-container w-fit font-semibold mx-2">
              <div className="text-2xl hero-target">
                <div className="hero-card-a w-fit">Software Developer</div>
                <div className="hero-card-b w-fit ml-auto">Problem Solver</div>
              </div>
            </div>
            <div>designing & building responsive applications every moment.</div>
            <a
              href="mailto:vaisakh2019@iiitkottayam.ac.in"
              className="cursor-pointer font-semibold hover:dark:text-white hover:text-sky-500 w-fit flex items-center flex-nowrap my-2 text-sky-900 dark:text-blue-300">
              Get in touch
              <div className="text-2xl animate-bounceX mx-1">
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.2rem' }} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
