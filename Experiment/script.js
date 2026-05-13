function getMarks() {
    let num = document.getElementById("numSubjects").value;
    let marksDiv = document.getElementById("marksInput");

    marksDiv.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        marksDiv.innerHTML += `
            <label>Marks for Subject ${i}:</label>
            <input type="number" class="marks" min="0" max="100">
        `;
    }
}

function calculateResult() {
    let marks = document.getElementsByClassName("marks");
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += Number(marks[i].value);
    }

    let average = total / marks.length;
    let grade = "";
    let result = "";

    // Grade calculation
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    // Pass/Fail
    result = average >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total} <br>
        Average Marks: ${average.toFixed(2)} <br>
        Grade: ${grade} <br>
        Result: ${result}
    `;
}