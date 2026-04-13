// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import reactConfig from "@nic/mfe-lib-shared/config/eslint";
import mdx from "eslint-plugin-mdx";

export default [...reactConfig, {
  ...mdx.flat,
  processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
}, {
  files: ["**/*.mdx"],
  rules: {
    "no-undef": "error",
  },
}, ...storybook.configs["flat/recommended"]];
