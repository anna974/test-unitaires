const assert = require("assert");
var monScript = require('../lib/monScript');

describe('compare_a_et_b', function() {
    it('compare_a_etb', function(){
        assert.equal(monScript.compare(8,6), true, "a est supérieur à b");
        assert.equal(monScript.compare(6,8), false, "a n'est pas supérieur à b");
        assert.equal(monScript.compare(8,8), false, "a est égal à b");
        assert.equal(monScript.compare(0,0), false, "a est égal à b");
    });
})

