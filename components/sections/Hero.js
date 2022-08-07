import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { PageContainer } from '../PageContainer';

export const Hero = () => {
  let animation = useRef(null);
  useEffect(() => {
    animation.current = anime({
      targets: '.hero-target',
      direction: 'alternate',
      rotateX: { value: '+=180', delay: 600 },
      easing: 'easeInOutSine',
      duration: 1200,
      autoplay: true,
      loop: true
    });
  }, []);
  return (
    <PageContainer>
      <div className="h-full w-full text-right my-50 flex justify-center items-center">
        <div className="w-3/5 font-light">
          <div className="text-4xl mb-2">Hi there,</div>
          <div className="text-3xl font-thin my-6">
            I'm <a className="font-bold">Vaisakh</a>,
            <div className="hero-target-container w-fit font-semibold mx-2">
              <div className="hero-target">
                <div className="hero-card-a w-fit">Software Developer</div>
                <div className="hero-card-b w-fit">Problem Solver</div>
              </div>
            </div>
            <div>and above all curious about how things work.</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
