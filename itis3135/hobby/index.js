// Navigation links
let toggleSectionWho = document.getElementById("who-toggle");
let toggleSectionWhat = document.getElementById("what-toggle");
let toggleSectionWhen = document.getElementById("when-toggle");
let toggleSectionWhere = document.getElementById("where-toggle");
let toggleSectionHow = document.getElementById("how-toggle");
let toggleSectionWhy = document.getElementById("why-toggle");
// Array of toggles
let toggleSectionArr = [
  toggleSectionWho,
  toggleSectionWhat,
  toggleSectionWhen,
  toggleSectionWhere,
  toggleSectionHow,
  toggleSectionWhy
];

// Sections to show/hide when nav children are clicked
let sectionWho = document.getElementById("who");
let sectionWhat = document.getElementById("what");
let sectionWhen = document.getElementById("when");
let sectionWhere = document.getElementById("where");
let sectionHow = document.getElementById("how");
let sectionWhy = document.getElementById("why");
// Array of sections
let sectionArr = [
  sectionWho,
  sectionWhat,
  sectionWhen,
  sectionWhere,
  sectionHow,
  sectionWhy
];


// Loops through all of the above toggling elements, and assigns an event listener that
// Sets all elements but the other as "inactive" or "hidden" except itself  and its corresponding section.
for (let i = 0; i < toggleSectionArr.length; i++) {
  toggleSectionArr[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < sectionArr.length; j++) {
      sectionArr[j].classList.add("hidden");
    }
    for (let j = 0; j < toggleSectionArr.length; j++) {
      toggleSectionArr[j].classList.add("inactive");
    }
    toggleSectionArr[i].classList.remove("inactive");
    sectionArr[i].classList.remove("hidden");
  });
}
