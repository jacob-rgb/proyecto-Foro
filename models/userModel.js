
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema =  schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
      type:String,
      required: true,
      trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  friends: {
    type: Array,
    required: true,
    trim:true
  },
  imgprofile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
    timestamps: true
  });

module.exports = userSchema;