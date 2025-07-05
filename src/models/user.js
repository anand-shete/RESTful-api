const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        gender: {
            type: String
        }
    },
    { timestamps: true }
);

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
})

const User = mongoose.model('user', userSchema);
module.exports = User;