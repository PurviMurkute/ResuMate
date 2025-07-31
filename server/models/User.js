import { model, Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email"
        },
    },
    password: {
        type: String,
        required: true,
        minlength : [6, "Password must be atleast 6 characters long"]
    }
}, {
    timestamps: true
});

const User = model("User", userSchema);

export default User;