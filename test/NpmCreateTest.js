"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const create_npm_lib_lib_1 = require("@frenchex/create-npm-lib-lib");
const path = require("path");
const rimraf = require("rimraf");
describe('NpmCreate#constructor', function () {
    it('can create directory', async () => {
        const _path = path.join(process.cwd(), 'tests');
        rimraf.sync(_path);
        const creator = new create_npm_lib_lib_1.NpmCreate({
            trace: (...args) => {
                console.log.apply(console, args);
            },
            debug: (...args) => {
                console.log.apply(console, args);
            },
            info: (...args) => {
                console.log.apply(console, args);
            },
            error: (...args) => {
                console.log.apply(console, args);
            },
        });
        await creator.create({
            branch: "develop",
            packageJson: {
                main: "src/index.js",
                devDependencies: [
                    { name: "typescript", version: { prefix: "*" } },
                    { scope: "types", name: "node", version: { prefix: "*" } },
                    { scope: "types", name: "mocha", version: { prefix: "*" } },
                    { scope: "types", name: "chai", version: { prefix: "*" } },
                    { name: "ts-node", version: { prefix: "*" } },
                    { name: "mocha", version: { prefix: "*" } },
                    { name: "chai", version: { prefix: "*" } },
                ]
            },
            path: _path,
            name: 'foo',
            scope: 'bar',
            version: { major: 1, minor: 1, patch: 1 },
            npmBin: 'C:\\Program Files\\nodejs\\npm.cmd',
            gitBin: 'C:\\Program Files\\Git\\mingw64\\bin\\git.exe'
        });
    });
});
//# sourceMappingURL=NpmCreateTest.js.map