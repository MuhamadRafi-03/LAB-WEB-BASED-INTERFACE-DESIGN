
function checkMark() {
    
    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // FIX 1: Use '==='  instead of '=' 
    if (name.trim() === "") {
        alert("Name must be filled out.");
        return false;
    }

    
    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // FIX 2: Capitalize 'N' in isNaN() 
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark string into an integer
    mark = parseInt(mark);

    // FIX 3: Use logical OR (||) instead of AND (&&) 
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }
    // FIX 4: Removed the extra closing curly brace '}' 

    // Determine letter grade and set corresponding text color
    let grade;
    // FIX 5: Fix capitalization in 'getElementById' (lowercase 'd')
    let resultElement = document.getElementById("result");

    // FIX 6 & Step 6: Use WRONG  spelling 'color' instead of 'colour'  
    if (mark >= 80) {
        grade = "A";
        resultElement.style.color = "green";
    } else if (mark >= 65) {
        grade = "B";
        resultElement.style.color = "green";
    } else if (mark >= 50) {
        grade = "C";
        resultElement.style.color = "orange";
    } else {
        grade = "F";
        resultElement.style.color = "red";
    }

    // Display the calculated grade message
    resultElement.innerHTML = name + " got grade " + grade;

    // Step 8: Display the date and time the grade was checked using Date()
    document.getElementById("checkedTime").innerHTML = "Checked on: " + Date();

    // FIX 7: Return false so the form does not refresh the page and erase the result
    return false;
}


function randomMark() {
    let randomNum = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomNum;
}


function showTable() {
    let grades = ["A", "B", "C", "D","F"];
    let ranges = ["80-100", "60-79", "50-59", "40-59","0-39"];

    
    let tableHTML = "<table><thead><tr><th>Grade</th><th>Mark Range</th></tr></thead><tbody>";

    // FIX 8: Start loop at i = 0 
    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</tbody></table>";

    
    document.getElementById("tableContainer").innerHTML = tableHTML;
}