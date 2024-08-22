import { defineConfig, Preset } from "twind";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    theme:{
      extend: {
        colors:{
          border: "hsl(var(--border) / <alpha-value>)",
          input: "hsl(var(--input) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          background: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
          primary: {
            DEFAULT: "hsl(var(--primary) / <alpha-value>)",
            foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
            foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
            foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "hsl(var(--muted) / <alpha-value>)",
            foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(var(--accent) / <alpha-value>)",
            foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "hsl(var(--popover) / <alpha-value>)",
            foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          },
          card: {
            DEFAULT: "hsl(var(--card) / <alpha-value>)",
            foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          },
        },
        borderRadius: {
          xl: "calc(var(--radius) + 4px)",
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          accordion:{
            down:{
              '0%': { height: '0' },
              '100%': { height: 'var(--radix-accordion-content-height)' },
            },
            up:{
              '0%': { height: 'var(--radix-accordion-content-height)' },
              '100%': { height: '0' },
            }
          },
          enter: {
            base: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(1,1,1) rotate(0)',
              }
            },
            zoom90: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(.9,.9,.9) rotate(0)',
              }
            },
            dialog: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(-50%,-48%,0) scale3d(.95,.95,.95) rotate(0)',
              }
            },
          },
          exit: {
            base: {
              "to":{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(1,1,1) rotate(0)',
              }
            },
            zoom95: {
              'to':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(.95,.95,.95) rotate(0)',
              }
            },
            dialog: {
              'to':{
                opacity: '0',
                transform: 'translate3d(-50%,-48%,0) scale3d(.95,.95,.95) rotate(0)',
              }
            }
          },
          slide: {
            in: {
              fromright: {
                half95: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(0.5rem,0,0) scale3d(.95,.95,.95) rotate(0)',
                  }
                },
                52: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(13rem,0,0) scale3d(1,1,1) rotate(0)',
                  }
                },
                full: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(100%,0,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              fromleft: {
                half95: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(-0.5rem,0,0) scale3d(.95,.95,.95) rotate(0)',
                  }
                },
                52: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(-13rem,0,0) scale3d(1,1,1) rotate(0)',
                  }
                },
                full: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(-100%,0,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              fromtop: {
                half95: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(0,-0.5rem,0) scale3d(.95,.95,.95) rotate(0)',
                  }
                },
                full: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(0,-100%,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              frombottom: {
                half95: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(0,0.5rem,0) scale3d(.95,.95,.95) rotate(0)',
                  }
                },
                full: {
                  '0%':{
                    opacity: '0',
                    transform: 'translate3d(0,100%,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              }
            },
            out: {
              toright: {
                52: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(13rem,0,0) scale3d(1,1,1) rotate(0)',
                  }
                },
                full: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(100%,0,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              toleft: {
                52: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(-13rem,0,0) scale3d(1,1,1) rotate(0)',
                  }
                },
                full: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(-100%,0,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              totop: {
                full: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(0,-100%,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
              tobottom: {
                full: {
                  'to':{
                    opacity: '0',
                    transform: 'translate3d(0,100%,0) scale3d(1,1,1) rotate(0)',
                  }
                }
              },
            }
          },
        },
        animation: {
          "accordion-down": 'accordion-down .2s ease-out',
          "accordion-up": 'accordion-up .2s ease-out',
          "in": 'enter-base .15s',
          "out": 'exit-base .15s',
          "dialog-in": 'enter-dialog .15s',
          "dialog-out": 'exit-dialog .15s',
          "slidein-fromright": 'slide-in-fromright-half95 .15s',
          "slidein-fromleft": 'slide-in-fromleft-half95 .15s',
          "slidein-fromtop": 'slide-in-fromtop-half95 .15s',
          "slidein-frombottom": 'slide-in-frombottom-half95 .15s',
          "slidein-fromright52": 'slide-in-fromright-52 .15s',
          "slidein-fromleft52": 'slide-in-fromleft-52 .15s',
          "slidein-fromrightfull": 'slide-in-fromright-full .3s',
          "slidein-fromleftfull": 'slide-in-fromleft-full .3s',
          "slidein-fromtopfull": 'slide-in-fromtop-full .3s',
          "slidein-frombottomfull": 'slide-in-frombottom-full .3s',
          "slideout-toright52": 'slide-out-toright-52 .15s',
          "slideout-toleft52": 'slide-out-toleft-52 .15s',
          "slideout-torightfull": 'slide-out-toright-full .15s',
          "slideout-toleftfull": 'slide-out-toleft-full .15s',
          "slideout-totopfull": 'slide-out-totop-full .15s',
          "slideout-tobottomfull": 'slide-out-tobottom-full .15s',
          "zoomin-90": 'enter-zoom90 .15s',
          "zoomout-95": 'exit-zoom95 .15s',
        }
      }
    }
  }),
  selfURL: import.meta.url,
};