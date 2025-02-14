//Varible creation to hold the Value
const studentFullName = "Dhavalkuma Asodariay"; 
const studentNumber = "1157330";
//combine the variables into a singlr string 
console.log(`${studentFullName} - ${studentNumber}`);

//Use document.querySelector to access the <h1> and assign it to a variable
const headerContent = document.querySelector('h1');

//Use innerHTML to update the <h1> content to your name and student number 
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;

// Use classList.add() to add a class called headingPrimary to the <h1>
headerContent.classList.add('headingPrimary');
console.log(headerContent.classList);
