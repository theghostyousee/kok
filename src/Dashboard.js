import React, { useState, useEffect } from "react";
import "./index.css";
import Koko from "./media/logo.png";
import Gud from "./media/gud.png";
import Dex from "./media/dex_icon.svg";
import Telegram from "./media/telegram.png";
import Twitter from "./media/twitter.png";
import Web3 from "web3";

function Dashboard() {
  const [isDepositActive, setDepositActive] = useState(true);
  const [isWithdrawActive, setWithdrawActive] = useState(false);

  
  const handleScrol = () => {
    const element = document.getElementById("target-element");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const element = document.getElementById("target-element-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrolll = () => {
    const element = document.getElementById("target-element-2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDepositClick = () => {
    setDepositActive(true);
    setWithdrawActive(false);
  };

  const handleWithdrawClick = () => {
    setDepositActive(false);
    setWithdrawActive(true);
  };

  const [isDepositActive2, setDepositActive2] = useState(true);
  const [isWithdrawActive2, setWithdrawActive2] = useState(false);

  const handleDepositClick2 = () => {
    setDepositActive2(true);
    setWithdrawActive2(false);
  };

  const handleWithdrawClick2 = () => {
    setDepositActive2(false);
    setWithdrawActive2(true);
  };

  const [isDepositActive3, setDepositActive3] = useState(true);
  const [isWithdrawActive3, setWithdrawActive3] = useState(false);

  const handleDepositClick3 = () => {
    setDepositActive3(true);
    setWithdrawActive3(false);
  };

  const handleWithdrawClick3 = () => {
    setDepositActive3(false);
    setWithdrawActive3(true);
  };

  const handleClick = () => {
    window.location.href = "https://app.uniswap.org/#/swap";
  };

  const [ethBalance, setEthBalance] = useState(0);

  const [userAddress, setUserAddress] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Wallet");
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    // Fetch and update the ETH balance when the user's address is available
    if (userAddress) {
      fetchEthBalance();
    }
  }, [userAddress]);

  async function fetchEthBalance() {
    try {
      const web3 = new Web3(window.ethereum);

      // Fetch the ETH balance in wei
      const balanceWei = await web3.eth.getBalance(userAddress);

      // Convert the balance from wei to ether and round to one decimal place
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      const roundedBalance = parseFloat(balanceEth).toFixed(4);

      // Update state with the rounded ETH balance
      setEthBalance(roundedBalance);
    } catch (error) {
      console.error(error);
    }
  }
  async function connectWallet() {
    try {
      const web3 = new Web3(window.ethereum);

      // Get the user's accounts
      const accounts = await web3.eth.requestAccounts();

      // Check if the user is on the Arbitrum chain
      const chainId = await web3.eth.getChainId();
      if (chainId !== 1) {
        setButtonText("Wrong Network");
        return;
      }

      // Update state with the user's address
      setUserAddress(accounts[0]);
      setButtonText(shortAddress(accounts[0]));
    } catch (error) {
      console.error(error);
    }
  }

  const handleMaxButtonClick = () => {
    const currentFees = 0.001; // Replace with the logic to retrieve the current fees

    const maxAmount = ethBalance ; // Adjust this based on how you retrieve the current fees
    setInputValue(maxAmount);
  };

  const shortAddress = (address) => {
    return address ? address.slice(0, 6) + "..." + address.slice(-5) : "";
  };

  return (
    <div className="wrap">
      <header>
        <div className="head-img">
          <img src={Koko}></img>
        </div>
        <ul>
          <li onClick={handleScrol}>Full Protek</li>
          <li onClick={handleScroll}>Big Protek</li>
          <li onClick={handleScrolll}>Smol Protek</li>
        </ul>
        <div className="buttn-head">
          <button onClick={() => window.ethereum && connectWallet()}>
            <p>{userAddress ? shortAddress(userAddress) : buttonText}</p>
          </button>
        </div>
      </header>

      <div className="about-infos"></div>

      <div className="about-koko">
        <div className="koko-title">
          <h1>About $KOKO 🥥</h1>
        </div>
        <div className="wrap-about">
          <div className="details">
            <div className="img-det">
              <img src={Gud}></img>
            </div>
            <div className="text">
              <div className="row">
                <p>
                  The infamous Monkey Gang is causing chaos worldwide by
                  stealing valuable $KOKO.
                </p>
              </div>
              <div className="row">
                <p>
                  This is having severe consequences, as the $KOKO supply is
                  decreasing everyday by 7.5%. To safeguard your $KOKO, you can
                  deposit them into secure vaults, of which there are three
                  types: Full, Big, and Smol Protek Vaults.
                </p>
              </div>

              <div className="row">
                <p>
                  Don't want to be a farmer? Join the Monkey Gang and start
                  stealing $KOKO, only a 33% Full vault can stop them.
                </p>
              </div>

              <div className="row">
                <p> You can learn more by vising our <a href="https://kokonuts.gitbook.io/kokonuts/" >whitepaper. </a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1 id="target-element">$KOKO Presale (Coming)</h1>
        </div>
        <div className="progress-bar" id="center"></div>
        <div className="example">
          <div className="pair">
            <div className="card">
              <h2>Hardcap</h2>
              <h3>30 ETH</h3>
            </div>
            <div className="card">
              <h2>Max per Wallet</h2>
              <h3>1 ETH</h3>
            </div>
          </div>
          <div className="deposit">
            <div className="deposit-title">
                <h1> Contribute for $KOKO </h1>
            </div>
            <div className="balance">
              <h1>ETH balance:</h1>
              <h1>{ethBalance}</h1>

            </div>
            <div className="inpuut">
              <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <button onClick={handleMaxButtonClick}>MAX</button>
            </div>
            <div className="last-button">
              <button>Buy (Coming) </button>
            </div>
          </div>
        </div>


        <div className="dashboard">
          <h1>Dashboard</h1>
        </div>
        <div className="dash-info">
          <div className="duo">
            <div className="bubble">
              <h2>Total TVL</h2>
              <h3>$-</h3>
            </div>
            <div className="bubble">
              <h2>Total Supply</h2>
              <h3>- KOKO</h3>
            </div>
          </div>
          <div className="duo">
            <div className="bubble">
              <h2>Marketcap (Fully Diluted)</h2>
              <h3>$-</h3>
            </div>
            <div className="bubble">
              <h2>Supply in Vaults</h2>
              <h3>- KOKO</h3>
            </div>
          </div>
          <div className="duo">
            <div className="bubble">
              <h2>Total Liquidity</h2>
              <h3>$-</h3>
            </div>
            <div className="bubble">
              <h2>Circulating supply</h2>
              <h3>- KOKO</h3>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1 id="target-element">Full Protek</h1>
        </div>
        <div className="example">
          <div className="pair">
            <div className="card">
              <h2>Protek amount</h2>
              <div className="loading-spinner-small"></div>
            </div>
            <div className="card">
              <h2>TVL</h2>
              <h3>$-</h3>
            </div>
          </div>
          <div className="deposit">
            <div className="deposit-title">
              <h1
                style={{
                  color: isDepositActive ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleDepositClick}
              >
                Deposit
              </h1>
              <h1
                style={{
                  color: isWithdrawActive ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleWithdrawClick}
              >
                Withdraw
              </h1>
            </div>
            <div className="balance">
              <h1>Token balance:</h1>
              <h1>0.0</h1>
            </div>
            <div className="inpuut">
              <input type="number"></input>
              <button>MAX</button>
            </div>
            <div className="get-koko">
              <h1 onClick={handleClick}>Get $KOKO HERE ↗️</h1>
            </div>
            <div className="last-button">
              <button>APPROVE</button>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1 id="target-element-1">Big Protek</h1>
        </div>
        <div className="example">
          <div className="pair">
            <div className="row-1">
              <div className="special-card">
                <h2>Protek amount</h2>
                <div className="loading-spinner-small"></div>
              </div>
              <div className="special-card">
                <h2>Kokonuts accumulator</h2>
                <div className="loading-spinner-small"></div>
              </div>
            </div>
            <div className="row-1">
              <div className="special-card">
                <h2>Excpected APR</h2>
                <h3>%</h3>
              </div>
              <div className="special-card">
                <h2>TVL (LP)</h2>
                <div className="loading-spinner-small"></div>
              </div>
            </div>
          </div>
          <div className="deposit">
            <div className="deposit-title">
              <h1
                style={{
                  color: isDepositActive2 ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleDepositClick2}
              >
                Deposit
              </h1>
              <h1
                style={{
                  color: isWithdrawActive2 ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleWithdrawClick2}
              >
                Withdraw
              </h1>
            </div>
            <div className="balance">
              <h1>Token balance:</h1>
              <h1>0.0</h1>
            </div>
            <div className="inpuut">
              <input type="number"></input>
              <button>MAX</button>
            </div>
            <div className="get-koko">
              <h1 onClick={handleClick}>Get $KOKO HERE ↗️</h1>
            </div>
            <div className="last-button">
              <button>APPROVE</button>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1 id="target-element-2">Smol Protek</h1>
        </div>
        <div className="example">
          <div className="pair">
            <div className="row-1">
              <div className="special-card">
                <h2>Protek amount</h2>
                <h3>$-</h3>
              </div>
              <div className="special-card">
                <h2>Kokonuts accumulator</h2>
                <div className="loading-spinner-small"></div>
              </div>
            </div>
            <div className="row-1">
              <div className="special-card">
                <h2>Expected APR</h2>
                <h3>%</h3>
              </div>
              <div className="special-card">
                <h2>TVL</h2>
                <h3>$-</h3>
              </div>
            </div>
          </div>
          <div className="deposit">
            <div className="deposit-title">
              <h1
                style={{
                  color: isDepositActive3 ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleDepositClick3}
              >
                Deposit
              </h1>
              <h1
                style={{
                  color: isWithdrawActive3 ? "rgb(0, 229, 255)" : "white",
                }}
                onClick={handleWithdrawClick3}
              >
                Withdraw
              </h1>
            </div>
            <div className="balance">
              <h1>Token balance:</h1>
              <h1>0.0</h1>
            </div>
            <div className="inpuut">
              <input type="number"></input>
              <button>MAX</button>
            </div>
            <div className="get-koko">
              <h1 onClick={handleClick}>Get $KOKO HERE ↗️</h1>
            </div>
            <div className="last-button">
              <button>APPROVE</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
