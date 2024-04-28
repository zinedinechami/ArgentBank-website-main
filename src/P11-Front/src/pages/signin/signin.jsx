import "./signin.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

// change sign in link to button for submit

// todo: appel API ici? store state dans redux
// mettre en place un appel api post
// au onsubmit si les bonne info sont renvoyé on recupere le token et on le stock dans le state global
// a la recupération du token on renvoie au dashbaord avec le token dans l'url
// puis dans le dashboard on recupere les transactions depuis le state

// we need to initialise a state, that when is updated with a token from api fetch, redirectes to dashboard
// we need to save the token state through out the app with redux, to than show transactions

export default function SignIn() {
  return (
    <>
      <body>
        <Header />
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
              <a href="./user" className="sign-in-button">
                Sign In
              </a>

              {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
            </form>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
}
