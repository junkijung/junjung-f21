var imgArray = [
    "img/img01.jpg",
    "img/img02.jpg",
    "img/img03.jpg",
    "img/img04.jpg",
    "img/img05.jpg",
    "img/img06.jpg",
    "img/img07.jpg",
    "img/img08.jpg",
    "img/img09.jpg",
    "img/img10.jpg",
    "img/img11.jpg",
    "img/img12.jpg",
    "img/img13.jpg",
    "img/img14.jpg",
    "img/img15.jpg",
    "img/img16.jpg",
    "img/img17.jpg",
    "img/img18.jpg",
    "img/img19.jpg",
    "img/img20.jpg",
    "img/img21.jpg",
    "img/img22.jpg",
    "img/img23.jpg",
    "img/img24.jpg",
    "img/img25.jpg",
    "img/img26.jpg",
    "img/img27.jpg",
    "img/img28.jpg",
    "img/img29.jpg",
    "img/img30.jpg",
    "img/img31.jpg",
    "img/img32.jpg",
    "img/img33.jpg",
    "img/img34.jpg",
    "img/img35.jpg",
    "img/img36.jpg",
    "img/img37.jpg",
    "img/img38.jpg",
    "img/img39.jpg",
    "img/img40.jpg",
    "img/img41.jpg",
    "img/img42.jpg",
    "img/img43.jpg",
    "img/img44.jpg",
    "img/img45.jpg",
    "img/img46.jpg",
    "img/img47.jpg",
    "img/img48.jpg",
    "img/img49.jpg",
    "img/img50.jpg",
    "img/img51.jpg",
    "img/img52.jpg",
    "img/img53.jpg",
    "img/img54.jpg",
    "img/img55.jpg",
    "img/img56.jpg",
    "img/img57.jpg",
    "img/img58.jpg",
    "img/img59.jpg",
    "img/img60.jpg"
];

var imgContainer = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12"];
var imgCount = 0;
var cycle = 0;

let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="

function goWiki() {
  let term = name[0];
  let url = searchUrl + term;
//  loadJSON(url, gotData, 'jsonp');
}

function gotData() {
  console.log(data);
}



function showPosition(position) {
  document.getElementById("now").style.backgroundColor = "";
}

function bgChange() {

        for(y = 0; y < imgContainer.length; y++) {
        document.querySelector("." + imgContainer[y]).src = imgArray[imgCount];
        imgCount++;
        }
  cycle++;
    if(cycle == 5){
    imgCount = 0;
    cycle = 0;
    shuffle(imgArray);
        console.log(imgArray);
}
  setTimeout(bgChange, 1000);
}

function indiBgChange() {
  document.querySelector("#screen img").src = "../" + imgArray[imgCount];
  if (imgCount < imgArray.length - 1) {
    imgCount++;
  } else {
    imgCount = 0;
  }
  setTimeout(indiBgChange, 1000);
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function utopiaNum(i) {
  var x = document.getElementById("utopia");
  if (i==0) {x.innerHTML = "first";}
  else if (i==1) {x.innerHTML = "second";}
  else if (i==2) {x.innerHTML = "third";}
  else if (i==3) {x.innerHTML = "forth";}
  else if (i==4) {x.innerHTML = "fifth";}
}
