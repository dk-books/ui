describe('useExtractImages', () => {
	it('should extraxt images', () => {
		const response = {
			pages: [
				{
					blocks: [
						{
							images: [
								{
									title: "title 1",
									url: "url 1"
								},
								{
									title: "title 2",
									url: "url 2"
								}
							]
						},
						{},
						{
							images: [
								{
									title: "title 3",
									url: "url 3"
								}
							]
						}
					]
				}
			]
		};
		return response;
	});
});
