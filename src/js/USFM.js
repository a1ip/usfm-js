/* eslint-disable quote-props */
/**
 * USFM definitions
 */

// for these tags we support number attribute
export const MARKERS_WITH_NUMBERS = {
  "c": true,
  "v": true
};

// for each USFM tag, specify associated properties
//    {boolean} display - optionalif true then attribute content is translatable text
//    {string} type - optional category
//    {string|array} endTag - optional text to indicate the end of content/text
//    {boolean} attrib - optional if true then expect attributes delimited by `|`
//    {boolean} milestone - optional if true then contents between tags with `-s` and `-b`
const USFM_PROPERTIES = {
  "add": {
    "display": true
  },
  "b": {
    "type": "paragraph",
    "display": true
  },
  "bd": {
    "endTag": "*",
    "display": true
  },
  "bdit": {
    "endTag": "*",
    "display": true
  },
  "bk": {
    "endTag": "*",
    "display": true
  },
  "ca": {
    "endTag": "*"
  },
  "cat": {
    "endTag": "*"
  },
  "cls": {
    "type": "paragraph",
    "display": true
  },
  "d": {
    "display": true
  },
  "dc": {
    "endTag": "*",
    "display": true
  },
  "ef": {
    "endTag": "*"
  },
  "em": {
    "endTag": "*",
    "display": true
  },
  "esb": {
    "endTag": "esbe"
  },
  "ex": {
    "endTag": "*"
  },
  "f": {
    "type": "footnote",
    "endTag": "*"
  },
  "fa": {
    "endTag": "*"
  },
  "fdc": {
    "endTag": "*"
  },
  "fe": {
    "endTag": "*"
  },
  "fig": {
    "endTag": "*",
    "attrib": true
  },
  "fm": {
    "endTag": "*"
  },
  "fqa": {
    "endTag": "*"
  },
  "fv": {
    "endTag": "*"
  },
  "imte": {
    "endTag": "*"
  },
  "imte1": {
    "endTag": "*"
  },
  "imte2": {
    "endTag": "*"
  },
  "imte3": {
    "endTag": "*"
  },
  "ior": {
    "endTag": "*"
  },
  "iqt": {
    "endTag": "*"
  },
  "it": {
    "endTag": "*",
    "display": true
  },
  "jmp": {
    "endTag": "*",
    "attrib": true,
    "display": true
  },
  "k": {
    "endTag": "*",
    "display": true
  },
  "lf": {
    "display": true
  },
  "lh": {
    "display": true
  },
  "li": {
    "endTag": "*",
    "display": true
  },
  "lik": {
    "endTag": "*",
    "display": true
  },
  "lim": {
    "display": true
  },
  "lim1": {
    "display": true
  },
  "lim2": {
    "display": true
  },
  "lim3": {
    "display": true
  },
  "lim4": {
    "display": true
  },
  "lim5": {
    "display": true
  },
  "lit": {
    "display": true
  },
  "litl": {
    "endTag": "*",
    "display": true
  },
  "liv": {
    "endTag": "*",
    "display": true
  },
  "liv1": {
    "endTag": "*",
    "display": true
  },
  "liv2": {
    "endTag": "*",
    "display": true
  },
  "liv3": {
    "endTag": "*",
    "display": true
  },
  "liv4": {
    "endTag": "*",
    "display": true
  },
  "liv5": {
    "endTag": "*",
    "display": true
  },
  "m": {
    "type": "paragraph",
    "display": true
  },
  "mi": {
    "type": "paragraph",
    "display": true
  },
  "nb": {
    "type": "paragraph",
    "display": true
  },
  "nd": {
    "endTag": "*",
    "display": true
  },
  "ndx": {
    "endTag": "*"
  },
  "no": {
    "endTag": "*",
    "display": true
  },
  "ord": {
    "endTag": "*",
    "display": true
  },
  "p": {
    "type": "paragraph",
    "display": true
  },
  "pb": {
    "type": "paragraph",
    "display": true
  },
  "pc": {
    "type": "paragraph",
    "display": true
  },
  "ph": {
    "type": "paragraph",
    "display": true
  },
  "ph1": {
    "type": "paragraph",
    "display": true
  },
  "ph2": {
    "type": "paragraph",
    "display": true
  },
  "ph3": {
    "type": "paragraph",
    "display": true
  },
  "ph4": {
    "type": "paragraph",
    "display": true
  },
  "ph5": {
    "type": "paragraph",
    "display": true
  },
  "pi": {
    "type": "paragraph",
    "display": true
  },
  "pi1": {
    "type": "paragraph",
    "display": true
  },
  "pi2": {
    "type": "paragraph",
    "display": true
  },
  "pi3": {
    "type": "paragraph",
    "display": true
  },
  "pi4": {
    "type": "paragraph",
    "display": true
  },
  "pi5": {
    "type": "paragraph",
    "display": true
  },
  "pm": {
    "type": "paragraph",
    "display": true
  },
  "pmc": {
    "type": "paragraph",
    "display": true
  },
  "pmo": {
    "type": "paragraph",
    "display": true
  },
  "pmr": {
    "type": "paragraph",
    "display": true
  },
  "pn": {
    "endTag": "*",
    "display": true
  },
  "png": {
    "endTag": "*",
    "display": true
  },
  "po": {
    "type": "paragraph",
    "display": true
  },
  "pr": {
    "type": "paragraph",
    "display": true
  },
  "pro": {
    "endTag": "*"
  },
  "q": {
    "type": "quote",
    "display": true
  },
  "q1": {
    "type": "quote",
    "display": true
  },
  "q2": {
    "type": "quote",
    "display": true
  },
  "q3": {
    "type": "quote",
    "display": true
  },
  "q4": {
    "type": "quote",
    "display": true
  },
  "qa": {
    "type": "quote",
    "display": true
  },
  "qac": {
    "type": "quote",
    "endTag": "*",
    "display": true
  },
  "qc": {
    "type": "quote",
    "display": true
  },
  "qm": {
    "type": "quote",
    "display": true
  },
  "qr": {
    "type": "quote",
    "display": true
  },
  "qs": {
    "type": "quote",
    "endTag": "*",
    "display": true
  },
  // this is an oddball since span can either be `\qt ... \qt*` or `\qt-s\* ... \qt-e\*`
  "qt": {
    "type": "quote",
    "endTag": ["*", "-e"],
    "display": true,
    "milestone": true,
    "attrib": true
  },
  "rb": {
    "endTag": "*",
    "attrib": true
  },
  "rq": {
    "endTag": "*"
  },
  "rt": {
    "endTag": "*"
  },
  "s": {
    "type": "section"
  },
  "s1": {
    "type": "section"
  },
  "s2": {
    "type": "section"
  },
  "s3": {
    "type": "section"
  },
  "s4": {
    "type": "section"
  },
  "s5": {
    "type": "section"
  },
  "sc": {
    "endTag": "*",
    "display": true
  },
  "sig": {
    "endTag": "*",
    "display": true
  },
  "sis": {
    "endTag": "*"
  },
  "sls": {
    "display": true
  },
  "sp": {
    "display": true
  },
  "sup": {
    "endTag": "*",
    "display": true
  },
  "tl": {
    "endTag": "*",
    "display": true
  },
  "ts": {
    "type": "quote",
    "display": true,
    "endTag": "-e",
    "milestone": true,
    "attrib": true
  },
  "v": {
    "display": true
  },
  "va": {
    "endTag": "*"
  },
  "vp": {
    "endTag": "*"
  },
  "w": {
    "endTag": "*",
    "display": true,
    "attrib": true
  },
  "wa": {
    "endTag": "*",
    "display": true
  },
  "wg": {
    "endTag": "*",
    "display": true
  },
  "wh": {
    "endTag": "*",
    "display": true
  },
  "wj": {
    "endTag": "*",
    "display": true
  },
  "x": {
    "endTag": "*"
  },
  "xdc": {
    "endTag": "*"
  },
  "xnt": {
    "endTag": "*"
  },
  "xop": {
    "endTag": "*"
  },
  "xot": {
    "endTag": "*"
  },
  "xt": {
    "endTag": "*",
    "attrib": true
  },
  "xta": {
    "endTag": "*"
  }
};

export const markerType = tag => {
  let tagProps = USFM_PROPERTIES[tag];
  return tagProps && tagProps.type;
};

export const markerTermination = tag => {
  let tagProps = USFM_PROPERTIES[tag];
  return tagProps && tagProps.endTag;
};

export const markerHasAttributes = tag => {
  let tagProps = USFM_PROPERTIES[tag];
  return tagProps && tagProps.attrib;
};

export const markContentAsText = tag => {
  let tagProps = USFM_PROPERTIES[tag];
  return tagProps && tagProps.display;
};

export const markerSupportsNumbers = tag => {
  return MARKERS_WITH_NUMBERS[tag];
};
