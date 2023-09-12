import '@testing-library/jest-dom';
// import {GraphQLHandler} from 'graphql-mocks';

describe('useAvailableLanguages', () => {
	/*

		TODO
		Testing is complicated a lot by not using Apollo.
		Should probably use something like this:

			http://www.graphql-mocks.com/docs/getting-started/quick-example

		but I can't figure out how to get it running without any schema.
	*/

	beforeEach(() => {

	});

	it('will perform request to hygraph to get available languages', async () => {
		/*
		const wrapper = ({ children }) => {
			return <GraphqlProvider>{children}</GraphqlProvider>;
		};

		await waitFor(async () => {
			const { result: { current } } = renderHook(() => useAvailableLanguages(), { wrapper });
			expect(current).toEqual(pages.map((page) => page.market));
		});
		*/
	});
});
