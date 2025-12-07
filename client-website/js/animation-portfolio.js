const animamtionObj = {
  title:"No video assets at the moment.",
  date:"Date of Animation",
  desc:"Description of the animation",
  source:"URL of animation."
};

const animationArr = [animamtionObj, animamtionObj, animamtionObj];

let pos = 0;

const animationCarouselContainer = document.getElementById(
  "animation-carousel-container"
);
const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

leftBtn.addEventListener("click", iterateLeft);

rightBtn.addEventListener("click", iterateRight);

function iterateLeft() {
  pos--;
  if (pos < 0) {
    pos = animationArr.length - 1;
  }
  console.log("--");
  displayVideo();
}

function iterateRight() {
  pos++;
  if (pos >= animationArr.length) {
    {
      pos = 0;
    }
  }
  console.log("++");
  displayVideo();
}
function displayVideo() {
  let currentObj = animationArr[pos];
  console.log(`DISPLAY: ${currentObj}`);

  let vidTitle = document.getElementById("video-title");
  let vidDesc = document.getElementById("video-desc");
  let vidDate = document.getElementById("video-date");
  let vidSource = document.getElementById("video-source");
  vidTitle.textContent = currentObj.title;
  vidDate.textContent = currentObj.date;
  vidDesc.textContent  = currentObj.desc;
  vidSource.src = currentObj.source;
  displayCounter();
}

let posDisplay = document.getElementById('position-display');
function displayCounter(){
  posDisplay.innerHTML ="";
  for (let i = 0; i < animationArr.length; i++){
    console.log("AAAAAAAAAAAAUGH");
    let child = document.createElement('div');
    child.classList.add("position");
    if (i == pos) {
      child.classList.add('current-pos');
    }
    posDisplay.appendChild(child);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayVideo();
  displayCounter();
});
