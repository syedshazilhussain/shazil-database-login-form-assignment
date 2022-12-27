// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaQj5Pxvk1LUkUqdSaCAvJYiR1YL3ZTWY",
  authDomain: "shazildatabase.firebaseapp.com",
  databaseURL: "https://shazildatabase-default-rtdb.firebaseio.com",
  projectId: "shazildatabase",
  storageBucket: "shazildatabase.appspot.com",
  messagingSenderId: "224545681608",
  appId: "1:224545681608:web:b6884c9457fcef61e7f5fd",
  measurementId: "G-184FSB8LPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var firstInput = document.getElementById("firstInput");
var lastInput = document.getElementById("lastInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var contactInput = document.getElementById("contactInput");
var nicInput = document.getElementById("nicInput");
var colleficationInput = document.getElementById("colleficationInput");
var courseInput = document.getElementById("courseInput");


window.loginBtn = function () {
  const dataObj = {
    tasks1: firstInput.value,
    tasks2: lastInput.value,
    tasks3: emailInput.value,
    tasks4: passwordInput.value,
    tasks5: contactInput.value,
    tasks6: nicInput.value,
    tasks7: colleficationInput.value,
    tasks8: courseInput.value,
  }
  dataObj.id = Math.random().toString().slice(2);
  const taskValue = ref(database, `task/${dataObj.id}/`);
  set(taskValue, dataObj);
  location.href = "orderList.html";
}

function getDatebaseValue() {
  var i;
  var arr = [];
  const taskValue = ref(database, "task/");
  onChildAdded(taskValue, function (da) {
    arr.push(da.val())
    var list = document.getElementById("list");
    for (i = 0; i <= arr.length; i++) {
      list.innerHTML += `<li>${arr[i].tasks1}</li>`;
      list.innerHTML += `<li>${arr[i].tasks2}</li>`;
      list.innerHTML += `<li>${arr[i].tasks3}</li>`;
      list.innerHTML += `<li>${arr[i].tasks4}</li>`;
      list.innerHTML += `<li>${arr[i].tasks5}</li>`;
      list.innerHTML += `<li>${arr[i].tasks6}</li>`;
      list.innerHTML += `<li>${arr[i].tasks7}</li>`;
      list.innerHTML += `<li>${arr[i].tasks8}</li>`;
    }
  })
}
getDatebaseValue();

