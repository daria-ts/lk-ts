// For Firebase JS SD'K v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAoQKZyeswnHD5SlEGjrGsAWw-AllheWDw",
	authDomain: "lk-tochka.firebaseapp.com",
	projectId: "lk-tochka",
	storageBucket: "lk-tochka.appspot.com",
	messagingSenderId: "156779031480",
	appId: "1:156779031480:web:537ba7c7d26bfe2642fd4d",
}
// init firebase
firebase.initializeApp(firebaseConfig)

//init firebase service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
