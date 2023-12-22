
Webcam.set({
    width:350,
    heigth:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/trGFlldEt/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}

function check()
{
   img = document.getElementById('captured_image');
   classifier.classify(img, gotresult);

}

function gotresult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
         console.log(results);
        
         

         document.getElementById("result_gesture_name").innerHTML = results[0].label;
        

         if(results[0].label == "cool")
         {
              document.getElementById("result_gesture_name").innerHTML = "This is looking amazing";
              document.getElementById("update_gesture").innerHTML = "&#128076;"
         }
         if(results[0].label == "thumbs up")
         {
            document.getElementById("result_gesture_name").innerHTML = "All the best";
              document.getElementById("update_gesture").innerHTML = "&#128077;"
         }
         if(results[0].label == "two fingure")
         {
            document.getElementById("result_gesture_name").innerHTML = "Thats was a marvelous victory";  
              document.getElementById("update_gesture").innerHTML = "&#9996;"
         }
        
    }
    

}
