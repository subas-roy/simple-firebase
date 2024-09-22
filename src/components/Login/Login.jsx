
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      console.log(loggedInUser);
    })
    .catch(error => {
      console.log('error: ', error.message)
    });
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedUser = result.user;
      setUser(loggedUser);
      console.log(loggedUser);
    })
    .catch(error => {
      console.log('error: ', error.message)
    });
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(result => {
      console.log(result)
      setUser(null)
    })
    .catch(error => {
      console.log(error)
    })

  }

  return (
    <div>
      {/* user ? signout : signin */}
      {
        user ?
        <button onClick={handleSignOut}>Sign Out</button>:
        <>
        <button onClick={handleGoogleSignIn}>Google Login</button>
        <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      }
      {user && 
        < div>
          <h2>User: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;