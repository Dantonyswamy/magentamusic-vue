const core = require("@magenta/music/node/core");

const globalAny = global;
globalAny.performance = Date;
globalAny.fetch = require("node-fetch");

const player = new core.Player();

export { player };
