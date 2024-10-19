import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { PageContainer } from '../PageContainer';
import Animation from '../Animation';

export const Hero = ({ textEnter, textLeave }) => {
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
    <div className="snap-start relative h-screen w-full">
      <Animation />
      <div className="h-[75vh] md:h-[75vh] mx-auto md:w-[75vw] text-right flex justify-center items-center">
        <div className="rounded-lg dark:bg-transparent px-5 w-4/5 md:w-full font-light">
          <div className="text-xl font-normal mb-2">Hi, I'm</div>
          <div className="text-2xl font-thin text-right flex flex-col items-end">
            <div
              onMouseEnter={() => textEnter(1)}
              onMouseLeave={textLeave}
              className="font-bold md:text-9xl text-w6 dark:text-w1 text-7xl mb-4">
              Vaisakh
            </div>
            <div className="hero-target-container w-fit font-semibold mx-2">
              <div className="md:text-4xl text-2xl hero-target">
                <div className="hero-card-a w-fit whitespace-pre-wrap xs:whitespace-nowrap">
                  Software Developer
                </div>
                <div className="hero-card-b w-fit whitespace-pre-wrap xs:whitespace-nowrap">
                  Problem Solver
                </div>
              </div>
            </div>
            <a
              onMouseEnter={() => textEnter(2)}
              onMouseLeave={textLeave}
              href="mailto:vaisakh2019@iiitkottayam.ac.in"
              className=" bg-w4 dark:bg-w2 p-4 rounded-xl font-semibold hover:dark:text-w1 hover:text-w5 hover:bg-w3 hover:dark:bg-[#D09476] w-fit flex items-center flex-nowrap my-2 text-w6 dark:text-w1">
              Get in touch
              <div className="text-2xl animate-bounceX mx-1">
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.2rem' }} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
