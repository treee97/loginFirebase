import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setAuthing(false);
      });
  };

  const signInWithEmail = async (event: any) => {
    //change any type lol.
    event.preventDefault();
    const { email, password } = event.target.elements;
    //used to extract the values of the email and password fields from the form submission event.

    setAuthing(true);
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      setAuthing(false);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={signInWithEmail}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit" disabled={authing}>
          Sign in with Email/Password
        </button>
      </form>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Or Sign in with Google
      </button>
      <Link to="/register">Or Register Here!</Link>
    </div>
  );
};

export default Login;
