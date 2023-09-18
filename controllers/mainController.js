const Task = require('../models/taskDB');

module.exports.home = async (req,res) => {
    try {
        // Fetch all tasks from the "tasks" collection using the Task model
        const taskLIST = await Task.find({}).exec();
    
        return res.render('home', {
          tasks: taskLIST,
        });
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}