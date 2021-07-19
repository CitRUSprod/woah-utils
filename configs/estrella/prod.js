const fs = require("fs/promises")
const path = require("path")
const estrella = require("estrella")
const defu = require("defu")
const baseConfig = require("./base")

const prodConfig = {
    tslint: false,
    define: {
        "process.env.NODE_ENV": JSON.stringify("production")
    }
}

const cjsConfig = defu(prodConfig, baseConfig)
const esmConfig = defu(
    {
        outfile: path.join(__dirname, "../../dist/esm/index.js"),
        format: "esm"
    },
    cjsConfig
)

esmConfig.plugins = esmConfig.plugins.filter(p => p.name !== "esbuild:clean")

async function start() {
    await estrella.build(cjsConfig)
    await fs.writeFile(
        path.join(__dirname, "../../dist/cjs/package.json"),
        JSON.stringify({ type: "commonjs" })
    )
    await estrella.build(esmConfig)
    await fs.writeFile(
        path.join(__dirname, "../../dist/esm/package.json"),
        JSON.stringify({ type: "module" })
    )
}

start()
