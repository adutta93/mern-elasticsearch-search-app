const express = require('express');
const {
	getAllContent,
	getContentById,
	createContent,
	updateContent,
	deleteContent,
	SearchContent,
	ElasticIndex,
} = require('../controller/contentController');

const router = express.Router();

//Elastic searchy

router.use(ElasticIndex);
router.get('/search', SearchContent);
router.route('/content').get(getAllContent).post(createContent);
router.route('/content/:id').get(getContentById);
// .put(protect, updateContent)
// 	.delete(protect, isAdmin, deleteContent);

module.exports = router;
