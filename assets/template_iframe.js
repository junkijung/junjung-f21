var currentImg = 0;
var imgLength;

const swup = new Swup({
  theme: [new SwupFadeTheme()]
});

$( document ).ready(function() {

// nav //
const nextTag = document.getElementById("next");
const previousTag = document.getElementById("previous");
const exitTag = document.getElementById("exit");

// body //
const imgTag = document.querySelectorAll("img");
imgLength = imgTag.length;

// document fade in //
imgTag[currentImg].style.display = "block";
// document.getElementsByTagName('body')[0].classList.remove("bodyFade");

// nav options //
nextTag.addEventListener("click", function() {

  if (currentImg == imgLength - 1) {
    window.parent.postMessage("closed","*");
    // setTimeout(function(){window.location.href = '../../index.html';}, 500);
  } else {
  imgTag[currentImg + 1].style.display = "block";
  imgTag[currentImg].style.display = "none";
  currentImg++;
  }
});

previousTag.addEventListener("click", function() {

  if (currentImg == 0) {
    // window.parent.postMessage("closed","*");
    // document.getElementsByTagName('body')[0].classList.add("bodyFade");
    // setTimeout(function(){window.location.href = '../../index.html';}, 500);
  } else {
  imgTag[currentImg - 1].style.display = "block";
  imgTag[currentImg].style.display = "none";
  currentImg--;
  }
});

  // for(){
  //
  // }
  // imgLength = $("img").length;
    console.log( imgLength );
});
