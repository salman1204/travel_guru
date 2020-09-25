import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import "./firebase.config";

export const firebaseProviderLogin = (providerName) => {
	let provider;

	if (providerName === "google") {
		provider = new firebase.auth.GoogleAuthProvider();
	} else if (providerName === "facebook") {
		provider = new firebase.auth.FacebookAuthProvider();
	}

	return firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			const { displayName, email } = result.user;

			const signedInUser = {
				name: displayName,
				email,
				success: true,
				error: "",
			};

			return signedInUser;
		})
		.catch(function (error) {
			const signedInUser = {
				name: "",
				email: "",
				success: false,
				error: error.message,
			};

			return signedInUser;
		});
};

export const firebaseSignup = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			const signUpMessage = {
				success: true,
				error: "",
			};
			return signUpMessage;
		})
		.catch(function (error) {
			const signUpMessage = {
				success: false,
				error: error.message,
			};
			return signUpMessage;
		});
};

export const firebaseUpdateUserName = (name) => {
	const user = firebase.auth().currentUser;

	return user
		.updateProfile({
			displayName: name,
		})
		.then(function () {
			return;
		})
		.catch(function (error) {
			return;
		});
};

export const firebaseCustomLogin = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((result) => {
			const { displayName, email } = result.user;

			const signedInUser = {
				name: displayName,
				email,
				success: true,
				error: "",
			};

			return signedInUser;
		})
		.catch(function (error) {
			const signedInUser = {
				name: "",
				email: "",
				success: false,
				error: error.message,
			};
			return signedInUser;
		});
};

export const firebaseLogout = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			alert("Logged out successfully");
		})
		.catch(function (error) {
			alert(error.message);
		});
};
