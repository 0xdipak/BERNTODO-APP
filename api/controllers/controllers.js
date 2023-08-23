const {contract} = require('../contract/contract')
const {dateclashCheck, priorityCheck} = require('../model/tasks')

const createTask = async(req,res) => {
    const { taskDate } = req.body;
    const task = await dateclashCheck(taskDate);
    try {
      if (task !== "No Task Found") {
        res
          .status(409)
          .json({ status: 409, message: "Date clash: Task can not be added" });
      } else {
        res.status(200).json({ status: 200, message: "Task can be added" });
      }
    } catch (error) {
      console.log(error);
    }
}

const updateTask = async(req,res) => {
    const { taskDate } = req.body;
    const task = await dateclashCheck(taskDate);
    try {
      if (task !== "No Task Found") {
        res
          .status(409)
          .json({
            status: 409,
            message: "Date clash: Task can not be updated",
          });
      } else {
        res.status(200).json({ status: 200, message: "Task can be updated" });
      }
    } catch (error) {
      console.log(error);
    }
}

const deleteTask = async(req,res) => {
    try {
      const { taskId } = req.params;
      const isTrue = await priorityCheck(taskId);

      if (isTrue) {
        res
          .status(403)
          .json({ status: 403, message: "Task can not be deleted" });
      } else {
        res.status(200).json({ status: 200, message: "Task can be deleted" });
      }
    } catch (error) {
      console.log(error);
    }
}

const viewTask = async(req,res) => {
    try {
      const { taskId } = req.params;
      const task = await contract.methods.viewTask(taskId).call();
      const { id, name, date } = task;
      const numId = Number(id);
      const taskObj = { numId, name, date };
      res.status(200).json({ status: 200, taskObj, message: "Task Exist" });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Task ID does not exist" });
    }
}

const allTasks = async(req,res) => {
    try {
      const tasks = await contract.methods.allTasks().call();
      if (tasks.length < 0) {
        res
          .status(404)
          .json({ status: 404, message: "Tas list does not exist" });
      } else {
        const taskList = tasks.map(({ id, name, date }) => {
          const taskId = Number(id);
          return { taskId, name, date };
        });
        res.status(200).json({ status: 200, taskList, message: "Task Exist" });
      }
    } catch (error) {
      console.log(error);
    }
}

module.exports={createTask,updateTask,deleteTask,viewTask,allTasks}

