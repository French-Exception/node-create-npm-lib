import * as lib from "@frenchex/create-npm-lib-lib";
import * as path from "path";

const logger = require('@log4js-node/log4js-api').getLogger();

const npmCreate = new lib.NpmCreate(logger);

(async () => {
    await npmCreate.create({
        gitBin: process.env.git_bin || await lib.which('git'),
        npmBin: process.env.npm_bin || await lib.which('npm'),
        path: process.env.working_directory || process.cwd(),
        branch: process.env.branch || 'develop',
        name: process.env.name || path.basename(process.cwd()),
        packageJson: {},
        scope: process.env.scope || path.basename(path.join(process.cwd(), '..')),
        version: {major: 0, minor: 0, patch: 1}
    });
})();
