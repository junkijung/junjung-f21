// var closing;
var closingCheck;
var listener = 0;

$( document ).ready(function() {

// nav //
const menuTag = document.querySelectorAll(".menu div");
const iframeTag = document.getElementById("popup");

// document fade in //
// document.getElementsByTagName('body')[0].classList.remove("bodyFade");

// nav options //
$(".menu div").click(function() {
  var menuURL = $(this).attr('alt');
    iframeTag.src = menuURL;
    iframeTag.style.display = 'block';
    iframeTag.classList.add("bodyFade");
});

var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);

        if(listener == 0) {
          var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
          var eventer = window[eventMethod];
          var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

          // Listen to message from child window
          eventer(messageEvent,function(e) {
              var key = e.message ? "message" : "data";
              var data = e[key];
              //run function//
              closeIframe();
              window.removeEventListener("attachEvent", eventer);
          },false);
          listener = 1;
      }



    // console.log(closing);
    }
}, 100);




// function closeIframe() {
//   iframeTag.classList.remove("bodyFade");
//   setTimeout(function(){
//     iframeTag.src = "";
//     iframeTag.style.display = 'none';
//   }, 1000);
//   listener = 0;
//
// }


// window.addEventListener('click', function() {
  // var closingCheck = document.getElementById("popup").contentWindow.closing;
  // console.log(closingCheck);
// });


// if (document.activeElement === document.getElementById("popup")) {
//     console.log('contents clicked!');
// }
//
// $('iframe').on('load', function(){
//   $(this).contents().find("body").click(function() {
//     iframeTag.src = "";
//     iframeTag.style.display = 'none';
//     iframeTag.classList.remove("bodyFade");
//     console.log('contents clicked!');
//   });
//   console.log('clicked!');
// });

// previousTag.addEventListener("click", function() {
//
//   if (currentImg == 0) {
//     document.getElementsByTagName('body')[0].classList.add("bodyFade");
//     setTimeout(function(){window.location.href = '../../index.html';}, 1000);
//   } else {
//   imgTag[currentImg - 1].style.display = "block";
//   imgTag[currentImg].style.display = "none";
//   currentImg--;
//   }
// });

  // for(){
  //
  // }
  // imgLength = $("img").length;
    // console.log( imgLength );
});
