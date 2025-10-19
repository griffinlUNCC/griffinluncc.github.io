// Navigation links
let toggleSectionWho = document.getElementById("who-toggle");
let toggleSectionWhat = document.getElementById("what-toggle");
let toggleSectionWhen = document.getElementById("when-toggle");
let toggleSectionWhere = document.getElementById("where-toggle");
let toggleSectionHow = document.getElementById("how-toggle");
let toggleSectionWhy = document.getElementById("why-toggle");
// Array of toggles
let toggle_section_arr = [
  toggleSectionWho,
  toggleSectionWhat,
  toggleSectionWhen,
  toggleSectionWhere,
  toggleSectionHow,
  toggleSectionWhy,
];

// Sections to show/hide when nav children are clicked
let section_who = document.getElementById("who");
let section_what = document.getElementById("what");
let section_when = document.getElementById("when");
let section_where = document.getElementById("where");
let section_how = document.getElementById("how");
let section_why = document.getElementById("why");
// Array of sections
let section_arr = [
  section_who,
  section_what,
  section_when,
  section_where,
  section_how,
  section_why,
];


// Loops through all of the above toggling elements, and assigns an event listener that
// Sets all elements but the other as "inactive" or "hidden" except itself  and its corresponding section.
for (let i = 0; i < toggle_section_arr.length; i++) {
  toggle_section_arr[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < section_arr.length; j++) {
      section_arr[j].classList.add("hidden");
    }
    for (let j = 0; j < toggle_section_arr.length; j++) {
      toggle_section_arr[j].classList.add("inactive");
    }
    toggle_section_arr[i].classList.remove("inactive");
    section_arr[i].classList.remove("hidden");
  });
}
