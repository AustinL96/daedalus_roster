const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'You must enter a valid email address.']
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'drink'
    }
  ]
});


const User = model('user', userSchema);


module.exports = User;