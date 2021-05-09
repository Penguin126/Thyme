const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const signInBtn = document.getElementById("logout");
const userText = document.getElementById("displayName");
signInBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.replace("index.html");
    } else {
       userText.innerHTML = "Welcome " + user.displayName + "!";
    }
});