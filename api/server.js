// 0x6ebd6AA0225b777B78Feb9F49Db831CbE03A943F
// const ABI = require("./ABI.json");
// const { Web3 } = require("web3");
const express = require("express");
const cors = require("cors");
const tasks = require('./routes/routes')
const app = express()

app.use(cors(
  {
    origin: ["https://berntodo-app.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.json());
app.use("/api/ethereum", tasks);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});



// const web3 = new Web3(
//   "https://serene-sly-bird.ethereum-sepolia.discover.quiknode.pro/465084991cc2c492863cc6d544156ca81f7a7604/"
// );
// const contractAddress = "0x6ebd6AA0225b777B78Feb9F49Db831CbE03A943F";

// const contract = new web3.eth.Contract(ABI, contractAddress);

// const dateclashCheck = async (taskDate) => {
//   const tasks = await contract.methods.allTasks().call();
//   const foundTask = tasks.find((task) => task.date === taskDate);

//   if (foundTask) {
//     return foundTask.name;
//   }
//   return "No Task Found";
// };

// const priorityCheck = async(id) => {
//    const tasks = await contract.methods.allTasks().call();
//    const result = tasks[id-1].name.includes("priority");
//    return result;
// }

// app.post("/api/ethereum/create-task", async (req, res) => {
  // const { taskDate } = req.body;
  // const task = await dateclashCheck(taskDate);
  // try {
  //   if (task !== "No Task Found") {
  //     res
  //       .status(409)
  //       .json({ status: 409, message: "Date clash: Task can not be added" });
  //   } else {
  //     res.status(200).json({ status: 200, message: "Task can be added" });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
// });
// 
// app.get("/api/ethereum/view-task/:taskId", async (req, res) => {
  // try {
  //   const { taskId } = req.params;
  //   const task = await contract.methods.viewTask(taskId).call();
  //   const { id, name, date } = task;
  //   const numId = Number(id);
  //   const taskObj = { numId, name, date };
  //   res.status(200).json({ status: 200, taskObj, message: "Task Exist" });
  // } catch (error) {
  //   res.status(500).json({ status: 500, message: "Task ID does not exist" });
  // }
// });

// app.get("/api/ethereum/view-all-task", async (req, res) => {
  // try {
  //   const tasks = await contract.methods.allTasks().call();
  //   if (tasks.length < 0) {
  //     res.status(404).json({ status: 404, message: "Tas list does not exist" });
  //   } else {
  //     const taskList = tasks.map(({ id, name, date }) => {
  //       const taskId = Number(id);
  //       return { taskId, name, date };
  //     });
  //     res.status(200).json({ status: 200, taskList, message: "Task Exist" });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
// });

// app.post("/api/ethereum/update-task", async (req, res) => {
  // const { taskDate } = req.body;
  // const task = await dateclashCheck(taskDate);
  // try {
  //   if (task !== "No Task Found") {
  //     res
  //       .status(409)
  //       .json({ status: 409, message: "Date clash: Task can not be updated" });
  //   } else {
  //     res.status(200).json({ status: 200, message: "Task can be updated" });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
// });

// app.delete("/api/ethereum/delete-task/:taskId", async(req,res) => {
  // try {
  //   const {taskId} = req.params;
  //   const isTrue = await priorityCheck(taskId);

  //   if (isTrue) {
  //     res.status(403).json({ status: 403, message: "Task can not be deleted" });
  //   } else {
  //     res.status(200).json({ status: 200, message: "Task can be deleted" });
  //   }
    
  // } catch (error) {
  //   console.log(error);
  // }
  
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`server running at port ${PORT}`);
// });
