const axios = require('../helpers/axios');
const TAKE_USER_NAME = 'takenet';
const LANGUAGE = 'C#';

const getRepositories = async () => {
	const url = `/users/${TAKE_USER_NAME}/repos`;
	const query = { sort: 'created', direction: 'asc' };
	const { data: lastsRepositories } = await axios.get(url, { params: query });

	const filteredRepositories = lastsRepositories.filter(
		(el) => el.language === LANGUAGE
	);

	return transform(filteredRepositories);
};

const transform = (repositories) => {
	const elements = repositories.slice(0, 5);
	const keys = ['first', 'seconde', 'third', 'fourth', 'fiveth']
	const transformed = elements.map((el) => ({
		name: el['full_name'],
		description: el['description'],
		image: el['owner']['avatar_url'],
	}));

	const result = {}

	for (let i = 0; i < 5; i++) {
		const key = keys[i]
		const value = transformed[i]

		result[key] = value
	}
	
	return { data: result, count: result.length };
};

module.exports = { getRepositories };
