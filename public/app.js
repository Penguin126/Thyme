const db = firebase.firestore();
let dataRef;
var now = new Date();
/*
const mainPage = document.getElementById("mainPageContent");
const timerPage = document.getElementById("timerPage");
const trackerPage = document.getElementById("trackerPage");
const breathingPage = document.getElementById("breathingPage");

const homeButton = document.getElementById("logo");
const timerButton = document.getElementById("timer");
const trackerButton = document.getElementById("tracker");
const breathingButton = document.getElementById("breathing");

homeButton.onclick = () => {
    mainPage.hidden = false;
    timerPage.hidden = true;
    trackerPage.hidden = true;
    breathingPage.hidden = true;
}

timerButton.onclick = () => {
    mainPage.hidden = true;
    timerPage.hidden = false;
    trackerPage.hidden = true;
    breathingPage.hidden = true;
}
*/
window.onload = function() {
    clock();  
      function clock() {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var mid = 'PM';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }    
        if(hour==0){ 
            hour=12;
        }
        if(TwentyFourHour < 12) {
            mid = 'AM';
        }     
        document.getElementById('time').innerHTML = hour+':'+min;
        document.getElementById('ampm').innerHTML = mid;
        
        const months = {
            0:"January",
            1:"February",
            2:"March",
            3:"April",
            4:"May",
            5:"June",
            6:"July",
            7:"August",
            8:"September",
            9:"October",
            10:"November",
            11:"December"
        }

        document.getElementById('date').innerHTML = months[now.getMonth()] + ' ' + now.getDate() + ', '+ now.getFullYear();

        setTimeout(clock, 1000);
      }
  }

auth.onAuthStateChanged(user => {
    
    if (user) {
        console.log(user.uid);
        dataRef = db.collection('data');
        console.log(dataRef);
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();

        const uid = user.uid;
        const name = user.displayName;
        const userRef = dataRef.doc(uid);
        const quoteRef = dataRef.doc("quotes");
        let qotd;
        userRef.get()
            .then((doc) => {
                if (doc.exists) {
                        let userDate = doc.data().lastLogged.split(" ");
                        userDay = parseInt(userDate[0]);
                        userMonth = parseInt(userDate[1]);
                        userYear = parseInt(userDate[2]);
                        if (year > userYear || (year == userYear && month > userMonth) || (year == userYear && month == userMonth && day > userDay)) {
                            quoteRef.get()
                            .then((doc) => {
                                let quoteArray = doc.data().text.split("/");
                                 var index = Math.floor(Math.random() * 292);
                                 db.collection("data").doc(uid).update ({
                                    uid: uid,
                                    name: name,
                                    lastLogged: day + " " + month + " " + year,
                                    currentQuote: quoteArray[index]
                                });
                                console.log(quoteArray[index]);
                            });
                        }
                        document.getElementById("quote").innerHTML = doc.data().currentQuote;
                } else {
                    console.log("notfound");
                        quoteRef.get()
                        .then((doc) => {
                            if (doc.exists) {
                                quoteRef.get()
                                .then((doc) => {
                                    let quoteArray = doc.data().text.split("/");
                                    var index = Math.floor(Math.random() * 292);
                                    document.getElementById("quote").innerHTML = quoteArray[index];
                                    db.collection("data").doc(uid).set({
                                        uid: uid,
                                        name: name,
                                        lastLogged: day + " " + month + " " + year,
                                        currentQuote: quoteArray[index],
                                        habits: []
                                    });
                                });
                        }
                    });
                }
            });
    } 
});
  