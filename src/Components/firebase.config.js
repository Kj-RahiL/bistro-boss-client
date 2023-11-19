// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyAvhBwtoBqvq85xD8jnwex6izfIjECGT8I",
  authDomain: "bistro-bosss-4448e.firebaseapp.com",
  projectId: "bistro-bosss-4448e",
  storageBucket: "bistro-bosss-4448e.appspot.com",
  messagingSenderId: "422623452647",
  appId: "1:422623452647:web:670d104535ea5db7d23142"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);