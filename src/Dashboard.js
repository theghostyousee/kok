import React from "react";
import "./index.css";
import Koko from "./media/logo.png";
import Gud from "./media/gud.png";

function Dashboard() {
  return (
    <div className="wrap">
      <header>
        <div className="head-img">
          <img src={Koko}></img>
        </div>
        <ul>
          <li>Full Protek</li>
          <li>Big Protek</li>
          <li>Smol Protek</li>
        </ul>
        <div className="buttn-head">
          <button>Connect Wallet</button>
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
                  decreasing everyday by 7.5%. To safeguard your $KOKO, you
                  can deposit them into secure vaults, of which there are three
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
                <p> More information are coming our whitepaper.</p>
              </div>
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
          <h1>Full Protek</h1>
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
              <h1>Deposit</h1>
              <h1>Withdraw</h1>
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
              <h1>Get $KOKO HERE ↗️</h1>
            </div>
            <div className="last-button">
              <button>APPROVE</button>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1>Big Protek</h1>
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
              <h1>Deposit</h1>
              <h1>Withdraw</h1>
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
              <h1>Get $KOKO HERE ↗️</h1>
            </div>
            <div className="last-button">
              <button>APPROVE</button>
            </div>
          </div>
        </div>

        <div className="full-protek">
          <h1>Smol Protek</h1>
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
              <h1>Deposit</h1>
              <h1>Withdraw</h1>
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
              <h1>Get $KOKO HERE ↗️</h1>
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
