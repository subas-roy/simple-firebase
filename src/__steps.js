/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: do not publish or make firebase config to public by pushing to github
 * 7. visit: Go to docs > Build > Authentication > Web > Get Started
 * 8. export app from the firenase.init.js file: export default app;
 * 9. in Login.jsx: import {getAuth} from firebase/auth
 * 10. create const auth = getAuth(app)
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. acivate sign-in method (google, facebook, github etc.)
 */