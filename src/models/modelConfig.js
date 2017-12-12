import createModel from './createModel';
import {Schema} from 'mongoose';
import {isEmail} from 'validator';

const createModel('users', new Schema({
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
}), 'users');