const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
let dataRef;
var now = new Date();

const signInBtn = document.getElementById("signIn");

signInBtn.onclick = () => auth.signInWithRedirect(provider);

auth.onAuthStateChanged(user => {
    
    if (user) {
            
        window.location.replace("app.html");
    } 
});