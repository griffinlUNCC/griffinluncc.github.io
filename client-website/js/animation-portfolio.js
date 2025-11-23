const artworkObj = {
  id: 0,
  src: "",
  title: "Name of Work",
  medium: "Method used or w/e",
  artist: "Yabee",
  date: "00-00-00",
  description: "",
  keyAttributes: "",
};

const artworkArray = [
  {
    id: 0,
    src: "https://www.youtube.com/embed/_vhf0RZg0fg",
    title: "TEST VID",
    medium:"TEST",
    artist:"NATGEO",
    date:"00-00-00",
    description: "TEST VID TEST VID",
    keyAttributes:"Unsure if I will keep this"
  }
];

function createAnimationElement(artworkObj) {
  let container = document.createElement("div");
  container.classList.add("artwork-container");

  let video = document.createElement("video");
  video.controls = true; 
  let vidSrc = document.createElement('source');
  video.appendChild(vidSrc);
  container.appendChild(video);

  let workTitle = document.createElement("p");
  workTitle.textContent = artworkObj.title;
  workTitle.classList.add("work-title");
  container.appendChild(workTitle);

  let workSubheading = document.createElement("p");
  workSubheading.textContent = `${artworkObj.medium} * ${artworkObj.date}`;
  workSubheading.classList.add("work-subheading");
  container.appendChild(workSubheading);
  let workDesc = document.createElement("p");
  workDesc.textContent = `Description: ${artworkObj.description}`;
  workDesc.classList.add("work-description");
  container.appendChild(workDesc);

  let keyAttributes = document.createElement("p");
  keyAttributes.textContent = `Key Attributes: ${artworkObj.keyAttributes}`;
  keyAttributes.classList.add("key-attributes");
  container.appendChild(keyAttributes);

  return container;
}
// Will update to include display as a carousel
// Will update to display interactivity.
document.addEventListener("DOMContentLoaded", () => {
  let target = document.getElementById("portfolio-container");
  for (obj in artworkArray) {
    target.appendChild(createAnimationElement(obj));
  }
});
