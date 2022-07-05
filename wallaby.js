// @final
//
// NOTE: Do not make changes here without approval from @resist-js/core.

module.exports = function (w) {
  return {
    files: ["tsconfig.json", "tests/tsconfig.json", "src/*.ts", "src/**/*.ts"],

    tests: ["tests/**/*.ts"],

    loose: true,

    env: {
      type: "node",
      runner: "node",
    },

    workers: {
      restart: true,
    },

    hints: {
      ignoreCoverage: /ignore coverage/,
    },

    setup: function (wallaby) {
      if (global._tsconfigPathsRegistered) return
      const tsConfigPaths = require("tsconfig-paths")
      const tsconfig = require("./tsconfig.json")
      tsConfigPaths.register({
        baseUrl: tsconfig.compilerOptions.baseUrl,
        paths: tsconfig.compilerOptions.paths,
      })
      global._tsconfigPathsRegistered = true
    },
  }
}
