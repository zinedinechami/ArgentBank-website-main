import "./signin.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";

// ?
// mettre en place un appel api post
// au onsubmit si les bonne info sont renvoyé on recupere le token et on le stock dans le state global
// a la recupération du token on renvoie au dashbaord avec le token dans l'url
// puis dans le dashboard on recupere les transactions depuis le state
// we need to initialise a state, that when is updated with a token from api fetch, redirectes to dashboard
// we need to save the token state through out the app with redux, to than show transactions

// todo: explain the whole component

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const api_url = "http://localhost:3001/api/v1/user/login";

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const userValue = { email: user.email, password: user.password };
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify(userValue),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
      });
  };

  return (
    <>
      <section>
        <Header />
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={submit}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="email"
                  id="username"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
              <button className="sign-in-button">Sign In</button>

              {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
            </form>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
