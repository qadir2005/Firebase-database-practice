  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  import { getFirestore, collection,addDoc   } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDu0XAxv4L1KXhllqe4Gg15_rC3f9Occxk",
    authDomain: "database-practice-ec00e.firebaseapp.com",
    projectId: "database-practice-ec00e",
    storageBucket: "database-practice-ec00e.appspot.com",
    messagingSenderId: "449889887378",
    appId: "1:449889887378:web:e170d83269f63b93f0b24b",
    measurementId: "G-6ZZHBR69NW"
  };
  
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app)
//   firebase ko initiliaze krna hai 
//  getfirestore ke function mein app ko rkhna hai aur phir collection aur add doc ko call krwana hai
// addDoc mein 2 parameter aye ge
//  collection ka name aur object
// collection mein db aur collection ka name aye ga

// value getting
let form= document.querySelector("#formSubmit")
let input= document.querySelector("#inputVal")
let list = document.querySelector("ul")

const userNameCollection = collection(db,"UserName");

let addFucntion = async(e)=>{
    e.preventDefault()
    const Todos = {
        description : input.value, 
    }
    try{
    const addUserRef = await addDoc(userNameCollection,Todos)
    if(list != ""){

        let newlist = document.createElement("li")
        newlist.textContent = Todos.description
        list.appendChild(newlist) 
    }
        form.reset()
}catch(e){
console.log(e);
    console.log(e)
}
    
}
form.addEventListener("submit", addFucntion)