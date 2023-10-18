// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaj3YPtFM_MvrUxUbfjdVZa_5s8TofKY4",
  authDomain: "technology-and-electroni-3e516.firebaseapp.com",
  projectId: "technology-and-electroni-3e516",
  storageBucket: "technology-and-electroni-3e516.appspot.com",
  messagingSenderId: "1008334437919",
  appId: "1:1008334437919:web:93f63a40e4846aa048df2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;