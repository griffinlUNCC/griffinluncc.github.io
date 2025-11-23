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

const artworkArray = [];

function createAnimationElement(artworkObj) {
  let container = document.createElement("div");
  container.classList.add("artwork-container");

  let image = document.createElement("img");
  image.src = artworkObj.src;
  container.appendChild(image);

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

document.addEventListener("DOMContentLoaded", () => {
  let target = document.getElementById("display-container");
  for (obj in artworkArray) {
    target.appendChild(createAnimationElement(obj));
  }
});
