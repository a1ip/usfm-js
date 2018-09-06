
/* Method to filter specified usfm marker from a string
 * @param {string} string - The string to remove specfic marker from
 * @param {string} type - The type of marker to remove i.e. f | h. If no type is given all markers are removed
 * @return {string}
 */
export const removeMarker = (string = '', types) => {
  if (typeof (types) === 'string') types = [types];
  if (!types || types.includes('f')) {
    const regex = new RegExp(/\\f[\S\s]*\\f[^a-z|A-Z|0-9|\s|\\]*/g);
    string = string.replace(regex, '');
  }
  if (!types || types.includes('q')) {
    const regex = new RegExp('\\\\q', 'g');
    string = string.replace(regex, '');
  }
  if (types) {
    for (let type of types) {
      if ((type === 'f') || (type === 'q')) { // if this type was already handled, skip
        continue;
      }
      if (!string.includes('\\')) { // if no more USFM tags, then done
        break;
      }
      const regString = '\\\\' + type;
      const regex = new RegExp(regString, 'g');
      string = string.replace(regex, '');
    }
  }
  return string;
};
