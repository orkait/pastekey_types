import { Schema, model } from "mongoose";
import { timingEnum } from "../timing";
import { privacyArray, categoryArray, adTypeArray, statusArray } from "../default";

export const countryDefault = {
    ca: 0,
    au: 0,
    uk: 0,
    us: 0,
    in: 0,
    id: 0,
    np: 0,
    pk: 0,
    bd: 0,
    fr: 0,
    ww: 0,
};


export interface PasteDocument extends Document {
    _id: string;
    title: string;
    privacy: string;
    owner: string;
    category: string;
    data: string[];
    size: number;
    maxviews: number;
    note: string;
    eseed: string;
    vseed: string;
    ect: string;
    vct: string;
    adtype: string;
    expiry: string;
    status: string;
    createdAt: number;
    updateAt: number;
    expireAt: number;
    country: object;
    paidViews: number;
    uniqueViews: number;
    totalViews: number;
    paidEarnings: number;
    unpaidEarnings: number;
    reportedCount: number;
    reportedMap: object;
    version: number;
}


// create schema mongoose >= 7.0.0
const pasteSchema = new Schema<PasteDocument>({
    _id: {
        type: String,
        required: false,
    },

    // basic info
    title: {
        type: String,
        required: true,
        default: "Untitled",
    },
    privacy: {
        type: String,
        required: false,
        enum: privacyArray,
        default: "public",
    },
    owner: {
        type: String,
        required: true,
        default: "member",
    },
    category: {
        type: String,
        enum: categoryArray,
    },
    data: {
        type: [String],
        required: true,
        default: [],
    },
    size: {
        type: Number,
        required: true,
        default: 0,
    },
    maxviews: {
        type: Number,
        required: false,
        default: 100000000,
    },
    note: {
        type: String,
        required: true,
        default: "add note",
    },

    // security
    eseed: {
        type: String,
        required: false,
        default: "",
    },
    vseed: {
        type: String,
        required: false,
        default: "",
    },
    ect: {
        type: String,
        required: false,
        default: "",
    },
    vct: {
        type: String,
        required: false,
        default: "",
    },

    // settings
    adtype: {
        type: String,
        required: false,
        enum: adTypeArray,
        default: "medium",
    },
    expiry: {
        type: String,
        required: false,
        enum: timingEnum,
        default: "5 years",
    },
    status: {
        type: String,
        required: true,
        enum: statusArray,
        default: "active",
    },

    // timestamps
    createdAt: {
        type: Number,
        required: true,
        default: Date.now(),
    },
    updateAt: {
        type: Number,
        required: true,
        default: Date.now(),
    },
    expireAt: {
        type: Number,
        required: false,
        default: Date.now() + 157680000000,
    },

    // analytics
    country: {
        type: Object,
        required: false,
        default: countryDefault,
    },

    // views
    paidViews: {
        type: Number,
        required: true,
        default: 0,
    },
    uniqueViews: {
        type: Number,
        required: true,
        default: 0,
    },
    totalViews: {
        type: Number,
        required: true,
        default: 0,
    },

    // earnings
    paidEarnings: {
        type: Number,
        required: true,
        default: 0,
    },
    unpaidEarnings: {
        type: Number,
        required: true,
        default: 0,
    },

    // reports
    reportedCount: {
        type: Number,
        required: true,
        default: 0,
    },

    // reportedMap
    reportedMap: {
        type: Object,
        required: false,
        default: {},
    },


    // version
    version: {
        type: Number,
        required: true,
        default: 1,
    },
});

// create model
export const PasteModel = model<PasteDocument>("paste", pasteSchema);