import "./user.css";
import Footer from "../../components/footer/footer";
import header_logo from "./argentBankLogo.png";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { logout } from "../../features/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [openForm, setOpenForm] = useState(false);
  const [nameForm, setNameForm] = useState({ userName: "" });
  const [UserData, SetUserData] = useState("");

  const api_url = "http://localhost:3001/api/v1/user/profile";

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
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
        dispatch(
          login({
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
          })
        );
      });
  }, [token, dispatch]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNameForm({ ...nameForm, [name]: value });
  };

  const handleSubmit = () => {
    fetch(api_url, {
      method: "PUT",
      body: JSON.stringify(nameForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <section>
        <nav className="main-nav">
          <a className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={header_logo}
              alt="Argent Bank Logo"
            />
          </a>
          <div>
            <a href="" className="main-nav-item">
              {UserData?.firstName} {UserData?.lastName}
            </a>
            <button className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              Sign Out
            </button>
          </div>
        </nav>
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {UserData?.userName}
            </h1>
            <div>
              <button
                onClick={() => setOpenForm((toggleOpen) => !toggleOpen)}
                className="edit-button"
              >
                {" "}
                Edit Name
              </button>
            </div>
            {openForm && (
              <div className="name_form--container">
                {" "}
                New Username
                <form action="" onSubmit={handleSubmit}>
                  {" "}
                  <input
                    name="userName"
                    value={nameForm.userName}
                    type="text"
                    onChange={handleInput}
                  />
                  <button className="edit-button"> Change Username</button>
                </form>
              </div>
            )}
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
