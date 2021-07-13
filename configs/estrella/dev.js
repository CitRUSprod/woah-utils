const path = require("path")
const estrella = require("estrella")
const defu = require("defu")
const baseConfig = require("./base")

const devConfig = {
    watch: true,
    sourcemap: "inline",
    minify: false,
    define: {
        "process.env.NODE_ENV": JSON.stringify("development")
    },
    inject: [path.join(__dirname, "source-map-support.js")]
}

estrella.build(defu(baseConfig, devConfig))
