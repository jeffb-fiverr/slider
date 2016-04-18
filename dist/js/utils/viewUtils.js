"use strict";

function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.info.apply(console, args);
    return args.length;
}

module.exports = {
    log: log
};