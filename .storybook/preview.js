import { RouterContext } from "next/dist/shared/lib/router-context";
import '../src/index.css';
import * as nextImage from "next/image";

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

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
      order: ['Getting Started', 'DK' ['Foundation', 'Form', 'Atom', 'Section']],
    },
  },
}
