let jsonOutputContainer = document.getElementById("json-output-container");
let htmlOutputContainer = document.getElementById("html-output-container");
let standardOutputContainer = document.getElementById("output-container");

let standardToggleBtn = document.getElementById("standard-mode");
let htmlToggleBtn = document.getElementById("HTML-mode");
let jsonToggleBtn = document.getElementById("JSON-mode");

let htmlTextOutput = document.getElementById("html-target");
let jsonTextOutput = document.getElementById("json-target");

jsonToggleBtn.addEventListener("click", () => {
  htmlOutputContainer.classList.add("hidden");
  standardOutputContainer.classList.add("hidden");
  jsonOutputContainer.classList.remove("hidden");
});

htmlToggleBtn.addEventListener("click", () => {
  htmlTextOutput.textContent = `<div>\n${
    document.getElementById("output-container").innerHTML
  }\n</div>`;
  htmlOutputContainer.classList.remove("hidden");
  jsonOutputContainer.classList.add("hidden");
  standardOutputContainer.classList.add("hidden");
  htmlTextOutput.removeAttribute("data-highlighted");
  hljs.highlightElement(htmlTextOutput);
});

standardToggleBtn.addEventListener("click", () => {
  standardOutputContainer.classList.remove("hidden");
  htmlOutputContainer.classList.add("hidden");
  jsonOutputContainer.classList.add("hidden");
});
