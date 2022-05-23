import * as firebase from"firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAmxBxJYq4r262gH9YxSn6gNtZ5SObmyzg",
  authDomain: "atend-32bbb.firebaseapp.com",
  databaseURL: "https://atend-32bbb-default-rtdb.firebaseio.com",
  projectId: "atend-32bbb",
  storageBucket: "atend-32bbb.appspot.com",
  messagingSenderId: "132778495573",
  appId: "1:132778495573:web:e25e7cc9806e6c65574edc"
};



if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);


export default firebase.database()






