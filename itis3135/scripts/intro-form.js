document.addEventListener("DOMContentLoaded", () => {
  let inputContainer = document.getElementById("input-container");
  let inputChildren = document.querySelectorAll(
    "#input-container p *:not(label)"
  );
  for (let child of inputChildren) {
    let outputChild = document.getElementById(`${child.id}-output`);
    if (outputChild) {
      child.addEventListener("input", (e) => {
        outputChild.textContent = child.value;
      });
    }
  }

  // Class selection functionality
  let classCounter = 0;
  let incrementBtn = document.getElementById("add-class-btn");
  let decrementBtn = document.getElementById("remove-class-btn");
  let btnOutput = document.getElementById("class-selection-output");
  let classInputContainer = document.querySelector(
    "#input-container fieldset:nth-of-type(2)"
  );

  function updateClassOutput(classNumber) {
    let departmentInput = document.getElementById(
      `class-${classNumber}-department`
    );
    let numberInput = document.getElementById(`class-${classNumber}-number`);
    let nameInput = document.getElementById(`class-${classNumber}-name`);
    let descInput = document.getElementById(`class-${classNumber}-desc`);
    let outputElement = document.getElementById(`class-${classNumber}-output`);
    outputElement.innerHTML = `<strong><span id='class-${classNumber}-department-output'>${departmentInput.value}</span>-<span id='class-${classNumber}-number-output'>${numberInput.value}</span> <span id='class-${classNumber}-name-output'>${nameInput.value}</span></strong> <span id='class-${classNumber}-desc-output'>${descInput.value}</span>`;
  }

  incrementBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (classCounter < 5) {
      classCounter++;
      let inputWrapper = document.createElement("p");
      inputWrapper.id = `class-${classCounter}-wrapper`;

      let departmentLabel = document.createElement("label");
      departmentLabel.textContent = `Class ${classCounter} Department:`;
      departmentLabel.setAttribute("for", `class-${classCounter}-department`);

      let departmentInput = document.createElement("input");
      departmentInput.type = "text";
      departmentInput.id = `class-${classCounter}-department`;
      departmentInput.placeholder= 'DEPT';

      let numberLabel = document.createElement("label");
      numberLabel.textContent = `Class ${classCounter} Number:`;
      numberLabel.setAttribute("for", `class-${classCounter}-number`);

      let numberInput = document.createElement("input");
      numberInput.type = "text";
      numberInput.id = `class-${classCounter}-number`;
      numberInput.placeholder= '0000';
      let nameLabel = document.createElement("label");
      nameLabel.textContent = `Class ${classCounter} Name:`;
      nameLabel.setAttribute("for", `class-${classCounter}-name`);

      let nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = `class-${classCounter}-name`;
      nameInput.placeholder = "e.g., Web Development";

      let descLabel = document.createElement("label");
      descLabel.textContent = `Class ${classCounter} Description:`;
      descLabel.setAttribute("for", `class-${classCounter}-desc`);

      let descInput = document.createElement("textarea");
      descInput.id = `class-${classCounter}-desc`;
      descInput.cols = "30";
      descInput.rows = "3";
      descInput.placeholder = "Brief description...";

      inputWrapper.appendChild(departmentLabel);
      inputWrapper.appendChild(departmentInput);
      inputWrapper.appendChild(numberLabel);
      inputWrapper.appendChild(numberInput);
      inputWrapper.appendChild(nameLabel);
      inputWrapper.appendChild(nameInput);
      inputWrapper.appendChild(descLabel);
      inputWrapper.appendChild(descInput);

      let coursesHeading = classInputContainer.querySelector("h3");
      classInputContainer.insertBefore(inputWrapper, coursesHeading);

      let listElement = document.createElement("li");
      listElement.id = `class-${classCounter}-output`;
      listElement.innerHTML = `<strong><span id='class-${classCounter}-department-output'>DEPT</span>-<span id='class-${classCounter}-number-output'>0000</span> <span id='class-${classCounter}-name-output'>Class Name</span></strong> <span id='class-${classCounter}-desc-output'>Description of the class.</span>`;
      btnOutput.appendChild(listElement);

      departmentInput.addEventListener("input", () => {
        updateClassOutput(classCounter);
      });

      numberInput.addEventListener("input", () => {
        updateClassOutput(classCounter);
      });

      nameInput.addEventListener("input", () => {
        updateClassOutput(classCounter);
      });

      descInput.addEventListener("input", () => {
        updateClassOutput(classCounter);
      });
    }
  });

  decrementBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (classCounter > 0) {
      let wrapper = document.getElementById(`class-${classCounter}-wrapper`);
      if (wrapper) {
        wrapper.remove();
      }

      let output = document.getElementById(`class-${classCounter}-output`);
      if (output) {
        output.remove();
      }
      classCounter--;
    }
  });
  for (let i = 0; i < 5; i++) {
    incrementBtn.click();
  }

  btnOutput.children[0].innerHTML = `<strong><span id="class-1-department-output">ITIS</span>-<span id="class-1-number-output">3155</span> <span id="class-1-name-output">Front End Web App Development</span></strong>:<span id="class-1-desc-output">I've worked with web development a bit already and wanted to refine my weak spots.</span>`;
  btnOutput.children[1].innerHTML = `<strong><span id="class-2-department-output">ITCS</span>-<span id="class-2-number-output">3166</span> <span id="class-2-name-output">Intro to Computer Networks</span></strong>:<span id="class-2-desc-output">This class seemed like it'd help me improve significantly.</span>`;
  btnOutput.children[2].innerHTML = `<strong><span id="class-3-department-output">ITIS</span>-<span id="class-3-number-output">3310</span> <span id="class-3-name-output">Software Architecture and Design</span></strong>:<span id="class-3-desc-output">This class seemed like it'd help me improve significantly.</span>`;
  btnOutput.children[3].innerHTML = `<strong><span id="class-4-department-output">ITSC</span>-<span id="class-4-number-output">3146</span> <span id="class-4-name-output">Intro to Operating Systems and Networking</span></strong>:<span id="class-4-desc-output">This class seemed like it'd help me improve significantly.</span>`;
  btnOutput.children[4].innerHTML = `<strong><span id="class-5-department-output">ITSC</span>-<span id="class-5-number-output">3155</span> <span id="class-5-name-output">Software Engineering</span></strong>:<span id="class-5-desc-output">This class seemed like it'd help me improve significantly.</span>`;
});
