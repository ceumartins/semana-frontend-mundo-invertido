  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBlZp07SO6_ehVGJoAHX4NbyacI8fIeUQk",
    authDomain: "mundo-invertido-eb23b.firebaseapp.com",
    projectId: "mundo-invertido-eb23b",
    storageBucket: "mundo-invertido-eb23b.appspot.com",
    messagingSenderId: "224105054600",
    appId: "1:224105054600:web:48a53ace3b452f80387a3d"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app