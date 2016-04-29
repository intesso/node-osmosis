/**
 * Set an HTTP header. Short for `.config({ headers: ... })`
 *
 * @param {string} key - Header name
 * @param {string} value - Header value
 * @memberof Command
 * @see Osmosis.headers
 * @see Osmosis.config
 */

module.exports = function (key, val) {
    var obj = {};
    obj[key] = val;
    this.headers(obj);
    return this;
}