import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-0MVRtznqXEwE_I27i6hlcceWuZEw2nA",
  authDomain: "myapp-86a99.firebaseapp.com",
  projectId: "myapp-86a99",
  storageBucket: "myapp-86a99.appspot.com",
  messagingSenderId: "749492527145",
  appId: "1:749492527145:web:b5d9013930c0650e783c38"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }