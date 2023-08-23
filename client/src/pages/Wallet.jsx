import { useNavigate } from "react-router-dom";


const Wallet = ({ connectWallet }) => {

  const navigate = useNavigate();
  
  const click = async() => {
    connectWallet();
    navigate("/view-all-tasks");
  }
  return (
    <>
      <div className="wallet_header">
        <span>WELCOME TO</span> <p>TODO 3.0</p>
      </div>
      <div className="connect_wallet_section todo_btn">
        <button onClick={click}>Connect Wallet</button>
      </div>
    </>
  );
};


export default Wallet;
