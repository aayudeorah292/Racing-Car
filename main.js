var canvas = document.getElementById("mycanvas");
var ctx =  = canvas.getContext("2d");
var car1_width = 120;
var car1_height= 90;
var background_gif = "racing.gif";
var car1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;
var car2_width = 120;
var car2_height= 90;
var car2_image = "car1.png";
var car2_x = 10;
var car2_y = 100;
function add(){
  background_imgtag = new Image();
  background_imgtag.onload = uploadbackground;
  background_imgtag.src = background_Image;
    
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1:
    car1_imgtag.src = car1_image;
    
    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar1:
    car2_imgtag.src = car2_image;
    
} 
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,
                 canvas.height)
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height)
}

function uploadcar1() {
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height)
}