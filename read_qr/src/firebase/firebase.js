import firebase from 'firebase/app';

// Firebase Auth
const config = {
	apiKey: "AIzaSyCWhuFCmlqytIbqp1csyGAcgzk7cmQucq4",
	authDomain: "final-app-866bc.firebaseapp.com",
	databaseURL: "https://final-app-866bc.firebaseio.com",
	projectId: "final-app-866bc",
	storageBucket: "final-app-866bc.appspot.com",
	messagingSenderId: "275512127265"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;