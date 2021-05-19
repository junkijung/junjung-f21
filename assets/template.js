var currentImg = 0;
var imgLength;
var commentTxt;

$( document ).ready(function() {

// nav //
const nextTag = document.getElementById("next");
const previousTag = document.getElementById("previous");
const exitTag = document.getElementById("exit");

// body //
const bodyTag = document.getElementsByTagName('body')[0];
const imgTag = document.querySelectorAll("img");
const commentTag = document.querySelector(".comment");
imgLength = imgTag.length;

// document fade in //
imgTag[currentImg].style.display = "block";
commentTag.innerHTML = imgTag[currentImg].alt;
bodyTag.classList.remove("bodyFade");

// nav options //
nextTag.addEventListener("click", function() {

  if (currentImg == imgLength - 1) {
    bodyTag.classList.add("bodyFade");
    setTimeout(function(){window.location.href = linkTo;}, 500);
  } else {
  imgTag[currentImg + 1].style.display = "block";
  imgTag[currentImg].style.display = "none";
  commentTag.innerHTML = imgTag[currentImg + 1].alt;

  currentImg++;

  }
});

previousTag.addEventListener("click", function() {

  if (currentImg == 0) {
    bodyTag.classList.add("bodyFade");
    setTimeout(function(){window.location.href = backTo;}, 500);
  } else {
  imgTag[currentImg - 1].style.display = "block";
  imgTag[currentImg].style.display = "none";
  commentTag.innerHTML = imgTag[currentImg - 1].alt;

  currentImg--;
  }
});


exitTag.addEventListener("click", function(){
  bodyTag.classList.add("bodyFade");
  setTimeout(function(){window.location.href = backTo;}, 500);
});
  // for(){
  //
  // }
  // imgLength = $("img").length;
    console.log( imgLength );
});
