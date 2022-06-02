const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const contentSchema = new mongoose.Schema(
	{
		notes: {
			type: String,
			maxlength: 5000,
			trim: true,
			// required: true,
			es_indexed: true,
		},
		title: {
			type: String,
			maxlength: 500,
			trim: true,
			// required: true,
			es_indexed: true,
		},
		tags: {
			type: String,
			maxlength: 500,
			trim: true,
			// required: true,
			es_indexed: true,
		},
	
		contentState: {
			type: String,
			default: 'Draft',
		},
	},
	{ timestamps: true }
);

// This part is for Elastic Search
contentSchema.plugin(mongoosastic, {
	host: 'localhost',
	port: 9200,
});

let Content = mongoose.model('Content', contentSchema);

Content.createMapping((err, mapping) => {
	console.log('mapping created');
});

module.exports = {
	Content,
};
