const db = firebase.firestore();
let dataRef;

const habitInput = document.getElementById("habitInput");
const habitOutput = document.getElementById("habitList");
const clearButton = document.getElementById("clear")

auth.onAuthStateChanged(user => {
    dataRef = db.collection('data');
    const uid = user.uid;
    const userRef = dataRef.doc(uid);

    if (user) {
        console.log(user);
        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                userRef.update({
                    habits: firebase.firestore.FieldValue.arrayUnion(habitInput.value)
                });
                update();
            }
            
        });
        clearButton.onclick = () => {
            console.log("cleared");
            userRef.update({
                habits: []
            });
            update();
        }
        update();
        function update () {
            userRef.get().then((doc) => {
                if (doc.exists) {
                    let habitsArray = doc.data().habits;
                    let list = habitsArray.map((element) => {
                        return `<li>${ element }</li>`
                    });
                    habitOutput.innerHTML = list.join('');
                }
            });
        }
    } 
});
