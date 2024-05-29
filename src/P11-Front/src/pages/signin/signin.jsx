import "./signin.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "", token: "" });
  const [error, setError] = useState(false);
  const api_url = "http://localhost:3001/api/v1/user/login";

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const toggleError = () => {
    setError((message) => !message);
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userValue = {
      email: user.email,
      password: user.password,
      token: user.token,
    };
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify(userValue),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        if (data.body && data.body.token) {
          console.log("Token received:", data.body.token);
          window.sessionStorage.setItem("token", data.body.token);

          navigate("/user");
        } else {
          // ! error handling problem
          console.log("Erreur dans l'indetifiant ou le mot de passe");
          toggleError();
        }
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
            <form onSubmit={handleSubmit}>
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
              <button className="sign-in-button">Sign In</button>
            </form>
            {error && (
              <div className="error__message">
                An error occurred during login. Please try again.
              </div>
            )}
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
