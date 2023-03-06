import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw5nqpVBiqA_VyJLTINV1YQA3CDqk4RfA",
  authDomain: "movie-app-1-9daec.firebaseapp.com",
  projectId: "movie-app-1-9daec",
  storageBucket: "movie-app-1-9daec.appspot.com",
  messagingSenderId: "1074383534148",
  appId: "1:1074383534148:web:7712ed9b9cfd10d9002411",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
