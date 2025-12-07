document.addEventListener('DOMContentLoaded', async ()=>{
    let contentContainer = document.getElementById('content-container');


let res = await fetch('https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1');

if (res.ok) {
    let data = await res.json();
    for (let student of data) {
        let studentContainer = document.createElement('div');
        studentContainer.classList.add("student-container");
        let studentName = `${student.name.first} ${student.name.last}`;
        let studentMascot = `${student.mascot}`;
        let studentStatement = `${student.personalStatement}`;
        let studentClasses = student.courses;

        let nameElement = document.createElement('h3');
        nameElement.textContent = studentName;
        nameElement.classList.add("student-name");

        let mascotElement = document.createElement('p');
        mascotElement.textContent = studentMascot;
        mascotElement.classList.add('student-mascot');

        let statementElement = document.createElement('p');
        statementElement.textContent = studentStatement;
        statementElement.classList.add('student-statement')

        let classesContainer = document.createElement('div');
        classesContainer.classList.add('class-container');
        for (let item of studentClasses) {
            let studentClass = document.createElement('div');
            studentClass.textContent = `${item.dept}-${item.num} ${item.name}`;
            classesContainer.appendChild(studentClass);
            studentClass.classList.add('student-class');
        }

        studentContainer.appendChild(nameElement);
        studentContainer.appendChild(mascotElement);
        studentContainer.appendChild(statementElement);
        studentContainer.appendChild(classesContainer);
        contentContainer.appendChild(studentContainer);
    }
}
});
