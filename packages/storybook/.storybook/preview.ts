import type { Preview } from "@storybook/react";
// @ts-expect-error
import "../stories/styles/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ["Getting Started", "Components", "Functions", "*"],
      },
    },
  },
};

export default preview;
