function solution(s) {
  const MAX_UNIT_LEN = Math.floor(s.length / 2);
  let minCompressedLen = s.length;

  for (let unitLen = 1; unitLen <= MAX_UNIT_LEN; unitLen += 1) {
    minCompressedLen = Math.min(minCompressedLen, compressedLen(s, unitLen));
  }

  return minCompressedLen;
}

/**
 *
 * @param {string} toCompress
 * @param {number} unitLen
 * @returns {number}
 */
function compressedLen(toCompress, unitLen) {
  let unit = toCompress.slice(0, unitLen);
  let count = 1;
  let ret = 0;

  for (let i = unitLen; unit.length !== 0; i += unitLen) {
    const nextUnit = toCompress.slice(i, i + unitLen);
    if (unit !== nextUnit) {
      ret += unit.length;
      if (count > 1) {
        ret += count.toString().length;
        count = 1;
      }
      unit = nextUnit;
    } else {
      count += 1;
    }
  }
  return ret;
}