const raw = require('../assets/data/aidflows.json');

const first = raw[0];

const allHeaders = Object.keys(first);

export { raw, allHeaders };
