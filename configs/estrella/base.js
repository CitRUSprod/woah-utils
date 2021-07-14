const path = require("path")
const { nodeExternalsPlugin } = require("esbuild-node-externals")
const { default: cleanPlugin } = require("esbuild-plugin-clean")

const baseConfig = {
    entry: path.join(__dirname, "../../src/index.ts"),
    outfile: path.join(__dirname, "../../dist/index.js"),
    bundle: true,
    platform: "node",
    plugins: [
        nodeExternalsPlugin(),
        cleanPlugin({
            patterns: ["dist/*"]
        })
    ]
}

module.exports = baseConfig
