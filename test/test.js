var assert = require("assert"),
    Browser = require("zombie"),
    containsNode = require("../src/index");


describe("containsNode", function() {
    before(function(done) {
        var _this = this;

        Browser.visit("http://localhost", function(e, browser) {
            _this.document = browser.window.document;
            done();
        });
    });

    it("should add class to node if it will change the current className", function() {
        var a = this.document.createElement("div"),
            b = this.document.createElement("div"),
            c = this.document.createElement("div");

        b.appendChild(c);
        a.appendChild(b);

        assert.equal(containsNode(a, b), true);
        assert.equal(containsNode(b, c), true);
        assert.equal(containsNode(a, c), true);

        assert.equal(containsNode(b, a), false);
        assert.equal(containsNode(c, b), false);
        assert.equal(containsNode(c, a), false);
    });
});
