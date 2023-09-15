import '@testing-library/jest-dom';
import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useAvailableLanguages from '.';

import {GraphQLHandler} from 'graphql-mocks';
import {nockHandler} from '@graphql-mocks/network-nock';
import nock from 'nock';

describe('useAvailableLanguages', () => {
	/*

		TODO
		Testing is complicated a lot by not using Apollo.
		Should probably use something like this:

			http://www.graphql-mocks.com/docs/getting-started/quick-example

		but I can't figure out how to get it running without any schema.
	*/

	let graphQLHandler: GraphQLHandler;

	beforeEach(() => {

	});

	it('will perform request to hygraph to get available languages', async () => {
		/*
		Const wrapper = ({ children }) => {
			return <GraphqlProvider>{children}</GraphqlProvider>;
		};

		await waitFor(async () => {
			const { result: { current } } = renderHook(() => useAvailableLanguages(), { wrapper });
			expect(current).toEqual(pages.map((page) => page.market));
		});
		*/
	});
});
