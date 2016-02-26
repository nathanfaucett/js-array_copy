var clamp = require("clamp"),
    isUndefined = require("is_undefined");


module.exports = copyArray;


function copyArray(src, srcPos, dest, destPos, length) {
    var srcLength = src.length;

    srcPos = clamp(srcPos, 0, srcLength);
    length = isUndefined(length) ? (srcLength - srcPos) : length;
    destPos = clamp(destPos, 0, length);

    return baseArrayCopy(src, srcPos, dest, destPos, length);
}
copyArray.base = baseArrayCopy;

function baseArrayCopy(src, srcPos, dest, destPos, length) {
    var i = srcPos - 1,
        il = srcPos + length - 1;

    while (i++ < il) {
        dest[destPos++] = src[i];
    }

    return dest;
}
