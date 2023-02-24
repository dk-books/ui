export const filterBy = (ages: any, curriculum: any, subjects: any, topics: any) => {
	return [
		{
			value: 'ages',
			name: ages,
			type: 'array',
			plural: ages,
		},
		{
			value: 'subjects',
			name: subjects,
			type: 'array',
			plural: subjects,
		},
		{
			value: 'curriculum',
			name: curriculum,
			type: 'array',
			plural: curriculum,
		},
		{
			value: 'topics',
			name: topics,
			type: 'array',
			plural: topics,
		},
	];
};
