console.log("Script is running seccessfully");

function updateTaskStatus(taskId) {
    fetch(`/update-task-status/?id=${taskId}`, {
        method: 'POST',
    })
    .catch(error => {
        console.error('Error updating task status:', error);
    })
}