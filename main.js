prediction_1 = "";
prediction_2 = "";

//Set the property for Webcam
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
//passing the value of camera div inside the camera variable
camera = document.getElementById("camera");

//attaching the camera div inside the Webcam.attach() function
Webcam.attach('#camera');

//defining take_snapshot() function
function take_snapshot() {
    Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+ data_uri+'"/>';
    });
}


//consoling ml5.version for check 
console.log('ml5 version-',ml5.verion);

//defining image classification
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QXA9XxAn_/model.json',modelLoaded);

//write the modelLoaded() function
function modelLoaded() {
    console.log('Model Loaded!');
}


//defining speak() function
function speak() {
   var synth = window.speechSynthesis;
   speek_data_1 = "The First Prediction Is"+ prediction_1;
   speek_data_2 = " and The second Prediction Is"+ prediction_2;
   
   //convert text to speech
   var utterThis = new SpeechSynthesisUtterance( speek_data_1 + speek_data_2);

   //call predefined function speak()
   synth.speak(utterThis);

}