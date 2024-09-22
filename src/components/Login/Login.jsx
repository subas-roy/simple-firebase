
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      console.log(loggedInUser);
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
        <button onClick={handleGoogleSignIn}>Google Login</button>
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