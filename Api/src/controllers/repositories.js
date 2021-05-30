const repositoriesService = require('../services/repositories');

exports.getRepositories = async (req, res, next) => {
	try {
		const repositories = await repositoriesService.getRepositories();
		return res.status(200).json(repositories);
	} catch (error) {
		return res.status(400);
	}
};
