/**
 * JSON Example Format:
 * {
  "firstName": "Alexander",
  "preferredName": "Alex",
  "middleInitial": "J",
  "lastName": "Prechtel",
  "divider": "~",
  "mascotAdjective": "Advanced",
  "mascotAnimal": "Pegasus",
  "image": "images/headshot.jpeg",
  "imageCaption": "At the beach on the eastern coast of Florida (2024)",
  "personalStatement": "...",
  "personalBackground": "Grew up north of Charlotte, and have always had a love of computers.",
  "professionalBackground": "This is my first semester as an Instructional Assistant/Teachers Assistant, but before that I was a Peer Tutor for CCI.",
  "academicBackground": "I’m currently a Junior at UNC Charlotte studying computer science with a focus in Cybersecurity. Before that I attended Highschool in Mooresville, North Carolina.",
  "subjectBackground": "...",
  "primaryComputer": "The laptop I use for university is a Macbook Pro M2 14 inch. I also use a custom built Windows 11 computer.",
  "courses": [
    {
      "department": "ITIS",
      "number": "4250",
      "name": "Computer Forensics",
      "reason": "Required course for my concentration but the course’s subject also interests me."
    },
    {
      "department": "ITIS",
      "number": "3246",
      "name": "IT Infrastructure and Security",
      "reason": "Another required course for my concentration but this is another class I am interested in."
    },
    {
      "department": "THEA",
      "number": "1512",
      "name": "Theatre in the United States",
      "reason": "I needed to take one more theme course and this one was recommended to me by a friend who took it previously."
    },
    {
      "department": "MATH",
      "number": "2164",
      "name": "Matrices & Linear Algebra",
      "reason": "Required course for the Computer Science degree."
    },
    {
      "department": "BIOL",
      "number": "1110",
      "name": "Principles of Biology I",
      "reason": "I needed to take another science course and this was recommended to me by a friend."
    },
    {
      "department": "BIOL",
      "number": "1110L",
      "name": "Principles of Biology I Lab",
      "reason": "I needed to take a science course with its lab."
    },
    {
      "department": "EXAMPLE",
      "number": "101",
      "name": "Example Name",
      "reason": "Example Reason"
    }
  ],
  "links": [
    {
      "name": "GitHub",
      "href": "..."
    },
    {
      "name": "GitHub Page",
      "href": "..."
    },
    {
      "name": "freeCodeCamp",
      "href": "..."
    },
    {
      "name": "Codecademy",
      "href": "..."
    },
    {
      "name": "LinkedIn",
      "href": "..."
    },
    
  ]
}
 */

