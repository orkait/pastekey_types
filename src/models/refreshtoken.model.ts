import { Schema, model } from 'mongoose';


export const refreshTokenSchema = new Schema({
    _id: {
        type: String,
        required: false,
    },
    token: {
        type: String,
        required: true,
    },
});

export const RefreshToken = model('refreshToken', refreshTokenSchema);

