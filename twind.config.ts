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
          dialog: {
            in: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(-50%,-48%,0) scale3d(.95,.95,.95) rotate(0)',
              }
            }, 
            out: {
              'to':{
                opacity: '0',
                transform: 'translate3d(-50%,-48%,0) scale3d(.95,.95,.95) rotate(0)',
              }
            }
          },
          enter: {
            100: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(1,1,1) rotate(0)',
              }
            },
            90: {
              '0%':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(.9,.9,.9) rotate(0)',
              }
            },
          },
          exit: {
            100: {
              "to":{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(1,1,1) rotate(0)',
              }
            },
            95: {
              'to':{
                opacity: '0',
                transform: 'translate3d(0,0,0) scale3d(.95,.95,.95) rotate(0)',
              }
            },
          },
          slidein: {
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
          slideout: {
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
            }
          }
        },
        animation: {
          "accordion-down": 'accordion-down .2s ease-out',
          "accordion-up": 'accordion-up .2s ease-out',
          "dialog-in": 'dialog-in .15s',
          "dialog-out": 'dialog-out .15s',
          "in": 'enter-100 .15s',
          "out": 'exit-100 .15s',
          "zoomin-90": 'enter-90 .15s',
          "zoomout-95": 'exit-95 .15s',
          "slidein-from-right-50": 'slidein-fromright-half95 .15s',
          "slidein-from-left-50": 'slidein-fromleft-half95 .15s',
          "slidein-from-top-50": 'slidein-fromtop-half95 .15s',
          "slidein-from-bottom-50": 'slidein-frombottom-half95 .15s',
          "slidein-from-right-52": 'slidein-fromright-52 .15s',
          "slidein-from-left-52": 'slidein-fromleft-52 .15s',
          "slidein-from-right-full": 'slidein-fromright-full .15s',
          "slidein-from-left-full": 'slidein-fromleft-full .15s',
          "slidein-from-top-full": 'slidein-fromtop-full .15s',
          "slidein-from-bottom-full": 'slidein-frombottom-full .15s',
          "slideout-to-right-52": 'slideout-toright-52 .15s',
          "slideout-to-left-52": 'slideout-toleft-52 .15s',
          "slideout-to-right-full": 'slideout-toright-full .15s',
          "slideout-to-left-full": 'slideout-toleft-full .15s',
          "slideout-to-top-full": 'slideout-totop-full .15s',
          "slideout-to-bottom-full": 'slideout-tobottom-full .15s',
        }
      }
    }
  }),
  selfURL: import.meta.url,
};