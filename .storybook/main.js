/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // 아래거 accessibility 이슈, 안되서 일단 넘어감.
    // https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
    // "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
