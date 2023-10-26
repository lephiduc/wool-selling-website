
// Slide img

var arr_img= [

    "./images/background1.jpg",
    "./images/background2.jpg",
    "./images/background3.jpg",
    "./images/slider_1.webp",
]
var index=0;

function prevImg(){
    index--;
    if(index<0){
        index=arr_img.length-1;
    }
    document.getElementById("img").src= arr_img[index];
}

function nextImg(){
    index++;
    if(index==arr_img.length){
        index=0;
    }
    document.getElementById("img").src= arr_img[index];
}
setInterval("nextImg()", 6000)

// end Slide img

