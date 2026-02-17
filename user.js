const mongose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        reaquired: true,
    },
    email: {
        type: String,
        reaquired: true,
        unique: true,
    },
    password: {
        type: String,
        reaquired: true,
    }
});

const UserModel= mongoose.model('User',UserSchema);
module.exports = UserModal;