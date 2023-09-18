const express = require('express');
const router = express.Router();

//database connection
const db = require('../config/mongoose');
const Task = require('../models/taskDB');

//controller connected
const mainController = require('../controllers/mainController');
console.log("Routes are connected");

//main route connected
router.get('/', mainController.home);

//route for adding the task from form data
router.post('/add-task',function(req,res){
    Task.create({
        taskName: req.body.taskContent,
        taskType: req.body.taskType,
        taskDueDate: req.body.taskDueDate,
    }).then((newTask) =>{
        console.log("Task added to database");
        console.log("********",newTask);
    }).catch(err =>{
        console.log(err);
    });
    return res.redirect('/');
})


//route for deleting the task from database
router.get('/delete-task/',async function(req,res){
    console.log(req.query);
    let taskId = req.query.id;

    await Task.findByIdAndDelete(taskId);

    return res.redirect('/');
});

//route for upadte the status of task completed status
router.post('/update-task-status/', async (req,res) =>{

    try{
        let taskId = req.query.id;
        const task = await Task.findById(taskId);

        task.completed = !task.completed;
        await task.save();

        return res.redirect('/');

    }
    catch(err){
        console.error("Error toggling the task: ",err);
    }

});



module.exports = router;