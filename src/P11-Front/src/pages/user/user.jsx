import "./user.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// create new header component with profile and sign out

// todo: add dispatch and selector for fetched data, map fetched data (name)

// todo: create form to modify name

// ? mettre en place un thunk middleware pour l'asynchrone

// store name, last name and email in store

export default function User() {
  const [UserData, SetUserData] = useState("");

  const api_url = "http://localhost:3001/api/v1/user/profile";

  const dispatch = useDispatch();

  // recuperer le token du session storage
  // mettre le token dans le header du api url
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetUserData(data.body);
        console.log(data);
        dispatch(UserData);
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
              {UserData?.firstName + UserData?.lastName}
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
