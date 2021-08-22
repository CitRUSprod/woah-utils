const path = require("path")
const { default: cleanPlugin } = require("esbuild-plugin-clean")

/** @type {import("estrella").BuildConfig} */
const baseConfig = {
    entry: path.join(__dirname, "../../src/index.ts"),
    outfile: path.join(__dirname, "../../dist/cjs/index.js"),
    bundle: true,
    platform: "node",
    plugins: [
        cleanPlugin({
            patterns: ["dist/*"]
        })
    ]
}

module.exports = baseConfig
