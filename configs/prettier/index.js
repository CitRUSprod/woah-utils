/** @type {import("prettier").ParserOptions} */
const config = {
    ...require("@citrus-linting/prettier-config"),
    plugins: ["./node_modules/prettier-plugin-packagejson"]
}

module.exports = config
