import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZla-bHtpZEjOmfuCMwRk8Io1iSHqoRdw",
  authDomain: "smartsprout-upload.firebaseapp.com",
  projectId: "smartsprout-upload",
  storageBucket: "smartsprout-upload.appspot.com",
  messagingSenderId: "142082809263",
  appId: "1:142082809263:web:4073891d04ecc38b5e235a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };