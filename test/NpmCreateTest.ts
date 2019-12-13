import 'mocha';
import {NpmCreate} from "@frenchex/create-npm-lib-lib";
import * as log4js from "@log4js-node/log4js-api"
import * as path from "path";
import * as rimraf from "rimraf"

describe('NpmCreate#constructor', function () {
    it('can create directory', async () => {
        const _path = path.join(process.cwd(), 'tests');
        rimraf.sync(_path);

        const creator = new NpmCreate(<any>{
            trace: (...args) => {
                console.log.apply(console, args)
            },
            debug: (...args) => {
                console.log.apply(console, args)
            },
            info: (...args) => {
                console.log.apply(console, args)
            },
            error: (...args) => {
                console.log.apply(console, args)
            },
        });

        await creator.create({
            branch: "develop",
            packageJson: {
                main: "src/index.js",
                devDependencies: [
                    {name: "typescript", version: {prefix: "*"}},
                    {scope: "types", name: "node", version: {prefix: "*"}},
                    {scope: "types", name: "mocha", version: {prefix: "*"}},
                    {scope: "types", name: "chai", version: {prefix: "*"}},
                    {name: "ts-node", version: {prefix: "*"}},
                    {name: "mocha", version: {prefix: "*"}},
                    {name: "chai", version: {prefix: "*"}},
                ]
            },
            path: _path,
            name: 'foo',
            scope: 'bar',
            version: {major: 1, minor: 1, patch: 1},
            npmBin: 'C:\\Program Files\\nodejs\\npm.cmd',
            gitBin: 'C:\\Program Files\\Git\\mingw64\\bin\\git.exe'
        });
    })
});
