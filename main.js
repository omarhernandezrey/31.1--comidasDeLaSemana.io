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
    const cellDelete = newRow.insertCell(6);
    
    cellDay.textContent = day;
    cellDate.textContent = date;
    cellBreakfast.textContent = breakfast;
    cellSnack.textContent = snack;
    cellLunch.textContent = lunch;
    cellDinner.textContent = dinner;
    
    // Agregar un botón "Eliminar" a la nueva fila
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        const rowIndex = newRow.rowIndex - 1; // Restar 1 para ajustar el índice debido al encabezado
        eliminarFila(rowIndex);
    };
    cellDelete.appendChild(deleteButton);
    
    // Guardar los datos en el almacenamiento local
    const datosGuardados = cargarDatosComidas();
    datosGuardados.push({ day, date, breakfast, snack, lunch, dinner });
    guardarDatosComidas(datosGuardados);
}

// Función para guardar los datos en el almacenamiento local
function guardarDatosComidas(datos) {
    localStorage.setItem('comidas', JSON.stringify(datos));
}

// Función para cargar los datos desde el almacenamiento local
function cargarDatosComidas() {
    const datos = localStorage.getItem('comidas');
    return JSON.parse(datos) || [];
}

// Función para eliminar una fila de la tabla y actualizar los datos en el almacenamiento local
function eliminarFila(index) {
    const tableBody = document.querySelector("#mealTable tbody");
    tableBody.deleteRow(index);
    
    // Actualizar los datos en el almacenamiento local
    const datosGuardados = cargarDatosComidas();
    datosGuardados.splice(index, 1);
    guardarDatosComidas(datosGuardados);
}

// Función para borrar los datos almacenados al finalizar el mes
function borrarDatosAlFinalizarMes() {
    const fechaActual = new Date();
    const datosGuardados = cargarDatosComidas();
    
    // Comprobar la fecha de los datos guardados
    datosGuardados.forEach(function(comida, index) {
        const fechaComida = new Date(comida.date);
        if (fechaActual > fechaComida) {
            datosGuardados.splice(index, 1); // Borrar los datos si la fecha actual es posterior
        }
    });
    
    // Guardar los datos actualizados en el almacenamiento local
    guardarDatosComidas(datosGuardados);
}

// Llamar a la función para borrar los datos al finalizar el mes al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    borrarDatosAlFinalizarMes();
    
    // Cargar los datos almacenados
    const datosGuardados = cargarDatosComidas();
    const tableBody = document.querySelector("#mealTable tbody");
    datosGuardados.forEach(function(comida) {
        const newRow = tableBody.insertRow();
        const cellDay = newRow.insertCell(0);
        const cellDate = newRow.insertCell(1);
        const cellBreakfast = newRow.insertCell(2);
        const cellSnack = newRow.insertCell(3);
        const cellLunch = newRow.insertCell(4);
        const cellDinner = newRow.insertCell(5);
        const cellDelete = newRow.insertCell(6);
        cellDay.textContent = comida.day;
        cellDate.textContent = comida.date;
        cellBreakfast.textContent = comida.breakfast;
        cellSnack.textContent = comida.snack;
        cellLunch.textContent = comida.lunch;
        cellDinner.textContent = comida.dinner;
        
        // Agregar un botón "Eliminar" a la nueva fila
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function() {
            const rowIndex = newRow.rowIndex - 1; // Restar 1 para ajustar el índice debido al encabezado
            eliminarFila(rowIndex);
        };
        cellDelete.appendChild(deleteButton);
    });
});
