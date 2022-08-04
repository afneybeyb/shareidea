import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore/lite';

// Initial Firebase configuration - env variables are set in .env.local file
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);
const db = getFirestore(firebaseInstance);

// Exports array of all ideas in Firestore
const getIdeas = async (db: Firestore) => {
	// Gets ideas collection from db
	const ideasCollection = collection(db, 'ideas');
	const snapshot = await getDocs(ideasCollection);

	// Returns array of ideas
	const ideas = snapshot.docs.map(idea => idea.data());
	return ideas;
}

// Exports array of all ideas in Firestore
const getIdea = async (id: string) => {
	// Looks for id in ideas collection in db
	const ref = doc(db, "ideas", id);
	const snapshot = await getDoc(ref);

	// Returns idea if it exists. If not, return false.
	return snapshot.exists() ? snapshot.data() : false;
}

const addIdea = async (idea: any) => {
	// Adds idea to ideas collection in db
	const ref = await addDoc(collection(db, 'ideas'), idea);
	return ref.id;
}

export { db, getIdea, getIdeas, addIdea, serverTimestamp };

