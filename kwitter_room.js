const firebaseConfig = {
  apiKey: "AIzaSyBg9dsUNNB6Yo6FTinLCMpNNFK7AXD9xTM",
  authDomain: "kwitter-ef927.firebaseapp.com",
  databaseURL: "https://kwitter-ef927-default-rtdb.firebaseio.com",
  projectId: "kwitter-ef927",
  storageBucket: "kwitter-ef927.appspot.com",
  messagingSenderId: "630409916839",
  appId: "1:630409916839:web:4102602f6c03ab83fdc682",
  measurementId: "G-X99JF72QNJ"
};


  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}