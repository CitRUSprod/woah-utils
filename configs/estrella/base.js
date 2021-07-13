const path = require("path")
const { nodeExternalsPlugin } = require("esbuild-node-externals")

const baseConfig = {
    entry: path.join(__dirname, "../../src/main.ts"),
    outfile: path.join(__dirname, "../../dist/main.js"),
    bundle: true,
    platform: "node",
    plugins: [nodeExternalsPlugin()]
}

module.exports = baseConfig
