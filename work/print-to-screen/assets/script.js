var containerWidth = [];
var containerHeight = [];

// for line
var lineA = [];
var lineB = [];
var degree = [];
var radianConvert = 180 / Math.PI;
var colors = [];

// for innerHTML
var onoff = [];
var txt = [];
var txtHeight = [];
var txtWidth = [];
var txtSpeed = [5, 10, 21, 50, 0.56];
var animationNum = [];

// for vw&vh
var vw = window.innerWidth;
var vh = window.innerHeight;
var resizingAmount = [];
var gap = [];

// for loop
var loopInterval = 0;

window.onload = function() {

  const txtContainerTag = document.querySelectorAll(".txtContainer");
  const containerTag = document.querySelectorAll(".container");
  const containerNum = containerTag.length;
  const lineTag = document.querySelectorAll(".line");
  const dotTag = document.querySelectorAll(".dot");

  for (i = 0; i < containerNum; i++) {
    // get width and height of divs and push lineA and lineB
    containerWidth.push(containerTag[i].offsetWidth);
    containerHeight.push(containerTag[i].offsetHeight);
    lineA.push(vw - containerWidth[i]);
    lineB.push(vh - containerHeight[i]);
    degree.push(Math.atan(lineB[i] / lineA[i]) * radianConvert);

    //initializing arrays
    onoff.push("off");
    animationNum.push(null);
    resizingAmount.push(null);
    gap.push(null);

    //getting the txtWidth & txtHeight
    txtHeight.push(txtContainerTag[i].clientHeight);
    txtWidth.push(txtContainerTag[i].clientWidth);

    // getting the colors
    colors.push(containerTag[i].getAttribute('alt'));
    txtContainerTag[i].style.color = colors[i];

    // make dot visible
    dotTag[i].style.left = containerWidth[i] + "px";
    dotTag[i].style.top = containerHeight[i] + "px";
    dotTag[i].style.backgroundColor = colors[i];
    dotTag[i].style.display = "block";

    // make line visible
    lineTag[i].style.left = containerWidth[i] + "px";
    lineTag[i].style.top = containerHeight[i] + "px";
    lineTag[i].style.borderTopColor = colors[i];
    lineTag[i].style.transform = "translateY(-1px) rotate(" + degree[i] + "deg)";
    lineTag[i].style.display = "block";
  }

window.addEventListener('resize', function(){

  // resetting vw&vh
  vw = window.innerWidth;
  vh = window.innerHeight;

  for (i = 0; i < containerNum; i++) {
    // change the line degree
    if( onoff[i] == "off" ) {
    lineA[i] = vw - containerWidth[i];
    lineB[i] = vh - containerHeight[i];
    degree[i] = Math.atan(lineB[i] / lineA[i]) * radianConvert;
    lineTag[i].style.transform = "rotate(" + degree[i] + "deg)";
    }

    // change font size in response
    // txtContainerTag[i].style.fontSize = vw/2;

    // change txtWidth in response
    // if( onoff[i] == "on"){
    //   // checking resizing amount
    //   resizingAmount[i] = txtWidth[i] - txtContainerTag[i].clientWidth;
    //   gap[i] = gap[i] + resizingAmount[i];
    //   // reduce the gap
    //   if (txtContainerTag[i].classList[1] == "playing"){
    //   txtContainerTag[i].style.transform = "translate(" + gap[i] + "px, -50%)"
    //   }
    // }

    //  updating txtWidth
    txtWidth[i] = txtContainerTag[i].clientWidth;

    // media query
    if( onoff[i] == "off" &&
        vw > containerWidth[i] - 7 &&
        vw <= containerWidth[i] + 7 &&
        vh > containerHeight[i] - 7 &&
        vh <= containerHeight[i] + 7 ) {

        // triggering the text
        if (txtContainerTag[i].classList[1] == "looping"){
          loopAnimation(txtContainerTag[i], txtSpeed[i]);
          playAudio("audio" + i, i);
        } else {
          playAnimation(txtContainerTag[i], txtSpeed[i], txtWidth[i], i);
          playAudio("audio" + i, i);
        }
        // console.log();


      // remove triggers
      dotTag[i].style.display = "none";
      lineTag[i].style.display = "none";
      onoff[i] = "on";
      }
  }

});


}

function playAnimation(target, speed, width, num) {
  target.style.transition = "left " + speed + "s" + " linear";
  target.style.left = "-" + width + "px";
  target.style.visibility = "visible";
  setTimeout(function(){
    target.style.removeProperty('transition');
    target.style.removeProperty('left');
    target.style.removeProperty('transform');
  }, speed*1000);

  setTimeout(function(){
    playAnimation(target, speed, txtWidth[num], num)},
    speed*1000 + 100);
    gap[num] = 0;
}

function loopAnimation(target, speed) {
  var loopLength = target.children.length;
  var eachInterval = Math.round(speed*1000/(loopLength-1));

  // initial animation
  for (let i = 0; i < loopLength; i++) {
      setTimeout(function(){
        var loopWidth = target.children[i].clientWidth;
        target.children[i].style.transition = "left " + speed + "s" + " linear";
        target.children[i].style.left = "-" + loopWidth + "px";
        target.children[i].style.visibility = "visible";
        setTimeout(function(){
          target.children[i].style.removeProperty('transition');
          target.children[i].style.removeProperty('left');
          target.children[i].style.removeProperty('transform');
        }, speed*1000);
      }, loopInterval);

  // adding interval between characters
      loopInterval = loopInterval + eachInterval;

  // setting the interval to 0 for the next animation
      if (i == loopLength - 1) {
        loopInterval = 0;}
  }

  // looping the entire animation
  setTimeout(function(){
    loopAnimation(target, speed)},
    speed*1000 + eachInterval);
}

function playAudio(audioName, num) {
  var audioName = new Audio('audio/' + num + '.wav');
  audioName.loop = true;
  audioName.play();
}
