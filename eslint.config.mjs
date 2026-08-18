import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

/**
 * Flat config. eslint-config-next 16 ships native flat presets, so no
 * FlatCompat shim is needed.
 */
const config = [
  ...coreWebVitals,
  ...typescriptConfig,
  {
    rules: {
      // Underscore-prefixed bindings are deliberate discards, used when
      // destructuring props apart before spreading the remainder.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default config;
