var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Customer = new Schema({
    name: String,
    revenue: Number,
    email: String
});

module.exports = mongoose.model('customers', Customer);
mongoose.connect("mongodb://localhost/customers");