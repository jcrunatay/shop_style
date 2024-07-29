import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    EmailAuthProvider,
    linkWithRedirect,
    linkWithPopup,
    getRedirectResult,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCH8csKQZZ-rb9quoMlrYWnl3EC2Rd4Tms",
    authDomain: "shopstyle-8b519.firebaseapp.com",
    projectId: "shopstyle-8b519",
    storageBucket: "shopstyle-8b519.appspot.com",
    messagingSenderId: "342147443029",
    appId: "1:342147443029:web:43603dc1f25a8bf2b8a7dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const emailProvider = new EmailAuthProvider();

facebookProvider.setCustomParameters({
    display: "popup",
});

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export { linkWithRedirect, linkWithPopup, getRedirectResult };
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        console.log(userAuth);

        try {
            await setDoc(userDocRef, {
                username: displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const checkEmailExists = async (email) => {
    const usersRef = collection(db, "users"); // Assuming 'users' is your collection name
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        throw new Error("Email was already used in other sign in method");
    }
};

export const checkUsernameExists = async (username) => {
    const usersRef = collection(db, "users"); // Assuming 'users' is your collection name
    const q = query(usersRef, where("displayName", "==", username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        throw new Error("Username already exists");
    }
};
