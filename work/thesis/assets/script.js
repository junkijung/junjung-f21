// IN ORDER TO USE THIS CODE:
//
// paste the following script tags in your html right before
// the script tag for your own js file
//
// <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
// <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

$( document ).ready(function() {
  $( document ).scroll(function() {
    // console.log("destination = " + destination)
    $( 'html, body').animate({
      scrollTop: document.body.clientHeight
    }, 450000);
  });

});


window.onload = async() => {

// play with these settings to get the desired effect!
let settings = {
  // Change the duration/distance one needs to scroll to get through
  // all images (this value is dynamic based on # of images)
  scrollDuration: 3,
  // Change the duration/distance that an image is paused after fading in before
  // it fades out
  imagePauseDuration: 1,
  // Set how much the fade in/out overlap
  // (should be a value between 0 - 1)
  imageOverlapDuration: .7,
  // Change the amount of blur
  blurAmount: 7
};

// setTimeout(){
// var enumeratorPromise = navigator.mediaDevices.enumerateDevices(), 10}
// console.log(enumeratorPromise);

// select our elements
let vh = window.innerHeight;
// let land = document.querySelector('.land');
let container = document.querySelector('.container');
let images = document.querySelectorAll('.image');
const bodyTag = document.querySelector('body')

// set height of contain dynamically using # of
// images and our scroll duration setting
container.style.height = `${images.length * settings.scrollDuration * 100}vh`;
var containerHeight = `${images.length * settings.scrollDuration}` * vh;
var imageHeight = `${settings.scrollDuration}` * vh;

// Use GSAP + GSAP ScrollTrigger plugin to more easily animate the images
// on scroll
let timeline = gsap.
  timeline({
    scrollTrigger: {
      // these settings basically say:
      // Start scrubbing through the animation timeline when
      // the TOP of '.container' reaches the TOP of the window
      // and end timeline when the BOTTOM of '.container'
      // reaches the BOTTOM of the window
      trigger: '.container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    },

    defaults: { duration: 1, ease: 'none' }
  });

// Loop over all images
images.forEach((image, index) => {
  // this block of code "pins" the image
  ScrollTrigger.create({
    trigger: '.container',
    start: 'top top',
    end: 'bottom bottom',
    pin: image
  });


  // this block of code sets the fade in and out of each image
  timeline.fromTo(image, {
    zIndex: 1,
    autoAlpha: 0,
    filter: `blur(${settings.blurAmount}px)`
  },
    {
      zIndex: 2,
      autoAlpha: 1,
      filter: 'blur(0px)'
    },
    `image_${index}${index > 0 ? `-=${settings.imageOverlapDuration}` : ''}`).
    to(image, {
      zIndex: 1,
      pointerEvents: 'none',
      autoAlpha: 0,
      filter: `blur(${settings.blurAmount}px)`
    },
      `image_${index}+=${1 + settings.imagePauseDuration}`);
});


// //webcam
// var camTag = document.querySelector(".camContainer");
// var video = document.querySelector("#videoElement");
var soundCheck = false;
//
// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }


document.addEventListener("scroll", function(){
  // camTag.classList.add("camRemove");
  if (soundCheck == false){
  playAudio();
  soundCheck = true;
  }

//   window.scrollTo({
//   top: 3000,
//   behavior: 'smooth'
// });

})


function playAudio() {
  var audioTag = new Audio('./assets/sound.mp3');
  audioTag.loop = true;
  audioTag.play();
}


function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}








let position = $(window).scrollTop();
$(window).scroll(function () {
  var scroll = $(window).scrollTop()
})


// in case of resizing the window
window.addEventListener('resize', function() {
  containerHeight = `${images.length * settings.scrollDuration}` * vh;
})



// function updateGroup1(i) {
//   for (i = 0; i < imgFiles.length; i++) {
//     imgFiles[i].srcset = group1Img[i].srcset
//     descriptions[i].innerHTML = group1Img[i].description
//   }
//   group2Click.classList.remove('active');
//   group2Click.classList.add('inactive');
//   group1Click.classList.remove('inactive');
//   group1Click.classList.add('active');
//
//   // go to group 1 title
//   groupNameTag.innerHTML = "Group 1";
//   document.documentElement.scrollTop = imageHeight + vh;
//   groupNameTag.animate(
//   [{ filter: 'blur(3px)', opacity: '0'},{ filter: 'blur(0px)', opacity: '1'}],
//   {duration: 500, easing: 'ease-in-out'});
//   navTag.classList.add('is-shown');
//
//   //update the containerHeight
//   // containerHeight = `${images.length * settings.scrollDuration}` * vh;
//   windowHeight = document.body.clientHeight;
//   setTimeout(function(){windowHeight = document.body.clientHeight;}, 5000);
//   //update status
//   checkingGroup = 1;
// };
//
// function updateGroup2() {
//   for (i = 0; i < imgFiles.length; i++) {
//     imgFiles[i].srcset = group2Img[i].srcset
//     descriptions[i].innerHTML = group2Img[i].description
//   }
//   group1Click.classList.remove('active');
//   group1Click.classList.add('inactive');
//   group2Click.classList.remove('inactive');
//   group2Click.classList.add('active');
//
//   // go to group 2 title
//   groupNameTag.innerHTML = "Group 2";
//   document.documentElement.scrollTop = imageHeight + vh;
//   groupNameTag.animate(
//   [{ filter: 'blur(3px)', opacity: '0'},{ filter: 'blur(0px)', opacity: '1'}],
//   {duration: 500, easing: 'ease-in-out'});
//   navTag.classList.add('is-shown');
//
//   //update the containerHeight
//   // containerHeight = `${images.length * settings.scrollDuration}` * vh;
//   windowHeight = document.body.clientHeight;
//   setTimeout(function(){windowHeight = document.body.clientHeight;}, 5000);
//   //update status
//   checkingGroup = 2;
// };
//



}
