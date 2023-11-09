const sm = [{
    "text": "b",
    "index": null,
    "flag": false
  },
  {
    "text": "p",
    "index": null,
    "flag": false
  },
  {
    "text": "m",
    "index": null,
    "flag": false
  },
  {
    "text": "f",
    "index": null,
    "flag": false
  },
  {
    "text": "d",
    "index": null,
    "flag": false
  },
  {
    "text": "t",
    "index": null,
    "flag": false
  },
  {
    "text": "n",
    "index": null,
    "flag": false
  },
  {
    "text": "l",
    "index": null,
    "flag": false
  },
  {
    "text": "g",
    "index": null,
    "flag": false
  },
  {
    "text": "k",
    "index": null,
    "flag": false
  },
  {
    "text": "h",
    "index": null,
    "flag": false
  },
  {
    "text": "j",
    "index": null,
    "flag": false
  },
  {
    "text": "q",
    "index": null,
    "flag": false
  },
  {
    "text": "x",
    "index": null,
    "flag": false
  },
  {
    "text": "zh",
    "index": null,
    "flag": false
  },
  {
    "text": "ch",
    "index": null,
    "flag": false
  },
  {
    "text": "sh",
    "index": null,
    "flag": false
  },
  {
    "text": "r",
    "index": null,
    "flag": false
  },
  {
    "text": "z",
    "index": null,
    "flag": false
  },
  {
    "text": "c",
    "index": null,
    "flag": false
  },
  {
    "text": "s",
    "index": null,
    "flag": false
  },
  {
    "text": "y",
    "index": null,
    "flag": false
  },
  {
    "text": "w",
    "index": null,
    "flag": false
  }
]

const ym = [{
    text: 'a',
    index: null,
    flag: false
  },
  {
    text: 'o',
    index: null,
    flag: false
  },
  {
    text: 'e',
    index: null,
    flag: false
  },
  {
    text: 'i',
    index: null,
    flag: false
  },
  {
    text: 'u',
    index: null,
    flag: false
  },
  {
    text: 'ü',
    index: null,
    flag: false
  },
  {
    text: 'ai',
    index: null,
    flag: false
  },
  {
    text: 'ei',
    index: null,
    flag: false
  },
  {
    text: 'ui',
    index: null,
    flag: false
  },
  {
    text: 'ao',
    index: null,
    flag: false
  },
  {
    text: 'ou',
    index: null,
    flag: false
  },
  {
    text: 'iu',
    index: null,
    flag: false
  },
  {
    text: 'ie',
    index: null,
    flag: false
  },
  {
    text: 'üe',
    index: null,
    flag: false
  },
  {
    text: 'er',
    index: null,
    flag: false
  },
  {
    text: 'an',
    index: null,
    flag: false
  },
  {
    text: 'en',
    index: null,
    flag: false
  },
  {
    text: 'in',
    index: null,
    flag: false
  },
  {
    text: 'un',
    index: null,
    flag: false
  },
  {
    text: 'ün',
    index: null,
    flag: false
  },
  {
    text: 'ang',
    index: null,
    flag: false
  },
  {
    text: 'eng',
    index: null,
    flag: false
  },
  {
    text: 'ing',
    index: null,
    flag: false
  },
  {
    text: 'ong',
    index: null,
    flag: false
  }
]

const ztrd = [{
    text: 'zhi',
    index: null,
    flag: false
  },
  {
    text: 'chi',
    index: null,
    flag: false
  },
  {
    text: 'shi',
    index: null,
    flag: false
  },
  {
    text: 'ri',
    index: null,
    flag: false
  }, {
    text: 'zi',
    index: null,
    flag: false
  }, {
    text: 'ci',
    index: null,
    flag: false
  },
  {
    text: 'si',
    index: null,
    flag: false
  },
  {
    text: 'yi',
    index: null,
    flag: false
  },
  {
    text: 'wu',
    index: null,
    flag: false
  },
  {
    text: 'yu',
    index: null,
    flag: false
  },
  {
    text: 'ye',
    index: null,
    flag: false
  },
  {
    text: 'yue',
    index: null,
    flag: false
  },
  {
    text: 'yuan',
    index: null,
    flag: false
  },
  {
    text: 'yin',
    index: null,
    flag: false
  },
  {
    text: 'yun',
    index: null,
    flag: false
  },
  {
    text: 'ying',
    index: null,
    flag: false
  }
]

export const fn = (value) => {
  let item;
  switch (value) {
    case '0':
      item = sm
      break;
    case '1':
      item = ym
      break;
    default:
      item = ztrd
      break;
  }
  return item
}