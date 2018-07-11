const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`xGameMC`,"$play")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
   
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "ajv": {
      "version": "4.11.8",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-4.11.8.tgz",
      "integrity": "sha1-gv+wKynmYq5TvcIK8VlHcGc5xTY=",
      "requires": {
        "co": "^4.6.0",
        "json-stable-stringify": "^1.0.1"
      }
    },
    "amdefine": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
      "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU="
    },
    "asn1": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.3.tgz",
      "integrity": "sha1-2sh4dxPJlmhJ/IGAd36+nB3fO4Y="
    },
    "assert-plus": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-0.2.0.tgz",
      "integrity": "sha1-104bh+ev/A24qttwIfP+SBAasjQ="
    },
    "async": {
      "version": "0.2.10",
      "resolved": "https://registry.npmjs.org/async/-/async-0.2.10.tgz",
      "integrity": "sha1-trvgsGdLnXGXCMo43owjfLUmw9E="
    },
    "async-limiter": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.0.tgz",
      "integrity": "sha512-jp/uFnooOiO+L211eZOoSyzpOITMXx1rBITauYykG3BRYPu8h0UcxsPNB04RR5vo4Tyz3+ay17tR6JVf9qzYWg=="
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
    },
    "aws-sign2": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.6.0.tgz",
      "integrity": "sha1-FDQt0428yU0OW4fXY81jYSwOeU8="
    },
    "aws4": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.7.0.tgz",
      "integrity": "sha512-32NDda82rhwD9/JBCCkB+MRYDp0oSvlo2IL6rQWA10PQi7tDUM3eqMSltXmY+Oyl/7N3P3qNtAlv7X0d9bI28w=="
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
    },
    "bcrypt-pbkdf": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.1.tgz",
      "integrity": "sha1-Y7xdy2EzG5K8Bf1SiVPDNGKgb40=",
      "requires": {
        "tweetnacl": "^0.14.3"
      },
      "dependencies": {
        "tweetnacl": {
          "version": "0.14.5",
          "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
          "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
        }
      }
    },
    "block-stream": {
      "version": "0.0.9",
      "resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
      "integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
      "requires": {
        "inherits": "~2.0.0"
      }
    },
    "bluebird": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
      "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
    },
    "boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
    },
    "boom": {
      "version": "2.10.1",
      "resolved": "https://registry.npmjs.org/boom/-/boom-2.10.1.tgz",
      "integrity": "sha1-OciRjO/1eZ+D+UkqhI9iWt0Mdm8=",
      "requires": {
        "hoek": "2.x.x"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
    },
    "cheerio": {
      "version": "0.19.0",
      "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-0.19.0.tgz",
      "integrity": "sha1-dy5wFfLuKZZQltcepBdbdas1SSU=",
      "requires": {
        "css-select": "~1.0.0",
        "dom-serializer": "~0.1.0",
        "entities": "~1.1.1",
        "htmlparser2": "~3.8.1",
        "lodash": "^3.2.0"
      }
    },
    "co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
    },
    "combined-stream": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.6.tgz",
      "integrity": "sha1-cj599ugBrFYTETp+RFqbactjKBg=",
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "2.15.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.15.1.tgz",
      "integrity": "sha512-VlfT9F3V0v+jr4yxPc5gg9s62/fIVWsd2Bk2iD435um1NlGMYdVCq+MjcXnhYq2icNOizHr1kK+5TI6H0Hy0ag=="
    },
    "component-emitter": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.2.1.tgz",
      "integrity": "sha1-E3kY1teCg/ffemt8WmPhQOaUJeY="
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "cookiejar": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
      "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA=="
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cross-fetch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-2.2.1.tgz",
      "integrity": "sha1-lshZEE113vyWf7XbYkdOdUJrArA=",
      "requires": {
        "node-fetch": "2.1.2",
        "whatwg-fetch": "2.0.4"
      }
    },
    "cryptiles": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/cryptiles/-/cryptiles-2.0.5.tgz",
      "integrity": "sha1-O9/s3GCBR8HGcgL6KR59ylnqo7g=",
      "requires": {
        "boom": "2.x.x"
      }
    },
    "css-select": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-1.0.0.tgz",
      "integrity": "sha1-sRIcpRhI3SZOIkTQWM7iVN7rRLA=",
      "requires": {
        "boolbase": "~1.0.0",
        "css-what": "1.0",
        "domutils": "1.4",
        "nth-check": "~1.0.0"
      }
    },
    "css-what": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-1.0.0.tgz",
      "integrity": "sha1-18wt9FGAZm+Z0rFEYmOUaeAPc2w="
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "requires": {
        "assert-plus": "^1.0.0"
      },
      "dependencies": {
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        }
      }
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
    },
    "discord.js": {
      "version": "11.3.2",
      "resolved": "https://registry.npmjs.org/discord.js/-/discord.js-11.3.2.tgz",
      "integrity": "sha512-Abw9CTMX3Jb47IeRffqx2VNSnXl/OsTdQzhvbw/JnqCyqc2imAocc7pX2HoRmgKd8CgSqsjBFBneusz/E16e6A==",
      "requires": {
        "long": "^4.0.0",
        "prism-media": "^0.0.2",
        "snekfetch": "^3.6.4",
        "tweetnacl": "^1.0.0",
        "ws": "^4.0.0"
      }
    },
    "dom-serializer": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.1.0.tgz",
      "integrity": "sha1-BzxpdUbOB4DOI75KKOKT5AvDDII=",
      "requires": {
        "domelementtype": "~1.1.1",
        "entities": "~1.1.1"
      },
      "dependencies": {
        "domelementtype": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.1.3.tgz",
          "integrity": "sha1-vSh3PiZCiBrsUVRJJCmcXNgiGFs="
        }
      }
    },
    "domelementtype": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.0.tgz",
      "integrity": "sha1-sXrtguirWeUt2cGbF1bg/BhyBMI="
    },
    "domhandler": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.3.0.tgz",
      "integrity": "sha1-LeWaCCLVAn+r/28DLCsloqir5zg=",
      "requires": {
        "domelementtype": "1"
      }
    },
    "domutils": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.4.3.tgz",
      "integrity": "sha1-CGVRN5bGswYDGFDhdVFrr4C3Km8=",
      "requires": {
        "domelementtype": "1"
      }
    },
    "ecc-jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.1.tgz",
      "integrity": "sha1-D8c6ntXw1Tw4GTOYUj735UN3dQU=",
      "requires": {
        "jsbn": "~0.1.0"
      }
    },
    "entities": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.1.tgz",
      "integrity": "sha1-blwtClYhtdra7O+AuQ7ftc13cvA="
    },
    "extend": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.1.tgz",
      "integrity": "sha1-p1Xqe8Gt/MWjHOfnYtuq3F5jZEQ="
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
    },
    "ffmpeg-binaries": {
      "version": "3.2.2-3",
      "resolved": "https://registry.npmjs.org/ffmpeg-binaries/-/ffmpeg-binaries-3.2.2-3.tgz",
      "integrity": "sha1-nKM7aM0wTs8Qwz5tz3HiuT637hQ=",
      "requires": {
        "superagent": "^3.1.0",
        "tar.gz": "^1.0.5"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
    },
    "form-data": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.1.4.tgz",
      "integrity": "sha1-M8GDrPGTJ27KqYFDpp6Uv+4XUNE=",
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.5",
        "mime-types": "^2.1.12"
      }
    },
    "formidable": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.1.tgz",
      "integrity": "sha512-Fs9VRguL0gqGHkXS5GQiMCr1VhZBxz0JnJs4JmMp/2jL18Fmbzvv7vOFRU+U8TBkHEE/CX1qDXzJplVULgsLeg=="
    },
    "fs": {
      "version": "0.0.1-security",
      "resolved": "https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz",
      "integrity": "sha1-invTcYa23d84E/I4WLV+yq9eQdQ="
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fstream": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.11.tgz",
      "integrity": "sha1-XB+x8RdHcRTwYyoOtLcbPLD9MXE=",
      "requires": {
        "graceful-fs": "^4.1.2",
        "inherits": "~2.0.0",
        "mkdirp": ">=0.5 0",
        "rimraf": "2"
      }
    },
    "get-youtube-id": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/get-youtube-id/-/get-youtube-id-1.0.0.tgz",
      "integrity": "sha1-NnaAhIophCY1poInwtELCkkkVg8="
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "requires": {
        "assert-plus": "^1.0.0"
      },
      "dependencies": {
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        }
      }
    },
    "glob": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.2.tgz",
      "integrity": "sha512-MJTUg1kjuLeQCJ+ccE4Vpa6kKVXkPYJ2mOCQyUuKLcLQsdrMCpBPUi8qVE6+YuaJkozeA9NusTAw3hLr8Xe5EQ==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz",
      "integrity": "sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg="
    },
    "har-schema": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-1.0.5.tgz",
      "integrity": "sha1-0mMTX0MwfALGAq/I/pWXDAFRNp4="
    },
    "har-validator": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-4.2.1.tgz",
      "integrity": "sha1-M0gdDxu/9gDdID11gSpqX7oALio=",
      "requires": {
        "ajv": "^4.9.1",
        "har-schema": "^1.0.5"
      }
    },
    "hawk": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/hawk/-/hawk-3.1.3.tgz",
      "integrity": "sha1-B4REvXwWQLD+VA0sm3PVlnjo4cQ=",
      "requires": {
        "boom": "2.x.x",
        "cryptiles": "2.x.x",
        "hoek": "2.x.x",
        "sntp": "1.x.x"
      }
    },
    "hoek": {
      "version": "2.16.3",
      "resolved": "https://registry.npmjs.org/hoek/-/hoek-2.16.3.tgz",
      "integrity": "sha1-ILt0A9POo5jpHcRxCo/xuCdKJe0="
    },
    "html-entities": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.2.1.tgz",
      "integrity": "sha1-DfKTUfByEWNRXfueVUPl9u7VFi8="
    },
    "htmlparser2": {
      "version": "3.8.3",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.8.3.tgz",
      "integrity": "sha1-mWwosZFRaovoZQGn15dX5ccMEGg=",
      "requires": {
        "domelementtype": "1",
        "domhandler": "2.3",
        "domutils": "1.5",
        "entities": "1.0",
        "readable-stream": "1.1"
      },
      "dependencies": {
        "domutils": {
          "version": "1.5.1",
          "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz",
          "integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
          "requires": {
            "dom-serializer": "0",
            "domelementtype": "1"
          }
        },
        "entities": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/entities/-/entities-1.0.0.tgz",
          "integrity": "sha1-sph6o4ITR/zeZCsk/fyeT7cSvyY="
        }
      }
    },
    "http-signature": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.1.1.tgz",
      "integrity": "sha1-33LiZwZs0Kxn+3at+OE0qPvPkb8=",
      "requires": {
        "assert-plus": "^0.2.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
    },
    "isarray": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
    },
    "iso8601-duration": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/iso8601-duration/-/iso8601-duration-1.1.1.tgz",
      "integrity": "sha512-dE/f+GO/ptSFgsM7ccVOYb/82PdCrSAHdmFZgAKwdoUWq8NHg5ygohklQBqVoqcN+CHPwE+f+pWuu2HZPnBU/Q=="
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
    },
    "json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "requires": {
        "jsonify": "~0.0.0"
      }
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
    },
    "jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM="
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      },
      "dependencies": {
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        }
      }
    },
    "lodash": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-3.10.1.tgz",
      "integrity": "sha1-W/Rejkm6QYnhfUgnid/RW9FAt7Y="
    },
    "lodash.isfunction": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/lodash.isfunction/-/lodash.isfunction-3.0.9.tgz",
      "integrity": "sha512-AirXNj15uRIMMPihnkInB4i3NHeb4iBtNg9WRWuK2o31S+ePwwNmDPaTL3o7dTJ+VXNZim7rFs4rxN4YU1oUJw=="
    },
    "long": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
      "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
    },
    "m3u8stream": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/m3u8stream/-/m3u8stream-0.2.2.tgz",
      "integrity": "sha512-R/xWLXBtVr0m9sPruRL4p9uO01JyHxhcQ4nhqQhVgyT802OZyVW+dn+fWHvTnbfE6YMLc65TksZZut+Mh2OVMQ==",
      "requires": {
        "miniget": "^1.1.0"
      }
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.33.0.tgz",
      "integrity": "sha512-BHJ/EKruNIqJf/QahvxwQZXKygOQ256myeN/Ew+THcAa5q+PjyTTMMeNQC4DZw5AwfvelsUrA6B67NKMqXDbzQ=="
    },
    "mime-types": {
      "version": "2.1.18",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.18.tgz",
      "integrity": "sha512-lc/aahn+t4/SWV/qcmumYjymLsWfN3ELhpmVuUFjgsORruuZPVSwAQryq+HHGvO/SI2KVX26bx+En+zhM8g8hQ==",
      "requires": {
        "mime-db": "~1.33.0"
      }
    },
    "miniget": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/miniget/-/miniget-1.2.0.tgz",
      "integrity": "sha1-ADY3Oia71S2+aUX85sjAOR6eEkE="
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
      "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "requires": {
        "minimist": "0.0.8"
      }
    },
    "mout": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/mout/-/mout-0.11.1.tgz",
      "integrity": "sha1-ujYR318OWx/7/QEWa48C0fX6K5k="
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node-fetch": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.1.2.tgz",
      "integrity": "sha1-q4hOjn5X44qUR1POxwb3iNF2i7U="
    },
    "nth-check": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.1.tgz",
      "integrity": "sha1-mSms32KPwsQQmN6rgqxYDPFJquQ=",
      "requires": {
        "boolbase": "~1.0.0"
      }
    },
    "oauth-sign": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.8.2.tgz",
      "integrity": "sha1-Rqarfwrq2N6unsBWV4C31O/rnUM="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "optimist": {
      "version": "0.3.7",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.3.7.tgz",
      "integrity": "sha1-yQlBrVnkJzMokjB00s8ufLxuwNk=",
      "requires": {
        "wordwrap": "~0.0.2"
      }
    },
    "opusscript": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/opusscript/-/opusscript-0.0.6.tgz",
      "integrity": "sha512-F7nx1SWZCD5Rq2W+5Fx39HlkRkz/5Zqt0LglEB9uHexk8HjedDEiM+u/Y2rBfDFcS/0uQIWu2lJhw+Gjsta+cA=="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "performance-now": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-0.2.0.tgz",
      "integrity": "sha1-M+8wxcd9TqIcWlOGnZG1bY8lVeU="
    },
    "prism-media": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/prism-media/-/prism-media-0.0.2.tgz",
      "integrity": "sha512-L6yc8P5NVG35ivzvfI7bcTYzqFV+K8gTfX9YaJbmIFfMXTs71RMnAupvTQPTCteGsiOy9QcNLkQyWjAafY/hCQ=="
    },
    "process-nextick-args": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
      "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw=="
    },
    "punycode": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
      "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4="
    },
    "qs": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.4.0.tgz",
      "integrity": "sha1-E+JtKK1rD/qpExLNO/cI7TUecjM="
    },
    "queue": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/queue/-/queue-4.4.2.tgz",
      "integrity": "sha512-fSMRXbwhMwipcDZ08enW2vl+YDmAmhcNcr43sCJL8DIg+CFOsoRLG23ctxA+fwNk1w55SePSiS7oqQQSgQoVJQ==",
      "requires": {
        "inherits": "~2.0.0"
      }
    },
    "readable-stream": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
      "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.1",
        "isarray": "0.0.1",
        "string_decoder": "~0.10.x"
      }
    },
    "request": {
      "version": "2.81.0",
      "resolved": "https://registry.npmjs.org/request/-/request-2.81.0.tgz",
      "integrity": "sha1-xpKJRqDgbF+Nb4qTM0af/aRimKA=",
      "requires": {
        "aws-sign2": "~0.6.0",
        "aws4": "^1.2.1",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.5",
        "extend": "~3.0.0",
        "forever-agent": "~0.6.1",
        "form-data": "~2.1.1",
        "har-validator": "~4.2.1",
        "hawk": "~3.1.3",
        "http-signature": "~1.1.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.7",
        "oauth-sign": "~0.8.1",
        "performance-now": "^0.2.0",
        "qs": "~6.4.0",
        "safe-buffer": "^5.0.1",
        "stringstream": "~0.0.4",
        "tough-cookie": "~2.3.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.0.0"
      }
    },
    "request-promise": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/request-promise/-/request-promise-4.2.2.tgz",
      "integrity": "sha1-0epG1lSm7k+O5qT+oQGMIpEZBLQ=",
      "requires": {
        "bluebird": "^3.5.0",
        "request-promise-core": "1.1.1",
        "stealthy-require": "^1.1.0",
        "tough-cookie": ">=2.3.3"
      }
    },
    "request-promise-core": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.1.tgz",
      "integrity": "sha1-Pu4AssWqgyOc+wTFcA2jb4HNCLY=",
      "requires": {
        "lodash": "^4.13.1"
      },
      "dependencies": {
        "lodash": {
          "version": "4.17.10",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.10.tgz",
          "integrity": "sha512-UejweD1pDoXu+AD825lWwp4ZGtSwgnpZxb3JDViD7StjQz+Nb/6l093lx4OQ0foGWNRoc19mWy7BzL+UAK2iVg=="
        }
      }
    },
    "require": {
      "version": "2.4.20",
      "resolved": "https://registry.npmjs.org/require/-/require-2.4.20.tgz",
      "integrity": "sha1-Zstrqqu2XeinHXk/XGX9GE83mLY=",
      "requires": {
        "std": "0.1.40",
        "uglify-js": "2.3.0"
      }
    },
    "rimraf": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.2.tgz",
      "integrity": "sha512-lreewLK/BlghmxtfH36YYVg1i8IAce4TI7oao75I1g245+6BctqTVQiBP3YUJ9C6DQOXJmkYR9X9fCLtCOJc5w==",
      "requires": {
        "glob": "^7.0.5"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "simple-youtube-api": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/simple-youtube-api/-/simple-youtube-api-5.0.2.tgz",
      "integrity": "sha512-MtFToFLoX4eWNVUcqhbJ3J7SN8tBNaHRAHC4RKzSCW7cEVVZygNHa3nhCEWVINBoI1fmxjEUW7zwdlChYNuoZg==",
      "requires": {
        "cross-fetch": "^2.1.1",
        "iso8601-duration": "^1.0.0"
      }
    },
    "snekfetch": {
      "version": "3.6.4",
      "resolved": "https://registry.npmjs.org/snekfetch/-/snekfetch-3.6.4.tgz",
      "integrity": "sha512-NjxjITIj04Ffqid5lqr7XdgwM7X61c/Dns073Ly170bPQHLm6jkmelye/eglS++1nfTWktpP6Y2bFXjdPlQqdw=="
    },
    "sntp": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/sntp/-/sntp-1.0.9.tgz",
      "integrity": "sha1-ZUEYTMkK7qbG57NeJlkIJEPGYZg=",
      "requires": {
        "hoek": "2.x.x"
      }
    },
    "source-map": {
      "version": "0.1.43",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
      "integrity": "sha1-wkvBRspRfBRx9drL4lcbK3+eM0Y=",
      "requires": {
        "amdefine": ">=0.0.4"
      }
    },
    "sshpk": {
      "version": "1.14.2",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.14.2.tgz",
      "integrity": "sha1-xvxhZIo9nE52T9P8306hBeSSupg=",
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      },
      "dependencies": {
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        },
        "tweetnacl": {
          "version": "0.14.5",
          "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
          "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
          "optional": true
        }
      }
    },
    "std": {
      "version": "0.1.40",
      "resolved": "https://registry.npmjs.org/std/-/std-0.1.40.tgz",
      "integrity": "sha1-Nnil9lCU2eG2teJu2/wCErg0K3E="
    },
    "stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks="
    },
    "string_decoder": {
      "version": "0.10.31",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
      "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
    },
    "stringstream": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/stringstream/-/stringstream-0.0.6.tgz",
      "integrity": "sha512-87GEBAkegbBcweToUrdzf3eLhWNg06FJTebl4BVJz/JgWy8CvEr9dRtX5qWphiynMSQlxxi+QqN0z5T32SLlhA=="
    },
    "superagent": {
      "version": "3.8.3",
      "resolved": "https://registry.npmjs.org/superagent/-/superagent-3.8.3.tgz",
      "integrity": "sha512-GLQtLMCoEIK4eDv6OGtkOoSMt3D+oq0y3dsxMuYuDvaNUvuT8eFBuLmfR0iYYzHC1e8hpzC6ZsxbuP6DIalMFA==",
      "requires": {
        "component-emitter": "^1.2.0",
        "cookiejar": "^2.1.0",
        "debug": "^3.1.0",
        "extend": "^3.0.0",
        "form-data": "^2.3.1",
        "formidable": "^1.2.0",
        "methods": "^1.1.1",
        "mime": "^1.4.1",
        "qs": "^6.5.1",
        "readable-stream": "^2.3.5"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "form-data": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.2.tgz",
          "integrity": "sha1-SXBJi+YEwgwAXU9cI67NIda0kJk=",
          "requires": {
            "asynckit": "^0.4.0",
            "combined-stream": "1.0.6",
            "mime-types": "^2.1.12"
          }
        },
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "qs": {
          "version": "6.5.2",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
          "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA=="
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        }
      }
    },
    "tar": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tar/-/tar-2.2.1.tgz",
      "integrity": "sha1-jk0qJWwOIYXGsYrWlK7JaLg8sdE=",
      "requires": {
        "block-stream": "*",
        "fstream": "^1.0.2",
        "inherits": "2"
      }
    },
    "tar.gz": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/tar.gz/-/tar.gz-1.0.7.tgz",
      "integrity": "sha512-uhGatJvds/3diZrETqMj4RxBR779LKlIE74SsMcn5JProZsfs9j0QBwWO1RW+IWNJxS2x8Zzra1+AW6OQHWphg==",
      "requires": {
        "bluebird": "^2.9.34",
        "commander": "^2.8.1",
        "fstream": "^1.0.8",
        "mout": "^0.11.0",
        "tar": "^2.1.1"
      },
      "dependencies": {
        "bluebird": {
          "version": "2.11.0",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.11.0.tgz",
          "integrity": "sha1-U0uQM8AiyVecVro7Plpcqvu2UOE="
        }
      }
    },
    "tough-cookie": {
      "version": "2.3.4",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.3.4.tgz",
      "integrity": "sha512-TZ6TTfI5NtZnuyy/Kecv+CnoROnyXn2DN97LontgQpCwsX2XyLYCC0ENhYkehSOwAp8rTQKc/NUIF7BkQ5rKLA==",
      "requires": {
        "punycode": "^1.4.1"
      }
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-1.0.0.tgz",
      "integrity": "sha1-cT2LgY2kIGh0C/aDhtBHnmb8ins="
    },
    "uglify-js": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.3.0.tgz",
      "integrity": "sha1-LN7BbTeKiituz7aYl4TPi3rlSR8=",
      "requires": {
        "async": "~0.2.6",
        "optimist": "~0.3.5",
        "source-map": "~0.1.7"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "uuid": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.2.1.tgz",
      "integrity": "sha512-jZnMwlb9Iku/O3smGWvZhauCf6cvvpKi4BKRiliS3cxnI+Gz9j5MEpTz2UFuXiKPJocb7gnsLHwiS05ige5BEA=="
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      },
      "dependencies": {
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        }
      }
    },
    "whatwg-fetch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-2.0.4.tgz",
      "integrity": "sha512-dcQ1GWpOD/eEQ97k66aiEVpNnapVj90/+R+SXTPYGHpYBBypfKJEQjLrvMZ7YXbKm21gXd4NcuxUTjiv1YtLng=="
    },
    "wordwrap": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc="
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "ws": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-4.1.0.tgz",
      "integrity": "sha512-ZGh/8kF9rrRNffkLFV4AzhvooEclrOH0xaugmqGsIfFgOE/pIz4fMc4Ef+5HSQqTEug2S9JZIWDR47duDSLfaA==",
      "requires": {
        "async-limiter": "~1.0.0",
        "safe-buffer": "~5.1.0"
      }
    },
    "youtube-info": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/youtube-info/-/youtube-info-1.2.0.tgz",
      "integrity": "sha512-LKKvKpdtMNkUMDXyHXcoW5rzFfTtFnu1sCmmP7Bq5/v0v/DUxnTkA5qnsJNy2BCuAAXowWxlmHLsLaDTHi9ijA==",
      "requires": {
        "cheerio": "^0.19.0",
        "debug": "^2.2.0",
        "lodash.isfunction": "^3.0.6",
        "request": "2.81.0",
        "request-promise": "^4.2.2"
      }
    },
    "ytdl-core": {
      "version": "0.20.4",
      "resolved": "https://registry.npmjs.org/ytdl-core/-/ytdl-core-0.20.4.tgz",
      "integrity": "sha512-d+jthiJxSQ6yqCeCwwMggXYOjFSOJsD7ahvAAE1sFW9nVNnsA/roz91SFH1FzaMGS7/y7AnJfhVgpE9i8uYjJQ==",
      "requires": {
        "html-entities": "^1.1.3",
        "m3u8stream": "^0.2.1",
        "miniget": "^1.1.0",
        "sax": "^1.1.3"
      }
    }
  }
}

client.login(process.env.BOT_TOKEN);
