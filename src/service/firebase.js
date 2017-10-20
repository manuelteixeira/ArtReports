import firebase from 'firebase';

// Initialize firebase
const config = {
  apiKey: 'AIzaSyCpTPoVaAfo8RrlD20K5-Xdza4_cSTCwFs',
  authDomain: 'art-reports.firebaseapp.com',
  databaseURL: 'https://art-reports.firebaseio.com',
  projectId: 'art-reports',
  storageBucket: 'art-reports.appspot.com',
  messagingSenderId: '807663242179',
};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
  auth: firebase.auth(),
};
