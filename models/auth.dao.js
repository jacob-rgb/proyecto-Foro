const mongoose = require('mongoose');
const userSchema = require('./userModel');

userSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}

const authModel = mongoose.model('users', userSchema);
module.exports = authModel;
