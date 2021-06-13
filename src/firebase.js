import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpBgGxyV-VMN7ybWK5CFIMqhaVqwDchFg",
    authDomain: "netflix-clone-2-25ab1.firebaseapp.com",
    projectId: "netflix-clone-2-25ab1",
    storageBucket: "netflix-clone-2-25ab1.appspot.com",
    messagingSenderId: "396938345364",
    appId: "1:396938345364:web:6bf9e591eaebe4b367ed81"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db