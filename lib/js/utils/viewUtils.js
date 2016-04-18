function log (...args) {
    console.info.apply(console, args);
    return args.length;
}

module.exports = {
    log: log
}