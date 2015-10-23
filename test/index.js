var tape = require("tape"),
    containsNode = require("../src/index");


tape("containsNode(a: Node, b: Node) should check if node contains or is node", function(assert) {
    var a = document.createElement("div"),
        b = document.createElement("div"),
        c = document.createElement("div");

    b.appendChild(c);
    a.appendChild(b);

    assert.equal(containsNode(a, b), true);
    assert.equal(containsNode(b, c), true);
    assert.equal(containsNode(a, c), true);

    assert.equal(containsNode(b, a), false);
    assert.equal(containsNode(c, b), false);
    assert.equal(containsNode(c, a), false);

    assert.end();
});
