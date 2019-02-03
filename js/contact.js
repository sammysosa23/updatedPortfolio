(function ({
    contact.js()
}))


var database = firebase.database();
// INITIALIZE FIREBASE
var config = {
    apiKey: "AIzaSyAQ2ch0bPBoUUIIhmKogkWzzbjq5QeOU2g",
    authDomain: "portfolioupdate-3d703.firebaseapp.com",
    databaseURL: "https://portfolioupdate-3d703.firebaseio.com",
    projectId: "portfolioupdate-3d703",
    storageBucket: "portfolioupdate-3d703.appspot.com",
    messagingSenderId: "1010192081053"
};
firebase.initializeApp(config);


$(".submitButton").on("click", function (event) {
    event.preventDefault();

    // GRABBING USERS INPUT IN CONTACT FORM
    var submitName = $("#name").val().trim();
    console.log("clicked");

    var submitEmail = $(".email").val().trim();
    var submitMessage = $(".message").val().trim();

    database.ref().push({
        submitName: submitName
            submitEmail: submitEmail,
        submitMessage: submitMessage
    });
});