document.addEventListener("DOMContentLoaded", () => {
  let jsonOutputContainer = document.getElementById("json-output-container");
  let htmlOutputContainer = document.getElementById("html-output-container");
  let standardOutputContainer = document.getElementById("output-container");

  let jsonToggleBtn = document.getElementById("JSON-mode");
  let jsonTextOutput = document.getElementById("json-target");

  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let preferredName = document.getElementById("preferred-name");
  let middleInitial = document.getElementById("middle-initial");
  let divider = document.getElementById("divider");
  let mascotAdjective = document.getElementById("mascot-descriptor");
  let mascotAnimal = document.getElementById("mascot-animal");
  let image = document.getElementById("image-upload");
  let imageCaption = document.getElementById("image-caption");
  let personalStatement = document.getElementById("personal-statement");
  let personalBackground = document.getElementById("personal-background");
  let professionalBackground = document.getElementById(
    "professional-background"
  );
  let academicBackground = document.getElementById("academic-background");
  let subjectBackground = document.getElementById("subject-background");
  let primaryComputer = document.getElementById("primary-computer");
  let courses = [];
  let gitHubLink = document.getElementById("github-link");
  let freeCodeCampLink = document.getElementById("freecodecamp-link");
  let linkedInLink = document.getElementById("linkedin-link");
  let personalLink = document.getElementById("personal-link");
  let codecademyLink = document.getElementById("codecademy-link");

  function getCourses() {
    let classOutput = document.getElementById("class-selection-output");
    let returnArr = [];
    let numChildren = classOutput.children.length;
    console.log(`numChildren ===== ${numChildren}`);
    console.log(classOutput.children);
    for (let i = 0; i < numChildren; i++) {
      let currentClassDepartment = document.getElementById(
        `class-${i + 1}-department`
      );
      let currentClassNumber = document.getElementById(`class-${i + 1}-number`);
      let currentClassName = document.getElementById(`class-${i + 1}-name`);
      let currentClassDesc = document.getElementById(`class-${i + 1}-desc`);

      console.log(`Class ${i} desc: ${currentClassDesc}`);
      returnArr.push({
        department:
          currentClassDepartment.value ||
          document.getElementById(`class-${i+1}-department-output`).textContent,
        number:
          currentClassNumber.value ||
          document.getElementById(`class-${i+1}-number-output`).textContent,
        name:
          currentClassName.value ||
          document.getElementById(`class-${i+1}-name-output`).textContent,
        reason:
          currentClassDesc.value ||
          document.getElementById(`class-${i+1}-desc-output`).textContent
      });
    }
    return returnArr;
  }

  function createJSONObj() {
    let courseData = getCourses();
    console.log(`courseData: ${courseData}`);
    console.log(JSON.stringify(courseData, null, 2));
    return {
      firstName:
        firstName.value ||
        document.getElementById("first-name-output").textContent,
      preferredName:
        preferredName.value ||
        document.getElementById("preferred-name-output").textContent,
      middleInitial:
        middleInitial.value ||
        document.getElementById("middle-initial-output").textContent,
      lastName:
        lastName.value ||
        document.getElementById("last-name-output").textContent,
      divider:
        divider.value || document.getElementById("divider-output").textContent,
      mascotAdjective:
        mascotAdjective.value ||
        document.getElementById("mascot-descriptor-output").textContent,
      mascotAnimal:
        mascotAnimal.value ||
        document.getElementById("mascot-animal-output").textContent,
      image:
        image.value ||
        document.getElementById("image-upload-output").textContent,
      imageCaption:
        imageCaption.value ||
        document.getElementById("image-caption-output").textContent,
      personalStatement:
        personalStatement.value ||
        document.getElementById("personal-statement-output").textContent,
      personalBackground:
        personalBackground.value ||
        document.getElementById("personal-background-output").textContent,
      professionalBackground:
        professionalBackground.value ||
        document.getElementById("professional-background-output").textContent,
      academicBackground:
        academicBackground.value ||
        document.getElementById("academic-background-output").textContent,
      subjectBackground:
        subjectBackground.value ||
        document.getElementById("subject-background-output").textContent,
      primaryComputer:
        primaryComputer.value ||
        document.getElementById("primary-computer-output").textContent,
      courses: courseData,
      links: [
        {
          name: "GitHub",
          href:
            gitHubLink.value ||
            document.getElementById("github-link-output").href
        },
        {
          name: "GitHub Page",
          href:
            personalLink.value ||
            document.getElementById("github-link-output").href
        },
        {
          name: "freeCodeCamp",
          href:
            freeCodeCampLink.value ||
            document.getElementById("freecodecamp-link-output").href
        },
        {
          name: "codecademyLink",
          href:
            codecademyLink.value ||
            document.getElementById("codecademy-link-output").href
        },
        {
          name: "LinkedIn",
          href:
            linkedInLink.value ||
            document.getElementById("linkedin-link-output").href
        }
      ]
    };
  }

  jsonToggleBtn.addEventListener("click", () => {
    let objContent = createJSONObj();
    jsonTextOutput.textContent = `${JSON.stringify(objContent, null, 2)}`;
    htmlOutputContainer.classList.add("hidden");
    standardOutputContainer.classList.add("hidden");
    jsonOutputContainer.classList.remove("hidden");
    jsonTextOutput.removeAttribute("data-highlighted");
    hljs.highlightElement(jsonTextOutput);
  });
});
