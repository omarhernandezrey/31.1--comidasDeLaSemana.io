// main.js
function addMeal() {
    const day = document.getElementById("day").value;
    const date = document.getElementById("date").value;
    const breakfast = document.getElementById("breakfast").value;
    const snack = document.getElementById("snack").value;
    const lunch = document.getElementById("lunch").value;
    const dinner = document.getElementById("dinner").value;
    
    const tableBody = document.querySelector("#mealTable tbody");
    const newRow = tableBody.insertRow();
    
    const cellDay = newRow.insertCell(0);
    const cellDate = newRow.insertCell(1);
    const cellBreakfast = newRow.insertCell(2);
    const cellSnack = newRow.insertCell(3);
    const cellLunch = newRow.insertCell(4);
    const cellDinner = newRow.insertCell(5);
    
    cellDay.textContent = day;
    cellDate.textContent = date;
    cellBreakfast.textContent = breakfast;
    cellSnack.textContent = snack;
    cellLunch.textContent = lunch;
    cellDinner.textContent = dinner;
}
