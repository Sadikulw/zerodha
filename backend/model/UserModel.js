const mongooes= require('mongoose');
const {userSchema} = require('../schemas/UserSchema');

const bcrypt= require('bcrypt');


userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongooes.model('User', userSchema);

module.exports = {User}
