const mongoose = require('mongoose');


//database schema created
const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required: true
    },
    taskType:{
        type:String,
        required: false
    },
    taskDueDate:{
        type:String,
        required: false
    },
    completed:{
        type: Boolean,
        default:false
    }

})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;