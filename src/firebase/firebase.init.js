import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInIt = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInIt;
