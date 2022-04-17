// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAMNU5rTFzmNamt1KEuTnyyaCPncNOX6Q',
  authDomain: 'doctor-smile-app-9f0d2.firebaseapp.com',
  projectId: 'doctor-smile-app-9f0d2',
  storageBucket: 'doctor-smile-app-9f0d2.appspot.com',
  messagingSenderId: '270816437325',
  appId: '1:270816437325:web:6ced3a58bad137cb83a804',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth
