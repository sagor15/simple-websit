

// var mypicTure = document.querySelector(".row.campus-col.#jui");
//   function sagor(){
//     mypicTure.src = "imgage/london.jpg";
//   }

var photos = ["imgage/london.jpg","imgage/sd.png","imgage/logo.jpg"];

var mySite = document.querySelector("img");

var count = 0;
function next(){
count++;
if(count>=photos.length){
count =0;
mySite.src = photos[count];

}else{
mySite.src = photos[count];

}

}

function prev(){

count--;
if(count<0){
  count =photos.length - 1;
  mySite.src = photos[count];

}else{
  mySite.src = photos[count];

}

}