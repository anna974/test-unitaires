const assert = require("assert");
var monScript = require('../lib/monScript');

describe('compare_a_et_b', function() {
    it('a est supérieur à b', function(){
        assert.equal(monScript.compare(8,6), true, "a est supérieur à b");
    });
    it('compare', function(){
        assert.equal(monScript.compare(6,8), false, "a n'est pas supérieur à b");
    });
    it('a est égal à b', function(){
        assert.equal(monScript.compare(8,8), false, "a est égal à b");
    });
    it('good', function(){
        assert.equal(monScript.compare(0,0), false, "a est égal à b");
    });
    it('too good', function(){
        assert.equal(monScript.compare(9,5), false, "good");
    });


})

