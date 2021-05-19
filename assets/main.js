$( document ).ready(function() {

// nav //
const menuTag = document.querySelectorAll(".menu div");

// document fade in //

document.getElementsByTagName('body')[0].classList.remove("bodyFade");

// nav options //
$(".menu td").click(function() {
  var menuURL = $(this).attr('alt');
    document.getElementsByTagName('body')[0].classList.add("bodyFade");
    setTimeout(function(){window.location.href = menuURL;}, 500);

});

var titleNum;
window.onhashchange = function() {
 location.reload();
}

$(".menu .t1").hover(function() {
  titleNum = $(this).html() - 1;
  $(".t2").eq(titleNum).css("display", "table-cell");
}, function(){
  $(".t2").eq(titleNum).css("display", "none");
});


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
