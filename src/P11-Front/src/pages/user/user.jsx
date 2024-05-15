import "./user.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect } from "react";

// create new header component with profile and sign out

// todo: api fetch, and dispatch

export default function User() {
  const api_url = "http://localhost:3001/api/v1/user/profile";

  useEffect(() => {
    fetch(api_url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <section>
        <Header />
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              Tony Jarvis!
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="accounts">
            <article className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </article>
            <article className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </article>
            <article className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">
                  Argent Bank Credit Card (x8349)
                </h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
