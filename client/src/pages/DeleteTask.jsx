import React from "react";
import Navigation from "../components/Navigation";

const DeleteTask = ({ state }) => {
  const deleteTask = async (event) => {
    event.preventDefault();

    const { contract, account } = state;
    const taskId = document.querySelector("#taskID").value;

    try {
      const res = await fetch(
        `https://berntodo-app.vercel.app/api/ethereum/delete-task/${taskId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ taskId: taskId }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status === 200) {
        if (contract && contract.methods) {
          await contract.methods
            .deleteTask(taskId)
            .send({ from: account });
            alert("Task is deleted"); 
        }
      } else {
        throw new Error("Task can not be deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navigation />
      <div className="update_task todo_btn">
        <form onSubmit={deleteTask}>
          <label>
            ID : <input id="taskID" />
          </label>

          <button type="submit">Delete Task</button>
        </form>
      </div>
    </>
  );
};

export default DeleteTask;
