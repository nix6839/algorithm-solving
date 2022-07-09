function solution(s) {
    const MAX_COMPRESS_LEN = Math.floor(s.length / 2);
    let shortLen = s.length;

    for (let compSize = 1; compSize <= MAX_COMPRESS_LEN; compSize += 1) {
        shortLen = Math.min(shortLen, compressStr(s, compSize))
    }
    
    return shortLen;
}

    
function compressStr(s, compSize) {
    let compLen = 0;
    let compStr = s.slice(0, compSize);
    let count = 1;

    for (let i = compSize; i < s.length; i += compSize) {
        const subStr = s.slice(i, i + compSize);
        if (compStr !== subStr) {
            compLen += compStr.length;
            if (count > 1) {
                compLen += count.toString().length;
                count = 1
            }
            compStr = subStr;
        } else {
            count += 1;
        }
    }
    compLen += compStr.length;
    return compLen;
}