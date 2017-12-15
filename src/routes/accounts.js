import express from 'express';
import passport from 'passport';
import passwordHash from "password-hash";
import CryptoJS from 'crypto-js';
import {Strategy as LocalStrategy} from 'passport-local';
import { createUser } from '../controllers/user';

const account = express.Router();

account.route('/signup')
    .get((req,res, next) => {
        res.render('signup.html');
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        let {username, password, repassword} = req.body;

        if(username && password && repassword){
            if (password !== repassword) {
                return req.flash('error', 'Password and repassword were not matched');
            }
            let user = await createUser({
                emails: {
                    address: username
                },
                password: passwordHash.generate(password),
                profile: {},
                emailVerificationToken: "",
                emailVerificationExpired: Date.now() + 3600000
            }, 'user');
            user = user.toJSON();
            console.log(user);
        } else {
            return req.flash('error', 'You must fill all fields!');
        }
        req.flash('success', 'You are now login!');
        res.redirect('/');
    });

export default account;