const express = require('express');
const User = require('../models/user');
const Sleep = require('../models/sleep')
const {createUserJwt} = require('../utils/tokens');
const security = require('../middleware/security');
const router = express.Router();

router.get('/', security.requireAuthenticatedUser, async (req, res, next) => {
    try{
        //list all posts
        const {user} = res.locals;
        const sleeps = await Sleep.listSleepForUser({user});
        return res.status(201).json({sleeps})
    } catch(error) {
        next(error);
    }
})

router.post('/', security.requireAuthenticatedUser, async (req, res, next) => {
    try{
        //create a new nutrition post
        const {user} = res.locals;
        const sleep = await Sleep.createSleep({user, sleep: req.body});
        return res.status(201).json({sleep})
    } catch(error) { 
        next(error);
    }
});

router.get('/:sleepId', async (req, res, next) => {
    try{
        //fetch single post
    } catch(error) {
        next(error);
    }
});

module.exports = router