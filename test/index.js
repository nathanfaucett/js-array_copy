var tape = require("tape"),
    copyArray = require("..");


tape("copyArray(src, srcPos, dest, destPos, length)", function(assert) {
    assert.deepEquals(copyArray([0, 1, 2, 3], 0, [], 0, 4), [0, 1, 2, 3]);
    assert.deepEquals(copyArray([0, 1, 2, 3], 2, [], 0, 2), [2, 3]);
    assert.deepEquals(copyArray([0, 1, 2, 3], 2, [], 0), [2, 3]);
    assert.deepEquals(copyArray([0, 1, 2, 3], 1, [1], 1, 1), [1, 1]);
    assert.end();
});
