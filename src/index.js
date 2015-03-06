var isTextNode = require("is_text_node");


module.exports = function containsNode(a, b) {
    if (!a || !b) {
        return false;
    } else if (a === b) {
        return true;
    } else if (isTextNode(a)) {
        return false;
    } else if (isTextNode(b)) {
        return containsNode(a, b.parentNode);
    } else if (a.contains) {
        return a.contains(b);
    } else if (a.compareDocumentPosition) {
        return !!(a.compareDocumentPosition(b) & 16);
    } else {
        return false;
    }
};
