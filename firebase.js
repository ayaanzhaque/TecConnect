//(function() {

// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCVd3JlpPcn1ixkTZIomyOQSouHTJW16pU",
      authDomain: "tecconnect-a0f22.firebaseapp.com",
      databaseURL: "https://tecconnect-a0f22.firebaseio.com",
      projectId: "tecconnect-a0f22",
      storageBucket: "tecconnect-a0f22.appspot.com",
      messagingSenderId: "849720177846",
      appId: "1:849720177846:web:9ab51c05a8822a53f3e217",
      measurementId: "G-NEXR5PSHJ7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const docRef = firestore.doc("formData/formData")

    const outputName = document.querySelector(#name);
    const outputEmail = document.querySelector(#emailDonor);
    const outputAddress = document.querySelector(#address);
    const outputSubject = document.querySelector(#subject);
    const outputMessage = document.querySelector(#message);
    const submitButton = document.querySelector(#submitButton);

    submitButton.addEventListener("click", function() {
const textToSave = outputName.value;
console.log("I am going to save " + textToSave + " to FireStore");

      docRef.set({
        name: outputName
      }).then(function(){
        console.log("Status saved!");
      }).catch(function (error) {
        console.log("Got an error: ", error);
      });

      docRef.set({
        email: outputEmail
      }).then(function(){
        console.log("Status saved!");
      }).catch(function (error) {
        console.log("Got an error: ", error);
      });

      docRef.set({
        address: outputAddress
      }).then(function(){
        console.log("Status saved!");
      }).catch(function (error) {
        console.log("Got an error: ", error);
      });

      docRef.set({
      subject: outputSubject
      }).then(function(){
        console.log("Status saved!");
      }).catch(function (error) {
        console.log("Got an error: ", error);
      });

      docRef.set({
          message: outputMessage
      }).then(function(){
        console.log("Status saved!");
      }).catch(function (error) {
        console.log("Got an error: ", error);
      });
    })





//})();
