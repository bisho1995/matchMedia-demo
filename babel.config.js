module.exports = {
  presets: [
    // todo: check what plugins are coming from preset-react
    "@babel/preset-react",
    [
      /**
       * The following plugins are used by preset-env
       * proposal-numeric-separator {}
        proposal-logical-assignment-operators {}
        proposal-nullish-coalescing-operator {}
        proposal-optional-chaining {}
        proposal-json-strings {}
        proposal-optional-catch-binding {}
        transform-parameters {}
        proposal-async-generator-functions {}
        proposal-object-rest-spread {}
        transform-dotall-regex {}
        proposal-unicode-property-regex {}
        transform-named-capturing-groups-regex {}
        transform-async-to-generator {}
        transform-exponentiation-operator {}
        transform-template-literals {}
        transform-literals {}
        transform-function-name {}
        transform-arrow-functions {}
        transform-block-scoped-functions {}
        transform-classes {}
        transform-object-super {}
        transform-shorthand-properties {}
        transform-duplicate-keys {}
        transform-computed-properties {}
        transform-for-of {}
        transform-sticky-regex {}
        transform-unicode-escapes {}
        transform-unicode-regex {}
        transform-spread {}
        transform-destructuring {}
        transform-block-scoping {}
        transform-typeof-symbol {}
        transform-new-target {}
        transform-regenerator {}
        transform-member-expression-literals {}
        transform-property-literals {}
        transform-reserved-words {}
        proposal-export-namespace-from {}
        syntax-dynamic-import {}
        syntax-top-level-await {}
       */
      "@babel/preset-env",
      {
        // todo: mention the usage of useBuiltIns
        useBuiltIns: "entry",
        /**
         * List the plugins that are installed due to this preset
         */
        debug: true,
      },
    ],
  ],
  plugins: [
    /**
     * This is used to support such code
     * class A {
     *  state = {
     *    a: 1
     *  }
     * }
     */
    ["@babel/plugin-proposal-class-properties", {
      // todo: mention the usage of loose
      loose: true
    }],
  ],
};
