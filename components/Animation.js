import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

const Animation = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadSeaAnemonePreset(engine);
    // await engine.load('tsparticles', {
    //   background: {
    //     color: '#ffffff'
    //   }
    // });
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      // className="absolute z-[-1] h-full w-full"
      options={{
        // fullScreen: { enable: false },
        background: {
          color: '#0000003'
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 1000
            }
          },
          color: {
            // value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0', '#000000']
            //red,yellow,green,blue
            value: ['#f3763a', '#F3DB1F', '#42FF8C', '#36C5F0']
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 1
          },
          links: {
            enable: true,
            distance: 175,
            color: '#7e7e7e',
            opacity: 0.5,
            width: 1
          },
          size: {
            value: { min: 1, max: 15 }
          },
          move: {
            enable: true,
            speed: window.innerWidth >= 600 ? 5 : 2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: 'out'
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab'
            },
            onClick: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            repulse: {
              distance: 300,
              duration: 2
            },
            grab: {
              distance: 150,
              links: {
                opacity: 1
              }
            }
          }
        }
      }}
    />
  );
};

export default Animation;
