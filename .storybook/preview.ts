import { RouterContext } from "next/dist/shared/lib/router-context";
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
	options: {
    storySort: {
      order: ['Getting Started', 'DK'],
    },
  },
}
