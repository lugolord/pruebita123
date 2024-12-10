import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBHKWCDplJxXHqPMD7t3IKa4x7wkrrvMZg",
  authDomain: "pepito-db.firebaseapp.com",
  projectId: "pepito-db",
  storageBucket: "pepito-db.firebasestorage.app",
  messagingSenderId: "56103905009",
  appId: "1:56103905009:web:e874cb2d02e977f8972b50"
}

export const app = initializeApp(firebaseConfig)
