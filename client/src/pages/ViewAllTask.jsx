import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const ViewAllTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const allTasks = async () => {
      try {
        const res = await fetch(
          "https://berntodo-app.vercel.app/api/ethereum/view-all-task",
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.status === 200) {
          setTaskList(data.taskList);
        }
      } catch (error) {
        console.log(error);
      }
    };

    allTasks();
  }, []);

  // console.log(taskList);

  return (
    <>
      <Navigation />
      <div className="view_all_tasks">
        {taskList.map((task) => {
          return (
            <div
              className="view_all_tasks_card"
              key={task.id}
              style={
                task.id !== "" && task.name !== "" && task.date !== ""
                  ? {}
                  : { display: "none" }
              }
            >
              <p>{task.taskId}</p>
              <p>{task.name}</p>
              <p>{task.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewAllTask;
