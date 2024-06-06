import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';

import User from '../Models/user';

export function ProcessRegistration(req:Request, res:Response, next:NextFunction): void
{
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err instanceof mongoose.Error.ValidationError)
        {
            console.error("All Fields are Required");
            return res.status(400).json({success: false, msg: "ERROR: User not registered. All Fields are Required", data: null});
        }

        if(err)
        {
            console.error("ERROR: Inserting New User");
            if(err.name == "UserExistsError")
            {
                console.error("ERROR: User already exists");
            }
            return res.status(400).json({success: false, msg: "ERROR: User not registered", data: null});
        }

        return passport.authenticate('local')(req, res, () =>
        {
            return res.json({success: true, msg: "User Logged in successfully", data: newUser});
        });
    });
}