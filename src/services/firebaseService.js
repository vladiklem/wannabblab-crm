import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF9w4cFWb9nBxYIzbz0QyK86upJCiuX4Q",
  authDomain: "wannablab-crm.firebaseapp.com",
  databaseURL: "https://wannablab-crm.firebaseio.com",
  projectId: "wannablab-crm",
  storageBucket: "wannablab-crm.appspot.com",
  messagingSenderId: "528819846151",
  appId: "1:528819846151:web:cb9dcfd7ac63eb1246fea2",
  measurementId: "G-0YQ34WM5GN",
};

class FirebaseService {
  constructor() {
    this.init = this.init.bind(this);
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
  }

  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.db = firebase.firestore();
  }

  add(slug, entity) {
    return this.db.collection(slug).add(entity);
  }

  get(slug) {
    return this.db.collection(slug).get();
  }
}

export const firebaseService = new FirebaseService();
