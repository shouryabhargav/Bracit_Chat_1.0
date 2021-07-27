var firebaseConfig = {
  apiKey: "AIzaSyB4uq4tb_HyacWKBY6gFYBbOYeEFhN91V8",
  authDomain: "bracit-chat-6b649.firebaseapp.com",
  databaseURL: "https://bracit-chat-6b649-default-rtdb.firebaseio.com",
  projectId: "bracit-chat-6b649",
  storageBucket: "bracit-chat-6b649.appspot.com",
  messagingSenderId: "371428493503",
  appId: "1:371428493503:web:4b66d980998f3010cbde0a",
  measurementId: "G-XWW91YM9LZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
