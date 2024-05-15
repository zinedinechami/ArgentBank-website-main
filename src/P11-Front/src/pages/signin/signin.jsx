import "./signin.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

// ?
// au onsubmit si les bonne info sont renvoyé on recupere le token et on le stock dans le state global
// a la recupération du token on renvoie au dashbaord avec le token dans l'url
// puis dans le dashboard on recupere les transactions depuis le state
// we need to initialise a state, that when is updated with a token from api fetch, redirectes to dashboard
// we need to save the token state through out the app with redux, to than show transactions

export default function SignIn() {
  // initialiser le state du user prenant en compte un objet
  // contenant les string du email, et du password attendu par la route de l'api et qu'on souhaite conserver dans le state global
  const [user, setUser] = useState({ email: "", password: "", token: "" });
  const api_url = "http://localhost:3001/api/v1/user/login";

  // function handleInput qui prend en compte l'event du changement d'input
  const handleInput = (e) => {
    // quand un event se produit ici on veut se referer au nom et la valeur de l'input dans le form
    const { name, value } = e.target;
    // puit on met a jour le state du user
    // on utilise un spread operator pour copier l'etat initialise de user
    // et puis on met a jour l'attribut name avec la nouvelle valeur obtenu par l'input
    // permet de mettre a jour l'objet du state user
    setUser({ ...user, [name]: value });
  };

  // const dispatch = useDispatch();

  let navigate = useNavigate();

  // todo: token in dispatch

  const handleSubmit = (e) => {
    e.preventDefault();
    // objet recuperant le state du user avec les valeurs respectives pour le body de l'API
    const userValue = {
      email: user.email,
      password: user.password,
      token: user.token,
    };
    // dispatch vers l'action.payload qui va mettre a jour le user state dans le reducer qui est pris en compte par le store
    // dispatch(
    //   login({
    //     email: user.email,
    //     token: user.token,
    //   })
    // );
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify(userValue),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        // ! problem with token fetch, and page redirection
        if (data.body.token) {
          console.log("Token received:", data.body.token);
          window.sessionStorage.setItem("token", data.body.token);
          navigate("/user");
        } else {
          console.log("Erreur dans l'indetifiant ou le mot de passe");
        }
      });
  };

  // reponse du serveur renvoyer vers la route

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
