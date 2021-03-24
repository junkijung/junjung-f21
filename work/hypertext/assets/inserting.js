var readingNo = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8"];
var imgNo = ["i1", "i2", "i3", "i4", "i5", "i6"]
var currentZ = 5;

$("document").ready(function() {
    for (i = 0; i < readingNo.length; i++) {
    $("#" + readingNo[i] + "Box").load("reading/" + readingNo[i] + ".html");
    $(".c_container ." + readingNo[i]).click(function(){moveScroll(this);});    
    }
    
    for (i = 0; i < imgNo.length; i++) {
    $(".c_container ." + imgNo[i]).click(function(){moveScroll(this);});    
    }
    
    $(".title").click(function(){moveScroll(this);});
    $(".author").click(function(){moveScroll(this);});
    
    $("ol span").hover(underlineAdd, removeAttr);
    
    $(document).on('click','.link',function(){
        moveScroll(this);
        highlight(this);
    }
        );
    
});



function moveScroll(target) {
    var whichReading = $(target).attr('class').split(' ')[0];
    var boxPNo = ".c_container ." + whichReading;
    var boxNo = "#" + whichReading + "Box";
    var newZ = currentZ;
  
//    var scrollPosition = $('.p_container').scrollLeft();
    var boxPLeft = parseInt($(boxPNo).css("left"));
    var boxPTop = parseInt($(boxPNo).css("top"));
    $(".p_container").animate({ scrollLeft: boxPLeft - 100 }, { queue: false, duration: 1000 });
    $(".p_container").animate({ scrollTop: boxPTop - 50 }, { queue: false, duration: 1000 });

    $(boxPNo).css("z-index", newZ);
    $(".quote").removeAttr('style');
    currentZ++;   
    
    
    console.log($(".p_container").get(0).scrollWidth);
    console.log($(".p_container").get(0).clientWidth); 
}

function highlight(target) {
    var whichQuote = $(target).attr('class').split(' ')[1];
    var quoting = document.getElementsByClassName(whichQuote + "high");

    for (var i = 0; i < quoting.length; i++) {
        quoting[i].style.cssText = "background: #C8D7FF";
    }   
}

function underlineAdd() {
        var whichReading = $(this).attr('class').split(' ')[0];
        var readingTitle = "." + whichReading + ".title";
        var readingAuthor = "." + whichReading + ".author";
        $(".menu " + readingTitle).css({
        "cursor"            : "e-resize",
        "color"             : "blue",
        "text-shadow"       : "-1px -1px white, -1px 1px white, 1px -1px white, 1px 1px white",
        "background-size"   : "1px 1em",
        "box-shadow"        : "inset 0 -0.1em white, inset 0 -0.15em #000",
        "display"           : "inline",
        "box-shadow"        : "inset 0 -0.1em white, inset 0 -0.15em blue"
    }); 
        
        $(".menu " + readingAuthor).css({
        "cursor"            : "e-resize",
        "color"             : "blue"
    });
}

function removeAttr() {
        var whichReading = $(this).attr('class').split(' ')[0];
        var readingTitle = "." + whichReading + ".title";
        var readingAuthor = "." + whichReading + ".author";
        $(".menu " + readingTitle).removeAttr('style');
        $(".menu " + readingAuthor).removeAttr('style');
}


//  width = $(document).width()/3 + $(document).width()/175
//  $(document).scrollLeft(width)
//
//  let underlines = document.querySelectorAll(".text")
//
//  for (let underline of underlines) {
//    // underline length to match title
//    let height = underline.parentNode.lastElementChild.firstElementChild.offsetHeight
//    underline.style.height = height + 'px'
//
//    //insert text
//    let rnum = underline.dataset.reading - 1
//    underline.innerHTML = '<div class="inserted">' + readings[rnum].substring(0,5000) + '</div>'
//  }
//
//  $(".title").on('click', function () {
//
//    if ($(".reading.hide").length > 0) {
//
//      $(".inserted").removeClass('zoomed')
//      $(".text").removeClass('show')
//      $(".reading").removeClass('hide')
//      $(".reading").css('width', '7%')
//
//
//    } else {
//      var $currReading = $(this).parent()
//      $(".reading").not($currReading).addClass('hide')
//      $currReading.find(".inserted").addClass('zoomed')
//      $currReading.find(".text").addClass('show')
//      $currReading.css("width", "125%")
//
//    }
//
//  })
//
//  $(".title").hover(function () {
//    this.parentNode.firstElementChild.style.height = "110%"
//  }, function () {
//    var height = $(this).find(".book").height()
//    this.parentNode.firstElementChild.style.height = height + "px"
//  })


