import express from 'express';
import mongoose from 'mongoose';
import {MongoClient as mongodb} from 'mongodb';
import {ObjectID as objectId} from 'mongodb';

const taskRouter = express.Router();

export default function() {
    const taskController = require('../controllers/taskController')();
    taskRouter.use(taskController.middleware);
    taskRouter.route('/')
        .get(taskController.getIndex)
        .post(taskController.addTask);
    taskRouter.route('/delete/:id')
        .get(taskController.destroyTask);
    return taskRouter;
};