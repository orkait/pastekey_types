import { Schema, model } from 'mongoose';
// whenever schema is updated
// check what is been shared with accessToken
// we should not share payment info with accessToken
// we should not share password info with accessToken

export const userSchema = new Schema({
    _id: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },

    // profile
    fullname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    apikey: {
        type: String,
        required: true,
        index: true,
    },
    resetToken: {
        type: String,
        required: false,
    },

    // password
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["member", "admin"],
    },
    datejoined: {
        type: Number,
        required: true,
    },
    pastes: {
        type: Array,
        required: false,
    },

    status: {
        type: String,
        required: true,
        enum: ["active", "inactive", "banned", "deleted"],
    },

    paidViews: {
        type: Number,
        required: true,
    },
    unpaidViews: {
        type: Number,
        required: true,
    },
    paidEarnings: {
        type: Number,
        required: true,
    },
    unpaidEarnings: {
        type: Number,
        required: true,
    },

    payment: {
        type: Object,
        required: false,
        default: {
            paypal: "",
            upi: "",
            selected: "upi",
        },
    },

    socials: {
        type: Object,
        required: false,
        default: {
            facebook: "",
            twitter: "",
            instagram: "",
        },
    },

    // counter
    pasteCounter: {
        type: Object,
        required: true,
        default: {
            pasteCreated: 0,
            pasteCreatedToday: 0,

            pasteRead: 0,
            pasteReadToday: 0,

            pasteUpdated: 0,
            pasteUpdatedToday: 0,
        },
    },
})

export const UserModel = model("User", userSchema);
