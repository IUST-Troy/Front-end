import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import test from "./test.json"
import pin from "../../Static/pinicon2.png"

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      // options={test}
      init={particlesInit}
      loaded={particlesLoaded}
      // options={{
      //   fps_limit: 28,
      //   particles: {
      //     collisions: {
      //       enable: false
      //     },
      //     number: {
      //       value: 200,
      //       density: {
      //         enable: false
      //       }
      //     },
      //     line_linked: {
      //       enable: true,
      //       distance: 30,
      //       opacity: 0.4
      //     },
      //     move: {
      //       speed: 1
      //     },
      //     opacity: {
      //       anim: {
      //         enable: true,
      //         opacity_min: 0.05,
      //         speed: 1,
      //         sync: false
      //       },
      //       value: 0.4
      //     }
      //   },
      //   shape: {
      //     enable: true,
      //     scale: 0.5,
      //     type: "sqaure",
      //     move: {
      //       radius: 10
      //     },
      //     url: "/smalldeer.svg",
      //     src: "/smalldeer.svg",
      //     inline: {
      //       arrangement: "equidistant"
      //     },
      //     draw: {
      //       enable: true,
      //       stroke: {
      //         color: "rgba(255, 255, 255, .2)"
      //       }
      //     }
      //   },
      //   retina_detect: false,
      //   interactivity: {
      //     events: {
      //       onhover: {
      //         enable: true,
      //         mode: "bubble"
      //       }
      //     },
      //     modes: {
      //       bubble: {
      //         size: 6,
      //         distance: 40
      //       }
      //     }
      //   }
      // }}
      options={{
        background: {},
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffffff",
          },
          links: {
            // dash: [10,5],
            color: "#ffffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 5,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            
            // type : "circle",
            "type": [
              "image"
          ],
          "image": [
              {
                  "src": pin,
                  "height": 27,
                  "width": 20
              },
            ]
          
            
          },
          size: {
            value: { min: 25, max: 25},
          },
          
        },
        detectRetina: true,
      }}
    />
  );
}
export default Particle;
