import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTask from './pages/CreateTask'
import Wallet from './pages/Wallet'
import ViewAllTask from './pages/ViewAllTask'
import UpdateTask from './pages/UpdateTask'
import ViewTask from './pages/ViewTask'
import DeleteTask from './pages/DeleteTask'
import './App.css'
import Web3 from "web3";
import ABI from "./pages/ABI.json";

function App() {

  const [state, setState] = useState({web3:null, contract:null, account:null});

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const contractAddress = "0x6ebd6AA0225b777B78Feb9F49Db831CbE03A943F";
        const contract = new web3.eth.Contract(ABI, contractAddress);
        setState({web3:web3,contract:contract,account:accounts[0]})
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };


  const router = createBrowserRouter([
    { path: "/", element: <Wallet connectWallet={connectWallet} /> },
    { path: "/view-all-tasks", element: <ViewAllTask /> },
    { path: "/create-task", element: <CreateTask state={state} /> },
    { path: "/view-task", element: <ViewTask /> },
    { path: "/update-task", element: <UpdateTask state={state} /> },
    { path: "/delete-task", element: <DeleteTask state={state} /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
