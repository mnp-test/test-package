"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testPackage;

var _util = require("util");

const LOG = (0, _util.debuglog)('@mnp-test/test-package');
/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function testPackage(config = {}) {
  const {
    type
  } = config;
  LOG('@mnp-test/test-package called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map