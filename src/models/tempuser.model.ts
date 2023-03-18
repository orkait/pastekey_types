import { Schema, model } from 'mongoose';

export const tempUserSchema = new Schema({
    _id: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "banned", "expired"],
        default: "pending",
    },
    attempts: {
        type: Number,
        required: true,
        default: 0,
    },

    // basic timestamps
    createTS: {
        type: Number,
        required: true,
        default: Date.now(),
    },
    expireTS: {
        type: Number,
        required: true,
        default: Date.now(),
    },
    updateTS: {
        type: Number,
        required: true,
        default: Date.now(),
    },
});

export const TempUser = model('tempUser', tempUserSchema);

