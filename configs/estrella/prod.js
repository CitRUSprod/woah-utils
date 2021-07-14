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
        outfile: path.join(__dirname, "../../dist/index.es.js"),
        format: "esm"
    },
    cjsConfig
)

estrella.build(cjsConfig)
estrella.build(esmConfig)
