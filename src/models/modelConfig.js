import createModel from './createModel';
import {Schema} from 'mongoose';
import {isEmail} from 'validator';
import CryptoJS from 'crypto-js';
import {ttl} from '../utils/utils';

const AccessToken = createModel("access_token", new Schema({
    access_token: {type: String, default: CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(16))},
    refresh_token: {type: String, default: CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(16))},
    ttl: {type: Number, default: ttl()},
    createdAt: {type: String, default: new Date()},
    userId: {type: String, required: true}
}));

const User = createModel('users', new Schema({
    emails: {
        address: {
            type: String,
            validate: [isEmail, 'invalid email'],
            required: true
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    password: {
        type: String,
        require: true
    },
    profile: {
        name: {type: String},
        image: {type: String}
    },
    createdAt: {type: String, default: new Date().toISOString()},
    emailVerificationToken: {type: String},
    emailVerificationExpired: {type: Date}
}));

export {AccessToken, User};