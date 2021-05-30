const axios = require('axios').default;

const instance = axios.create({
	baseURL: 'https://api.github.com',
});

module.exports = instance;
