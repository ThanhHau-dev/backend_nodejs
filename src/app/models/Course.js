const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
// // const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: {type:String, maxLength: 600 },
    image: {type:String, maxLength: 255 },
    price: {type:String, maxLength: 255 },
    // linkID: {type:String, maxLength: 255 },
    createdAt: {type:Date, default: Date.now },
    updatedAt: {type:Date, default: Date.now },
    slug:  {type:String, slug: 'name'},
});

module.exports = mongoose.model('Course', Course);