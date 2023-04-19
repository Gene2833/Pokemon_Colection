import {initializeApp } from "firebase/app";
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRGQD6m8G84s847JQrK2BAsV3pQpRdP_I",
  authDomain: "pokemon-colection.firebaseapp.com",
  projectId: "pokemon-colection",
  storageBucket: "pokemon-colection.appspot.com",
  messagingSenderId: "522504291668",
  appId: "1:522504291668:web:9023fdfd64160fd17bf4c1"
};


const app = initializeApp(firebaseConfig);


export default app

