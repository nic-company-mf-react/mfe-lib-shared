import reactConfig from "@nic/mfe-lib-shared/config/eslint";
import mdx from "eslint-plugin-mdx";

export default [
  ...reactConfig,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
  },
  {
    files: ["**/*.mdx"],
    rules: {
      "no-undef": "error",
    },
  },
];
