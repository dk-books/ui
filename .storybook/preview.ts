import '../src/components/index.css';
// import '../src/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	options: {
    storySort: {
      order: ['Getting Started', 'DK'],
    },
  },
}